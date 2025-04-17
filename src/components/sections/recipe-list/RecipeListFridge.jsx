import React, {useEffect, useState} from "react";
import api from "../../../helpers/api.js";
import RecipeCard from "../../cards/RecipeCard.jsx";
import styles from "./RecipeListFridge.module.css"
import Button from "../../buttons/Button.jsx";
import {useAbortController} from "../../../helpers/UseAbortController.jsx";

const RecipeListFridge = ({ingredients = [], number = 6, setNumber}) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const abortController = useAbortController();

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            const params = {
                ingredients: ingredients.join(","),
                number: number,
                ranking: 1,
                ignorePantry: true,
            };

            try {
                const response = await api.get('/recipes/findByIngredients', {params, signal:abortController.signal,});
                setRecipes(response.data || []);
            } catch (error) {
                    setErrorMessage(error.message);
                }
            finally {
                setLoading(false);
            }
        };
        fetchRecipes();

    }, [ingredients, number, abortController]);

    return (
        <main className={styles.recipe__wrapper}>
            <section className={styles.recipe_list}>
                {loading ? <p>Loading...</p> : (
                    recipes.length > 0 ? (
                        recipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe}/>
                        ))
                    ) : (
                        <p className={styles.recipe__list_notfound}>Add or remove ingredients to receive a recipe.</p>
                    )
                )}

            </section>

            <section>
                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                {!loading && recipes.length > 0 && (
                    <Button variant={"btn_darkgreen"} onClick={() => setNumber(number + 3)}>Load More</Button>
                )}
            </section>
        </main>
    );
};

export default RecipeListFridge;

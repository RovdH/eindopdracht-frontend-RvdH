import React, {useEffect, useState} from "react";
import api from "../../../helpers/api.js";
import RecipeCard from "../RecipeCard.jsx";
import styles from "./RecipeListFridge.module.css"
import Button from "../../buttons/Button.jsx";

const RecipeListFridge = ({ingredients = [], number = 8, setNumber}) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            const params = {
                ingredients: ingredients.join(","),
                number: number,
                ranking: 1,
                ignorePantry: true,
            };

            console.log("API Request Params:", params);

            try {
                const response = await api.get('/recipes/findByIngredients', {params});
                console.log("API Response:", response.data);
                setRecipes(response.data || []);
            } catch (error) {
                console.error('Error fetching recipes:', error);
                setErrorMessage(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [ingredients, number]);

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


            <section className={styles.recipe__list_more}>
                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                {!loading && recipes.length > 0 && (
                    <Button variant={"btn_darkgreen"} onClick={() => setNumber(number + 6)}>Load More</Button>
                )}
            </section>

        </main>
    );
};

export default RecipeListFridge;

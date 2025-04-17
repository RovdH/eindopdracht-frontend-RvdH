import React, {useEffect, useState} from "react";
import api from "../../../helpers/api.js";
import RecipeCard from "../RecipeCard.jsx";
import styles from "./RecipeListAll.module.css"
import Button from "../../buttons/Button.jsx";
import {useAbortController} from "../../../helpers/UseAbortController.jsx";

const RecipeListAll = ({searchQuery, filters, number = 1, setNumber}) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const abortController = useAbortController();

    useEffect(() => {
    }, [filters]);

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            const params = {
                query: searchQuery,
                number: number,
                ...filters,
                addRecipeInformation: true,
                fillIngredients: false,
            };

            try {
                const response = await api.get('/recipes/complexSearch', {params, signal: abortController.signal});
                setRecipes(response.data.results);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setErrorMessage(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [searchQuery, filters, number, abortController]);

    return (
        <main className={styles.recipe__wrapper}>
            <article className={styles.recipe_list}>
                {loading ? <p>Loading recipes...</p> : (
                    recipes.length > 0 ? (
                        recipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe}/>
                        ))
                    ) : (
                        <p className={styles.recipe__list_notfound}>No recipes found.</p>
                    )
                )}
            </article>
            <article>
                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                {!loading && recipes.length > 0 && (
                    <Button variant={"btn_darkgreen"} onClick={() => setNumber(number + 3)}>Load More</Button>
                )}
            </article>
        </main>
    );
};

export default RecipeListAll;

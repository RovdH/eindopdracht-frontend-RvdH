import React, { useEffect, useState } from "react";
import api from "../../../helpers/api.js";
import RecipeCard from "../RecipeCard.jsx";
import styles from "./RecipeListAll.module.css"
import Button from "../../buttons/Button.jsx";

const RecipeListFridge = ({ ingredients = [], number = 9, setNumber}) => {
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
                const response = await api.get('/recipes/findByIngredients', { params });
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
        <div className={styles.recipe_list}>
            {loading ? <p>Loading...</p> : (
                recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe}/>
                    ))
                ) : (
                    <p>Add or remove ingredients to receive a recipe.</p>
                )
            )}
            <Button variant={"btn_darkgreen"} onClick={() => setNumber(number + 6)}>Load More</Button>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        </div>
    );
};

export default RecipeListFridge;

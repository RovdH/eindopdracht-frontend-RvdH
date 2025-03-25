import { useEffect, useState } from "react";
import api from "../../../helpers/api.js";
import RecipeCard from "../RecipeCard.jsx";
import styles from "./RecipeList.module.css"

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await api.get('/recipes/random', {
                    params: {
                        number: 6,
                    },
                });
                setRecipes(response.data.recipes);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div className={styles.recipe_list}>
            {recipes && recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))
            ) : (
                <p>No recipes found. Recipes length: {recipes.length}</p>
            )}
        </div>
    );
};

export default RecipeList;

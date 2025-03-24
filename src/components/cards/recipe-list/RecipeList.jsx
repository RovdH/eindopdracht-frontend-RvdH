import { useEffect, useState } from "react";
import api from "../../../helpers/api.js";
import RecipeCard from "../RecipeCard.jsx";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await api.get('/recipes/random', {
                    params: {
                        number: 1,  // You are requesting only 1 recipe, change if needed
                    },
                });
                console.log("API Response:", response.data);  // Log the full response
                console.log("Recipe Data:", response.data.recipes);  // Log the correct recipes array
                setRecipes(response.data.recipes);  // Set recipes with the correct data
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    console.log("Recipes State in Render:", recipes);  // Log the recipes state in render

    return (
        <div className="recipe-list">
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

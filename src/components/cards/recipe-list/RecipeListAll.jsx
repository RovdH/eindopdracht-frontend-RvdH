import React, { useEffect, useState } from "react";
import api from "../../../helpers/api.js";
import RecipeCard from "../RecipeCard.jsx";
import styles from "./RecipeList.module.css"
import Button from "../../buttons/Button.jsx";

const RecipeList = ({searchQuery, filters, number = 9, setNumber}) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {
        console.log("Filters being used in API call:", filters);
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

            console.log("API Request Params:", params);

            try {
                const response = await api.get('/recipes/complexSearch', { params });
                console.log("API Response:", response.data);
                setRecipes(response.data.results);
            } catch (error) {
                console.error('Error fetching recipes:', error);
                setErrorMessage(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [searchQuery, filters, number]);

    return (
        <div className={styles.recipe_list}>
            {loading ? <p>Loading recipes...</p> : (
                recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe}/>
                    ))
                ) : (
                    <p>No recipes found.</p>
                )
            )}
            <Button variant={"btn_darkgreen"} onClick={() => setNumber(number + 6)}>Load More</Button>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        </div>
    );
};

export default RecipeList;

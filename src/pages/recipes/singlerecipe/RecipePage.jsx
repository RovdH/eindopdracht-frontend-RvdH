import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./RecipePage.module.css";
import api from "../../../helpers/api.js";
import {useAbortController} from "../../../helpers/UseAbortController.jsx";
import RecipeListAll from "../../../components/cards/recipe-list/RecipeListAll.jsx";
import RecipeCard from "../../../components/cards/RecipeCard.jsx";
import RecipeComments from "../../../components/forms/recipe-comments-form/RecipeComments.jsx";

function RecipePage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [similarRecipes, setSimilarRecipes] = useState([]);
    const abortController = useAbortController();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await api.get(`/recipes/${id}/information`, {
                    signal: abortController.signal,
                });
                setRecipe(response.data);

                const similarRes = await api.get(`/recipes/${id}/similar`, {
                    params: { number: 6 },
                    signal: abortController.signal,
                });

                const formatted = similarRes.data.map((r) => ({
                    ...r,
                    image: `https://spoonacular.com/recipeImages/${r.id}-312x231.jpg`,
                }));

                setSimilarRecipes(formatted);


            } catch (error) {
                if (error.name !== "CanceledError" && error.name !== "AbortError") {
                    console.error("Error fetching recipe:", error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id, abortController]);

    if (loading) return <p>Loading...</p>;
    if (!recipe) return <p>Recipe not found.</p>;

    return (
        <>
            <header
                className={styles.single_recipe__header}
                style={{
                    backgroundImage: `url(${recipe.image})`,
                }}
            >
                <div className={styles.single_recipe__gradient}></div>
                <h1 className={styles.single_recipe__h1}>{recipe.title}</h1>
            </header>
            <main className={styles.single_recipe__wrapper}>
                <section className={styles.single_recipe__list}>
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>
                                {ingredient.amount} {ingredient.unit} {ingredient.name}
                            </li>
                        ))}
                    </ul>
                </section>
                <section className={styles.single_recipe__prep}>
                    <h2>Preparation</h2>
                    <div
                        className={styles.instructions}
                        dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                    />
                </section>
                <section className={styles.single_recipe__comments}><RecipeComments recipeId={id} /></section>
            </main>
            <div className={styles.single_recipe__local_footer}>
                {similarRecipes.length > 0 && (
                    <section className={styles.single_recipe__similar}>
                        <h2>Similar Recipes</h2>
                        <div className={styles.single_recipe__grid}>
                            {similarRecipes.slice(0, 3).map((recipe) => (
                                <RecipeCard key={recipe.id} recipe={recipe} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}

export default RecipePage;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./RecipePage.module.css";
import api from "../../../helpers/api.js";
import {useAbortController} from "../../../helpers/UseAbortController.jsx";
import RecipeCard from "../../../components/cards/RecipeCard.jsx";
import RecipeComments from "../../../components/forms/recipe-comments-form/RecipeComments.jsx";
import Toggle from "../../../components/toggles/Toggle.jsx";



function RecipePage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [similarRecipes, setSimilarRecipes] = useState([]);
    const [nutrition, setNutrition] = useState([]);
    const [unitSystem, setUnitSystem] = useState("metric");
    const[convertedIngredients, setConvertedIngredients] = useState([]);

    const toggleUnits = () =>
        setUnitSystem((prev) => (prev === "metric" ? "imperial" : "metric"));

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

                const nutritionRes = await api.get(`/recipes/${id}/nutritionWidget.json`, {
                    signal: abortController.signal,
                });
                setNutrition(nutritionRes.data);


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

       useEffect(() => {
        const convertIngredients = async () => {
            if (!recipe?.extendedIngredients) return;

            try {
                const conversions = await Promise.all(
                    recipe.extendedIngredients.map(async (ingredient) => {
                        try {
                            const res = await api.get(`/recipes/convert`, {
                                params: {
                                    ingredientName: ingredient.name,
                                    sourceAmount: ingredient.amount,
                                    sourceUnit: ingredient.unit,
                                    targetUnit: unitSystem === "metric" ? "grams" : "ounces", // or "ml" for liquids
                                },
                                signal: abortController.signal,
                            });

                            return {
                                ...ingredient,
                                amount: res.data.targetAmount,
                                unit: res.data.targetUnit,
                            };
                        } catch (err) {
                            console.warn(`Conversion failed for ${ingredient.name}`, err);
                            return ingredient;
                        }
                    })
                );

                setConvertedIngredients(conversions);
            } catch (err) {
                console.error("Error converting ingredients:", err);
            }
        };

        convertIngredients();
    }, [recipe, unitSystem, abortController]);

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
                    <div className={styles.unit_toggle}>
                        <Toggle isOn={unitSystem === "imperial"} onToggle={toggleUnits} />
                    </div>

                    <h2>Ingredients</h2>
                    <ul>
                        {(convertedIngredients.length > 0 ? convertedIngredients : recipe.extendedIngredients).map((ingredient) => (
                            <li key={ingredient.id}>
                                {ingredient.amount.toFixed(1)} {ingredient.unit} {ingredient.name}
                            </li>
                        ))}
                    </ul>

                </section>
                {nutrition && (
                    <section className={styles.single_recipe__nutrition}>
                        <h2>Nutrition Facts</h2>
                        <ul>
                            <li><strong>Calories:</strong> {nutrition.calories}</li>
                            <li><strong>Carbs:</strong> {nutrition.carbs}</li>
                            <li><strong>Fat:</strong> {nutrition.fat}</li>
                            <li><strong>Protein:</strong> {nutrition.protein}</li>
                        </ul>
                    </section>
                )}
                <section className={styles.single_recipe__prep}>
                    <h2>Preparation</h2>
                    <div
                        dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                    />
                </section>

                <section><RecipeComments className={styles.single_recipe__comments} recipeId={id} /></section>
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

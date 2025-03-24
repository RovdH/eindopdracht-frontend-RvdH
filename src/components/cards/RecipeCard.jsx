import styles from './RecipeCard.module.css';

function RecipeCard({ recipe }) {
        // const [isFavorite, setIsFavorite] = useState(false);
        //
        // const handleFavoriteClick = () => {
        //     setIsFavorite(!isFavorite);
        //     // Hier later code toevoegen om het recept op te slaan in eigen route voor ingelogde personen.
        // };
    console.log(recipe); // Check the value of recipes

    return (
        <section className={styles.recipe__card_wrapper}>
            <img src={recipe.image} alt={recipe.title} className={styles.recipe__card_image}/>
            <h3 className={styles.recipe__card_title}>{recipe.title}</h3>
            <div className="recipe__card_prep_time">
                <span>{recipe.readyInMinutes} min prep time</span>
            </div>

            {recipe.cookingMinutes && (
                <div className="recipe__card_cooking_time">
                    <span>{recipe.cookingMinutes} min oven time</span>
                </div>
            )}
        </section>
    )
}

export default RecipeCard
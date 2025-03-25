import styles from './RecipeCard.module.css';
import React from "react";
import {FaClock} from "react-icons/fa";
import {StarRating} from "../../helpers/ScoreToStars.jsx";
import {Link} from "react-router-dom";

const createSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
};
function RecipeCard({ recipe }) {
const slug = createSlug(recipe.title);
    return (
       <section className={styles.recipe__card_wrapper}> <Link to={`/recipe/${recipe.id}/${slug}`} className={styles.recipe__card_link}>
            <img src={recipe.image} alt={recipe.title} className={styles.recipe__card_image}/>
            <h4 className={styles.recipe__card_title}>{recipe.title}</h4></Link>
            <StarRating score={recipe.spoonacularScore} />
            <span className={styles.recipe__card_time}><FaClock className={styles.icon__clock}/>
                {recipe.readyInMinutes} min prep time. {recipe.cookingMinutes || "Zero"} min oven time
            </span>
        </section>
    )
}

export default RecipeCard
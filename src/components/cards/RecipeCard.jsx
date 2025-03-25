import styles from './RecipeCard.module.css';
import React from "react";
import {FaClock} from "react-icons/fa";
import {StarRating} from "../../helpers/ScoreToStars.jsx";

function RecipeCard({ recipe }) {

    return (
        <section className={styles.recipe__card_wrapper}>
            <img src={recipe.image} alt={recipe.title} className={styles.recipe__card_image}/>
            <h4 className={styles.recipe__card_title}>{recipe.title}</h4>
            <StarRating score={recipe.spoonacularScore} />
            <span className={styles.recipe__card_time}><FaClock className={styles.icon__clock}/>
                {recipe.readyInMinutes} min prep time. {recipe.cookingMinutes || "Zero"} min oven time
            </span>
        </section>
    )
}

export default RecipeCard
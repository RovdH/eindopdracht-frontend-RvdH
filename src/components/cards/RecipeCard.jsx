import styles from './RecipeCard.module.css';
import React, {useContext} from "react";
import {FaClock, FaRegHeart, FaHeart} from "react-icons/fa";
import {StarRating} from "../../helpers/ScoreToStars.jsx";
import {Link} from "react-router-dom";
import {FavContext, FavoritesProvider} from "../context/favorite-recipes/FavContext.jsx";


const createSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
};
function RecipeCard({ recipe }) {
const slug = createSlug(recipe.title);
    const { favorites, toggleFavorite } = useContext(FavContext);
    const isFavorite = favorites.some((fav) => fav.id === recipe.id);

    return (
       <section className={styles.recipe__card_wrapper}> <Link to={`/recipe/${recipe.id}/${slug}`} className={styles.recipe__card_link}>
            <img src={recipe.image} alt={recipe.title} className={styles.recipe__card_image}/>
            <h4 className={styles.recipe__card_title}>{recipe.title}</h4></Link>
            <StarRating score={recipe.spoonacularScore} />
            <span className={styles.recipe__card_time}><FaClock className={styles.icon__clock}/>
                {recipe.readyInMinutes} min prep time. {recipe.cookingMinutes || "Zero"} min oven time
            </span>
           <button onClick={() => toggleFavorite(recipe)} className={styles.favorite__button}>
               {isFavorite ? <FaHeart color="red" className={styles.icon__heart}/> : <FaRegHeart className={styles.icon__heart_outline}/>}
           </button>
        </section>
    )
}

export default RecipeCard
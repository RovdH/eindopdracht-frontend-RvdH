import styles from './RecipeCard.module.css';
import React, {useContext} from "react";
import {FaClock, FaRegHeart, FaHeart} from "react-icons/fa";
import {StarRating} from "../../helpers/ScoreToStars.jsx";
import {Link} from "react-router-dom";
import {FavContext} from "../context/favorite-recipes/FavContext.jsx";
import {AuthContext} from "../context/auth/AuthContext.jsx";


const createSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
};
const RecipeCard = ({recipe}) => {
    const slug = createSlug(recipe.title);
    const {favorites, toggleFavorite} = useContext(FavContext);
    const isFavorite = favorites.some((fav) => fav.id === recipe.id);
    const [message, setMessage] = React.useState(null);
    const {isAuth} = useContext(AuthContext);


    return (
        <section className={styles.recipe__card_wrapper}>
            <Link to={`/recipe/${recipe.id}/${slug}`} className={styles.recipe__card_link}>
                <img src={recipe.image} alt={recipe.title} className={styles.recipe__card_image}/>
                <h4 className={styles.recipe__card_title}>{recipe.title}</h4></Link>

            {/* All recipes area */}
            {recipe.spoonacularScore && <StarRating score={recipe.spoonacularScore}/>}
            {(recipe.readyInMinutes || recipe.cookingMinutes) && (
                <span><FaClock className={styles.icon__clock}/>
                    {recipe.readyInMinutes ? `${recipe.readyInMinutes} min prep time.` : ""}
                    {recipe.cookingMinutes ? ` ${recipe.cookingMinutes} min oven time` : ""} </span>
            )}

            {/*Whats in the fridge area */}
            <article className={styles.recipe__card_witf}>
                {recipe.missedIngredients && recipe.missedIngredients.length > 0 && (
                    <ul>
                        <strong>Missing Items:</strong>
                        {recipe.missedIngredients.slice(0, 5).map((ingredient, index) => (
                            <li key={index}>{ingredient.original}</li>
                        ))}
                    </ul>
                )}
                {recipe.likes > 0 && (<span>❤️ {recipe.likes} Kudo's</span>)}
            </article>
            <button onClick={() => {
                if (isAuth) {
                    toggleFavorite(recipe);
                    setMessage({text: "Added to favorites! View them here.", link: "/profile"})
                } else {
                    setMessage({text: "Sign up to use the favorite feature", link: "/sign-up"});
                }
                setTimeout(() => setMessage(null), 3000);
            }}
                    className={styles.favorite__button}>
                {isFavorite ? <FaHeart color="red"/> :
                    <FaRegHeart />}
            </button>
            {message && (
                <div className={styles.recipe__card_message}>
                    {message.link ? (
                        <Link to={message.link}>{message.text}</Link>
                    ) : (
                        <span>{message.text}</span>
                    )}
                </div>
            )}

        </section>
    )
}

export default RecipeCard
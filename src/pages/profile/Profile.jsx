import React, {useContext} from "react";
import {AuthContext} from "../../components/context/auth/AuthContext.jsx";
import RecipeCard from "../../components/cards/RecipeCard.jsx";
import {FavContext} from "../../components/context/favorite-recipes/FavContext.jsx";
import styles from "./Profile.module.css"

function Profile() {
    const {logout} = useContext(AuthContext);
    const {favorites} = useContext(FavContext)

    return (
        <div className={styles.profile__wrapper}>
            <section>
                <h2>Welcome to Your Profile</h2>
                <button onClick={logout}>Sign Out</button>
            </section>

            <div>
                <h2>My Favorite Recipes</h2>
                {favorites.length > 0 ? (
                    <section className={styles.myrecipes__list}>
                        {favorites.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe}/>
                        ))}
                    </section>
                ) : (
                    <p>No favorite recipes yet.</p>
                )}
            </div>
        </div>
    );
}

export default Profile;
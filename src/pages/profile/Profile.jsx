import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../components/context/auth/AuthContext.jsx";
import RecipeCard from "../../components/cards/RecipeCard.jsx";
import { FavContext } from "../../components/context/favorite-recipes/FavContext.jsx";
import styles from "./Profile.module.css";
import Button from "../../components/buttons/Button.jsx";
import UpdateProfileForm from "../../components/forms/update-profile-form/UpdateProfileForm.jsx";

function Profile() {
    const { logout } = useContext(AuthContext);
    const { favorites } = useContext(FavContext);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const fetchUserData = async () => {
                try {
                    const response = await axios.get("https://frontend-educational-backend.herokuapp.com/api/user", {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                        },
                    });
                    setUser(response.data);
                } catch (err) {
                    setError("Failed to fetch user data");
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            };
            fetchUserData();
        } else {
            setError("No token found. Please log in.");
            setLoading(false);
        }
    }, []);

    const handleProfileUpdate = (updatedUserData) => {
        setUser(updatedUserData);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={styles.profile__wrapper}>
            <section>
                <h2>Welcome to Your Profile</h2>
                {user && (
                    <article>
                        <h3>My Profile Settings</h3>
                        <ul>
                            <li><strong>Name:</strong> {user.username}</li>
                            <li><strong>Email:</strong> {user.email}</li>
                        </ul>
                    </article>
                )}
                <Button variant={"btn_darkgreen"} onClick={logout}>Sign Out</Button>
                <UpdateProfileForm currentUser={user} onProfileUpdate={handleProfileUpdate} />
            </section>

            <div>
                <h2>My Favorite Recipes</h2>
                {favorites.length > 0 ? (
                    <section className={styles.myrecipes__list}>
                        {favorites.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
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

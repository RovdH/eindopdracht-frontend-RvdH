import { createContext, useState, useEffect } from "react";

export const FavContext = createContext({});

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

      useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (recipe) => {
        setFavorites((prevFavorites) => {
            const isFavorite = prevFavorites.some((fav) => fav.id === recipe.id);
            if (isFavorite) {
                return prevFavorites.filter((fav) => fav.id !== recipe.id);
            } else {
                return [...prevFavorites, recipe];
            }
        });
    };

    return (
        <FavContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavContext.Provider>
    );
};


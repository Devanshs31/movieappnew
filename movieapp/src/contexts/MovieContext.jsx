import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
    const [favorites, setfavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem('favorites');
        if (storedFavs) {
            setfavorites(JSON.parse(storedFavs));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]) 

    // Functions to manage favorites
    // Add a movie to favorites
    const addToFavorites = (movie) => {
        setfavorites(prev => [...prev, movie]);
    }
    // Remove a movie from favorites
    const removeFromFavorites = (movieId) => {
        setfavorites(prev => prev.filter(movie => movie.id !== movieId));
    }
    // Check if a movie is in favorites
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
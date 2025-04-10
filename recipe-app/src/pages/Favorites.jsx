// src/pages/Favorites.jsx
import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleToggleFavorite = (recipe) => {
    const isFavorite = favorites.some((fav) => fav.id === recipe.id);
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== recipe.id);
    } else {
      updatedFavorites = [...favorites, recipe];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="recipe-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favorites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite} // Pass the function here
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Favorites;



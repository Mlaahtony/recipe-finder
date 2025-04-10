import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe, onToggleFavorite, favorites }) {
  const isFavorite = favorites.some((fav) => fav.id === recipe.id);

  const handleFavoriteClick = () => {
    onToggleFavorite(recipe);
  };

  return (
    <div className="border p-4 rounded shadow">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-xl font-bold">{recipe.title}</h3>
      <p className="text-gray-600">{recipe.summary}</p>
      <div className="flex justify-between items-center mt-4">
        <Link to={`/recipe/${recipe.id}`} className="text-blue-500">
          View Details
        </Link>
        <button
          onClick={handleFavoriteClick}
          className={`text-white p-2 rounded ${isFavorite ? 'bg-red-500' : 'bg-gray-500'}`}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
}
export default RecipeCard;


import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <div className="border p-4 rounded shadow">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-xl font-bold">{recipe.title}</h3>
      <p className="text-gray-600">{recipe.summary}</p>
      <Link to={`/recipe/${recipe.id}`} className="text-blue-500 mt-4 block">
        View Details
      </Link>
    </div>
  );
}

export default RecipeCard;

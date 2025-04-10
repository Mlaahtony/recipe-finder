// RecipeList.jsx
import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes, favorites, onToggleFavorite }) {
  if (!recipes || recipes.length === 0) {
    return <p>No recipes found</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
export default RecipeList;



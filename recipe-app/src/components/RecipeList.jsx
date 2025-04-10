import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes, onToggleFavorite, favorites }) {
  if (!recipes || recipes.length === 0) {
    return <p>No recipes found</p>;
  }

  return (
    <div className="recipe-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe} 
          onToggleFavorite={onToggleFavorite} 
          favorites={favorites} 
        />
      ))}
    </div>
  );
}
export default RecipeList;


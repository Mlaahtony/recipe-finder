// src/pages/RecipeDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetails } from '../services/api';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const data = await fetchRecipeDetails(id);
      setRecipe(data);
      setLoading(false);
    };
    getRecipeDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="recipe-details">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4 rounded" />
      
      <div className="ingredients">
        <h2 className="text-2xl font-semibold">Ingredients:</h2>
        <ul>
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
      </div>

      <div className="instructions">
        <h2 className="text-2xl font-semibold">Instructions:</h2>
        <p>{recipe.instructions}</p>
      </div>

      <div className="nutrition">
        {recipe.nutrition ? (
          <>
            <h2 className="text-2xl font-semibold">Nutrition:</h2>
            <p>Calories: {recipe.nutrition.calories}</p>
            <p>Protein: {recipe.nutrition.protein}</p>
            <p>Carbs: {recipe.nutrition.carbs}</p>
            <p>Fat: {recipe.nutrition.fat}</p>
          </>
        ) : (
          <p>Nutrition information not available</p>
        )}
      </div>
    </div>
  );
}
export default RecipeDetails;


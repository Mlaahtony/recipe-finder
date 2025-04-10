import React, { useState, useEffect } from 'react';
import { fetchRecipes } from '../services/api';
import FilterPanel from '../components/FilterPanel';
import RecipeList from '../components/RecipeList';

function Home() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [filters, setFilters] = useState({ cuisine: '', diet: '' });
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter.type]: filter.value,
    }));
  };

  const handleSearch = async () => {
    if (!query && !filters.cuisine && !filters.diet) return;
    const recipeResults = await fetchRecipes(query, filters);
    setRecipes(recipeResults);
  };

  const handleToggleFavorite = (recipe) => {
    const isFavorite = favorites.some((fav) => fav.id === recipe.id);
    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav.id !== recipe.id)
      : [...favorites, recipe];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="bg-white text-black p-4">
      <h1 className="text-2xl font-bold mb-4">Search for Recipes</h1>

      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          placeholder="Search recipes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 p-2 flex-1 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-orange-500 text-white px-4 py-2 rounded w-28"
        >
          Search
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        <div className="w-1/2">
          <FilterPanel onFilterChange={handleFilterChange} filterType="cuisine" />
        </div>
        <div className="w-1/2">
          <FilterPanel onFilterChange={handleFilterChange} filterType="diet" />
        </div>
      </div>

      <RecipeList
        recipes={recipes}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}

export default Home;




  
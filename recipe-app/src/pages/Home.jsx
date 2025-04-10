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
    <div className="home">
      <h1>Search for Recipes</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter ingredients or dish name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      <FilterPanel onFilterChange={handleFilterChange} />
      <RecipeList recipes={recipes} favorites={favorites} onToggleFavorite={handleToggleFavorite} />
    </div>
  );
}
export default Home;



  
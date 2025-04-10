import React, { useState } from 'react';
import { fetchRecipes } from '../services/api';
import RecipeCard from '../components/RecipeCard';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = await fetchRecipes(query);
    setRecipes(data);
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">Recipe Finder</h1>

      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          name="search"
          placeholder="Search for recipes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded ml-2">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      <div className="recipe-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;

  
import React from 'react';

function FilterPanel({ onFilterChange }) {
  const handleCuisineChange = (e) => {
    onFilterChange({ type: 'cuisine', value: e.target.value });
  };

  const handleDietChange = (e) => {
    onFilterChange({ type: 'diet', value: e.target.value });
  };

  return (
    <div className="filter-panel">
      <label>
        Cuisine:
        <select onChange={handleCuisineChange}>
          <option value="">Select Cuisine</option>
          <option value="Italian">Italian</option>
          <option value="Chinese">Chinese</option>
          <option value="Indian">Indian</option>
          <option value="Mexican">Mexican</option>
        </select>
      </label>

      <label>
        Diet:
        <select onChange={handleDietChange}>
          <option value="">Select Diet</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="paleo">Paleo</option>
          <option value="gluten free">Gluten Free</option>
        </select>
      </label>
    </div>
  );
}
export default FilterPanel;


import axios from 'axios';

const apiKey = '1a782e8c44fc44f4b59434aa9631fee4';  

const api = axios.create({
  baseURL: 'https://api.spoonacular.com',
  params: {
    apiKey: apiKey,
  },
});

export const fetchRecipes = async (query) => {
  try {
    const response = await api.get('/recipes/complexSearch', {
      params: {
        query: query,
        number: 10,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
};

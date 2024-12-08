import axios from 'axios';
import api from '../utils/global';

export const searchProducts = async (searchQuery) => {
  try {
    const response = await api.get('search?search='+searchQuery);
   return { products: response.data, total: response.data.total };
  } catch (error) {
    console.error('Error during search API call:', error);
    throw error; // Rethrow the error for handling in the component
  }
};

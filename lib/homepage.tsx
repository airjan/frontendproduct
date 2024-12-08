
import api from '../utils/global';  // export the common laravel api url 


// Define the type properties of the product
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}
export const getHomePageProducts = async () => {
    try {
      const response = await api.get('/defaultproduct');  // laravel route defaultproduct
      return response.data.products; // Return product data
    } catch (error) {
      console.error('Error fetching products:', error.response ? error.response.data : error.message);
      throw error; // Rethrow the error for calling function to handle
    }
};

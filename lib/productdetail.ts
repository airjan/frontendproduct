import axios from 'axios';
import api from '../utils/global';

// Define the TypeScript interface for the product data
 export interface ProductDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  thumbnail: string;
}

export interface ProductPageProps {
  product: ProductDetail  | null;
}

// Function to fetch product by id
export const getProductById = async (id: string): Promise<ProductDetail> => {
  try {
    console.log("iddd===" + id);
    const response = await api.get("detail/"+id);
    console.log('productdetial ----' + response)
     // throw new Error('Product not found in the response.' + response);
    if (!response || !response.data) {
      console.log('error ulit ');
      return null;
      //throw new Error('Product not found in the response.');
    } 
    return response.data;
  } catch (error: any ) {
    //if (axios.isAxiosError(error)) {
     console.log('Errortest fetching product:', error);

     console.log('error status  -- ' + error.response.status);
     //throw new Error('Product not found in the response.');
     return null;
     // throw new Error('Product not found');
    //
  }
};

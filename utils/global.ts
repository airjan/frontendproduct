// Import Axios
import axios from 'axios';
// http://laravel8-api.local/api'
// Create an Axios instance
const api = axios.create({
  baseURL: 'http://laravel-product.local/api', // Laravel backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

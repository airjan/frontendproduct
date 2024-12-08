import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getProductById,ProductDetail,ProductPageProps } from '../../lib/productdetail'; // route api laravel and properties 
import SearchResults from '../../components/searchresult';  // template for searchresult
import { useSearch } from '../../lib/searchprovider';

const ProductPage = ({ product }: ProductPageProps) => {
  const router = useRouter();
  const { id } = router.query; 
  
  const [loading, setLoading] = useState<boolean>(true);
  const [productData, setProductData] = useState<ProductDetail  | null>(null);
   const { searchResults,isSearchActive } = useSearch(); // Access global search results from contex
   const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (product) {
      setProductData(product); // Set product data if it's already fetched
      setLoading(false); // Once data is available, stop loading
    } else if (id) {
      // Fallback: if there's no product prop, fetch product from the API
      const fetchProduct = async () => {
        setLoading(true);
        console.log('iddxxx===' + id);
        try {
          if (typeof id === 'string') {
            const data = await getProductById(id);
          
            if (data && data.id){
              setProductData(data); // Update product data state
              setError(null);
            } else {
              console.log('no data');
              setError('product not found');
              setProductData(null);
            }
          }
        } catch (error: any) {
          console.error('Error fetching product:', error);
         
            setError('product not found');
            setProductData(null);
            console.log('error 500');
         
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id, product]);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }
 
 
  
  if (isSearchActive)  // when serachfield is not empty 

{
  return <SearchResults  />  // use this
}

 if (error || !productData) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-center text-red-500 text-2xl">Product not exist</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
     
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={productData.thumbnail}
          alt={productData.title}
          className="w-80 h-80 object-cover rounded-lg"
        />
        <div className="ml-8 flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">{productData.title}</h1>
          <p className="text-xl text-gray-500">Category: {productData.category}</p>
          <p className="text-lg">{productData.description}</p>
          <div className="flex space-x-4">
            <span className="text-2xl font-semibold">${productData.price}</span>
            <span className="text-xl text-red-500 line-through">${(productData.price * (1 + productData.discountPercentage / 100)).toFixed(2)}</span>
          </div>
          <p className="text-sm text-gray-600">Stock: {productData.stock}</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};



export default ProductPage;

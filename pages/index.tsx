import React, { useState, useEffect } from 'react';
import { useSearch } from '../lib/searchprovider';  // Import the SearchContext, used when search 
import { getHomePageProducts, Product } from '../lib/homepage';   // Import your ruotes api honmepage laravel and the Product properties  
import SearchResults from '../components/searchresult';       // Import the SearchResults component 



const HomePage = () => {
  const { searchResults,isSearchActive } = useSearch();  // Access global search results from context
  const [defaultProducts, setDefaultProducts] = useState<Product[]>([]); // Product setter and getter , assignment

  // Fetch default products 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getHomePageProducts();
        setDefaultProducts(productsData);  // Set the default products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);  

 
if (isSearchActive)  // when user type in searchbox
{
  return <SearchResults />
}
  return (
    <div className="container mx-auto p-4">
      
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {defaultProducts.length > 0 ? (
            defaultProducts.map((product) => (
              <div key={product.id} className="bg-white border rounded-lg shadow-lg overflow-hidden">
                <a href={`/product/${product.id}`} className="block">
                  <img className="w-full h-64 object-cover" src={product.thumbnail} alt={product.title} />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                      {product.title}
                    </h2>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <p className="mt-4 text-gray-800">
                      <span className="font-bold text-lg">${product.price}</span>
                      <span className="text-sm text-red-500 line-through ml-2">
                        ${(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </a>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-lg">Loading products...</p>
          )}
        </div>
      
    </div>
  );
};

export default HomePage;

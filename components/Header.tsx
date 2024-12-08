import React, { useState } from 'react';

import { searchProducts } from '../lib/search';  // route api for search laravel
import { useSearch } from '../lib/searchprovider'; // searchprovider hook 
const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  //const [loading, setLoading] = useState(false);
  const { setSearchResults,setTotal , setIsSearchActive} = useSearch(); // Use the context to set results from searchprovider
  const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
     const query = event.target.value;
    setSearchQuery(query);
    // if empty search field 
    if (!query.trim()) {
      setSearchResults([]);
      setTotal(0);
      setIsSearchActive(false);
      console.log('no search key');
      return;
    }

      console.log("Searching for:", query);
      //setLoading(true);
     
      // lets proceed
      try {
        const results = await searchProducts(query);
      
        setSearchResults(results.products.products);  // assignment  data content of search products
        setTotal(results.total);  // assignment this tell if no product show or display records 
        setIsSearchActive(true);  // assignment this trigger the result page 
      }catch (err) {

      }finally {
       // setLoading(false);
      }
    }


  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Products</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-blue-300">Home</a>
            </li>
          
           
          </ul>
        </nav>
        <div className="ml-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-md text-black"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

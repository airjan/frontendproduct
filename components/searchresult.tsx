import React from 'react';
import { useSearch } from '../lib/searchprovider';  // Import the custom hook for global access
const SearchResults: React.FC = () => {
const { searchResults,total } = useSearch();  // Access search results from context

    if (total == 0   ){  // no recourds in search result 
      return <div className="text-center text-lg font-semibold mt-4">No records found</div>;
    }

  return (
    <div className="mt-4">
      <ul>
        {searchResults.map((product) => (
          <li key={product.id} className="bg-white p-4 mb-4 rounded-md shadow-md">
          <div
      onClick={() => window.open('/product/'+product.id, '_blank')} // Open product in a new tab
      className="flex cursor-pointer"
    >
            <div className="flex cursor-pointer">
              <img loading="lazy" src={product.thumbnail} alt={product.title} className="w-32 h-32 object-cover rounded-md" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-md font-semibold mt-2">${product.price.toFixed(2)}</p>
                <p className="text-sm mt-2">Rating: {product.rating}</p>
                <div className="flex mt-2">
                  {product.images.slice(0, 3).map((image, index) => (
                    <img key={index} src={image} alt={product.title} className="w-16 h-16 object-cover rounded-md mr-2" />
                  ))}
                </div>
              </div>
            </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

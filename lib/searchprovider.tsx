import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the type for search results  need
interface SearchResult {
  id: number;
  title: string;
  thumbnail: string;
  
  description: string; 
  price: number;       
  rating: number;    
  images: string[]; 
 
}


interface SearchContextType {
  searchResults: SearchResult[];  // data product 
  total: number; // total number of search if 0 no records display 
  isSearchActive: boolean;  // when user input in search field 
  // setter   
  setSearchResults: React.Dispatch<React.SetStateAction<SearchResult[]>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>; 
  setIsSearchActive: React.Dispatch<React.SetStateAction<boolean>>; 
}


// Create the context
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Context Provider component
export const SearchProvider = ({ children }: { children: ReactNode }) => {
 // setter default value 
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  
  

  return (
    <SearchContext.Provider value={{ searchResults,total, isSearchActive, setSearchResults,setTotal, setIsSearchActive  }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the search context, lets avoiding props to the template since this 
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

// SearchForm.tsx
"use client";
import React, { useState } from 'react';
import geonamesService from '../../services/geonamesService';

const categories = ['All categories', 'Music', 'Sports', 'Arts & Theater', 'Film'];

const SearchForm: React.FC<{ onSearch: (location: string, category: string) => void }> = ({ onSearch }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setIsCategoryOpen(false);
  };

  const handleLocationChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLocation(value);

    if (value.length > 2) {
      try {
        const results = await geonamesService.getCitySuggestions(value);
        console.log('City suggestions:', results); // Debugging statement
        const cityNames = results.map((city: any) => city.name);
        console.log('City names:', cityNames); // Debugging statement
        setSuggestions(cityNames);
      } catch (error) {
        console.error('Error fetching city suggestions', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setLocation(suggestion);
    setSuggestions([]);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(location, selectedCategory);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-1/2 gap-2 flex flex-col justify-center items-center mx-auto mt-10 mb-4 p-8 bg-blue-600 shadow-md rounded-lg">
      <div className="mb-4 w-full relative">
        <label htmlFor="location" className="block text-md font-medium text-black mb-2">
          Enter City
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
          className="w-full bg-white px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter location"
        />
        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mb-4 relative w-full">
        <label htmlFor="category" className="block text-md font-medium text-black mb-2">
          Category
        </label>
        <button
          type="button"
          onClick={toggleCategoryDropdown}
          className="flex items-center justify-between w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {selectedCategory}
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isCategoryOpen && (
          <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg w-full">
            <ul className="py-1 text-sm text-gray-700">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(category)}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="mt-4 w-full">
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-800 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;

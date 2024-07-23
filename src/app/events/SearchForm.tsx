import React, { useState } from 'react';
import countryCodes from './CountryCodes';

const categories = ['All categories', 'Music', 'Sports', 'Arts & Theater', 'Film'];

const SearchForm: React.FC<{ onSearch: (location: string, country: string, category: string) => void }> = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(location, country, selectedCategory);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-1/2 gap-2 flex flex-col justify-center items-center mx-auto mt-10 mb-4 p-8 bg-blue-600 shadow-md rounded-lg">
      <div className="mb-4 w-full">
        <label htmlFor="country" className="block text-md font-medium text-black mb-2">
          Select Country
        </label>
        <select
          id="country"
          value={country}
          onChange={handleCountryChange}
          className="w-full bg-white px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select a country...</option>
          {countryCodes.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4 w-full">
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
                onClick={() => setLocation(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mb-4 w-full">
        <label htmlFor="category" className="block text-md font-medium text-black mb-2">
          Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full bg-white px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-800 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;

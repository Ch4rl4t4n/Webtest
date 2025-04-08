import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-6 -mt-24 relative z-10">
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              placeholder="Where to?"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check In</label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check Out</label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
        <div className="mt-6 flex justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full 
                         flex items-center gap-2 font-semibold transform transition hover:scale-105 hover:shadow-lg">
            <Search size={20} />
            <span>Search Destinations</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
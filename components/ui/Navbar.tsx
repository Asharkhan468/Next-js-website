import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBuilding ,faSearch , faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
    <div className="flex items-center justify-between bg-white p-4 md:p-6">
      <div className="flex items-center gap-9">
        <img 
          className="w-12 md:w-14" 
          src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png" 
          alt="logo" 
        />
        <h1 className="text-md cursor-pointer md:text-lg font-semibold text-gray-800 flex items-center gap-1 hover:text-blue-600 transition-colors duration-300">
          <FontAwesomeIcon className='bg' icon={faCar} /> Motors
        </h1>
        <h1 className="text-md cursor-pointer md:text-lg font-semibold text-gray-800 flex items-center gap-1 hover:text-blue-600 transition-colors duration-300">
          <FontAwesomeIcon icon={faBuilding} /> Property
        </h1>
      </div>
    </div>

    <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4 md:p-6">
      {/* Location Selector Input */}
      <div className="relative w-full md:w-1/4">
        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
          placeholder="Select Location"
        />
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
      </div>

      {/* Search Anything Input */}
      <div className="relative w-full md:w-1/2">
        <input
          type="text"
          className="w-full py-2 pl-4 pr-12 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
          placeholder="Search anything"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors duration-300">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {/* Login Button */}
      <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300">
        Login
      </button>

      {/* Sell Button */}
      <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300">
        Sell
      </button>
    </div>
</>
  );
};

export default Navbar;




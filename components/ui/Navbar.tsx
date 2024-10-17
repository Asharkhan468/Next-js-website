import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBuilding ,faSearch , faMapMarkerAlt , faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
    <div className='sticky top-0'>
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

    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white ">
  {/* Location Selector Input */}
  <div className="relative w-full md:w-1/4 mb-4 md:mb-0">
    <input
      type="text"
      className="w-full py-2 pl-10 pr-4  border  focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
      placeholder="Select Location"
    />
    <FontAwesomeIcon
      icon={faMapMarkerAlt}
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
    />
  </div>

  {/* Search Anything Input */}

  {/* Search Input */}
  <div className="relative w-full md:w-1/2 pr-2">
    <input
      type="text"
      className="w-full py-3 pl-5 pr-16 border border-gray-300  focus:ring-2 focus:ring-gray-500 focus:outline-none text-gray-700 placeholder-gray-400"
      placeholder="Find Cars,Mobile Phones, and more..."
    />
    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#003035] hover:bg-[#003035] text-white p-3  transition-transform duration-300">
      <FontAwesomeIcon icon={faSearch} />
    </button>
  </div>



  {/* Action Buttons */}
  <div className="flex gap-2">
    {/* Login Button */}
    <button className="bg-white text-gray-800 py-2 px-4 rounded-full border hover:bg-gray-100 transition-colors duration-300">
      Login
    </button>

    {/* Sell Button */}
    {/* <button className="bg-yellow-500 text-white py-2 px-4 rounded-full  hover:bg-yellow-600 transition-colors duration-300">
      Sell
    </button> */}
    <button className="relative inline-flex items-center justify-center px-6 py-3 text-black font-semibold rounded-full ">
  <span className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#00e9df] border-l-blue-500 border-b-[#ffcc2e] border-r-blue-700 "></span>
 <FontAwesomeIcon className='text-xl font-semibold pr-1' icon={faPlus}/> Sell
</button>
  </div>
</div>
</div>

</>
  );
};

export default Navbar;




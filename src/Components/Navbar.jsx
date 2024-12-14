import React, { useState, useEffect } from "react";
import { FaCartPlus, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Untuk toggling menu mobile
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Untuk toggling search bar

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <nav className="bg-[#FFF0DC] shadow-md fixed w-full z-10 top-0 left-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold font-lora text-gray-800">Horegshopu</div>

        {/* Menu untuk tampilan desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          <ul className="flex space-x-8">
            <li><a href="#Main" className="text-black-400 hover:text-gray-400 transition duration-300">Home</a></li>
            <li><a href="#product" className="text-black-400 hover:text-gray-400 transition duration-300">Product</a></li>
            <li><a href="#contact" className="text-black-400 hover:text-gray-400 transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Ikon Search, Cart, dan Burger (Untuk tampilan mobile) */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Ikon Search */}
          <button
            id="searchIcon"
            className="text-gray-600"
            onClick={toggleSearch}
          >
          <FaSearch className="w-6 h-6" />
          </button>
          
            {isSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-md border border-gray-300 bg-white w-40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            )}

          {/* Ikon Cart */}
          <button className="text-gray-600">
          <FaCartPlus className="w-6 h-6" />
          </button>

          {/* Ikon Burger untuk mobile */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              // Ikon silang saat menu terbuka
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Ikon burger saat menu tertutup
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-[#FFF0DC] shadow-md`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          <p className="container flex justify-center items-center bg-white">
            <li><a href="#Main" className="text-black-400 hover:text-gray-800 transition duration-300">Home</a></li>
          </p>
          <p className="container flex justify-center items-center bg-white">
            <li><a href="#product" className="text-black-400 hover:text-gray-800 transition duration-300">Product</a></li>
          </p>
          <p className="container flex justify-center items-center bg-white">
            <li><a href="#contact" className="text-black-400 hover:text-gray-800 transition duration-300">Contact</a></li>
          </p>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
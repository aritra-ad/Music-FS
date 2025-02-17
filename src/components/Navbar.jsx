import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import footerlogo from '../assets/footerlogo.png';

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <nav>
      <div className="mx-11 2xl:px-20 xl:px-20 lg:px-20 md:px-0 sm:px-0 flex justify-between items-center">
        <div className='py-[50px] space-x-7 flex items-center'>
          <Link to="/">
            <img src={footerlogo} alt="Logo" className="h-10 mr-4" />
          </Link>
          
          {/* Desktop and Laptop Nav Links */}
          <div className="hidden lg:flex space-x-7">
            <Link to="/" className="text-black hover:text-red-700 font-bold px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105">Home</Link>
            <Link to="/news" className="text-black hover:text-red-700 font-bold px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105">News</Link>
            <Link to="/hot" className="text-black hover:text-red-700 font-bold px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105">Hot</Link>
            <Link to="/about" className="text-black hover:text-red-700 font-bold px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105">About</Link>
          </div>
        </div>

        {/* Desktop and Laptop Contact Button */}
        <Link to="/contact" className="hidden lg:block text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105">Contact Us</Link>

        {/* Hamburger Menu for Mobile and Tablet */}
        <button onClick={toggleSideNav} className="lg:hidden text-black focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Side Navigation for Mobile and Tablet */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#ef4230] transform ${isSideNavOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-50`}>
        <button onClick={toggleSideNav} className="absolute top-4 right-4 text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="flex flex-col space-y-4 mt-16 p-4">
          <Link to="/" className="text-white hover:text-black font-bold px-4 py-2 rounded transition duration-300 ease-in-out">Home</Link>
          <Link to="/news" className="text-white hover:text-black font-bold px-4 py-2 rounded transition duration-300 ease-in-out">News</Link>
          <Link to="/hot" className="text-white hover:text-black font-bold px-4 py-2 rounded transition duration-300 ease-in-out">Hot</Link>
          <Link to="/about" className="text-white hover:text-black font-bold px-4 py-2 rounded transition duration-300 ease-in-out">About</Link>
          <Link to="/contact" className="text-white hover:text-black font-bold px-4 py-2 rounded transition duration-300 ease-in-out">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
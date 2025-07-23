import React, { useState, useRef, useEffect } from 'react';
import {logo} from '../assets/index'
import SpotlightButton from './button'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null); // reference the hamburger button

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Close only if click is outside both the dropdown and the button
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-3 left-0 w-full bg-transparent text-white z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        
        {/* Left: Logo + Tagline */}
        <div className="flex items-center space-x-3 ">
          <img src={logo} alt="Logo" className="w-[80px]" />
          <span className="text-sm text-dimWhite " style={
            {
              textTransform:"uppercase",
              fontWeight:'600'
            }
          }>celebrating our productivity</span>
        </div>

        {/* Center: Spacer */}
        <div className="flex-1"></div>

        {/* Right: Button + Hamburger */}
        <div className="flex items-center space-x-4 relative">
           <SpotlightButton label="Hire Us" to="/contact" />

          {/* Hamburger Button */}
          <button
            ref={buttonRef}
            className="focus:outline-none"
            onClick={(e) => {
              e.stopPropagation(); // stop bubbling
              setMenuOpen((prev) => !prev);
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 top-12 mt-2 w-48 bg-white text-black rounded shadow-lg animate-fadeIn"
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Home</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Services</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

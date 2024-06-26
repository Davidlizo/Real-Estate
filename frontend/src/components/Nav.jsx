import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
<nav className="fixed top-0 left-0 right-0 p-4 text-white bg-gray-800 z-50">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/">
          <div className="flex items-center font-sans text-3xl font-bold">
            <h1>HomeBuy</h1>
          </div>
        </Link>
        <div className="lg:hidden">
          {/* Mobile menu button */}
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 100 2h12a1 1 0 100-2H3a1 1 0 000 0zM4 15a1 1 0 100 2h12a1 1 0 100-2H4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* Mobile menu */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-gray-800 mt-1 p-2">
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-4 text-sm hover:bg-gray-700 rounded"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 px-4 text-sm hover:bg-gray-700 rounded"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block py-2 px-4 text-sm hover:bg-gray-700 rounded"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bookanappointment"
                    className="block py-2 px-4 text-sm hover:bg-gray-700 rounded"
                  >
                    Book an appointment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/loginScreen"
                    className="block py-2 px-4 text-sm hover:bg-gray-700 rounded"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="block py-2 px-4 text-sm hover:bg-gray-700 rounded"
                  >
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link
                    to="/agent"
                    className="block py-2 px-4 text-sm hover:bg-gray-700 rounded"
                  >
                    Agent
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Desktop navigation */}
        <ul className="hidden lg:flex space-x-4">
          <li>
            <Link to="/" className="hover:text-white">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white">Contact us</Link>
          </li>
          <li>
            <Link to="/bookanappointment" className="hover:text-white">Book an appointment</Link>
          </li>
          <li>
            <Link to="/loginScreen" className="hover:text-white">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="hover:text-white">Sign up</Link>
          </li>
          <li>
            <Link to="/agent" className="hover:text-white">Agent</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
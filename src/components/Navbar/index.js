import React, { useState } from "react";

const Navbar = () => {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src="https://ik.imagekit.io/Satish108/spur-fit-company/images%20(3).jpg?updatedAt=1708231034124"
          alt="logo"
          className="w-12 h-12 mr-2 rounded"
        />
        <span className="font-semibold text-xl tracking-tight">Ahead</span>
      </div>
      {/* Conditional rendering of the toggle menu button based on screen size */}
      <div className="lg:hidden">
        {/* Toggle menu button */}
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          onClick={toggleMenu} // Call toggleMenu function on click
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {/* Conditional rendering of the navigation links based on menu state */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full lg:flex lg:items-center lg:w-auto justify-center`}
      >
        <div class="text-sm lg:flex-grow justify-center lg:justify-between items-center w-full mx-auto lg:mx-0">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Emotions
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Manifesto
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
          >
            Self-awareness program
          </a>
        </div>

        <div>
          <button
            type="button"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0"
          >
            Download App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

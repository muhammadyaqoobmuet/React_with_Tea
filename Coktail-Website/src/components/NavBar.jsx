import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

function NavBar() {
  return (
    <nav className="bg-gradient-to-r h-[67px] from-purple-500 via-purple-500/60 to-purple-900/90 p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-shrink-0 text-white text-2xl font-bold tracking-wide neon-text">
          <h1 className=" text-xl sm:text-3xl  tracking-widest font-bold ">Coktail's HUB</h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white text-lg hover:text-yellow-300 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg hover:text-yellow-300 transition duration-200"
          >
            About
          </Link>
          
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

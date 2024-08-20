import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from './logo.svg';
import { links } from './data';
import './Nav.css';

function Navbar() {
  const [show, setShow] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (show) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = '0px';
      }
    };

    // Update height on toggle
    updateHeight();

    // Add event listener for resize
    window.addEventListener('resize', updateHeight);

    // Clean up the event listener
    return () => window.removeEventListener('resize', updateHeight);
  }, [show]);

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="flex items-center justify-between w-full md:w-auto">
        <img src={logo} alt="Logo" className="h-10" />
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setShow(!show)}
        >
          <FaBars className="text-3xl" />
        </button>
      </div>

      <div
        ref={linksContainerRef}
        className={`overflow-hidden transition-all duration-300 ${
          show ? 'block' : 'hidden'
        } chentapakDamam  md:flex w-full md:w-auto items-start gap-6 mt-4 md:mt-0 md:flex-row md:items-center`}
      >
        <ul ref={linksRef} className="w-full md:flex md:gap-4 md:w-auto">
          {links.map((link) => (
            <li key={link.id} className="list-none w-full md:w-auto">
              <button className="text-lg my-1 tracking-widest md:tracking-normal font-medium text-gray-700 hover:text-blue-600 transition-colors">
                {link.text}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <FaFacebook className="text-xl text-gray-800 hover:text-blue-600 transition-colors" />
        <FaLinkedin className="text-xl text-gray-800 hover:text-blue-600 transition-colors" />
        <FaTwitter className="text-xl text-gray-800 hover:text-blue-600 transition-colors" />
      </div>
    </nav>
  );
}

export default Navbar;

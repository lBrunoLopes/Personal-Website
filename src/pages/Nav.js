import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="text-white font-bold text-2xl">
              <Link to="/" className="text-white">Personal Website</Link>
            </div>
            <div className="md:hidden">
              <button className="text-white navbar-toggle" onClick={toggleMenu}>
                ☰
              </button>
            </div>
          </div>
          <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
            <div className="space-x-4 md:flex">
              <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white">Home</Link>
              <Link to="/skills" className="text-gray-300 hover:bg-gray-700 hover:text-white">Skills</Link>
              <Link to="/experience" className="text-gray-300 hover:bg-gray-700 hover:text-white">Experience</Link>
              <Link to="/certificates" className="text-gray-300 hover:bg-gray-700 hover:text-white">Certificates</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;





import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const getLinkClass = (path) => {
      const isActive = location.pathname.trim() === path.trim();
      const className = isActive
          ? "text-white md:ml-4 block mt-4 md:mt-0 text-base md:text-lg active"
          : "text-white md:ml-4 block mt-4 md:mt-0 text-base md:text-lg";

      return className;
  };

    return (
        <nav className="bg-gray-800 py-1">
            <div className="container mx-auto flex justify-between items-center px-4">
              <Link to="/" className="tracking-out-expand">Personal Website</Link>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
                  <Link to="/" className={getLinkClass("/")}>Home</Link>
                  <Link to="/skills" className={getLinkClass("/skills")}>Skills</Link>
                  <Link to="/experience" className={getLinkClass("/experience")}>Experience</Link>
                  <Link to="/certificates" className={getLinkClass("/certificates")}>Certificates</Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;



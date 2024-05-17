import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="text-white font-bold text-2xl">
                            <Link to="/" className="text-white">Personal Website</Link>
                        </div>
                        <div className="hidden md:block mb-6">
                            <div className="space-x-4 absolute right-10 mb-20">
                                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white">Home</Link>
                                <Link to="/skills" className="text-gray-300 hover:bg-gray-700 hover:text-white">Skills</Link>
                                <Link to="/experience" className="text-gray-300 hover:bg-gray-700 hover:text-white">Experience</Link>
                                <Link to="/certificates" className="text-gray-300 hover:bg-gray-700 hover:text-white">Certificates</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;


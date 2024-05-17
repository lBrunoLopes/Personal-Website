import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-6">
            <div className="rounded-full overflow-hidden border-4 border-white">
                <img src="/profile.jpg" alt="profile" className="rounded-full" />
            </div>

            <div className="text-center">
                <p className="text-4xl font-bold text-gray-800">Bruno Lopes</p>
            </div>

            <div className="text-center">
                <p className="text-2xl text-gray-600">Programmer who loves challenges!</p>
            </div>

            <p className="text-xl text-gray-700">Junior Web Developer</p>

            <div className="flex space-x-4">
                <a
                    href="https://github.com/lBrunoLopes"
                    className="text-blue-500 hover:underline flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="mr-1" /> GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/bruno-lopes-172223b9/"
                    className="text-blue-500 hover:underline flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="mr-1" /> LinkedIn
                </a>
            </div>

            <div>
                <a
                    href="/BrunoLopes-cv.pdf"
                    download
                    className="text-gray-600 hover:text-gray-900 font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download CV
                </a>
            </div>
        </div>
    );
};

export default Home;


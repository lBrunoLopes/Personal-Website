import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-6">
            <HelmetProvider>
                <Helmet>
                    <title>Bruno Lopes - Junior Web Developer</title>
                    <meta name="description" content="Personal website of Bruno Lopes, a junior web developer passionate about coding and solving complex problems." />
                    <meta property="og:title" content="Bruno Lopes - Junior Web Developer" />
                    <meta property="og:description" content="Personal website of Bruno Lopes, a junior web developer passionate about coding and solving complex problems." />
                    <meta property="og:image" content="/profile.jpg" />
                    <meta property="og:url" content="https://brunolopesweb.netlify.app/" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Bruno Lopes - Junior Web Developer" />
                    <meta name="twitter:description" content="Personal website of Bruno Lopes, a junior web developer passionate about coding and solving complex problems." />
                    <meta name="twitter:image" content="/path/to/your/image.jpg" />
                </Helmet>
            </HelmetProvider>
            <div className="avatar">
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
                    <FaGithub className="heartbeat" /> GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/bruno-lopes-172223b9/"
                    className="text-blue-500 hover:underline flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="heartbeat" /> LinkedIn
                </a>
            </div>

            <div className="shake-lr">
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

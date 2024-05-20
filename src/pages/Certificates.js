// Certificates.js
import React from "react";

const Certificates = () => {
    const certificates = [
        {
            src: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~ARPE2V2YM4X8/CERTIFICATE_LANDING_PAGE~ARPE2V2YM4X8.jpeg",
            alt: "Certificate 1",
            title: "Web Applications for Everybody",
            date: "April 19, 2024",
            issuer: "Coursera",
            link: "https://coursera.org/share/66f71cb87190ff464bb5009a17029ed6"
        },
        {
            src: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~SZ8K9JPGJEZZ/CERTIFICATE_LANDING_PAGE~SZ8K9JPGJEZZ.jpeg",
            alt: "Certificate 2",
            title: "Meta Front-End Developer",
            date: "February 12, 2024",
            issuer: "Coursera",
            link: "https://coursera.org/share/f40d7f0d2b01d40ce257c813b1ce3001"
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center mt-10 space-y-10 md:flex-row md:space-x-10 md:space-y-0">
            {certificates.map((cert, index) => (
                <div key={index} className="max-w-lg border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                    <img src={cert.src} alt={cert.alt} className="w-full" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                        <p className="text-sm text-gray-600">Date: {cert.date}</p>
                        <p className="text-sm text-gray-600">Issuer: {cert.issuer}</p>
                        <a
                            href={cert.link}
                            className="text-blue-500 hover:underline mt-2 block"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Certificates;


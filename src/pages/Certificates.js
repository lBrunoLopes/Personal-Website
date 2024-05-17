import React from "react";

const Certificates = () => {
    return (
        <div className="flex flex-row items-center justify-center mt-10 space-x-10">
            <div className="max-w-lg border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                    src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~ARPE2V2YM4X8/CERTIFICATE_LANDING_PAGE~ARPE2V2YM4X8.jpeg"
                    alt="Certificate 1"
                    className="w-full"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Web Applications for Everybody</h3>
                    <p className="text-sm text-gray-600">Date: April 19, 2024</p>
                    <p className="text-sm text-gray-600">Issuer: Coursera</p>
                    <a
                        href="https://coursera.org/share/66f71cb87190ff464bb5009a17029ed6"
                        className="text-blue-500 hover:underline mt-2 block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Certificate
                    </a>
                </div>
            </div>

            <div className="max-w-lg border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                    src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~SZ8K9JPGJEZZ/CERTIFICATE_LANDING_PAGE~SZ8K9JPGJEZZ.jpeg"
                    alt="Certificate 2"
                    className="w-full"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Meta Front-End Developer</h3>
                    <p className="text-sm text-gray-600">Date: February 12, 2024</p>
                    <p className="text-sm text-gray-600">Issuer: Coursera</p>
                    <a
                        href="https://coursera.org/share/f40d7f0d2b01d40ce257c813b1ce3001"
                        className="text-blue-500 hover:underline mt-2 block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Certificate
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Certificates;

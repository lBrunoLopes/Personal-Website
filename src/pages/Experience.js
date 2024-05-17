import React from "react";

const Experience = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 mt-8">
            <div className="flex flex-col gap-5">
                <Event
                    title="Back Office Supervisor Manager"
                    company="Douro Azul, S.A"
                    duration="December 2019 - May 2024"
                    description={[
                        "BackOffice work",
                        "Management of Suppliers, purchases, ship delivery logistics, price comparison",
                        "Confirming Invoices"
                    ]}
                />
                <Event
                    title="Assistant Director"
                    company="Douro Azul, S.A"
                    duration="March 2016 - November 2019"
                    description={[
                        "Leadership of the hotel team aboard the vessel/ship",
                        "Human resource Management",
                        "Control of costs and weekly expenses",
                        "Monthly budget control for the vessel/ship",
                        "Control of HACCP standards",
                        "Problem solving and passenger complaints",
                        "Receptionist Work"
                    ]}
                />
                <Event
                    title="Receptionist"
                    company="Douro Azul, S.A"
                    duration="March 2014 - January 2016"
                    description={[
                        "Greeted and welcomed guests and provided a positive first impression of the organization",
                        "Directed guests and answered their questions",
                        "Filed incident reports and documented problems and disturbances",
                        "Received and sorted mail packages",
                        "Scheduled appointments and followed up on reservations",
                    ]}
                />
                <Event
                    title="Head Waiter"
                    company="Douro Azul, S.A"
                    duration="April 2012 - November 2013"
                    description={[
                        "Performed opening and closing duties, including cleaning, preparing the specials board",
                        "Greeted patrons upon entry and informed them of the daily food and drink specials",
                        "Communicated with kitchen and bar staff to complete food and drink orders",
                    ]}
                />
            </div>
        </div>
    );
};


const Event = ({ title, company, duration, description }) => {
    return (
        <div className="border border-gray-200 rounded-lg p-5 mx-auto" style={{ width: '700px' }}>
            <div className="text-center"> {/* Add text-center class here */}
                <h1 className="text-xl font-bold mb-2">{title}</h1>
                <h3 className="text-gray-500 mb-2">{company}</h3>
                <p className="mb-2">{duration}</p>
                <ul className="list-disc pl-5 text-left"> {/* Adjust text alignment */}
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default Experience;


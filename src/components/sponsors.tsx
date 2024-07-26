// import React from 'react';
import Header from "./header.tsx";
import Sponsor1 from '../assets/sponsor1.png'; // Replace with actual paths to sponsor logos
import Sponsor2 from '../assets/sponsor2.png'; // Replace with actual paths to sponsor logos

const HomePage = () => {

    const sponsors = [
        { name: "TechCorp", logo: Sponsor1 },
        { name: "Innovate Ltd.", logo: Sponsor2 }
    ];

    return (
        <>
            <Header/>
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">

            <div className="w-full max-w-4xl px-6">
                <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">Our Sponsors</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {sponsors.map((sponsor, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6 max-w-xs text-center">
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="w-32 h-32 mx-auto mb-4 object-contain border-2 border-gray-300"
                            />
                            <h3 className="text-xl font-semibold text-blue-700">{sponsor.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default HomePage;

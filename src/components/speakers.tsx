// import React from 'react';
import Header from "./header.tsx";
import Speaker1 from '../assets/speaker1.png'; // Replace with actual paths to speaker images
import Speaker2 from '../assets/speaker2.png'; // Replace with actual paths to speaker images

const HomePage = () => {

    const speakers = [
        {
            name: "Dr. Alice Smith",
            description: "Expert in Artificial Intelligence and Machine Learning.",
            image: Speaker1
        },
        {
            name: "Prof. John Doe",
            description: "Renowned researcher in Quantum Computing.",
            image: Speaker2
        }
    ];

    return (
        <>
            <Header/>
            <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">

                <div className="w-full max-w-4xl px-6">
                    <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">Meet Our Speakers</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {speakers.map((speaker, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg p-6 max-w-xs text-center">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-gray-300"
                                />
                                <h3 className="text-xl font-semibold text-blue-700 mb-2">{speaker.name}</h3>
                                <p className="text-gray-600">{speaker.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;

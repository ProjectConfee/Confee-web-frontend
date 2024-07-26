// import React from 'react';
import Header from "./header.tsx";
import LOGO from '../assets/logo.jpeg'; // Make sure this path matches your actual logo file path

const HomePage = () => {
    const conferenceName = "ICTer International Conference";
    const location = "Colombo, Sri Lanka";
    const date = "05th to 08th November, 2024";

    return (
        <>
            <Header/>
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
                <img
                    src={LOGO}
                    alt="Conference Logo"
                    className="w-32 h-32 mx-auto mb-4 rounded-full"
                />
                <h1 className="text-3xl font-bold text-blue-700 mb-4">{conferenceName}</h1>
                <p className="text-lg text-gray-700 mb-2">Location: {location}</p>
                <p className="text-lg text-gray-700">Date: {date}</p>
            </div>
        </div>
        </>
    );
};

export default HomePage;

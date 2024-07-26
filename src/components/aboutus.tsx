// import React from 'react';
import Header from "./header.tsx";

const AboutUs = () => {
    return (
        <>
        <Header/>
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
                <h1 className="text-4xl font-bold text-blue-700 mb-4">ICTer</h1>
                <p className="text-lg text-gray-700 mb-4">
                    The International Conference on Advances in ICT for Emerging Regions (ICTer) is a prestigious gathering that continues the legacy of the International Information Technology Conference (IITC) held in Sri Lanka since 1998.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Serving as a vital platform for global scholars, researchers, and practitioners, ICTer fosters collaboration and showcases cutting-edge advancements in information and communication technology. Through a rigorous peer-review process, high-quality papers are selected for presentation and publication with recognized publishers, driving both academic discourse and real-world impact.
                </p>
                <p className="text-lg text-gray-700">
                    More than just a conference, ICTer cultivates a vibrant community where participants exchange ideas, forge partnerships, and collectively strive to address the challenges facing emerging regions. Committed to innovation, inclusivity, and excellence, ICTer invites all stakeholders to join in shaping a brighter future through the transformative power of ICT.
                </p>
            </div>
        </div>
        </>
    );
};

export default AboutUs;

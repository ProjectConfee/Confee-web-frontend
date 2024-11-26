const AboutUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen pt-16">
            {/* Centered Heading */}
            <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-8">ICter Conference</h1>
            </div>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-8 lg:px-16">
                {/* Left-hand side content */}
                <div className="lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start mb-8 lg:mb-0">
                    <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                        ICTer International Conference is a prestigious gathering that continues the legacy of the International Information Technology Conference (IITC) held in Sri Lanka since 1998. Serving as a vital platform for global scholars, researchers, and practitioners, ICTer fosters collaboration and showcases cutting-edge advancements in information and communication technology.

                            Through a rigorous peer-review process, high-quality papers are selected for presentation and publication with recognized publishers, driving both academic discourse and real-world impact. More than just a conference, ICTer cultivates a vibrant community where participants exchange ideas, forge partnerships, and collectively strive to address the challenges facing emerging regions. Committed to innovation, inclusivity, and excellence, ICTer invites all stakeholders to join in shaping a brighter future through the transformative power of ICT.


                    </p>
                </div>

                {/* Right-hand side image */}
                <div className="lg:w-1/2 flex justify-center items-center">
                    <img
                        src="src/assets/sir.jpg"
                        alt="About Us"
                        className="w-full max-w-md lg:max-w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

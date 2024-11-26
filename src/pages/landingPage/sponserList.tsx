const Sponsors = () => {
    const sponsors = [
        {
            name: "Gold Sponser",
            logo: "src/assets/cambio.jpg", // Replace with the actual image path or URL
        },
        {
            name: "Silver",
            logo: "src/assets/genie.png", // Replace with the actual image path or URL
        },
        {
            name: "Bronze",
            logo: "src/assets/wso2.png", // Replace with the actual image path or URL
        },
        {
            name: "Keynote Sponsor",
            logo: "src/assets/examGen.jpg", // Replace with the actual image path or URL
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Our Sponsors
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {sponsors.map((sponsor, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
                    >
                        <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="w-32 h-32 object-contain mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-700">
                            {sponsor.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sponsors;

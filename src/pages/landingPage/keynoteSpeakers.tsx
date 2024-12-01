const KeynoteSpeakers = () => {
    const speakers = [
        {
            name: "Prof. Thiemo Voigt",
            affiliation: "Uppsala University and RISE",
            image: "src/assets/thiemo.png", // Replace with the actual image path or URL
        },
        {
            name: "Prof. Chris Bain",
            affiliation: "Professor of Practice in Digital Health - Faculty of IT, Monash University",
            image: "src/assets/chris.jpg", // Replace with the actual image path or URL
        },
        {
            name: "Prof. Thambipillai Srikanthan",
            affiliation: "Professor, College of Computing & Data Science, Nanyang Technological University, Singapore",
            image: "src/assets/srikan.jpg", // Replace with the actual image path or URL
        },
        {
            name: "Dr. Mohamed Nabeel",
            affiliation: "Principal Researcher at Palo Alto Networks",
            image: "src/assets/nabeel.jpeg", // Replace with the actual image path or URL
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Keynote Speakers
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {speakers.map((speaker, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
                    >
                        <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-32 h-32 rounded-full object-cover mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">
                            {speaker.name}
                        </h3>
                        <p className="text-sm text-gray-600">{speaker.affiliation}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KeynoteSpeakers;

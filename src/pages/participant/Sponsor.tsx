import React from 'react';
import { useNavigate } from 'react-router-dom';

type Sponsor = {
    id: number;
    name: string;
    logo: string;
    description: string;
};

const sponsors: Sponsor[] = [
    {
        id: 1,
        name: 'Tech Solutions Inc.',
        logo: 'src/assets/logo.png',
        description: 'A leading tech solutions provider.',
    },
    {
        id: 2,
        name: 'Innovate Labs',
        logo: 'src/assets/logo.png',
        description: 'Innovative lab services and solutions.',
    },
    {
        id: 3,
        name: 'Future Tech',
        logo: 'src/assets/logo.png',
        description: 'Pioneering future technologies for all.',
    },
    {
        id: 4,
        name: 'WSO2',
        logo: 'src/assets/logo.png',
        description: 'A leading tech solutions provider.',
    },
    {
        id: 5,
        name: 'IFS',
        logo: 'src/assets/logo.png',
        description: 'Innovative lab services and solutions.',
    },
    {
        id: 6,
        name: 'Sysco Labs',
        logo: 'src/assets/logo.png',
        description: 'Pioneering future technologies for all.',
    },
    {
        id: 7,
        name: 'Scienter Technologies',
        logo: 'src/assets/logo.png',
        description: 'A leading tech solutions provider.',
    },
    {
        id: 8,
        name: 'Platned',
        logo: 'src/assets/logo.png',
        description: 'Innovative lab services and solutions.',
    },
    {
        id: 9,
        name: 'PSL Development',
        logo: 'src/assets/logo.png',
        description: 'Pioneering future technologies for all.',
    },
];

const SponsorsPage: React.FC = () => {

    const navigate = useNavigate();

    const handleViewStallMap = () => {
        navigate('/participant_stall');
    };

    return (
        <div className="flex flex-col items-center p-8 min-h-screen">
            <div className="flex justify-between items-center w-full max-w-5xl mb-8">
                <h1 className="text-3xl font-semibold">Sponsors 2024</h1>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600"
                    onClick={handleViewStallMap}
                >
                    View Stall Map
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
                {sponsors.map(sponsor => (
                    <div
                        key={sponsor.id}
                        className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center"
                    >
                        <img
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            className="w-24 h-24 mb-4"
                        />
                        <h2 className="text-xl font-bold mb-2">{sponsor.name}</h2>
                        <p className="text-gray-600">{sponsor.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SponsorsPage;

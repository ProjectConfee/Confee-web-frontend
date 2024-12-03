import React, {
    useEffect,
    useState
} from 'react';

import axios from 'axios';

import {
    useNavigate
} from 'react-router-dom';

type Sponsor = {
    sponsor_id: number;
    company_name: string;
    email: string;
};

const SponsorsPage: React.FC = () => {
    const [sponsors, setSponsors] = useState<Sponsor[]>([]);
    const navigate = useNavigate();

    const handleViewStallMap = () => {
        navigate('/participant_stall');
    };

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (token) {
            axios.get('http://localhost:8080/api/sponsorDetails/getSponsorDetails', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => {
                    setSponsors(response.data);  // Assuming response.data is an array of sponsors
                })
                .catch((error) => {
                    console.error("Error fetching sponsor details:", error);
                });
        } else {
            console.log("No token found in localStorage");
        }
    }, []);

    return (
        <div className="flex flex-col items-center p-8 min-h-screen">
            <div className="flex justify-between items-center w-full max-w-5xl mb-8">
                <h1 className="text-3xl font-semibold">
                    Sponsors 2024
                </h1>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600"
                    onClick={handleViewStallMap}
                >
                    View Stall Map
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
                {sponsors.map((sponsor) => (
                    <div
                        key={sponsor.sponsor_id}
                        className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center"
                    >
                        <h2 className="text-xl font-bold mb-2">
                            {sponsor.company_name}
                        </h2>
                        <p className="text-gray-600">
                            {sponsor.email}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SponsorsPage;

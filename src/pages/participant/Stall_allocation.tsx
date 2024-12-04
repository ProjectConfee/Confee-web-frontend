// import React from 'react';
//
// interface Stall {
//     id: number;
//     name: string;
//     occupied: boolean;
// }
//
// const stalls: Stall[] = [
//     { id: 1, name: 'Stall 1', occupied:false  },
//     { id: 2, name: 'Stall 2', occupied: false },
//     { id: 3, name: 'Stall 3', occupied: false },
//     { id: 4, name: 'Stall 4', occupied: false },
//     { id: 5, name: 'Stall 5', occupied: false  },
//     { id: 6, name: 'Stall 6', occupied: false },
// ];
//
// const subStalls: Stall[] = [
//     { id: 1, name: 'Sub Stall 1', occupied: false },
//     { id: 2, name: 'Sub Stall 2', occupied: false },
//     { id: 3, name: 'Sub Stall 3', occupied: false  },
//     { id: 4, name: 'Sub Stall 4', occupied: false },
//     { id: 5, name: 'Sub Stall 5', occupied: false },
//     { id: 6, name: 'Sub Stall 6', occupied: false },
// ];
//
// const App: React.FC = () => {
//     return (
//         <div className="p-4">
//             <h1 className="text-4xl font-bold text-center mb-10 mt-0">Stall Maps</h1>
//
//             <div className="mb-16 w-full">
//                 <h2 className="text-3xl font-semibold text-center mb-6">Floor 1(Open Area)</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {stalls.map(stall => (
//                         <div
//                             key={stall.id}
//                             className={`flex flex-col justify-center items-center p-6 border-4 rounded-xl shadow-lg transition-transform transform hover:scale-105
//                              ${stall.occupied ? 'bg-slate-700 border-slate-700 ' : 'bg-slate-500 border-slate-500'}`}
//                         >
//                             <p className="text-white font-bold text-2xl">{stall.name}</p>
//                             <p className="text-white mt-2">{stall.occupied ? 'Your Stall' : 'Other stalls'}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//
//             <div className="w-full">
//                 <h2 className="text-3xl font-semibold text-center mb-6">Floor 2( W001 )</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {subStalls.map(subStall => (
//                         <div
//                             key={subStall.id}
//                             className={`flex flex-col justify-center items-center p-6 border-4 rounded-xl shadow-lg transition-transform transform hover:scale-105
//                              ${subStall.occupied ? 'bg-slate-700 border-slate-700 ' : 'bg-slate-500 border-slate-500'}`}
//                         >
//                             <p className="text-white font-bold text-2xl">{subStall.name}</p>
//                             <p className="text-white mt-2">{subStall.occupied ? 'Your Stall' : 'Other Stalls'}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Stall {
    stallId: number;
    stallType: string;
    stallNumber: string;
    sponsorId: string;
}

interface StallLocation {
    id: number;
    stallType: string;
    location: string;
}

const App: React.FC = () => {
    const [mainStalls, setMainStalls] = useState<Stall[]>([]);
    const [subStalls, setSubStalls] = useState<Stall[]>([]);
    const [locations, setLocations] = useState<StallLocation[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Function to get auth token
    const getAuthToken = () => localStorage.getItem('authToken');

    useEffect(() => {
        const fetchData = async () => {
            const token = getAuthToken();

            if (!token) {
                setError('Authorization token not found.');
                setLoading(false);
                return;
            }

            const headers = {
                Authorization: `Bearer ${token}`,
            };

            try {
                // Fetch stalls
                const stallResponse = await axios.get<Stall[]>('http://localhost:8080/api/stall/all', { headers });
                setMainStalls(stallResponse.data.filter(stall => stall.stallType === 'main'));
                setSubStalls(stallResponse.data.filter(stall => stall.stallType === 'sub'));

                // Fetch locations
                const locationResponse = await axios.get<StallLocation[]>('http://localhost:8080/api/stall-locations/getAll', {
                    headers,
                });
                setLocations(locationResponse.data);

                setLoading(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Failed to fetch data.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="text-center py-10 text-2xl">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-500 text-xl">{error}</div>;

    const getLocation = (stallType: string) => {
        const location = locations.find(loc => loc.stallType === stallType);
        return location ? location.location : 'Location not available';
    };

    return (
        <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
            <h1 className="text-5xl font-bold text-center mb-12 text-black">Stall Details</h1>

            <div className="w-full max-w-6xl">
                {/* Main Stalls Section */}
                <section className="mb-12">
                    <h2 className="text-4xl font-semibold text-center mb-8 text-blue-800">Main Stalls</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mainStalls.map(stall => (
                            <div
                                key={stall.stallId}
                                className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 p-4 text-center text-white font-semibold text-xl bg-blue-700"
                                >
                                    Main Stall
                                </div>
                                <div className="p-6 flex flex-col items-center">
                                    <p className="text-3xl font-bold mb-2">{`${stall.stallType} ${stall.stallNumber}`}</p>
                                    <p className="text-lg text-gray-600">Sponsor ID: {stall.sponsorId}</p>
                                    <p className="text-md text-gray-500 mt-2">Location: {getLocation('main')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sub Stalls Section */}
                <section>
                    <h2 className="text-4xl font-semibold text-center mb-8 text-blue-400">Sub Stalls</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {subStalls.map(stall => (
                            <div
                                key={stall.stallId}
                                className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 p-4 text-center text-white font-semibold text-xl bg-blue-400"
                                >
                                    Sub Stall
                                </div>
                                <div className="p-6 flex flex-col items-center">
                                    <p className="text-3xl font-bold mb-2">{`${stall.stallType} ${stall.stallNumber}`}</p>
                                    <p className="text-lg text-gray-600">Sponsor ID: {stall.sponsorId}</p>
                                    <p className="text-md text-gray-500 mt-2">Location: {getLocation('sub')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default App;
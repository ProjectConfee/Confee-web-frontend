//
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
//     { id: 1, name: 'Sub Stall 1', occupied: true },
//     { id: 2, name: 'Sub Stall 2', occupied: false },
//     { id: 3, name: 'Sub Stall 3', occupied: false  },
//     { id: 4, name: 'Sub Stall 4', occupied: false },
//     { id: 5, name: 'Sub Stall 5', occupied: false },
//     { id: 6, name: 'Sub Stall 6', occupied: false },
// ];
//
// const App: React.FC = () => {
//     return (
//         <div className="flex flex-col justify-center items-center  bg-white  ">
//             <h1 className="text-4xl font-bold text-center mb-10 mt-4">Stall Maps</h1>
//
//             <div className="mb-16 w-full">
//                 <h2 className="text-3xl font-semibold text-center mb-6">Floor 1(Open Area)</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {stalls.map(stall => (
//                         <div
//                             key={stall.id}
//                             className={`flex flex-col justify-center items-center p-6 border-4 rounded-xl shadow-lg transition-transform transform hover:scale-105
//                              ${stall.occupied ? 'bg-blue-800 border-bg-blue-800' : 'bg-blue-500 border-bg-blue-500'}`}
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
//                              ${subStall.occupied ? 'bg-blue-800 border-blue-800' : 'bg-blue-500 border-blue-500'}`}
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



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
//
// interface Stall {
//     id: number;
//     name: string;
//     occupied: boolean;
// }
//
// interface StallsData {
//     mainStalls: Stall[];
//     subStalls: Stall[];
// }
//
// const App: React.FC = () => {
//     const [mainStalls, setMainStalls] = useState<Stall[]>([]);
//     const [subStalls, setSubStalls] = useState<Stall[]>([]);
//
//     useEffect(() => {
//
//         axios.get<StallsData>('http://localhost:8080/api/stall/all')
//             .then(response => {
//                 const { mainStalls, subStalls } = response.data;
//
//                 // Randomize the order of the stalls
//                 setMainStalls(shuffleArray(mainStalls));
//                 setSubStalls(shuffleArray(subStalls));
//             })
//             .catch(error => console.error('Error fetching stall data:', error));
//     }, []);
//
//     const shuffleArray = (array: Stall[]) => {
//         return array.sort(() => Math.random() - 0.5);
//     };
//
//     return (
//         <div className="flex flex-col justify-center items-center bg-white">
//             <h1 className="text-4xl font-bold text-center mb-10 mt-4">Stall Maps</h1>
//
//             <div className="mb-16 w-full">
//                 <h2 className="text-3xl font-semibold text-center mb-6">Floor 1 (Open Area)</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {mainStalls.map(stall => (
//                         <div
//                             key={stall.id}
//                             className={`flex flex-col justify-center items-center p-6 border-4 rounded-xl shadow-lg transition-transform transform hover:scale-105
//                              ${stall.occupied ? 'bg-blue-800 border-blue-800' : 'bg-blue-500 border-blue-500'}`}
//                         >
//                             <p className="text-white font-bold text-2xl">{stall.name}</p>
//                             <p className="text-white mt-2">{stall.occupied ? 'Your Stall' : 'Other Stalls'}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//
//             <div className="w-full">
//                 <h2 className="text-3xl font-semibold text-center mb-6">Floor 2 (W001)</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {subStalls.map(subStall => (
//                         <div
//                             key={subStall.id}
//                             className={`flex flex-col justify-center items-center p-6 border-4 rounded-xl shadow-lg transition-transform transform hover:scale-105
//                              ${subStall.occupied ? 'bg-blue-800 border-blue-800' : 'bg-blue-500 border-blue-500'}`}
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

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
//
// interface Stall {
//     id: number;
//     name: string;
//
// }
//
// interface StallsData {
//     mainStalls: Stall[];
//     subStalls: Stall[];
// }
//
// const App: React.FC = () => {
//     const [mainStalls, setMainStalls] = useState<Stall[]>([]);
//     const [subStalls, setSubStalls] = useState<Stall[]>([]);
//
//     useEffect(() => {
//         axios.get<StallsData>('http://localhost:8080/api/stall/all')
//             .then(response => {
//                 const { mainStalls, subStalls } = response.data;
//
//                 // Randomize the order of the stalls
//                 setMainStalls(shuffleArray(mainStalls));
//                 setSubStalls(shuffleArray(subStalls));
//             })
//             .catch(error => console.error('Error fetching stall data:', error));
//     }, []);
//
//     const shuffleArray = (array: Stall[]) => {
//         return array.sort(() => Math.random() - 0.5);
//     };
//
//     return (
//         <div className="flex flex-col justify-center items-center bg-white min-h-screen">
//             <h1 className="text-4xl font-bold text-center mb-10 mt-4">Stall Maps</h1>
//
//             <div className="mb-16 w-full">
//                 <h2 className="text-3xl font-semibold text-center mb-6">Floor 1 (Main Stalls)</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {mainStalls.map(stall => (
//                         <div
//                             key={stall.id}
//                             className={`flex flex-col justify-center items-center p-6 border-4 rounded-xl shadow-lg transition-transform transform hover:scale-105
//                              '}`}
//                         >
//                             <p className="text-white font-bold text-2xl">{stall.name}</p>
//                             <p className="text-white mt-2"></p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//
//             <div className="w-full">
//                 <h2 className="text-3xl font-semibold text-center mb-6">Floor 2 (Sub Stalls)</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {subStalls.map(subStall => (
//                         <div
//                             key={subStall.id}
//                             className={`flex flex-col justify-center items-center p-6 border-4 rounded-xl shadow-lg transition-transform transform hover:scale-105
//                              '}`}
//                         >
//                             <p className="text-white font-bold text-2xl">{subStall.name}</p>
//                             <p className="text-white mt-2"></p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
//
// interface Stall {
//     id: number;
//     name: string;
//     occupied: boolean;
// }
//
// interface StallsData {
//     mainStalls: Stall[];
//     subStalls: Stall[];
// }
//
// const App: React.FC = () => {
//     const [mainStalls, setMainStalls] = useState<Stall[]>([]);
//     const [subStalls, setSubStalls] = useState<Stall[]>([]);
//
//     useEffect(() => {
//         axios.get<StallsData>('http://localhost:8080/api/stall/all')
//             .then(response => {
//                 const data = response.data;
//
//                 // Check if the data contains the expected fields and is an array
//                 const mainStalls = Array.isArray(data.mainStalls) ? data.mainStalls : [];
//                 const subStalls = Array.isArray(data.subStalls) ? data.subStalls : [];
//
//                 // Randomize the order of the stalls
//                 setMainStalls(shuffleArray(mainStalls));
//                 setSubStalls(shuffleArray(subStalls));
//             })
//             .catch(error => console.error('Error fetching stall data:', error));
//     }, []);
//
//     const shuffleArray = (array: Stall[]) => {
//         // Ensure that the input is an array before sorting
//         if (!Array.isArray(array)) {
//             console.error('Input is not an array');
//             return [];
//         }
//         return array.sort(() => Math.random() - 0.5);
//     };
//
//     return (
//         <div className="flex flex-col justify-center items-center bg-white min-h-screen">
//             <h1 className="text-4xl font-bold text-center mb-10 mt-4">Stall Maps</h1>
//
//             <div className="mb-16 w-full">
//                 <h2 className="text-3xl font-semibold text-center mb-6">Floor 1 (Main Stalls)</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {mainStalls.map(stall => (
//                         <div
//                             key={stall.id}
//                             className={`flex flex-col justify-center items-center p-6 border-4 rounded-xl shadow-lg transition-transform transform hover:scale-105
//                              ${stall.occupied ? 'bg-blue-800 border-blue-800' : 'bg-blue-500 border-blue-500'}`}
//                         >
//                             <p className="text-white font-bold text-2xl">{stall.name}</p>
//                             <p className="text-white mt-2">{stall.occupied ? 'Occupied' : 'Available'}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//
//             <div className="w-full">
//                 <h2 className="text-3xl font-semibold text-center mb-6">Floor 2 (Sub Stalls)</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {subStalls.map(subStall => (
//                         <div
//                             key={subStall.id}
//                             className={`flex flex-col justify-center items-center p-6 border-4 rounded-xl shadow-lg transition-transform transform hover:scale-105
//                              ${subStall.occupied ? 'bg-blue-800 border-blue-800' : 'bg-blue-500 border-blue-500'}`}
//                         >
//                             <p className="text-white font-bold text-2xl">{subStall.name}</p>
//                             <p className="text-white mt-2">{subStall.occupied ? 'Occupied' : 'Available'}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
//
// interface Stall {
//     stallId: number;
//     stallType: string;
//     stallNumber: string;
//     sponsorId: string;
// }
//
// const App: React.FC = () => {
//     const [stalls, setStalls] = useState<Stall[]>([]);
//
//     useEffect(() => {
//         axios.get<Stall[]>('http://localhost:8080/api/stall/all')
//             .then(response => {
//                 setStalls(response.data);
//             })
//             .catch(error => console.error('Error fetching stall data:', error));
//     }, []);
//
//     return (
//         <div className="flex flex-col justify-center items-center bg-white min-h-screen">
//             <h1 className="text-4xl font-bold text-center mb-10 mt-4">Stall Details</h1>
//
//             <div className="w-full">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {stalls.map(stall => (
//                         <div
//                             key={stall.stallId}
//                             className="flex flex-col justify-center items-center p-6 border-4 rounded-xl shadow-lg transition-transform transform hover:scale-105 bg-blue-500 border-blue-500"
//                         >
//                             <p className="text-white font-bold text-2xl">{`${stall.stallType} ${stall.stallNumber}`}</p>
//                             <p className="text-white mt-2">{`Sponsor ID: ${stall.sponsorId}`}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
//
// interface Stall {
//     stallId: number;
//     stallType: string;
//     stallNumber: string;
//     sponsorId: string;
// }
//
// const App: React.FC = () => {
//     const [stalls, setStalls] = useState<Stall[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
//
//     useEffect(() => {
//         axios.get<Stall[]>('http://localhost:8080/api/stall/all')
//             .then(response => {
//                 setStalls(response.data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('Error fetching stall data:', error);
//                 setError('Failed to fetch stall data');
//                 setLoading(false);
//             });
//     }, []);
//
//     if (loading) return <div className="text-center py-10 text-2xl">Loading...</div>;
//     if (error) return <div className="text-center py-10 text-red-500 text-xl">{error}</div>;
//
//     return (
//         <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen p-6">
//             <h1 className="text-5xl font-bold text-center mb-12 text-blue-700">Stall Details</h1>
//
//             <div className="w-full max-w-4xl">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {stalls.map(stall => (
//                         <div
//                             key={stall.stallId}
//                             className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
//                         >
//                             <div
//                                 className={`absolute top-0 left-0 right-0 p-4 text-center text-white font-semibold text-xl ${stall.stallType === 'main' ? 'bg-blue-700' : 'bg-green-700'}`}
//                             >
//                                 {stall.stallType.toUpperCase()}
//                             </div>
//                             <div className="p-6 flex flex-col items-center">
//                                 <p className="text-3xl font-bold mb-2">{`${stall.stallType} ${stall.stallNumber}`}</p>
//                                 <p className="text-lg text-gray-600">Sponsor ID: {stall.sponsorId}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
//
// interface Stall {
//     stallId: number;
//     stallType: string;
//     stallNumber: string;
//     sponsorId: string;
// }
//
// const App: React.FC = () => {
//     const [mainStalls, setMainStalls] = useState<Stall[]>([]);
//     const [subStalls, setSubStalls] = useState<Stall[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
//
//     useEffect(() => {
//         axios.get<Stall[]>('http://localhost:8080/api/stall/all')
//             .then(response => {
//                 const { data } = response;
//                 setMainStalls(data.filter(stall => stall.stallType === 'main'));
//                 setSubStalls(data.filter(stall => stall.stallType === 'sub'));
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('Error fetching stall data:', error);
//                 setError('Failed to fetch stall data');
//                 setLoading(false);
//             });
//     }, []);
//
//     if (loading) return <div className="text-center py-10 text-2xl">Loading...</div>;
//     if (error) return <div className="text-center py-10 text-red-500 text-xl">{error}</div>;
//
//     return (
//         <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
//             <h1 className="text-5xl font-bold text-center mb-12 text-black">Stall Details</h1>
//
//             <div className="w-full max-w-6xl">
//                 {/* Main Stalls Section */}
//                 <section className="mb-12">
//                     <h2 className="text-4xl font-semibold text-center mb-8 text-blue-800">Main Stalls</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {mainStalls.map(stall => (
//                             <div
//                                 key={stall.stallId}
//                                 className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
//                             >
//                                 <div
//                                     className="absolute top-0 left-0 right-0 p-4 text-center text-white font-semibold text-xl bg-blue-700"
//                                 >
//                                     Main Stall
//                                 </div>
//                                 <div className="p-6 flex flex-col items-center">
//                                     <p className="text-3xl font-bold mb-2">{`${stall.stallType} ${stall.stallNumber}`}</p>
//                                     <p className="text-lg text-gray-600">Sponsor ID: {stall.sponsorId}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//
//                 {/* Sub Stalls Section */}
//                 <section>
//                     <h2 className="text-4xl font-semibold text-center mb-8 text-blue-400">Sub Stalls</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {subStalls.map(stall => (
//                             <div
//                                 key={stall.stallId}
//                                 className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
//                             >
//                                 <div
//                                     className="absolute top-0 left-0 right-0 p-4 text-center text-white font-semibold text-xl bg-blue-400"
//                                 >
//                                     Sub Stall
//                                 </div>
//                                 <div className="p-6 flex flex-col items-center">
//                                     <p className="text-3xl font-bold mb-2">{`${stall.stallType} ${stall.stallNumber}`}</p>
//                                     <p className="text-lg text-gray-600">Sponsor ID: {stall.sponsorId}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
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

    useEffect(() => {
        // Fetch stalls
        axios.get<Stall[]>('http://localhost:8080/api/stall/all')
            .then(response => {
                const { data } = response;
                setMainStalls(data.filter(stall => stall.stallType === 'main'));
                setSubStalls(data.filter(stall => stall.stallType === 'sub'));
            })
            .catch(error => {
                console.error('Error fetching stall data:', error);
                setError('Failed to fetch stall data');
            });

        // Fetch locations
        axios.get<StallLocation[]>('http://localhost:8080/api/stall-locations/getAll')
            .then(response => {
                setLocations(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching location data:', error);
                setError('Failed to fetch location data');
                setLoading(false);
            });
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

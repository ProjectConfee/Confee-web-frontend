
import React from 'react';

interface Stall {
    id: number;
    name: string;
    occupied: boolean;
}

const stalls: Stall[] = [
    { id: 1, name: 'Stall 1', occupied:false  },
    { id: 2, name: 'Stall 2', occupied: false },
    { id: 3, name: 'Stall 3', occupied: false },
    { id: 4, name: 'Stall 4', occupied: false },
    { id: 5, name: 'Stall 5', occupied: false  },
    { id: 6, name: 'Stall 6', occupied: false },
];

const subStalls: Stall[] = [
    { id: 1, name: 'Sub Stall 1', occupied: true },
    { id: 2, name: 'Sub Stall 2', occupied: false },
    { id: 3, name: 'Sub Stall 3', occupied: false  },
    { id: 4, name: 'Sub Stall 4', occupied: false },
    { id: 5, name: 'Sub Stall 5', occupied: false },
    { id: 6, name: 'Sub Stall 6', occupied: false },
];

const App: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center  bg-white  ">
            <h1 className="text-4xl font-bold text-center mb-10 mt-4">Stall Maps</h1>

            <div className="mb-16 w-full">
                <h2 className="text-3xl font-semibold text-center mb-6">Floor 1(Open Area)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stalls.map(stall => (
                        <div
                            key={stall.id}
                            className={`flex flex-col justify-center items-center p-6 border-4 rounded-xl shadow-lg transition-transform transform hover:scale-105
                             ${stall.occupied ? 'bg-blue-800 border-bg-blue-800' : 'bg-blue-500 border-bg-blue-500'}`}
                        >
                            <p className="text-white font-bold text-2xl">{stall.name}</p>
                            <p className="text-white mt-2">{stall.occupied ? 'Your Stall' : 'Other stalls'}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full">
                <h2 className="text-3xl font-semibold text-center mb-6">Floor 2( W001 )</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subStalls.map(subStall => (
                        <div
                            key={subStall.id}
                            className={`flex flex-col justify-center items-center p-6 border-4 rounded-xl shadow-lg transition-transform transform hover:scale-105
                             ${subStall.occupied ? 'bg-blue-800 border-blue-800' : 'bg-blue-500 border-blue-500'}`}
                        >
                            <p className="text-white font-bold text-2xl">{subStall.name}</p>
                            <p className="text-white mt-2">{subStall.occupied ? 'Your Stall' : 'Other Stalls'}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;





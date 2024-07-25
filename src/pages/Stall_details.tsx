

// // import  { useState } from 'react';
//
//
//
//
//
//
// interface Stall {
//     id: number;
//     name: string;
//     occupied: boolean;
// }
//
// const stalls: Stall[] = [
//     { id: 1, name: 'Stall 1', occupied: true },
//     { id: 2, name: 'Stall 2', occupied: false },
//     { id: 3, name: 'Stall 3', occupied: true },
//     { id: 4, name: 'Stall 4', occupied: false },
//     { id: 5, name: 'Stall 5', occupied: true },
//     { id: 6, name: 'Stall 6', occupied: false },
// ];
//
// const sub_stall: Stall[] = [
//     { id: 1, name: 'Stall 1', occupied: true },
//     { id: 2, name: 'Stall 2', occupied: false },
//     { id: 3, name: 'Stall 3', occupied: true },
//     { id: 4, name: 'Stall 4', occupied: false },
//     { id: 5, name: 'Stall 5', occupied: true },
//     { id: 6, name: 'Stall 6', occupied: false },
// ];
//
//
// const App = () => {
//
//
//   return (
//     <div className="flex flex-col justify-center items-center h-full mt-40 ml-50">
//
//
//         <div className="container mx-auto mt-10 items-center h-full ">
//         <h1 className="text-3xl font-bold text-center mb-10">Stall Map</h1>
//         <div className="grid grid-cols-3 gap-4">
//
//             <div className="container mx-auto mt-10 p-4">
//
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
//                     {stalls.map((stall) => (
//                         <div
//                             key={stall.id}
//                             className={`p-6 justify-center items-center border-2 rounded-lg shadow-lg transform transition-transform hover:scale-105 ${
//                                 stall.occupied ? 'bg-red-500 border-red-700' : 'bg-green-500 border-green-700'
//                             }`}
//                         >
//                             <p className="text-white font-bold text-xl">{stall.name}</p>
//                             <p className="text-white mt-2">{stall.occupied ? 'Occupied' : 'Available'}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <h1 className="text-3xl font-bold text-center mb-10"> Other Stall Map</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
//                     {stalls.map((sub_stall) => (
//                         <div
//                             key={sub_stall.id}
//                             className={`p-6 justify-center items-center border-2 rounded-lg shadow-lg transform transition-transform hover:scale-105 ${
//                                 sub_stall.occupied ? 'bg-red-500 border-red-700' : 'bg-green-500 border-green-700'
//                             }`}
//                         >
//                             <p className="text-white font-bold text-xl">{sub_stall.name}</p>
//                             <p className="text-white mt-2">{sub_stall.occupied ? 'Occupied' : 'Available'}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//
//         </div>
//         </div>
//     </div>
//   );
// };
//
//
// export default App;
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
        <div className="flex flex-col justify-center items-center min-h-screen bg-white p-4 ">
            <h1 className="text-4xl font-bold text-center mb-10">Stall Maps</h1>

            <div className="mb-16 w-full">
                <h2 className="text-3xl font-semibold text-center mb-6">Floor 1(Open Area)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stalls.map(stall => (
                        <div
                            key={stall.id}
                            className={`flex flex-col justify-center items-center p-6 border-4 rounded-xl shadow-lg transition-transform transform hover:scale-105
                             ${stall.occupied ? 'bg-slate-700 border-slate-700 ' : 'bg-slate-500 border-slate-500'}`}
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
                             ${subStall.occupied ? 'bg-slate-700 border-slate-700 ' : 'bg-slate-500 border-slate-500'}`}
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





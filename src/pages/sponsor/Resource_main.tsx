// //
// //
// // const App = () => {
// //     const linkedButtons = [
// //         { id: 1, label: 'Images', link: './resource-upload', image: '../src/assets/upload_other.jpg' },
// //         { id: 2, label: 'Videos', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
// //         { id: 3, label: 'Documents', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
// //
// //         { id: 4, label: 'Links', link: './resource-upload', image: '../src/assets/uploded.jpg' },
// //         { id: 5, label: 'Other', link: './resource-other', image: '../src/assets/upload_link.jpg' },
// //
// //     ];
// //
// //     return (
// //         <div className="flex flex-col justify-center items-center mt-10 bg-white">
// //             <div className="text-center mt-0 ml-30">
// //                 <h2 className="text-3xl font-semibold mt-10">ADD YOUR RESOURCES HERE</h2>
// //             </div>
// //             <div className="flex mt-10 w-11/12 max-w-5xl ml-40  ">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-4">
// //                     {linkedButtons.slice(0, 4).map((button) => (
// //                         <div
// //                             key={button.id}
// //                             className="flex justify-center items-center  rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
// //                             style={{
// //                                 width: '300px',
// //                                 height: '200px',
// //                                 backgroundImage: `url(${button.image})`,
// //                                 backgroundSize: 'cover',
// //                                 backgroundPosition: 'center',
// //                             }}
// //                         >
// //                             <a
// //                                 href={button.link}
// //                                 target="_self"
// //                                 rel="noopener noreferrer"
// //                                 className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold text-lg tracking-wide hover:from-blue-500 hover:to-cyan-500"
// //                                 style={{
// //                                     background: 'rgba(0, 0, 0, 0.5)',
// //                                     padding: '1rem 2rem',
// //                                     borderRadius: '0.5rem',
// //                                 }}
// //                             >
// //                                 {button.label}
// //                             </a>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //             <div className="flex justify-center items-center bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl mt-6 mb-10"
// //                  style={{
// //                      width: '300px',
// //                      height: '200px',
// //                      backgroundImage: `url(${linkedButtons[4].image})`,
// //                      backgroundSize: 'cover',
// //                      backgroundPosition: 'center',
// //                  }}
// //             >
// //                 <a
// //                     href={linkedButtons[4].link}
// //                     target="_self"
// //                     rel="noopener noreferrer"
// //                     className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold text-lg tracking-wide hover:from-blue-500 hover:to-cyan-500 "
// //                     style={{
// //                         background: 'rgba(0, 0, 0, 0.5)',
// //                         padding: '1rem 2rem',
// //                         borderRadius: '0.5rem',
// //                     }}
// //                 >
// //                     {linkedButtons[4].label}
// //                 </a>
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default App;
//
//
// const App = () => {
//     const linkedButtons = [
//         { id: 1, label: 'Images', link: './resource-upload', image: '../src/assets/upload_other.jpg' },
//         { id: 2, label: 'Videos', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
//         { id: 3, label: 'Documents', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
//         { id: 4, label: 'Links', link: './resource-upload', image: '../src/assets/uploded.jpg' },
//         { id: 5, label: 'Other', link: './resource-other', image: '../src/assets/upload_link.jpg' },
//     ];
//
//     return (
//         <div className="flex flex-col items-center mt-10 bg-white">
//             <div className="text-center mt-8 mb-10">
//                 <h2 className="text-4xl font-bold text-gray-800">Add Your Resources Here</h2>
//                 <p className="text-lg text-gray-600 mt-2">Choose from the options below to upload or manage your resources.</p>
//             </div>
//             <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl px-4">
//                 {linkedButtons.slice(0, 4).map((button) => (
//                     <div
//                         key={button.id}
//                         className="flex justify-center items-center rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                         style={{
//                             width: '320px',
//                             height: '220px',
//                             backgroundImage: `url(${button.image})`,
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     >
//                         <a
//                             href={button.link}
//                             target="_self"
//                             rel="noopener noreferrer"
//                             className="bg-black bg-opacity-60 text-white py-4 px-6 rounded-lg font-semibold text-lg tracking-wide hover:bg-opacity-80"
//                         >
//                             {button.label}
//                         </a>
//                     </div>
//                 ))}
//             </div>
//             <div className="flex justify-center mt-10">
//                 <div
//                     className="flex justify-center items-center rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                     style={{
//                         width: '320px',
//                         height: '220px',
//                         backgroundImage: `url(${linkedButtons[4].image})`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                     }}
//                 >
//                     <a
//                         href={linkedButtons[4].link}
//                         target="_self"
//                         rel="noopener noreferrer"
//                         className="bg-black bg-opacity-60 text-white py-4 px-6 rounded-lg font-semibold text-lg tracking-wide hover:bg-opacity-80"
//                     >
//                         {linkedButtons[4].label}
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;
//
//
//
// const App = () => {
//     const linkedButtons = [
//         { id: 1, label: 'Images', link: './resource-upload', image: '../src/assets/upload_other.jpg' },
//         { id: 2, label: 'Videos', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
//         { id: 3, label: 'Documents', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
//         { id: 4, label: 'Links', link: './resource-upload', image: '../src/assets/uploded.jpg' },
//         { id: 5, label: 'Other', link: './resource-other', image: '../src/assets/upload_link.jpg' },
//     ];
//
//     return (
//         <div className="flex flex-col items-center mt-10 bg-gray-100 min-h-screen">
//             <div className="text-center mt-8 mb-10 px-4">
//                 <h2 className="text-5xl font-extrabold text-gray-900">Add Your Resources Here</h2>
//                 <p className="text-xl text-gray-700 mt-4">Choose from the options below to upload or manage your resources.</p>
//             </div>
//             <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl px-6">
//                 {linkedButtons.slice(0, 4).map((button) => (
//                     <div
//                         key={button.id}
//                         className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                         style={{
//                             width: '320px',
//                             height: '220px',
//                             backgroundImage: `url(${button.image})`,
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     >
//                         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
//                         <a
//                             href={button.link}
//                             target="_self"
//                             rel="noopener noreferrer"
//                             className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold"
//                         >
//                             {button.label}
//                         </a>
//                     </div>
//                 ))}
//             </div>
//             <div className="flex justify-center mt-10 mb-12">
//                 <div
//                     className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                     style={{
//                         width: '320px',
//                         height: '220px',
//                         backgroundImage: `url(${linkedButtons[4].image})`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                     }}
//                 >
//                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
//                     <a
//                         href={linkedButtons[4].link}
//                         target="_self"
//                         rel="noopener noreferrer"
//                         className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold"
//                     >
//                         {linkedButtons[4].label}
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;




//
//
// const App = () => {
//     const linkedButtons = [
//         { id: 1, label: 'Images', link: './resource-upload', image: '../src/assets/upload_other.jpg' },
//         { id: 2, label: 'Videos', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
//         { id: 3, label: 'Documents', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
//         { id: 4, label: 'Links', link: './resource-upload', image: '../src/assets/uploded.jpg' },
//         { id: 5, label: 'Other', link: './resource-other', image: '../src/assets/upload_link.jpg' },
//     ];
//
//     return (
//         <div className="flex flex-col items-center mt-10 bg-white">
//             <div className="text-center mt-8 mb-10">
//                 <h2 className="text-4xl font-bold text-gray-800">Add Your Resources Here</h2>
//                 <p className="text-lg text-gray-600 mt-2">Choose from the options below to upload or manage your resources.</p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
//                 {/* First Row */}
//                 {linkedButtons.slice(0, 3).map((button) => (
//                     <div
//                         key={button.id}
//                         className="flex justify-center items-center rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                         style={{
//                             width: '320px',
//                             height: '220px',
//                             backgroundImage: `url(${button.image})`,
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     >
//                         <a
//                             href={button.link}
//                             target="_self"
//                             rel="noopener noreferrer"
//                             className="bg-black bg-opacity-60 text-white py-4 px-6 rounded-lg font-semibold text-lg tracking-wide hover:bg-opacity-80"
//                         >
//                             {button.label}
//                         </a>
//                     </div>
//                 ))}
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl px-4 mt-6">
//                 {/* Second Row */}
//                 {linkedButtons.slice(3, 5).map((button) => (
//                     <div
//                         key={button.id}
//                         className="flex justify-center items-center rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                         style={{
//                             width: '320px',
//                             height: '220px',
//                             backgroundImage: `url(${button.image})`,
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     >
//                         <a
//                             href={button.link}
//                             target="_self"
//                             rel="noopener noreferrer"
//                             className="bg-black bg-opacity-60 text-white py-4 px-6 rounded-lg font-semibold text-lg tracking-wide hover:bg-opacity-80"
//                         >
//                             {button.label}
//                         </a>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default App;

// const App = () => {
//     const linkedButtons = [
//         { id: 1, label: 'Images', link: './resource-upload', image: '../src/assets/upload_other.jpg' },
//         { id: 2, label: 'Videos', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
//         { id: 3, label: 'Documents', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
//         { id: 4, label: 'Links', link: './resource-upload', image: '../src/assets/uploded.jpg' },
//         { id: 5, label: 'Other', link: './resource-other', image: '../src/assets/upload_link.jpg' },
//     ];
//
//     return (
//         <div className="flex flex-col items-center mt-10 bg-gray-100 min-h-screen">
//             <div className="text-center mt-8 mb-10 px-4">
//                 <h2 className="text-5xl font-extrabold text-gray-900">Add Your Resources Here</h2>
//                 <p className="text-xl text-gray-700 mt-4">Choose from the options below to upload or manage your resources.</p>
//             </div>
//             <div className="w-full max-w-6xl px-6">
//                 {/* First Row */}
//                 <div className="flex flex-wrap justify-between gap-6 mb-10">
//                     {linkedButtons.slice(0, 3).map((button) => (
//                         <div
//                             key={button.id}
//                             className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                             style={{
//                                 width: '320px',
//                                 height: '220px',
//                                 backgroundImage: `url(${button.image})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                             }}
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
//                             <a
//                                 href={button.link}
//                                 target="_self"
//                                 rel="noopener noreferrer"
//                                 className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold"
//                             >
//                                 {button.label}
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//                 {/* Second Row */}
//                 <div className="flex justify-between gap-6">
//                     {linkedButtons.slice(3, 5).map((button) => (
//                         <div
//                             key={button.id}
//                             className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                             style={{
//                                 width: '320px',
//                                 height: '220px',
//                                 backgroundImage: `url(${button.image})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                             }}
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
//                             <a
//                                 href={button.link}
//                                 target="_self"
//                                 rel="noopener noreferrer"
//                                 className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold"
//                             >
//                                 {button.label}
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;
// const App = () => {
//     const linkedButtons = [
//         { id: 1, label: 'Images', link: './resource-upload', image: '../src/assets/upload_other.jpg' },
//         { id: 2, label: 'Videos', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
//         { id: 3, label: 'Documents', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
//         { id: 4, label: 'Links', link: './resource-upload', image: '../src/assets/uploded.jpg' },
//         { id: 5, label: 'Other', link: './resource-other', image: '../src/assets/upload_link.jpg' },
//     ];
//
//     return (
//         <div className="flex flex-col items-center mt-10 bg-gray-100 min-h-screen">
//             <div className="text-center mt-8 mb-10 px-4">
//                 <h2 className="text-5xl font-extrabold text-gray-900">Add Your Resources Here</h2>
//                 <p className="text-xl text-gray-700 mt-4">Choose from the options below to upload or manage your resources.</p>
//             </div>
//             <div className="w-full max-w-6xl px-6">
//                 {/* First Row */}
//                 <div className="flex flex-wrap justify-between gap-6 mb-10">
//                     {linkedButtons.slice(0, 3).map((button) => (
//                         <div
//                             key={button.id}
//                             className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                             style={{
//                                 width: '320px',
//                                 height: '220px',
//                                 backgroundImage: `url(${button.image})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                             }}
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
//                             <a
//                                 href={button.link}
//                                 target="_self"
//                                 rel="noopener noreferrer"
//                                 className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold"
//                             >
//                                 {button.label}
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//                 {/* Second Row */}
//                 <div className="flex justify-center gap-6">
//                     {linkedButtons.slice(3, 5).map((button) => (
//                         <div
//                             key={button.id}
//                             className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                             style={{
//                                 width: '320px',
//                                 height: '220px',
//                                 backgroundImage: `url(${button.image})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                             }}
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 "></div>
//                             <a
//                                 href={button.link}
//                                 target="_self"
//                                 rel="noopener noreferrer"
//                                 className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold p-30"
//                             >
//                                 {button.label}
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;
const App = () => {
    const linkedButtons = [
        { id: 1, label: 'Images', link: './resource-upload', image: '../src/assets/upload_other.jpg' },
        { id: 2, label: 'Videos', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
        { id: 3, label: 'Documents', link: './resource-upload', image: '../src/assets/upload_link.jpg' },
        { id: 4, label: 'Links', link: './resource-upload', image: '../src/assets/uploded.jpg' },
        { id: 5, label: 'Other', link: './resource-other', image: '../src/assets/upload_linksss.jpg' },
    ];

    return (
        <div className="flex flex-col items-center mt-10 bg-gray-100 min-h-screen">
            <div className="text-center mt-8 mb-10 px-4">
                <h2 className="text-5xl font-extrabold text-gray-900">Add Your Resources Here</h2>
                <p className="text-xl text-gray-700 mt-4">Choose from the options below to upload or manage your resources.</p>
            </div>
            <div className="w-full max-w-6xl px-6">
                {/* First Row */}
                <div className="flex flex-wrap justify-between gap-6 mb-10">
                    {linkedButtons.slice(0, 3).map((button) => (
                        <div
                            key={button.id}
                            className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
                            style={{
                                width: '320px',
                                height: '220px',
                                backgroundImage: `url(${button.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                            <a
                                href={button.link}
                                target="_self"
                                rel="noopener noreferrer"
                                className="absolute inset-0 flex items-center justify-center text-black text-2xl  font-semibold"
                            >
                                <div className="bg-slate-50 p-2 rounded-lg shadow-lg">
                                    {button.label}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                {/* Second Row */}
                <div className="flex justify-center gap-16">
                    {linkedButtons.slice(3, 5).map((button) => (
                        <div
                            key={button.id}
                            className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
                            style={{
                                width: '320px',
                                height: '220px',
                                backgroundImage: `url(${button.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                            <a
                                href={button.link}
                                target="_self"
                                rel="noopener noreferrer"
                                className="absolute inset-0 flex items-center justify-center text-black text-2xl font-semibold"
                            >
                                <div className="bg-slate-50 p-2 rounded-lg shadow-md">
                                    {button.label}
                                </div>
                            </a>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default App;

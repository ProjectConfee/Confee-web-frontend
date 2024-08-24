//
//
// const App = () => {
//     const linkedButtons = [
//         { id: 1, label: 'Images', link: './resource-upload', image: '../src/assets/upload_other.jpg' },
//         { id: 2, label: 'Videos', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
//         { id: 3, label: 'Documents', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
//
//         { id: 4, label: 'Links', link: './resource-upload', image: '../src/assets/uploded.jpg' },
//         { id: 5, label: 'Other', link: './resource-other', image: '../src/assets/upload_link.jpg' },
//
//     ];
//
//     return (
//         <div className="flex flex-col justify-center items-center mt-10 bg-white">
//             <div className="text-center mt-0 ml-30">
//                 <h2 className="text-3xl font-semibold mt-10">ADD YOUR RESOURCES HERE</h2>
//             </div>
//             <div className="flex mt-10 w-11/12 max-w-5xl ml-40  ">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-4">
//                     {linkedButtons.slice(0, 4).map((button) => (
//                         <div
//                             key={button.id}
//                             className="flex justify-center items-center  rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                             style={{
//                                 width: '300px',
//                                 height: '200px',
//                                 backgroundImage: `url(${button.image})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                             }}
//                         >
//                             <a
//                                 href={button.link}
//                                 target="_self"
//                                 rel="noopener noreferrer"
//                                 className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold text-lg tracking-wide hover:from-blue-500 hover:to-cyan-500"
//                                 style={{
//                                     background: 'rgba(0, 0, 0, 0.5)',
//                                     padding: '1rem 2rem',
//                                     borderRadius: '0.5rem',
//                                 }}
//                             >
//                                 {button.label}
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="flex justify-center items-center bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl mt-6 mb-10"
//                  style={{
//                      width: '300px',
//                      height: '200px',
//                      backgroundImage: `url(${linkedButtons[4].image})`,
//                      backgroundSize: 'cover',
//                      backgroundPosition: 'center',
//                  }}
//             >
//                 <a
//                     href={linkedButtons[4].link}
//                     target="_self"
//                     rel="noopener noreferrer"
//                     className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold text-lg tracking-wide hover:from-blue-500 hover:to-cyan-500 "
//                     style={{
//                         background: 'rgba(0, 0, 0, 0.5)',
//                         padding: '1rem 2rem',
//                         borderRadius: '0.5rem',
//                     }}
//                 >
//                     {linkedButtons[4].label}
//                 </a>
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
        { id: 3, label: 'Documents', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
        { id: 4, label: 'Links', link: './resource-upload', image: '../src/assets/uploded.jpg' },
        { id: 5, label: 'Other', link: './resource-other', image: '../src/assets/upload_link.jpg' },
    ];

    return (
        <div className="flex flex-col items-center mt-10 bg-white">
            <div className="text-center mt-8 mb-10">
                <h2 className="text-4xl font-bold text-gray-800">Add Your Resources Here</h2>
                <p className="text-lg text-gray-600 mt-2">Choose from the options below to upload or manage your resources.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl px-4">
                {linkedButtons.slice(0, 4).map((button) => (
                    <div
                        key={button.id}
                        className="flex justify-center items-center rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
                        style={{
                            width: '320px',
                            height: '220px',
                            backgroundImage: `url(${button.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <a
                            href={button.link}
                            target="_self"
                            rel="noopener noreferrer"
                            className="bg-black bg-opacity-60 text-white py-4 px-6 rounded-lg font-semibold text-lg tracking-wide hover:bg-opacity-80"
                        >
                            {button.label}
                        </a>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <div
                    className="flex justify-center items-center rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
                    style={{
                        width: '320px',
                        height: '220px',
                        backgroundImage: `url(${linkedButtons[4].image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <a
                        href={linkedButtons[4].link}
                        target="_self"
                        rel="noopener noreferrer"
                        className="bg-black bg-opacity-60 text-white py-4 px-6 rounded-lg font-semibold text-lg tracking-wide hover:bg-opacity-80"
                    >
                        {linkedButtons[4].label}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default App;








 



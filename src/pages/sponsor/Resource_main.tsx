//
//
//
// const App = () => {
//     const linkedButtons = [
//         { id: 1, label: 'Media', link: './resource-upload', image: '../src/assets/resource.jpeg' },
//         { id: 2, label: 'Documents', link: './resource-upload', image: '../src/assets/resource.jpeg' },
//         { id: 3, label: 'Links', link: './resource-upload', image: '../src/assets/resource.jpeg' },
//         { id: 4, label: 'Other', link: './resource-upload', image: '../src/assets/resource.jpeg' },
//         { id: 5, label: 'Uploaded', link: './resource-done', image: '../src/assets/resource.jpeg' },
//     ];
//
//     return (
//         <div className="flex flex-col justify-center items-center min-h-screen bg-white">
//             <div className="text-center mt-5">
//                 {/*<h1 className="text-4xl font-bold text-sky-700">ICTer Conference 2024</h1>*/}
//                 <h2 className="text-3xl font-semibold">ADD YOUR RESOURCES HERE</h2>
//             </div>
//             <div className="flex mt-20 w-full justify-center">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 max-w-5xl p-4">
//                     {linkedButtons.slice(0, 3).map((button) => (
//                         <div
//                             key={button.id}
//                             className="flex justify-center items-center bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                             style={{
//                                 width: '200px',
//                                 height: '200px',
//                                 backgroundImage: `url(${button.image})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                             }}
//                         >
//                             <a
//                                 href={button.link}
//                                 target="_blank"
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
//             <div className="flex mt-6 w-full justify-center">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-11/12 max-w-5xl p-5 justify-items-center">
//                     {linkedButtons.slice(3).map((button) => (
//                         <div
//                             key={button.id}
//                             className="flex justify-center items-center bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                             style={{
//                                 width: '200px',
//                                 height: '200px',
//                                 backgroundImage: `url(${button.image})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                             }}
//                         >
//                             <a
//                                 href={button.link}
//                                 target="_blank"
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
//         </div>
//     );
// };
//
// export default App;

//
// const App = () => {
//     const linkedButtons = [
//         { id: 1, label: 'Images/Videos', link: './resource-upload', image: '../src/assets/resource.jpeg' },
//         { id: 2, label: 'Documents', link: './resource-upload', image: '../src/assets/resource.jpeg' },
//         { id: 3, label: 'Links', link: './resource-upload', image: '../src/assets/resource.jpeg' },
//         { id: 4, label: 'Other', link: './resource-upload', image: '../src/assets/resource.jpeg' },
//         { id: 5, label: 'Uploaded', link: './resource-done', image: '../src/assets/resource.jpeg' },
//     ];
//
//     return (
//         <div className="flex flex-col justify-center items-center min-h-screen bg-white">
//             <div className="text-center mt-5">
//                 <h2 className="text-3xl font-semibold">ADD YOUR RESOURCES HERE</h2>
//             </div>
//             <div className="flex mt-20 w-full justify-center">
//                 <div className="grid grid-cols-2 gap-6 w-11/12 max-w-6xl p-4 items-center justify-center">
//                     {linkedButtons.slice(0, 2).map((button) => (
//                         <div
//                             key={button.id}
//                             className="flex justify-center items-center bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                             style={{
//                                 width: '200px',
//                                 height: '200px',
//                                 backgroundImage: `url(${button.image})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                             }}
//                         >
//                             <a
//                                 href={button.link}
//                                 target="_blank"
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
//                     {linkedButtons.slice(2, 4).map((button) => (
//                         <div
//                             key={button.id}
//                             className="flex justify-center items-center bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                             style={{
//                                 width: '200px',
//                                 height: '200px',
//                                 backgroundImage: `url(${button.image})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                             }}
//                         >
//                             <a
//                                 href={button.link}
//                                 target="_blank"
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
//                     <div
//                         key={linkedButtons[4].id}
//                         className="flex justify-center items-center col-span-2 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                         style={{
//                             width: '100%',
//                             height: '100px',
//                             backgroundImage: `url(${linkedButtons[4].image})`,
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     >
//                         <a
//                             href={linkedButtons[4].link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold text-lg tracking-wide hover:from-blue-500 hover:to-cyan-500"
//                             style={{
//                                 background: 'rgba(0, 0, 0, 0.5)',
//                                 padding: '1rem 2rem',
//                                 borderRadius: '0.5rem',
//                             }}
//                         >
//                             {linkedButtons[4].label}
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;
// import React from 'react';
//
// const App = () => {
//     const linkedButtons = [
//         { id: 1, label: 'Images/Videos', link: './resource-upload', image: '../src/assets/resource.jpeg' },
//         { id: 2, label: 'Documents', link: './resource-upload', image: '../src/assets/resource.jpeg' },
//         { id: 3, label: 'Links', link: './resource-upload', image: '../src/assets/resource.jpeg' },
//         { id: 4, label: 'Other', link: './resource-upload', image: '../src/assets/resource.jpeg' },
//         { id: 5, label: 'Uploaded', link: './resource-done', image: '../src/assets/resource.jpeg' },
//     ];
//
//     return (
//         <div className="flex flex-col justify-center items-center min-h-screen bg-white">
//             <div className="text-center mt-5">
//                 <h2 className="text-3xl font-semibold">ADD YOUR RESOURCES HERE</h2>
//             </div>
//             <div className="flex mt-20 w-full justify-center">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 max-w-5xl p-4 items-center justify-center">
//                     {linkedButtons.map((button, index) => (
//                         <div
//                             key={button.id}
//                             className="flex justify-center items-center bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                             style={{
//                                 width: '300px',
//                                 height: index === 4 ? '150px' : '150px',
//                                 backgroundImage: `url(${button.image})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                             }}
//                         >
//                             <a
//                                 href={button.link}
//                                 target="_blank"
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
//         </div>
//     );
// };
//
// export default App;


// const App = () => {
//     const linkedButtons = [
//         { id: 1, label: 'Images/Videos', link: './resource-upload', image: '../src/assets/resource.jpeg' },
//         { id: 2, label: 'Documents', link: './resource-upload', image: '../src/assets/resource.jpeg' },
//         { id: 3, label: 'Links', link: './resource-upload', image: '../src/assets/resource.jpeg' },
//         { id: 4, label: 'Other', link: './resource-upload', image: '../src/assets/resource.jpeg' },
//         { id: 5, label: 'Uploaded', link: './resource-done', image: '../src/assets/resource.jpeg' },
//     ];
//
//     return (
//         <div className="flex flex-col justify-center items-center min-h-screen bg-white">
//             <div className="text-center mt-5">
//                 <h2 className="text-3xl font-semibold">ADD YOUR RESOURCES HERE</h2>
//             </div>
//             <div className="flex flex-col mt-20 w-full justify-center items-center">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 max-w-5xl p-4">
//                     {linkedButtons.slice(0, 4).map((button) => (
//                         <div
//                             key={button.id}
//                             className="flex justify-center items-center bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
//                             style={{
//                                 width: '300px',
//                                 height: '150px',
//                                 backgroundImage: `url(${button.image})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                             }}
//                         >
//                             <a
//                                 href={button.link}
//                                 target="_blank"
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
//                 <div
//                     className="flex justify-center items-center bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl mt-6"
//                     style={{
//                         width: '620px',
//                         height: '150px',
//                         backgroundImage: `url(${linkedButtons[4].image})`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                     }}
//                 >
//                     <a
//                         href={linkedButtons[4].link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold text-lg tracking-wide hover:from-blue-500 hover:to-cyan-500"
//                         style={{
//                             background: 'rgba(0, 0, 0, 0.5)',
//                             padding: '1rem 2rem',
//                             borderRadius: '0.5rem',
//                         }}
//                     >
//                         {linkedButtons[4].label}
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;







const App = () => {
    const linkedButtons = [
        { id: 1, label: 'Media', link: './resource-upload', image: '../src/assets/upload_other.jpg' },
        { id: 2, label: 'Documents', link: './resource-upload', image: '../src/assets/upload_linksss.jpg' },
        { id: 3, label: 'Links', link: './resource-upload', image: '../src/assets/uploded.jpg' },
        { id: 4, label: 'Other', link: './resource-upload', image: '../src/assets/upload_link.jpg' },
        { id: 5, label: 'Uploaded', link: './resource-done', image: '../src/assets/upload_docs.jpg' },
    ];

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-white">
            <div className="text-center mt-0 ml-30">
                <h2 className="text-3xl font-semibold">ADD YOUR RESOURCES HERE</h2>
            </div>
            <div className="flex mt-10 w-11/12 max-w-5xl ml-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-4">
                    {linkedButtons.slice(0, 4).map((button) => (
                        <div
                            key={button.id}
                            className="flex justify-center items-center bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
                            style={{
                                width: '300px',
                                height: '200px',
                                backgroundImage: `url(${button.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <a
                                href={button.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold text-lg tracking-wide hover:from-blue-500 hover:to-cyan-500"
                                style={{
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    padding: '1rem 2rem',
                                    borderRadius: '0.5rem',
                                }}
                            >
                                {button.label}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl mt-6"
                 style={{
                     width: '300px',
                     height: '200px',
                     backgroundImage: `url(${linkedButtons[4].image})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                 }}
            >
                <a
                    href={linkedButtons[4].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold text-lg tracking-wide hover:from-blue-500 hover:to-cyan-500"
                    style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        padding: '1rem 2rem',
                        borderRadius: '0.5rem',
                    }}
                >
                    {linkedButtons[4].label}
                </a>
            </div>
        </div>
    );
};

export default App;










 



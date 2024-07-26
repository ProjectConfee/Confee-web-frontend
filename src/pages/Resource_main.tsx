

// export default register



// const App = () => {

 
//   const linkedButtons = [
//     { id: 1, label: 'Images/Videos', link: './Resource_upload' },
//     { id: 2, label: 'Documents', link: 'https://link2.com' },
//     { id: 3, label: 'Links ', link: 'https://link3.com' },
//     { id: 4, label: 'Other ', link: 'https://link4.com' },
//   ];

//   return (
//     <div className="flex">
    
//         <div className="min-h-screen flex items-start justify-center mt-60">
//       <div className="grid grid-cols-2 gap-4 w-full max-w-4xl p-4">
//         {linkedButtons.map((button) => (
//           <div key={button.id} className="flex justify-center items-center bg-slate-50 p-6 rounded-md shadow-md">
//             <a
//               href={button.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-cyan-800 text-white py-2 px-4 rounded hover:bg-blue-600"
//             >
//               {button.label}
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>



//       </div>
//     </div>
//   );
// };
// export default App;







const App = () => {
  

  
  const linkedButtons = [
        { id: 1, label: 'Images/Videos', link: './resource-upload' },
        { id: 2, label: 'Documents', link: './resource-upload' },
        { id: 3, label: 'Links ', link: './resource-upload' },
        { id: 4, label: 'Other ', link: './resource-upload'},
      ];

  return (
    
    <div className="flex flex-col justify-center items-center h-full mt-20 ml-50">
       <h1 className="text-2xl font-semibold text-center text-sky-700">ICTer Conference 2024</h1>
       <h2 className="text-2xl font-semibold text-center">Welcome Sponsors!</h2>
        
         <div className="flex mt-20">
          
         <div className="min-h-screen flex items-start justify-center mt-50">
          <div className="grid grid-cols-2 gap-4 w-full max-w-4xl p-4">
            {linkedButtons.map((button) => (
              <div key={button.id} className="flex justify-center items-center bg-slate-50 p-6 rounded-md shadow-md">
                <a
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-800 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  {button.label}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>

      </div>
    
  );
};

export default App;






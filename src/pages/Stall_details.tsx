

// import  { useState } from 'react';



const App = () => {
  // const [open, setOpen] = useState(true);

//   const downloadQRCode = () => {
//     const canvas = document.getElementById('myqrcode')?.querySelector<HTMLCanvasElement>('canvas');
//     if (canvas) {
//       const url = canvas.toDataURL();
//       const a = document.createElement('a');
//       a.download = 'QRCode.png';
//       a.href = url;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//     }
//   };

  return (
    <div className="flex flex-col justify-center items-center h-full mt-20 ml-50">
      <h1 className="text-2xl font-semibold text-center text-sky-700">ICTer Conference 2024</h1>
      <h2 className="text-2xl font-semibold text-center">Welcome Sponsors!</h2>
       <p> Stall map here with the location chart</p>

      </div>
    
  );
};

export default App;

  //
  //
  // import { QRCode, Input } from 'antd';
  // import React from 'react';
  // import { Button } from '@nextui-org/react';
  //
  // const App: React.FC = () => {
  //   const [text, setText] = React.useState('https://ant.design/');
  //
  //   const downloadQRCode = () => {
  //     const qrCanvas = document.getElementById('myqrcode')?.querySelector<HTMLCanvasElement>('canvas');
  //     if (qrCanvas) {
  //       const qrSize = 200; // Set QR code size
  //       const padding = 20; // Padding around QR code
  //       const titleHeight = 50; // Height for the title area
  //       const totalWidth = qrSize + padding * 2;
  //       const totalHeight = qrSize + padding * 2 + titleHeight;
  //
  //       // Create a new canvas element
  //       const canvas = document.createElement('canvas');
  //       const context = canvas.getContext('2d');
  //       if (context) {
  //         // Set the new canvas dimensions
  //         canvas.width = totalWidth;
  //         canvas.height = totalHeight;
  //
  //         // Fill the background with dark blue and create rounded corners
  //         context.fillStyle = '#3572EF'; // DarkBlue color
  //         context.beginPath();
  //         context.moveTo(20, 0);
  //         context.lineTo(totalWidth - 20, 0);
  //         context.quadraticCurveTo(totalWidth, 0, totalWidth, 20);
  //         context.lineTo(totalWidth, totalHeight - 20);
  //         context.quadraticCurveTo(totalWidth, totalHeight, totalWidth - 20, totalHeight);
  //         context.lineTo(20, totalHeight);
  //         context.quadraticCurveTo(0, totalHeight, 0, totalHeight - 20);
  //         context.lineTo(0, 20);
  //         context.quadraticCurveTo(0, 0, 20, 0);
  //         context.closePath();
  //         context.fill();
  //
  //         // Add the title text
  //         context.fillStyle = '#fff';
  //         context.font = '20px Arial';
  //         context.textAlign = 'center';
  //         context.fillText('ICTer Conference ', totalWidth / 2, 35);
  //
  //         // Draw the QR code onto the new canvas
  //         context.drawImage(qrCanvas, padding, titleHeight, qrSize, qrSize);
  //         // Add the bottom text
  //         context.fillStyle = '#fff';
  //         context.font = '16px Arial';
  //         context.textAlign = 'center';
  //         context.fillText('SCAN ME', totalWidth / 2, totalHeight - 10);
  //
  //         // Create the download link
  //         const url = canvas.toDataURL();
  //         const a = document.createElement('a');
  //         a.download = 'QRCode.png';
  //         a.href = url;
  //         document.body.appendChild(a);
  //         a.click();
  //         document.body.removeChild(a);
  //       }
  //     }
  //   };
  //
  //   return (
  //       <div className="flex flex-col items-center h-full mt-10 ml-50  ">
  //         {/* Container for positioning QR code */}
  //         <div className="relative w-5/6">
  //           {/* Details Container */}
  //           <div className="shadow-lg p-8 bg-gradient-to-r from-slate-50 to-sky-700 rounded-lg flex flex-col items-center justify-center relative">
  //             <p className="text-4xl text-center">DOWNLOAD YOUR  OWN STALL  QR CODE</p>
  //             <p className="text-center mt-4">
  //               YOU HAVE TO SHOW THIS QR CODE IN FRONT OF THE STALL FOR THE CHECKED-IN PROCESS.
  //             </p>
  //             <br></br>
  //             <Input
  //                 placeholder="-"
  //                 maxLength={80}
  //                 value={text}
  //                 onChange={(e) => setText(e.target.value)}
  //                 className="mb-20 w-full max-w-lg"
  //             />
  //             <Button
  //                 size='lg'
  //                 variant="shadow"
  //                 onClick={downloadQRCode}
  //                 radius="full"
  //                 className="flex items-center justify-center text-2xl bg-gradient-to-r from-sky-700 to-sky-50 text-white shadow-lg p-10 mb-10 border-transparent"
  //             >
  //               Download
  //             </Button>
  //           </div>
  //
  //           {/* QR Code Container */}
  //           <div
  //               id="myqrcode"
  //               className="absolute"
  //               style={{
  //                 bottom: 0,
  //                 right: 0,
  //                 transform: 'translate(calc(100% - 450px), calc(100% - 40px))' // Adjust position
  //               }}
  //           >
  //             <QRCode value={text || '-'} size={420} bgColor="#fff" />
  //           </div>
  //           {/*/!* QR Code Container *!/*/}
  //           {/*<div*/}
  //           {/*    id="myqrcode"*/}
  //           {/*    className="absolute"*/}
  //           {/*    style={{*/}
  //           {/*      bottom: 0,*/}
  //           {/*      right: 0,*/}
  //           {/*      transform: 'translate(calc(-100% - 550px ), calc(100% + 50px))' // Adjust position*/}
  //           {/*    }}*/}
  //           {/*>*/}
  //           {/*  <QRCode value={text || '-'} size={320} bgColor="#fff" />*/}
  //
  //           {/*</div>*/}
  //           {/* Image Container */}
  //           <div
  //               id="myqrcode"
  //               className="absolute"
  //               style={{
  //                 bottom: 0,
  //                 right: 0,
  //                 transform: 'translate(calc(-100% - 550px), calc(100% + 50px))' // Adjust position
  //               }}
  //           >
  //             <img src="src/assets/qrimgremove%20.png" alt="image" className="w-80 h-80" /> {/* Adjust size as needed */}
  //           </div>
  //         </div>
  //       </div>
  //   );
  // };
  //
  // export default App;
  import { QRCode, Input } from 'antd';
  import React from 'react';
  import { Button } from '@nextui-org/react';

  const App: React.FC = () => {
    const [text, setText] = React.useState('https://ant.design/');

    const downloadQRCode = () => {
      const qrCanvas = document.getElementById('myqrcode')?.querySelector<HTMLCanvasElement>('canvas');
      if (qrCanvas) {
        const qrSize = 200; // Set QR code size
        const padding = 20; // Padding around QR code
        const titleHeight = 50; // Height for the title area
        const totalWidth = qrSize + padding * 2;
        const totalHeight = qrSize + padding * 2 + titleHeight;

        // Create a new canvas element
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (context) {
          // Set the new canvas dimensions
          canvas.width = totalWidth;
          canvas.height = totalHeight;

          // Fill the background with dark blue and create rounded corners
          context.fillStyle = '#3572EF'; // DarkBlue color
          context.beginPath();
          context.moveTo(20, 0);
          context.lineTo(totalWidth - 20, 0);
          context.quadraticCurveTo(totalWidth, 0, totalWidth, 20);
          context.lineTo(totalWidth, totalHeight - 20);
          context.quadraticCurveTo(totalWidth, totalHeight, totalWidth - 20, totalHeight);
          context.lineTo(20, totalHeight);
          context.quadraticCurveTo(0, totalHeight, 0, totalHeight - 20);
          context.lineTo(0, 20);
          context.quadraticCurveTo(0, 0, 20, 0);
          context.closePath();
          context.fill();

          // Add the title text
          context.fillStyle = '#fff';
          context.font = '20px Arial';
          context.textAlign = 'center';
          context.fillText('ICTer Conference', totalWidth / 2, 35);

          // Draw the QR code onto the new canvas
          context.drawImage(qrCanvas, padding, titleHeight, qrSize, qrSize);
          // Add the bottom text
          context.fillStyle = '#fff';
          context.font = '16px Arial';
          context.textAlign = 'center';
          context.fillText('SCAN ME', totalWidth / 2, totalHeight - 10);

          // Create the download link
          const url = canvas.toDataURL();
          const a = document.createElement('a');
          a.download = 'QRCode.png';
          a.href = url;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      }
    };

    return (
        <div className="flex flex-col items-center h-full mt-10 ml-4 md:ml-50">
          {/* Container for positioning QR code */}
          <div className="relative w-full md:w-5/6">
            {/* Details Container */}
            <div className="shadow-lg p-8 bg-gradient-to-r from-blue-300 to-blue-900  rounded-lg flex flex-col items-center justify-center relative">
              <p className="text-2xl md:text-4xl text-center">DOWNLOAD YOUR OWN STALL QR CODE</p>
              <p className="text-center mt-4">
                YOU HAVE TO SHOW THIS QR CODE IN FRONT OF THE STALL FOR THE CHECKED-IN PROCESS.
              </p>
              <br />
              <Input
                  placeholder="-"
                  maxLength={80}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="mb-8 md:mb-10 w-full max-w-lg"
              />
              <Button
                  size='lg'
                  variant="shadow"
                  onClick={downloadQRCode}
                  radius="full"
                  className="flex  flex-auto items-center justify-center text-sm md:text-3xl bg-gradient-to-r from-blue-300 to-blue-700 text-white shadow-lg  mb-4 md:mb-10 border-transparent"
              >
                Download
              </Button>
            </div>

            {/* QR Code Container */}
            <div
                id="myqrcode"
                className="absolute"
                style={{
                  bottom: 0,
                  right: 0,
                  transform: 'translate(calc(100% - 450px), calc(100% - 50px))', // Adjust position
                }}
            >
              <QRCode value={text || '-'} size={400}   bgColor="#fff" />
            </div>

            {/* Image Container */}
            <div
                id="myImage"
                className="absolute hidden md:block"
                style={{
                  bottom: 0,
                  right: 0,
                  transform: 'translate(calc(-100% - 400px), calc(100% + 50px))', // Adjust position
                }}
            >
              <img src="src/assets/qrimgremove%20.png" alt="image" className="w-40 h-40 md:w-80 md:h-80" /> {/* Adjust size as needed */}
            </div>
          </div>
        </div>
    );
  };

  export default App;

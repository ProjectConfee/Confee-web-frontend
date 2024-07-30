

  //
  // import { Button, QRCode, Input } from 'antd';
  // import React from 'react';
  //
  // const App: React.FC = () => {
  //   const [text, setText] = React.useState('https://ant.design/');
  //
  //   const downloadQRCode = () => {
  //     const qrCanvas = document.getElementById('myqrcode')?.querySelector<HTMLCanvasElement>('canvas');
  //     if (qrCanvas) {
  //       // Create a new canvas element
  //       const canvas = document.createElement('canvas');
  //       const context = canvas.getContext('2d');
  //       if (context) {
  //         // Set the new canvas dimensions
  //         const width = qrCanvas.width;
  //         const height = qrCanvas.height + 50; // Extra space for the title
  //         canvas.width = width;
  //         canvas.height = height;
  //
  //         // Fill the background with white
  //         context.fillStyle = '#fff';
  //         context.fillRect(0, 0, width, height);
  //
  //         // Draw the blue title background
  //         context.fillStyle = '#1E90FF'; // DodgerBlue color
  //         context.fillRect(0, 0, width, 50);
  //
  //         // Add the title text
  //         context.fillStyle = '#fff';
  //         context.font = '20px Arial';
  //         context.textAlign = 'center';
  //         context.fillText('QR Code Title', width / 2, 30);
  //
  //         // Draw the QR code onto the new canvas
  //         context.drawImage(qrCanvas, 0, 50);
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
  //       <div className="flex flex-col justify-center items-center h-full mt-20 ml-50">
  //         <div id="myqrcode" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
  //           <Input
  //               placeholder="-"
  //               maxLength={60}
  //               value={text}
  //               onChange={(e) => setText(e.target.value)}
  //           />
  //           <QRCode value={text || '-'} size={400} bgColor="#fff" style={{ marginBottom: 25, marginTop: 50 }} />
  //           <Button type="primary" onClick={downloadQRCode} style={{ marginBottom: 25, marginTop: 50, fontSize: '20px', padding: '20px 40px' }}>
  //             Download
  //           </Button>
  //           <br />
  //           <p>YOU HAVE TO SHOW THIS QR CODE IN FRONT OF THE STALL FOR THE CHECKED-IN PROCESS.</p>
  //         </div>
  //       </div>
  //   );
  // };
  //
  // export default App;

  // import { Button, QRCode, Input } from 'antd';
  // import React from 'react';
  //
  // const App: React.FC = () => {
  //   const [text, setText] = React.useState('https://ant.design/');
  //
  //   const downloadQRCode = () => {
  //     const qrCanvas = document.getElementById('myqrcode')?.querySelector<HTMLCanvasElement>('canvas');
  //     if (qrCanvas) {
  //       // Create a new canvas element
  //       const canvas = document.createElement('canvas');
  //       const context = canvas.getContext('2d');
  //       if (context) {
  //         // Set the new canvas dimensions
  //         const qrSize = 400; // Set QR code size
  //         const width = qrSize;
  //         const height = qrSize + 100; // Extra space for the title
  //         canvas.width = width;
  //         canvas.height = height;
  //
  //         // Fill the background with dark blue
  //         context.fillStyle = '#00008B'; // DarkBlue color
  //         context.fillRect(0, 0, width, height);
  //
  //         // Add the title text
  //         context.fillStyle = '#fff';
  //         context.font = '10px Arial';
  //         context.textAlign = 'center';
  //         context.fillText(' ICTer Conference 2024', width / 2, 30);
  //
  //         // Draw the QR code onto the new canvas
  //         context.drawImage(qrCanvas, 0, 50, qrSize, qrSize);
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
  //       <div className="flex flex-col justify-center items-center h-full mt-20 ml-50">
  //         <div id="myqrcode" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
  //           <Input
  //               placeholder="-"
  //               maxLength={60}
  //               value={text}
  //               onChange={(e) => setText(e.target.value)}
  //           />
  //           <QRCode value={text || '-'} size={400} bgColor="#fff" style={{ marginBottom: 25, marginTop: 50 }} />
  //           <Button type="primary" onClick={downloadQRCode} style={{ marginBottom: 25, marginTop: 50, fontSize: '20px', padding: '20px 40px' }}>
  //             Download
  //           </Button>
  //           <br />
  //           <p>YOU HAVE TO SHOW THIS QR CODE IN FRONT OF THE STALL FOR THE CHECKED-IN PROCESS.</p>
  //         </div>
  //       </div>
  //   );
  // };
  //
  // export default App;


  import { Button, QRCode, Input } from 'antd';
  import React from 'react';

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
          context.fillStyle = '#00008B'; // DarkBlue color
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
          context.fillText('ICTer Conference 2024 ', totalWidth / 2, 35);

          // Draw the QR code onto the new canvas
          context.drawImage(qrCanvas, padding, titleHeight, qrSize, qrSize);

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
        <div className="flex flex-col justify-center items-center h-full mt-20 ml-50">
          <div id="myqrcode" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
            <Input
                placeholder="-"
                maxLength={60}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <QRCode value={text || '-'} size={400} bgColor="#fff" style={{ marginBottom: 25, marginTop: 50 }} />
            <Button type="primary" onClick={downloadQRCode} style={{ marginBottom: 25, marginTop: 50, fontSize: '20px', padding: '20px 40px' }}>
              Download
            </Button>
            <br />
            <p>YOU HAVE TO SHOW THIS QR CODE IN FRONT OF THE STALL FOR THE CHECKED-IN PROCESS.</p>
          </div>
        </div>
    );
  };

  export default App;

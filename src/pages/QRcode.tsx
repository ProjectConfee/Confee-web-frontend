

// import  { useState } from 'react';
import { Button, QRCode } from 'antd';

import React from 'react';
import { Input} from 'antd';


const App: React.FC = () => {
  // const [open, setOpen] = useState(true);
  const [text, setText] = React.useState('https://ant.design/');
  // useEffect(() => {
  //   // Fetch the URL from the backend
  //   axios.get('http://localhost:8080/api/sponsor/your-sponsor-id')
  //       .then(response => {
  //         setQrCodeUrl(response.data.qrCodeUrl);  // Adjust based on your actual data structure
  //       })
  //       .catch(error => {
  //         console.error('Error fetching QR code URL:', error);
  //       });
  // }, []);
  const downloadQRCode = () => {
    const canvas = document.getElementById('myqrcode')?.querySelector<HTMLCanvasElement>('canvas');
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement('a');
      a.download = 'QRCode.png';
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full mt-20 ml-50">
      <h1 className="text-2xl font-semibold text-center text-sky-700">ICTer Conference 2024</h1>
      <h2 className="text-2xl font-semibold text-center">Welcome Sponsors!</h2>
        <div id="myqrcode" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
          <Input
              placeholder="-"
              maxLength={60}
              value={text}
              onChange={(e) => setText(e.target.value)}
          />
          <QRCode value= {text || '-'} size={400} bgColor="#fff"  style={{ marginBottom: 25, marginTop: 50 }} />
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





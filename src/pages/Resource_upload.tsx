
// // export default register
// import LOGO  from './assets/logo.jpeg'
// import { Button} from 'antd';

// import { InboxOutlined } from '@ant-design/icons';
// import type { UploadProps } from 'antd';
// import { message, Upload } from 'antd';
// import {  Result } from 'antd';

// import { useState } from "react";
// const App = () => {
//   const [open, setOpen] = useState(true);
//   const Menus = [
//     // { title: "", src: "logo" , gap: true  },
//     { title: "Home", src: "home" , gap: true  },
//     { title: "Profile", src: "User" , gap: true  },
//     { title: "Stall Details", src: "stall", gap: true  },
//     { title: "Schedule", src: "schedule", gap: true  },
//     { title: "QR Code", src: "qr-code" , gap: true },
//     { title: "Resource Upload", src: "upload", gap: true  },
//     { title: "Announcement ", src: "marketing", gap: true },
//     { title: "Logout", src: "logout", gap: true  },
//   ];

//   const { Dragger } = Upload;

// const props: UploadProps = {
//   name: 'file',
//   multiple: true,
//   action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
//   onDrop(e) {
//     console.log('Dropped files', e.dataTransfer.files);
//   },
// };
  

//   return (
//     <div className="flex">
//       <div
//         className={` ${
//           open ? "w-72" : "w-20 "
//         } bg-cyan-700 h-screen p-5  pt-8 relative duration-300`}
//       >
//         <img
//           src="./src/assets/control.png" 
//           className={`absolute cursor-pointer -right-3 top-9 w-7 bg-cyan-700relative
//            border-2 rounded-full  ${!open && "rotate-180"}`}
//           onClick={() => setOpen(!open)}
//         />
//         <div className="flex gap-x-4 items-center">
         
         
//         </div>
//         <ul className="pt-6">
//           {Menus.map((Menu, index) => (
//             <li
//               key={index}
//               className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
//               ${Menu.gap ? "mt-3" : "mt-2"} ${
//                 index === 0 && "bg-light-white"
//               } `}
//             > 
//                <div className="size-10"><img src={`./src/assets/${Menu.src}.png` } /></div>
              
//               <span className={`${!open && "hidden"} origin-left duration-200`}>
//                 {Menu.title}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="h-screen flex-1 p-7 ">
//       <div className='absolute ml-[0%] w-20 mr-[99%] mb-[100%] mt-[0%] ' ><img src={LOGO} className='bg-cover w-full h-full ' /></div>
//       <h1 className="text-2xl font-semibold text-center text-sky-700 ">ICTer Conference 2024</h1>
//         <h2 className="text-2xl font-semibold text-center ">Welcome Sponsors!</h2>
//         <div>
//         <br></br>


// <div style={{ width: '60%', margin: '0 auto', alignItems:'center', padding:'40px', marginTop:'60px'}}>
//   <Dragger {...props}>
//     <p className="ant-upload-drag-icon">
//       <InboxOutlined />
//     </p>
//     <p className="ant-upload-text">Click or drag file to this area to upload</p>
//     <p className="ant-upload-hint">
//       Support for a single or bulk upload. Strictly prohibited from uploading company data or other
//       banned files.
//     </p>
//   </Dragger>



 

//   <div className='mt-40'>
//   <Result
//     status="success"
//     title="Successfully Uploaded your Resources!"
//     subTitle="Thank you for the support."
//     extra={[
//       <Button type="primary" key="console">
//         Goto the Uploads
//       </Button>,
      
//     ]}
//   />

// </div>

//   </div>





//        </div>
//       </div>
//     </div>
//   );
// };
// export default App;








import { Button} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import {  Result } from 'antd';


const App = () => {
    const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
  

  return (
    <div className="flex flex-col justify-center items-center h-full mt-20 ml-50">
        
 <div style={{ width: '60%', margin: '0 auto', alignItems:'center', padding:'40px', marginTop:'60px'}}>
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
       <InboxOutlined />
     </p>
     <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
       banned files.
     </p>
  </Dragger>



 

   <div className='mt-40'>
   <Result
    status="success"
    title="Successfully Uploaded your Resources!"
    subTitle="Thank you for the support."
    extra={[
      <Button type="primary" key="console">
        Goto the Uploads
      </Button>,
      
    ]}
  />

</div>

  </div>
       

      </div>
    
  );
};

export default App;

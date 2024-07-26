
// import LOGO from '../assets/logo.png';
import { Pagination } from 'antd';
import { FileImageFilled, CopyOutlined, ProfileOutlined, LinkOutlined } from '@ant-design/icons';
import { Segmented } from 'antd';
import { useState } from "react";

const App = () => {
  // const [open, setOpen] = useState(true);
  const [selectedSegment, setSelectedSegment] = useState('Media');

  // const Menus = [
  //   { title: "Home", src: "home", gap: true },
  //   { title: "Profile", src: "User", gap: true },
  //   { title: "Stall Details", src: "stall", gap: true },
  //   { title: "Schedule", src: "schedule", gap: true },
  //   { title: "QR Code", src: "qr-code", gap: true },
  //   { title: "Resource Upload", src: "upload", gap: true },
  //   { title: "Announcement", src: "marketing", gap: true },
  //   { title: "Logout", src: "logout", gap: true },
  // ];

  const resources = [
    { title: 'Audio File 1', type: 'audio', src: 'https://example.com/audio1.mp3' },
    { title: 'Audio File 2', type: 'audio', src: 'https://example.com/audio2.mp3' },
    { title: 'MP4 Video 1', type: 'video', src: 'https://example.com/video1.mp4' },
    { title: 'MP4 Video 2', type: 'video', src: 'https://example.com/video2.mp4' },
    { title: 'Image 1', type: 'image', src: './src/assets/image41.png' },
    { title: 'Image 2', type: 'image', src: './src/assets/image42.png' },
    { title: 'Document 1', type: 'document', src: 'https://example.com/document1.pdf' },
    { title: 'Document 2', type: 'document', src: 'https://example.com/document2.pdf' },
    { title: 'Link 1', type: 'link', url: 'https://example.com/link1' },
    { title: 'Link 2', type: 'link', url: 'https://example.com/link2' },
    // Add more resources as needed
  ];

  return (
    // <div className="flex items-center">
    //   <div className={` ${open ? "w-72" : "w-20 "} bg-cyan-700 h-screen p-5 pt-8 relative duration-300`}>
    //     <img
    //       src="./src/assets/control.png"
    //       className={`absolute cursor-pointer -right-3 top-9 w-7 bg-cyan-700relative border-2 rounded-full  ${!open && "rotate-180"}`}
    //       onClick={() => setOpen(!open)}
    //     />
    //     <ul className="pt-6">
    //       {Menus.map((Menu, index) => (
    //         <li
    //           key={index}
    //           className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-3" : "mt-2"} ${index === 0 && "bg-light-white"}`}
    //         >
    //           <div className="size-10"><img src={`./src/assets/${Menu.src}.png`} alt={Menu.title} /></div>
    //           <span className={`${!open && "hidden"} origin-left duration-200`}>
      //           {Menu.title}
      //         </span>
      //       </li>
      //     ))}
      //   </ul>
      // </div>
      <div className="flex flex-col justify-center items-center h-full mt-20 ml-50">
      <div className="h-screen flex-1 p-7">
        <div className='absolute ml-[0%] w-20 mr-[99%] mb-[100%] mt-[0%]'>
         {/* <img src={LOGO} className='bg-cover w-full h-full' alt="Logo" /> */}
        </div>
        <h1 className="text-2xl font-semibold text-center text-sky-700">ICTer Conference 2024</h1>
        <h2 className="text-2xl font-semibold text-center">Welcome Sponsors!</h2>
        <div>
          <br />
          <div className="flex justify-center items-center p-4">
            <Segmented
              options={[
                { label: 'Media', value: 'Images', icon: <FileImageFilled /> },
                { label: 'Docs', value: 'Docs', icon: <CopyOutlined /> },
                { label: 'Links', value: 'Links', icon: <LinkOutlined /> },
                { label: 'Other', value: 'Other', icon: <ProfileOutlined /> },
              ]}
              value={selectedSegment}
              onChange={(value) => setSelectedSegment(value)}
            />
          </div>

          <div className="container mx-auto p-4">
          {selectedSegment === 'Images' && (
  <div className="grid grid-cols-3 gap-4">
    {resources.filter(resource => resource.type === 'image').map((image, index) => (
      <div key={index} className="flex justify-center items-center">
        <img src={image.src} alt={`Image ${index + 1}`} style={{ width: 250, height:250}} />
      </div>
    ))}
  </div>
)}
             {selectedSegment === 'Docs' && (
              <div className="grid grid-cols-3 gap-4">
                {resources.filter(resource => resource.type === 'document').map((doc, index) => (
                  <div key={index} className="flex justify-center items-center">
                    <a href={doc.src} target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-6 rounded-md shadow-md size-60">
                      {doc.title}
                    </a>
                  </div>
                ))}
              </div>
            )}

            {selectedSegment === 'Links' && (
              <div className="grid grid-cols-3 gap-4">
                {resources.filter(resource => resource.type === 'link').map((link, index) => (
                  <div key={index} className="flex justify-center items-center">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-6 rounded-md shadow-md size-60">
                      {link.title}
                    </a>
                  </div>
                ))}
              </div>
            )}
            {selectedSegment === 'Other' && (
              <div className="grid grid-cols-3 gap-4">
                {resources.map((resource, index) => (
                  <div key={index} className="flex justify-center items-center">
                    {resource.type === 'audio' && (
                      <audio controls className="bg-gray-200 p-6 rounded-md shadow-md size-60">
                        <source src={resource.src} type="audio/mp3" />
                        Your browser does not support the audio element.
                      </audio>
                    )}
                    {resource.type === 'video' && (
                      <video controls className="bg-gray-200 p-6 rounded-md shadow-md size-60">
                        <source src={resource.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="min-h-screen flex flex-col justify-between">
          <div className="flex justify-center items-center p-4">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
 </div>
  );
};

export default App;

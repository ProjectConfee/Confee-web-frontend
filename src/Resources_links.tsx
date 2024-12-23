import LOGO from '../src/assets/logo.png';
import { Pagination } from 'antd';

import { FileImageFilled, CopyOutlined, ProfileOutlined, LinkOutlined } from '@ant-design/icons';
import { Segmented } from 'antd';
import { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(true);
  const [selectedSegment, setSelectedSegment] = useState('Links');

  const Menus = [
    { title: "Home", src: "home", gap: true },
    { title: "Profile", src: "User", gap: true },
    { title: "Stall Details", src: "stall", gap: true },
    { title: "Schedule", src: "schedule", gap: true },
    { title: "QR Code", src: "qr-code", gap: true },
    { title: "Resource Upload", src: "upload", gap: true },
    { title: "Announcement", src: "marketing", gap: true },
    { title: "Logout", src: "logout", gap: true },
  ];


  const links = [
    { title: 'Link 1', url: 'https://example.com/link1' },
    { title: 'Link 2', url: 'https://example.com/link2' },
    { title: 'Link 3', url: 'https://example.com/link3' },
    { title: 'Link 4', url: 'https://example.com/link4' },
    { title: 'Link 5', url: 'https://example.com/link5' },
    { title: 'Link 6', url: 'https://example.com/link6' },
  ];

  return (
    <div className="flex items-center">
      <div
        className={` ${open ? "w-72" : "w-20 "} bg-cyan-700 h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 bg-cyan-700relative
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center"></div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-3" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <div className="size-10"><img src={`./src/assets/${Menu.src}.png`} /></div>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <div className='absolute ml-[0%] w-20 mr-[99%] mb-[100%] mt-[0%]'>
          <img src={LOGO} className='bg-cover w-full h-full' />
        </div>
        <h1 className="text-2xl font-semibold text-center text-sky-700">ICTer Conference 2024</h1>
        <h2 className="text-2xl font-semibold text-center">Welcome Sponsors!</h2>
        <div>
          <br></br>
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
            
            {selectedSegment === 'Links' && (
              <div className="grid grid-cols-3 gap-4">
                {links.map((link, index) => (
                  <div key={index} className="flex justify-center items-center">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-6 rounded-md shadow-md size-60">
                      {link.title}
                    </a>
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

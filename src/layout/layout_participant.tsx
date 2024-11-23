import React, { ReactNode } from 'react';
import Navbar_participant from '../components/Navbar_participant.tsx';
import { IoMdNotificationsOutline } from "react-icons/io";

interface MainLayoutProps {
  children: ReactNode;
}

const Layout_participant: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-10">
        <Navbar_participant />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow ml-64">
        {/* Fixed Red Bar */}
        <div className="fixed top-0 left-64 right-0 h-24 bg-slate-100 z-10 "></div>

        {/* Topbar */}
        <div className="fixed top-4 left-72 right-8 h-16 bg-white shadow-md z-20 flex items-center justify-between px-4 rounded-xl">
          <div className="flex items-center">
            {/* <img
              src="src/assets/final%20logo.jpeg"
              alt="Logo"
              className="w-10 h-10 rounded-full mr-4"
            /> */}
            <div className="text-xl">Hi, Viranga Dias</div>
          </div>
          <div className="flex items-center space-x-6">
          {/*<div className='text-xl'>Viranga Dias</div>*/}
          <div>
              <img
                src="src/assets/profile3.jpg"
                alt="Profile"
                className="w-12 h-12 rounded-full border-white"
              />
            </div>
    
            <div className="text-4xl">
              <IoMdNotificationsOutline />
            </div>
            
          </div>
        </div>

        {/* Main Content Area */}
        <main className="pt-28 px-4"> {/* Adjusted top padding */}
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout_participant;

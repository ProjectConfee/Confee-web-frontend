import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { IoMdNotificationsOutline } from "react-icons/io";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="flex flex-col flex-grow">
        <div className="h-20 bg-white shadow-md w-full flex items-center justify-between px-6  text-black">
          <div className=" text-2xl">
            Hi! Viranga Dias
          </div>
          <div className="flex items-center space-x-8 mr-10">
            <div className="text-4xl"> 
              <IoMdNotificationsOutline />
            </div>
            <div>
              <img
                src="src/assets/event1.jpeg" 
                alt="Profile"
                className="w-14 h-14 rounded-full border-2 border-white"
              />
            </div>
          </div>
        </div>
        <main className="flex-grow">
          <div className="p-6"> {/* Adjust padding as needed */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
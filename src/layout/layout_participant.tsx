
import React, { ReactNode } from 'react';
import Navbar_participant from '../components/Navbar_participant.tsx';

import { IoMdNotificationsOutline } from "react-icons/io";


interface MainLayoutProps {
    children: ReactNode;
}

const Layout_participant: React.FC<MainLayoutProps> = ({ children }) => {

    return (
        <div className="flex min-h-screen bg-slate-50">
            <div className="fixed top-0 left-0 h-screen z-10 pt-20"> {/* Add padding-top */}
                <Navbar_participant />
            </div>
            <div className="flex flex-col flex-grow">
                <div className="w-full fixed top-0 left-0 flex items-center justify-between px-6 bg-gradient-to-r from-blue-600 to-blue-900 text-white z-20" style={{ height: '80px' }}>
                    <div className="flex items-center">
                        <img
                            src="src/assets/final%20logo.jpeg"  // replace with your logo path
                            alt="Logo"
                            className="w-12 h-12 rounded-full mr-4" // Adjust size as needed
                        />
                        <div className="font-semibold text-2xl">
                            Hi! Participant
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="text-4xl">
                            <IoMdNotificationsOutline />
                        </div>
                        <div>
                            <img
                                src="src/assets/profile.svg"
                                alt="Profile"
                                className="w-14 h-14 rounded-full border-2 border-white"
                            />
                        </div>
                    </div>
                </div>
                <main className="flex-grow pt-20 ml-72"> {/* Adjust padding-top and margin-left to match Navbar */}
                    <div className="p-6"> {/* Adjust padding as needed */}
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout_participant;












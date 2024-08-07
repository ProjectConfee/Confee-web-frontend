
import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar_sponsor.tsx';

import { IoMdNotificationsOutline } from "react-icons/io";
import {Link} from "react-router-dom";


interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

    return (
        <div className="flex min-h-screen bg-slate-50">
            <div className="fixed top-0 left-0 h-screen z-10 pt-20"> {/* Add padding-top */}
                <Navbar />
            </div>
            <div className="flex flex-col flex-grow">
                <div className="w-full fixed top-0 left-0 flex items-center justify-between px-6 bg-gradient-to-r from-blue-600 to-blue-900 text-white z-20" style={{ height: '80px' }}>
                    <div className="flex items-center">
                        <img
                            src="src/assets/final%20logo.jpeg"
                            alt="Logo"
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div className="font-semibold text-2xl">
                            Hi! Sponsor
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div>
                            <img
                                src="src/assets/gold_badge.jpeg"
                                alt="goldbadge"
                                className="w-16 h-16 rounded-full border-0 border-white "
                            />
                        </div>

                        <div className="text-4xl">
                            <Link to='/announcement_view'>
                            <IoMdNotificationsOutline/></Link>
                        </div>
                        <div>
                            <Link to='/profile'>
                            <img
                                src="src/assets/profile_final.png"
                                alt="Profile"
                                className="w-14 h-14 rounded-full border-2 border-white"
                            /></Link>
                        </div>
                    </div>
                </div>
                <main className="flex-grow pt-20 ml-72">
                    <div className="p-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;










     

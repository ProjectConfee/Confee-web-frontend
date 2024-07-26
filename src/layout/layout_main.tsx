import Navbar from '../components/Navbar';

import React, { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

return (
    <div className="flex min-h-screen">
        <Navbar />
        <main className="flex-grow">
            <div className="p-4"> {/* Adjust padding as needed */}
                {children}
            </div>
        </main>
    </div>
);
};

export default MainLayout;


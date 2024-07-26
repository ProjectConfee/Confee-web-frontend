import Navbar from '../components/Navbar';
// import { Outlet } from 'react-router-dom';

// const Layout = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;
// src/components/MainLayout.tsx
import React, { ReactNode } from 'react';
// import Navbar from './Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
//   return (
//     <div className=''>
//       <Navbar />
//       <div className="p-4">
//         {children} 
//       </div>
//     </div>
//   );
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


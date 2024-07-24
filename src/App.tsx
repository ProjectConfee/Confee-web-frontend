


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRcode from './pages/QRcode';
import ResourceHome from '../src/pages/Resource_main';
import ResourceUpload from './pages/Resource_upload';
import ResourceDone from './pages/Resource_done';
import ResourceDocs from './Resources_docs';
import ResourceLinks from './Resources_links';
import ResourceOther from './Resources_other';
// import ViewMain from './View_main';
import Register from './pages/Register'
import Stall_details from './pages/Stall_details'
import Schedule from './pages/Schedule'
// import Home from './Homepage'
import Navbar from './components/Navbar';

import MainLayout from './layout/layout_main';
import Login from './pages/Login';
import Badge_details from './pages/admin/Badge_details';
import Stall_register from './pages/admin/Stall_register.tsx';
import Stall_location from './pages/admin/Stall_location.tsx';
import Sponsor_register from './pages/admin/Sponsor_register';
import MoreFeedback from './pages/MoreFeedbacks.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Register />} />
        <Route path="/qrcode" element={<MainLayout><QRcode /></MainLayout>} />
        <Route path="/resource-home" element={<MainLayout><ResourceHome /></MainLayout>} />
        <Route path="/resource-upload" element={<MainLayout><ResourceUpload /></MainLayout>} />
        <Route path="/resource-done" element={<MainLayout><ResourceDone /></MainLayout>} />
        <Route path="/resource-docs" element={<ResourceDocs />} />
        <Route path="/resource-links" element={<ResourceLinks />} />
        <Route path="/resource-other" element={<ResourceOther />} />
        <Route path="/schedule" element={<MainLayout><Schedule /></MainLayout>} />
        <Route path="/stall-details" element={<MainLayout><Stall_details /></MainLayout>} />
        <Route path="/badge-details" element={<MainLayout><Badge_details /></MainLayout>} />
        <Route path="/stall-register" element={<MainLayout><Stall_register /></MainLayout>} />
        <Route path="/sponsor-register" element={<MainLayout>< Sponsor_register /></MainLayout>} />
        <Route path="/stall-location" element={<MainLayout>< Stall_location /></MainLayout>} />
        <Route path="/more-feedbacks" element={<MainLayout><MoreFeedback /></MainLayout>} />
        <Route path="/navbar" element={<Navbar />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

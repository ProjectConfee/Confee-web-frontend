


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
import Signup from './pages/Signup.tsx';
import NoEvent from './pages/No_event.tsx';
import AddEvent from './pages/Add_event.tsx';
import Event from './pages/Event.tsx';
import ViewEvent from './pages/View_event.tsx';
import EventDetail from './pages/Event_detail.tsx';
import Ticket from './pages/Ticket.tsx';
import Resource from './pages/UploadResource.tsx';

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
        <Route path="/navbar" element={<Navbar />} />

        <Route path="/signup" element={<Signup/>} />
        <Route path="/no_event" element={<MainLayout><NoEvent/></MainLayout>} />
        <Route path="/add_event" element={<MainLayout><AddEvent/></MainLayout>} />
        <Route path="/view_event" element={<MainLayout><ViewEvent/></MainLayout>} />
        <Route path="/event_detail" element={<MainLayout><EventDetail/></MainLayout>} />
        <Route path="/event" element={<MainLayout><Event/></MainLayout>} />
        <Route path="/ticket" element={<MainLayout><Ticket/></MainLayout>} />
        <Route path="/resource" element={<MainLayout><Resource/></MainLayout>} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

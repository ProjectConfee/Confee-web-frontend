


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRcode from './pages/sponsor/QRcode.tsx';
import ResourceHome from './pages/sponsor/Resource_main.tsx';
import ResourceUpload from './pages/sponsor/Resource_upload.tsx';
import ResourceDone from './pages/sponsor/Resource_done.tsx';
import ResourceDocs from './Resources_docs';
import ResourceLinks from './Resources_links';
import ResourceOther from './Resources_other';
// import ViewMain from './View_main';
import Register from './pages/sponsor/Register.tsx'
import Stall_details from './pages/sponsor/Stall_details.tsx'
import Schedule from './pages/sponsor/Schedule.tsx'
// import Home from './Homepage'
import Navbar from './components/Navbar';
import Navbar_sponsor from './components/Navbar_sponsor.tsx';

import MainLayout from './layout/layout_main';
import Layout_sponsor from './layout/layout_sponsor.tsx';
import Login from './pages/Login';

//import Signup from './pages/Signup.tsx';
import NoEvent from './pages/No_event.tsx';
import AddEvent from './pages/Add_event.tsx';
import Event from './pages/Event.tsx';

import ViewEvent from './pages/View_event.tsx';
import EventDetail from './pages/Event_detail.tsx';
import Ticket from './pages/Ticket.tsx';
// import Resource from './pages/UploadResource.tsx';

import Announcement from './pages/announcement.tsx';
import Announcement_view from './pages/sponsor/announcement_view.tsx';
import Badge_details from './pages/admin/Badge_details';
import Stall_register from './pages/admin/Stall_register.tsx';
import Stall_location from './pages/admin/Stall_location.tsx';
import Sponsor_register from './pages/admin/Sponsor_register';
import MoreFeedback from './pages/sponsor/MoreFeedbacks.tsx';
import Profile  from './pages/Profile.tsx';

 import Winners from './pages/winners.tsx';
 import AllWinners from './pages/participant/all_winners.tsx';

 // participant imports
import Layout_participant from "./layout/layout_participant.tsx";
import Profile_participant from "./pages/participant/Participant_profile.tsx";

// speaker imports
import Layout_speaker from "./layout/layout_speaker.tsx";

// author imports
import Layout_author from "./layout/layout_author.tsx";

// admin imports
import Layout_admin from "./layout/layout_admin.tsx";

// oc imports
import Layout_oc from "./layout/layout_oc.tsx";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Layout_sponsor ><Register /></Layout_sponsor >} />
        <Route path="/qrcode" element={<Layout_sponsor ><QRcode /></Layout_sponsor >} />
        <Route path="/resource-home" element={<Layout_sponsor ><ResourceHome /></Layout_sponsor >} />
        <Route path="/resource-upload" element={<Layout_sponsor ><ResourceUpload /></Layout_sponsor >} />
        <Route path="/resource-done" element={<Layout_sponsor ><ResourceDone /></Layout_sponsor >} />
        <Route path="/resource-docs" element={<ResourceDocs />} />
        <Route path="/resource-links" element={<ResourceLinks />} />
        <Route path="/resource-other" element={<ResourceOther />} />
        <Route path="/schedule" element={<Layout_sponsor ><Schedule /></Layout_sponsor >} />
        <Route path="/stall-details" element={<Layout_sponsor ><Stall_details /></Layout_sponsor >} />
        <Route path="/badge-details" element={<MainLayout><Badge_details /></MainLayout>} />
        <Route path="/stall-register" element={<MainLayout><Stall_register /></MainLayout>} />
        <Route path="/sponsor-register" element={<MainLayout>< Sponsor_register /></MainLayout>} />
        <Route path="/stall-location" element={<MainLayout>< Stall_location /></MainLayout>} />
        <Route path="/more-feedbacks" element={<MainLayout><MoreFeedback /></MainLayout>} />
        <Route path="/announcement" element={<MainLayout><Announcement/></MainLayout>} />
        <Route path="/profile" element={<Layout_sponsor ><Profile/></Layout_sponsor >} />
        <Route path="/announcement_view" element={<Layout_sponsor ><Announcement_view /></Layout_sponsor >} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/navbar_sponsor" element={<Navbar_sponsor />} />
        {/*<Route path="/signup" element={<Signup/>} />*/}
        <Route path="/no_event" element={<MainLayout><NoEvent/></MainLayout>} />

        <Route path="/add_event" element={<MainLayout><AddEvent/></MainLayout>} />
        <Route path="/view_event" element={<MainLayout><ViewEvent/></MainLayout>} />
        <Route path="/event_detail" element={<MainLayout><EventDetail/></MainLayout>} />
        <Route path="/event" element={<MainLayout><Event/></MainLayout>} />
        <Route path="/ticket" element={<MainLayout><Ticket/></MainLayout>} />
        {/*<Route path="/resource" element={<MainLayout><Resource/></MainLayout>} />*/}

        {/*<Route path="/add_event" element={<MainLayout><AddEvent/></MainLayout>} />*/}
        <Route path="/event" element={<MainLayout><Event/></MainLayout>} />
        <Route path="/announcements" element={<MainLayout><Announcement/></MainLayout>} />
        <Route path="/announcements_view" element={<Layout_sponsor><Announcement/></Layout_sponsor>} />
        <Route path="/winners" element={<MainLayout><Winners/></MainLayout>} />
        <Route path="/all_winners" element={<MainLayout><AllWinners/></MainLayout>} />

        {/*Participant route*/}
        <Route path="/announcement_participant" element={<Layout_participant ><Announcement_view /></Layout_participant >} />
        <Route path="/profile_participant" element={<Layout_participant ><Profile_participant /></Layout_participant >} />


        {/*Speaker route*/}
        <Route path="/announcement_speaker" element={<Layout_speaker ><Announcement_view /></Layout_speaker >} />
        <Route path="/profile_speaker" element={<Layout_speaker ><Profile_participant /></Layout_speaker >} />

        {/*Author route*/}
        <Route path="/announcement_author" element={<Layout_author ><Announcement_view /></Layout_author >} />
        <Route path="/profile_author" element={<Layout_author ><Profile_participant /></Layout_author >} />

        {/*Admin route*/}
        <Route path="/announcement_admin" element={<Layout_admin ><Announcement_view /></Layout_admin >} />
        <Route path="/profile_admin" element={<Layout_admin ><Profile_participant /></Layout_admin >} />

        {/*Committee route*/}
        <Route path="/announcement_oc" element={<Layout_oc ><Announcement /></Layout_oc >} />
        <Route path="/profile_oc" element={<Layout_oc ><Profile_participant /></Layout_oc >} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

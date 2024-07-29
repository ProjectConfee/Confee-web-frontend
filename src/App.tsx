


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
import Edit_profile from "./pages/participant/Edit_profile.tsx";
import Change_password from "./pages/participant/Edit_password.tsx";
import Stall_allocation from "./pages/participant/Stall_allocation.tsx";
import View_feedback from "./pages/participant/Feedbacks.tsx";

// speaker imports
import Layout_speaker from "./layout/layout_speaker.tsx";
import Profile_speaker from "./pages/speaker/Speaker_profile.tsx";
import Edit_profile_speaker from "./pages/speaker/Edit_profile_speaker.tsx";
import Change_password_speaker from "./pages/speaker/Edit_password_speaker.tsx";
import View_feedback_speaker from "./pages/committee/View_feedback.tsx";

// author imports
import Layout_author from "./layout/layout_author.tsx";
import Profile_author from "./pages/author/Author_profile.tsx";
import Edit_profile_author from "./pages/author/Edit_profile_author.tsx";
import Change_password_author from "./pages/author/Edit_password_author.tsx";

// admin imports
import Layout_admin from "./layout/layout_admin.tsx";
import Profile_admin from "./pages/admin/Admin_profile.tsx";
import Edit_profile_admin from "./pages/admin/Edit_profile_admin.tsx";
import Change_password_admin from "./pages/admin/Edit_password_admin.tsx";
import View_feedback_admin from "./pages/committee/View_feedback.tsx";

// oc imports
import Layout_oc from "./layout/layout_oc.tsx";
import Profile_oc from "./pages/committee/Oc_profile.tsx";
import Edit_profile_oc from "./pages/committee/Edit_profile_oc.tsx";
import Change_password_oc from "./pages/committee/Edit_password_oc.tsx";
import View_feedback_oc from "./pages/committee/View_feedback.tsx";
// import Stall_allocation_add from "./pages/participant/Stall_allocation.tsx";



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
        <Route path="/edit_profile" element={<Layout_participant ><Edit_profile /></Layout_participant >} />
        <Route path="/change_password" element={<Layout_participant ><Change_password /></Layout_participant >} />
        <Route path="/stall_allocation" element={<Layout_participant ><Stall_allocation /></Layout_participant >} />
        <Route path="/view_feedback" element={<Layout_participant ><View_feedback /></Layout_participant >} />

        {/*Speaker route*/}
        <Route path="/announcement_speaker" element={<Layout_speaker ><Announcement_view /></Layout_speaker >} />
        <Route path="/profile_speaker" element={<Layout_speaker ><Profile_speaker /></Layout_speaker >} />
        <Route path="/edit_profile_speaker" element={<Layout_speaker ><Edit_profile_speaker /></Layout_speaker >} />
        <Route path="/change_password_speaker" element={<Layout_speaker ><Change_password_speaker /></Layout_speaker >} />
        <Route path="/view_feedback_speaker" element={<Layout_speaker ><View_feedback_speaker /></Layout_speaker >} />

        {/*Author route*/}
        <Route path="/announcement_author" element={<Layout_author ><Announcement_view /></Layout_author >} />
        <Route path="/profile_author" element={<Layout_author ><Profile_author /></Layout_author >} />
        <Route path="/edit_profile_author" element={<Layout_author ><Edit_profile_author /></Layout_author >} />
        <Route path="/change_password_author" element={<Layout_author ><Change_password_author /></Layout_author >} />

        {/*Admin route*/}
        <Route path="/announcement_admin" element={<Layout_admin ><Announcement_view /></Layout_admin >} />
        <Route path="/profile_admin" element={<Layout_admin ><Profile_admin /></Layout_admin >} />
        <Route path="/edit_profile_admin" element={<Layout_admin ><Edit_profile_admin /></Layout_admin >} />
        <Route path="/change_password_admin" element={<Layout_admin ><Change_password_admin /></Layout_admin >} />
        <Route path="/view_feedback_admin" element={<Layout_admin ><View_feedback_admin /></Layout_admin >} />

        {/*Committee route*/}
        <Route path="/announcement_oc" element={<Layout_oc ><Announcement /></Layout_oc >} />
        <Route path="/profile_oc" element={<Layout_oc ><Profile_oc /></Layout_oc >} />
        <Route path="/edit_profile_oc" element={<Layout_oc ><Edit_profile_oc /></Layout_oc >} />
        <Route path="/change_password_oc" element={<Layout_oc ><Change_password_oc /></Layout_oc >} />
        <Route path="/view_feedback_oc" element={<Layout_oc ><View_feedback_oc /></Layout_oc >} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

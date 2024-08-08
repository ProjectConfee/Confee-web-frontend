


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRcode from './pages/sponsor/QRcode.tsx';
import ResourceHome from './pages/sponsor/Resource_main.tsx';
import ResourceUpload from './pages/sponsor/Resource_upload.tsx';
import Resourceother from './pages/sponsor/Resource_upload_other.tsx';
import ResourceDone from './pages/sponsor/Resource_done.tsx';
import ResourceDocs from './Resources_docs';
import ResourceLinks from './Resources_links';
import ResourceOther from './Resources_other';
// import ViewMain from './View_main';
import Register from './pages/sponsor/Register.tsx'
import Stall_details from './pages/sponsor/Stall_details.tsx'
import Sponsor_profile from './pages/sponsor/Sponsor_profile.tsx'

import Participant_details from './pages/sponsor/Participant_details.tsx'
// import Schedule from './pages/sponsor/Schedule.tsx'
// import Home from './Homepage'
import Navbar from './components/Navbar';
// import Navbar_sponsor from './components/Navbar_sponsor.tsx';

import MainLayout from './layout/layout_main';
import Layout_sponsor from './layout/layout_sponsor.tsx';
import Login from './pages/Login';

import Signup from './pages/event/Sign_up.tsx';
import NoEvent from './pages/event/No_event.tsx';
import AddEvent from './pages/event/Add_event.tsx';
import Event from './pages/event/Event.tsx';

import ViewEvent from './pages/event/View_event.tsx';
import EventDetail from './pages/event/Event_detail.tsx';
import Ticket from './pages/event/Ticket.tsx';
import Resource from './pages/event/UploadResource.tsx';

import Announcement from './pages/announcement.tsx';
import Announcement_view from './pages/sponsor/announcement_view.tsx';
import Badge_details from './pages/admin/Badge_details';
import Stall_register from './pages/admin/Stall_register.tsx';
import Stall_location from './pages/admin/Stall_location.tsx';
import Sponsor_register from './pages/admin/Sponsor_register';
import MoreFeedback from './pages/sponsor/MoreFeedbacks.tsx';


 import Winners from './pages/winners.tsx';
 import AllWinners from './pages/participant/all_winners.tsx';
import Edit_sp_profile from "./pages/sponsor/Edit_sp_profile.tsx";

 // participant imports
import Layout_participant from "./layout/layout_participant.tsx";
import Profile_participant from "./pages/participant/Participant_profile.tsx";
import Edit_profile from "./pages/participant/Edit_profile.tsx";
import Change_password from "./pages/participant/Edit_password.tsx";
import Stall_allocation from "./pages/participant/Stall_allocation.tsx";
import View_feedback from "./pages/participant/Feedbacks.tsx";
import View_events from './pages/participant/View_events.tsx';
import Event_schedules from './pages/participant/Event_schedule.tsx';
import View_winners from './pages/participant/all_winners.tsx';
import Event_details from './pages/participant/Event_details.tsx';

// speaker imports
import Layout_speaker from "./layout/layout_speaker.tsx";
import Speaker_dashboard from "./pages/speaker/Dashboard.tsx";
import Speaker_profile from "./pages/speaker/Profile.tsx";
import Speaker_edit_profile from "./pages/speaker/Edit_profile.tsx";

import Profile_speaker from "./pages/speaker/Speaker_profile.tsx";
import Edit_profile_speaker from "./pages/speaker/Edit_profile_speaker.tsx";
import Change_password_speaker from "./pages/speaker/Edit_password_speaker.tsx";
import View_feedback_speaker from "./pages/committee/View_feedback.tsx";
import View_schedules_speaker from './pages/participant/Event_schedule.tsx';
import Resource_speaker from './pages/event/UploadResource.tsx';
import Event_speaker from './pages/speaker/Event_speaker.tsx';
import View_event_speaker from './pages/speaker/View_event_speaker.tsx';

// author imports
import Layout_author from "./layout/layout_author.tsx";
import Profile_author from "./pages/author/Author_profile.tsx";
import Edit_profile_author from "./pages/author/Edit_profile_author.tsx";
import Change_password_author from "./pages/author/Edit_password_author.tsx";
import Stall_allocation_author from "./pages/participant/Stall_allocation.tsx";
import View_schedules_author from './pages/participant/Event_schedule.tsx';
import Events_author from './pages/author/Events_author.tsx';
import Event_details_author from './pages/author/Event_detail_author.tsx';
import View_ticket_author from './pages/event/Ticket.tsx';

// admin imports
import Layout_admin from "./layout/layout_admin.tsx";
import Admin_dashboard from "./pages/admin/Dashboard.tsx";
import Admin_profile from "./pages/admin/Profile.tsx";
import Admin_announcement from "./pages/admin/Announcement.tsx";

import Profile_admin from "./pages/admin/Admin_profile.tsx";
import Edit_profile_admin from "./pages/admin/Edit_profile_admin.tsx";
import Change_password_admin from "./pages/admin/Edit_password_admin.tsx";
import View_feedback_admin from "./pages/committee/View_feedback.tsx";
import Stall_allocation_admin from "./pages/participant/Stall_allocation.tsx";
import View_schedules_admin from './pages/event/Event_schedule.tsx';
import Add_Oc_Admin from './pages/admin/add_oc_committee.tsx';
import Sponsor_register_admin from './pages/admin/Sponsor_register.tsx';
import Stall_register_admin from './pages/admin/Stall_register.tsx';
import Stall_location_admin from './pages/admin/Stall_location.tsx';
import Badge_details_admin from './pages/admin/Badge_details.tsx';

// oc imports
import Layout_oc from "./layout/layout_oc.tsx";
import Profile_oc from "./pages/committee/Oc_profile.tsx";
import Edit_profile_oc from "./pages/committee/Edit_profile_oc.tsx";
import Change_password_oc from "./pages/committee/Edit_password_oc.tsx";
import View_feedback_oc from "./pages/committee/View_feedback.tsx";
import Add_winners from "./pages/winners.tsx";
import View_events_oc from './pages/event/Event.tsx';
import Event_details_oc from './pages/committee/View_event_oc.tsx';
import Add_event_oc from './pages/event/Add_event.tsx';
import No_events from './pages/event/No_event.tsx';
import Update_schedule from './pages/event/Event_schedule.tsx';
import Upload_resource_oc from "./pages/event/UploadResource.tsx";
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
        <Route path="/resource-other" element={<Layout_sponsor ><Resourceother /></Layout_sponsor >} />
        <Route path="/resource-done" element={<Layout_sponsor ><ResourceDone /></Layout_sponsor >} />
        <Route path="/resource-docs" element={<ResourceDocs />} />
        <Route path="/resource-links" element={<ResourceLinks />} />
        <Route path="/resource-other" element={<ResourceOther />} />
        <Route path="/schedule" element={<Layout_sponsor ><View_schedules_author /></Layout_sponsor >} />
        <Route path="/stall-details" element={<Layout_sponsor ><Stall_details /></Layout_sponsor >} />
        <Route path="/stall-details" element={<Layout_sponsor ><Stall_details /></Layout_sponsor >} />
        <Route path="/badge-details" element={<MainLayout><Badge_details /></MainLayout>} />
        <Route path="/stall-register" element={<MainLayout><Stall_register /></MainLayout>} />
        <Route path="/sponsor-register" element={<MainLayout>< Sponsor_register /></MainLayout>} />
        <Route path="/stall-location" element={<MainLayout>< Stall_location /></MainLayout>} />
        <Route path="/more-feedbacks" element={<Layout_sponsor><MoreFeedback /></Layout_sponsor>} />
        <Route path="/announcement" element={<MainLayout><Announcement/></MainLayout>} />
        <Route path="/profile" element={<Layout_sponsor ><Sponsor_profile/></Layout_sponsor >} />
        <Route path="/participant-details" element={<Layout_sponsor ><Participant_details/></Layout_sponsor >} />
        <Route path="/edit_sp_profile" element={<Layout_sponsor ><Edit_sp_profile/></Layout_sponsor >} />
        <Route path="/announcement_view" element={<Layout_sponsor ><Announcement_view /></Layout_sponsor >} />
        <Route path="/navbar" element={<Navbar />} />
        
        <Route path="/signup" element={<Signup/>} />
        <Route path="/no_event" element={<MainLayout><NoEvent/></MainLayout>} />
        <Route path="/add_event" element={<MainLayout><AddEvent/></MainLayout>} />
        <Route path="/view_event" element={<MainLayout><ViewEvent/></MainLayout>} />
        <Route path="/event_detail" element={<MainLayout><EventDetail/></MainLayout>} />
        <Route path="/event" element={<MainLayout><Event/></MainLayout>} />
        <Route path="/ticket" element={<MainLayout><Ticket/></MainLayout>} />
        <Route path="/resource" element={<MainLayout><Resource/></MainLayout>} />


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
        <Route path="/view_events" element={<Layout_participant ><View_events/></Layout_participant >} />
        <Route path="/view_schedules" element={<Layout_participant ><Event_schedules/></Layout_participant >} />
        <Route path="/view_winners" element={<Layout_participant ><View_winners/></Layout_participant >} />
        <Route path="/event_details" element={<Layout_participant ><Event_details/></Layout_participant >} />
        <Route path="/view_ticket" element={<Layout_participant ><Ticket/></Layout_participant >} />

        {/*Speaker route*/}
        <Route path="/speaker_dashboard" element={<Layout_speaker ><Speaker_dashboard /></Layout_speaker >} />
        <Route path="/speaker_profile" element={<Layout_speaker ><Speaker_profile /></Layout_speaker >} />
        <Route path="/speaker_edit_profile" element={<Layout_speaker ><Speaker_edit_profile /></Layout_speaker >} />

        <Route path="/announcement_speaker" element={<Layout_speaker ><Announcement_view /></Layout_speaker >} />
        <Route path="/profile_speaker" element={<Layout_speaker ><Profile_speaker /></Layout_speaker >} />
        <Route path="/edit_profile_speaker" element={<Layout_speaker ><Edit_profile_speaker /></Layout_speaker >} />
        <Route path="/change_password_speaker" element={<Layout_speaker ><Change_password_speaker /></Layout_speaker >} />
        <Route path="/view_feedback_speaker" element={<Layout_speaker ><View_feedback_speaker /></Layout_speaker >} />
        <Route path="/view_schedules_speaker" element={<Layout_speaker ><View_schedules_speaker /></Layout_speaker >} />
        <Route path="/resource_speaker" element={<Layout_speaker ><Resource_speaker /></Layout_speaker >} />
        <Route path="/event_speaker" element={<Layout_speaker ><Event_speaker /></Layout_speaker >} />
        <Route path="/view_event_speaker" element={<Layout_speaker ><View_event_speaker /></Layout_speaker >} />

        {/*Author route*/}
        <Route path="/announcement_author" element={<Layout_author ><Announcement_view /></Layout_author >} />
        <Route path="/profile_author" element={<Layout_author ><Profile_author /></Layout_author >} />
        <Route path="/edit_profile_author" element={<Layout_author ><Edit_profile_author /></Layout_author >} />
        <Route path="/change_password_author" element={<Layout_author ><Change_password_author /></Layout_author >} />
        <Route path="/stall_allocation_author" element={<Layout_author ><Stall_allocation_author /></Layout_author >} />
        <Route path="/view_schedules_author" element={<Layout_author ><View_schedules_author /></Layout_author >} />
        <Route path="/events_author" element={<Layout_author ><Events_author /></Layout_author >} />
        <Route path="/event_details_author" element={<Layout_author ><Event_details_author /></Layout_author >} />
        <Route path="/view_ticket_author" element={<Layout_author ><View_ticket_author /></Layout_author >} />

        {/*Admin route*/}
        <Route path="/admin_dashboard" element={<Layout_admin ><Admin_dashboard /></Layout_admin >} />
        <Route path="/admin_profile" element={<Layout_admin ><Admin_profile /></Layout_admin >} />
        <Route path="/admin_announcement" element={<Layout_admin ><Admin_announcement /></Layout_admin >} />

        <Route path="/announcement_admin" element={<Layout_admin ><Announcement_view /></Layout_admin >} />
        <Route path="/profile_admin" element={<Layout_admin ><Profile_admin /></Layout_admin >} />
        <Route path="/edit_profile_admin" element={<Layout_admin ><Edit_profile_admin /></Layout_admin >} />
        <Route path="/change_password_admin" element={<Layout_admin ><Change_password_admin /></Layout_admin >} />
        <Route path="/view_feedback_admin" element={<Layout_admin ><View_feedback_admin /></Layout_admin >} />
        <Route path="/stall_allocation_admin" element={<Layout_admin ><Stall_allocation_admin /></Layout_admin >} />
        <Route path="/view_schedules_admin" element={<Layout_admin ><View_schedules_admin /></Layout_admin >} />
        <Route path="/add_oc_admin" element={<Layout_admin ><Add_Oc_Admin /></Layout_admin >} />
        <Route path="/sponsor_register_admin" element={<Layout_admin ><Sponsor_register_admin /></Layout_admin >} />
        <Route path="/stall_register_admin" element={<Layout_admin ><Stall_register_admin /></Layout_admin >} />
        <Route path="/stall_location_admin" element={<Layout_admin ><Stall_location_admin /></Layout_admin >} />
        <Route path="/badge_details_admin" element={<Layout_admin ><Badge_details_admin /></Layout_admin >} />

        {/*Committee route*/}
        <Route path="/announcement_oc" element={<Layout_oc ><Announcement /></Layout_oc >} />
        <Route path="/profile_oc" element={<Layout_oc ><Profile_oc /></Layout_oc >} />
        <Route path="/edit_profile_oc" element={<Layout_oc ><Edit_profile_oc /></Layout_oc >} />
        <Route path="/change_password_oc" element={<Layout_oc ><Change_password_oc /></Layout_oc >} />
        <Route path="/view_feedback_oc" element={<Layout_oc ><View_feedback_oc /></Layout_oc >} />
        <Route path="/add_winners" element={<Layout_oc ><Add_winners /></Layout_oc >} />
        <Route path="/view_events_oc" element={<Layout_oc ><View_events_oc /></Layout_oc >} />
        <Route path="/event_details_oc" element={<Layout_oc ><Event_details_oc /></Layout_oc >} />
        <Route path="/add_event_oc" element={<Layout_oc ><Add_event_oc /></Layout_oc >} />
        <Route path="/no_events" element={<Layout_oc ><No_events /></Layout_oc >} />
        <Route path="/update_schedule_oc" element={<Layout_oc ><Update_schedule /></Layout_oc >} />
        <Route path="/upload_resource_oc" element={<Layout_oc ><Upload_resource_oc /></Layout_oc >} />
        <Route path="/sponsor_register_oc" element={<Layout_oc ><Sponsor_register_admin /></Layout_oc >} />
        <Route path="/stall_register_oc" element={<Layout_oc ><Stall_register_admin /></Layout_oc >} />
        <Route path="/stall_location_oc" element={<Layout_oc ><Stall_location_admin /></Layout_oc >} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

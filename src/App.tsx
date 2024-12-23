import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRcode from './pages/QRcode';
import ResourceHome from '../src/pages/Resource_main';
import ResourceUpload from './pages/Resource_upload';
import ResourceDone from './pages/Resource_done';

import LandingPage from "./pages/landingPage/landingPage.tsx";
import AboutUs from "./pages/landingPage/aboutUs.tsx";



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
import Register from './pages/Register'
import Stall_details from './pages/Stall_details'
import Schedule from './pages/Schedule'
// import Home from './Homepage'
import Navbar from './components/Navbar';
// import Navbar_sponsor from './components/Navbar_sponsor.tsx';

import MainLayout from './layout/layout_main';
import Login from './pages/Login';

import Signup from './pages/event/Sign_up.tsx';
import NoEvent from './pages/event/No_event.tsx';
import AddEvent from './pages/event/Add_event.tsx';
import Event from './pages/event/Event.tsx';

import ViewEvent from './pages/event/View_event.tsx';
import EventDetail from './pages/event/Event_detail.tsx';
import Ticket from './pages/event/Ticket.tsx';
import Resource from './pages/event/UploadResource.tsx';
//import Company from './pages/committee/Company.tsx';
import Announcement from './pages/announcement.tsx';
import Announcement_view from './pages/announcement_view.tsx';
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
import Participant_dashboard from "./pages/participant/Dashboard.tsx";
import Participant_profile from "./pages/participant/Profile.tsx";
import Participant_edit_profile from "./pages/participant/Edit_profile.tsx";
import Participant_event_schedules from './pages/participant/Event_schedule.tsx';
import Participant_announcement from "./pages/participant/Announcement.tsx";
import Participant_stall from "./pages/participant/Stall_allocation.tsx";
import Participant_sponsor from "./pages/participant/Sponsor.tsx";
import Participant_feedback from "./pages/participant/Feedbacks.tsx";
// participant other
import Profile_participant from "./pages/participant/Participant_profile.tsx";
import Change_password from "./pages/participant/Edit_password.tsx";
import Stall_allocation from "./pages/participant/Stall_allocation.tsx";
import View_events from './pages/participant/View_events.tsx';
import Event_schedules from './pages/participant/Event_schedule.tsx';
import View_winners from './pages/participant/all_winners.tsx';
import Event_details from './pages/participant/Event_details.tsx';

// speaker imports
import Layout_speaker from "./layout/layout_speaker.tsx";
import Speaker_dashboard from "./pages/speaker/Dashboard.tsx";
import Speaker_profile from "./pages/speaker/Profile.tsx";
import Speaker_edit_profile from "./pages/speaker/Edit_profile.tsx";
import Speaker_feedback from "./pages/speaker/Feedback.tsx";
import Speaker_announcement from "./pages/speaker/Announcement.tsx";
import Speaker_stall from "./pages/participant/Stall_allocation.tsx";
import Speaker_view_schedules from './pages/participant/Event_schedule.tsx';
import Speaker_resource from './pages/event/UploadResource.tsx';
// speaker other
import Profile_speaker from "./pages/speaker/Speaker_profile.tsx";
import Edit_profile_speaker from "./pages/speaker/Edit_profile_speaker.tsx";
import Change_password_speaker from "./pages/speaker/Edit_password_speaker.tsx";
import View_feedback_speaker from "./pages/committee/View_feedback.tsx";
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
import Admin_first from "./pages/admin/First_page.tsx";
import Admin_dashboard from "./pages/admin/Dashboard.tsx";
import Admin_2023 from "./pages/admin/2023.tsx";
import Admin_committee from "./pages/admin/Committee.tsx";
import Admin_speaker from "./pages/admin/Speaker.tsx";
import Admin_author from "./pages/admin/Author.tsx";
import Admin_sponsor from "./pages/admin/Sponsor.tsx";
import Admin_profile from "./pages/admin/Profile.tsx";
import Admin_edit_profile from "./pages/admin/Edit_profile.tsx";
import Admin_announcement from "./pages/admin/Announcement.tsx";
import Admin_feedback from "./pages/admin/Feedback.tsx";
import Admin_stall_allocation from "./pages/participant/Stall_allocation.tsx";
import Admin_view_schedules from './pages/event/Event_schedule.tsx';
// admin other
import Profile_admin from "./pages/admin/Admin_profile.tsx";
import Edit_profile_admin from "./pages/admin/Edit_profile_admin.tsx";
import Change_password_admin from "./pages/admin/Edit_password_admin.tsx";
import View_feedback_admin from "./pages/committee/View_feedback.tsx";
import Add_Oc_Admin from './pages/admin/add_oc_committee.tsx';
import Sponsor_register_admin from './pages/admin/Sponsor_register.tsx';
import Stall_register_admin from './pages/admin/Stall_register.tsx';
import Stall_location_admin from './pages/admin/Stall_location.tsx';
import Badge_details_admin from './pages/admin/Badge_details.tsx';


// oc imports
import Layout_oc from "./layout/layout_oc.tsx";
import Committee_dashboard from "./pages/committee/Dashboard.tsx";
import Committee_speaker from "./pages/committee/Speaker.tsx";
import Committee_author from "./pages/committee/Author.tsx";
import Committee_sponsor from "./pages/committee/Sponsor.tsx";
import Committee_profile from "./pages/committee/Profile.tsx";
import Committee_edit_profile from "./pages/committee/Edit_profile.tsx";
import Committee_announcement from "./pages/committee/Announcement.tsx";
import Committee_feedback from "./pages/committee/Feedback.tsx";
import Committee_stall from "./pages/committee/Stall.tsx";
import Committee_update_schedule from './pages/event/Event_schedule.tsx';
import Committee_upload_resource from "./pages/event/UploadResource.tsx";
// committee other
import Profile_oc from "./pages/committee/Oc_profile.tsx";
import Edit_profile_oc from "./pages/committee/Edit_profile_oc.tsx";
import Change_password_oc from "./pages/committee/Edit_password_oc.tsx";
import View_feedback_oc from "./pages/committee/View_feedback.tsx";
import Add_winners from "./pages/winners.tsx";
import View_events_oc from './pages/event/Event.tsx';
import Event_details_oc from './pages/committee/View_event_oc.tsx';
import Add_event_oc from './pages/event/Add_event.tsx';
import No_events from './pages/event/No_event.tsx';
import Company_details from "./pages/committee/Company_details.tsx";
//import View_profile from "./pages/sponsor/View_profile.tsx";
// import Stall_allocation_add from "./pages/participant/Stall_allocation.tsx";



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
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        {/*Sponsors routes*/}
        <Route path="/homepage" element={<Layout_sponsor ><Register /></Layout_sponsor >} />
        <Route path="/qrcode" element={<Layout_sponsor ><QRcode /></Layout_sponsor >} />
        <Route path="/resource-home" element={<Layout_sponsor ><ResourceHome /></Layout_sponsor >} />
        <Route path="/resource-upload" element={<Layout_sponsor ><ResourceUpload /></Layout_sponsor >} />
        <Route path="/resource-other" element={<Layout_sponsor ><Resourceother /></Layout_sponsor >} />
        <Route path="/resource-done" element={<Layout_sponsor ><ResourceDone /></Layout_sponsor >} />
        <Route path="/resource-docs" element={<ResourceDocs />} />
        <Route path="/resource-links" element={<ResourceLinks />} />
        <Route path="/resource-other" element={<ResourceOther />} />
        <Route path="/schedule" element={<MainLayout><Schedule /></MainLayout>} />
        <Route path="/stall-details" element={<MainLayout><Stall_details /></MainLayout>} />
        <Route path="/schedule" element={<Layout_sponsor ><Event_schedules/></Layout_sponsor >} />
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
        <Route path="/view_schedules" element={<Layout_sponsor ><Event_schedules/></Layout_sponsor >} />
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
        <Route path="/participant_dashboard" element={<Layout_participant ><Participant_dashboard/></Layout_participant >} />
        <Route path="/participant_profile" element={<Layout_participant ><Participant_profile/></Layout_participant >} />
        <Route path="/participant_edit_profile" element={<Layout_participant ><Participant_edit_profile /></Layout_participant >} />
        <Route path="/participant_view_schedules" element={<Layout_participant ><Participant_event_schedules/></Layout_participant >} />
        <Route path="/participant_announcement" element={<Layout_participant ><Participant_announcement/></Layout_participant >} />
        <Route path="/participant_stall" element={<Layout_participant ><Participant_stall/></Layout_participant >} />
        <Route path="/participant_sponsor" element={<Layout_participant ><Participant_sponsor/></Layout_participant >} />
        <Route path="/participant_feedback" element={<Layout_participant ><Participant_feedback /></Layout_participant >} />
        {/*participant other*/}
        <Route path="/announcement_participant" element={<Layout_participant ><Announcement_view /></Layout_participant >} />
        <Route path="/profile_participant" element={<Layout_participant ><Profile_participant /></Layout_participant >} />
        <Route path="/change_password" element={<Layout_participant ><Change_password /></Layout_participant >} />
        <Route path="/stall_allocation" element={<Layout_participant ><Stall_allocation /></Layout_participant >} />
        <Route path="/view_events" element={<Layout_participant ><View_events/></Layout_participant >} />
        <Route path="/view_schedules" element={<Layout_participant ><Event_schedules/></Layout_participant >} />
        <Route path="/view_winners" element={<Layout_participant ><View_winners/></Layout_participant >} />
        <Route path="/event_details" element={<Layout_participant ><Event_details/></Layout_participant >} />
        <Route path="/view_ticket" element={<Layout_participant ><Ticket/></Layout_participant >} />

        {/*Speaker route*/}
        <Route path="/speaker_dashboard" element={<Layout_speaker ><Speaker_dashboard /></Layout_speaker >} />
        <Route path="/speaker_profile" element={<Layout_speaker ><Speaker_profile /></Layout_speaker >} />
        <Route path="/speaker_edit_profile" element={<Layout_speaker ><Speaker_edit_profile /></Layout_speaker >} />
        <Route path="/speaker_feedback" element={<Layout_speaker ><Speaker_feedback /></Layout_speaker >} />
        <Route path="/speaker_announcement" element={<Layout_speaker ><Speaker_announcement /></Layout_speaker >} />
        <Route path="/speaker_stall" element={<Layout_speaker ><Speaker_stall /></Layout_speaker >} />
        <Route path="/speaker_view_schedules" element={<Layout_speaker ><Speaker_view_schedules /></Layout_speaker >} />
        <Route path="/speaker_resource" element={<Layout_speaker ><Speaker_resource /></Layout_speaker >} />
        {/*speaker other*/}
        <Route path="/announcement_speaker" element={<Layout_speaker ><Announcement_view /></Layout_speaker >} />
        <Route path="/profile_speaker" element={<Layout_speaker ><Profile_speaker /></Layout_speaker >} />
        <Route path="/edit_profile_speaker" element={<Layout_speaker ><Edit_profile_speaker /></Layout_speaker >} />
        <Route path="/change_password_speaker" element={<Layout_speaker ><Change_password_speaker /></Layout_speaker >} />
        <Route path="/view_feedback_speaker" element={<Layout_speaker ><View_feedback_speaker /></Layout_speaker >} />
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
        <Route path="/admin_2023" element={<Layout_admin ><Admin_2023 /></Layout_admin >} />
        <Route path="/admin_first" element={<Layout_admin ><Admin_first /></Layout_admin >} />
        <Route path="/admin_committee" element={<Layout_admin ><Admin_committee /></Layout_admin >} />
        <Route path="/admin_speaker" element={<Layout_admin ><Admin_speaker /></Layout_admin >} />
        <Route path="/admin_author" element={<Layout_admin ><Admin_author /></Layout_admin >} />
        <Route path="/admin_sponsor" element={<Layout_admin ><Admin_sponsor /></Layout_admin >} />
        <Route path="/admin_profile" element={<Layout_admin ><Admin_profile /></Layout_admin >} />
        <Route path="/admin_edit_profile" element={<Layout_admin ><Admin_edit_profile /></Layout_admin >} />
        <Route path="/admin_announcement" element={<Layout_admin ><Admin_announcement /></Layout_admin >} />
        <Route path="/admin_feedback" element={<Layout_admin ><Admin_feedback /></Layout_admin >} />
        <Route path="/admin_view_schedules" element={<Layout_admin ><Admin_view_schedules /></Layout_admin >} />
        <Route path="/admin_stall_allocation" element={<Layout_admin ><Admin_stall_allocation /></Layout_admin >} />
        {/*admin other*/}
        <Route path="/announcement_admin" element={<Layout_admin ><Announcement_view /></Layout_admin >} />
        <Route path="/profile_admin" element={<Layout_admin ><Profile_admin /></Layout_admin >} />
        <Route path="/edit_profile_admin" element={<Layout_admin ><Edit_profile_admin /></Layout_admin >} />
        <Route path="/change_password_admin" element={<Layout_admin ><Change_password_admin /></Layout_admin >} />
        <Route path="/view_feedback_admin" element={<Layout_admin ><View_feedback_admin /></Layout_admin >} />
        <Route path="/add_oc_admin" element={<Layout_admin ><Add_Oc_Admin /></Layout_admin >} />
        <Route path="/sponsor_register_admin" element={<Layout_admin ><Sponsor_register_admin /></Layout_admin >} />
        <Route path="/stall_register_admin" element={<Layout_admin ><Stall_register_admin /></Layout_admin >} />
        <Route path="/stall_location_admin" element={<Layout_admin ><Stall_location_admin /></Layout_admin >} />
        <Route path="/badge_details_admin" element={<Layout_admin ><Badge_details_admin /></Layout_admin >} />

        {/*Committee route*/}
        <Route path="/committee_dashboard" element={<Layout_oc ><Committee_dashboard /></Layout_oc >} />
        <Route path="/committee_speaker" element={<Layout_oc ><Committee_speaker /></Layout_oc >} />
        <Route path="/committee_author" element={<Layout_oc ><Committee_author /></Layout_oc >} />
        <Route path="/committee_sponsor" element={<Layout_oc ><Committee_sponsor /></Layout_oc >} />
        <Route path="/committee_profile" element={<Layout_oc ><Committee_profile /></Layout_oc >} />
        <Route path="/committee_edit_profile" element={<Layout_oc ><Committee_edit_profile /></Layout_oc >} />
        <Route path="/committee_announcement" element={<Layout_oc ><Committee_announcement /></Layout_oc >} />
        <Route path="/committee_feedback" element={<Layout_oc ><Committee_feedback /></Layout_oc >} />
        <Route path="/committee_update_schedule" element={<Layout_oc ><Committee_update_schedule /></Layout_oc >} />
        <Route path="/committee_upload_resource" element={<Layout_oc ><Committee_upload_resource /></Layout_oc >} />
        <Route path="/committee_stall" element={<Layout_oc ><Committee_stall /></Layout_oc >} />
        {/*committee other*/}
        <Route path="/company_details" element={<Layout_oc ><Company_details /></Layout_oc >} />
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
        <Route path="/sponsor_register_oc" element={<Layout_oc ><Sponsor_register_admin /></Layout_oc >} />
        <Route path="/stall_register_oc" element={<Layout_oc ><Stall_register_admin /></Layout_oc >} />
        <Route path="/stall_location_oc" element={<Layout_oc ><Stall_location_admin /></Layout_oc >} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

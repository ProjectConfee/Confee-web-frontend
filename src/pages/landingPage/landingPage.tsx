import Navbar from "./landingPageNav";
import Home from "./home";
import AboutUs from "./aboutUs.tsx";
import KeynoteSpeakers from "./keynoteSpeakers.tsx";
import Sponsors from "./sponserList.tsx";
import ContactUs from "./contactUs.tsx";



const LandingPage = () => (
    <>
        <Navbar/>
        <Home/>
        <AboutUs/>
        <KeynoteSpeakers/>
        <Sponsors/>
        <ContactUs/>
    </>
);

export default LandingPage

import { Link } from 'react-router-dom';

// import LOGO from '../assets/logo.jpeg';

import { useState } from "react";

const Navbar_admin = () => {
    const [open, setOpen] = useState(true);

    const Menus = [
        { title: "Dashboard", src: "dashboard", path: "/admin_dashboard", gap: true },
        { title: "Profile", src: "profile", path: "/admin_profile", gap: true },
        // { title: "Organizing Committee", src: "committee", path: "/add_oc_admin", gap: true },
        // { title: "New Badges", src: "badge", path: "/badge_details_admin", gap: true },
        { title: "Schedule", src: "schedule", path: "/admin_view_schedules", gap: true },
        { title: "Innovation Studio", src: "sponsor", path: "/admin_stall_allocation", gap: true },
        { title: "Announcement", src: "announcement", path: "/admin_announcement", gap: true },
        { title: "Feedback", src: "feedback", path: "/admin_feedback", gap: true },
        { title: "Logout", src: "logout", path: "/" },
    ];



    return (
        <div className="flex">
            <div className={`${open ? "w-72" : "w-20"} bg-white  h-screen p-5 pt-8 relative duration-300`}>
                <img alt="Logo"
                     src="./src/assets/control.png"
                     className={`absolute cursor-pointer -right-3 top-9 w-7  bg-[#050C9B]relative
         border-2 rounded-full  ${!open && "rotate-180"}`}
                     onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center"></div>
                <ul className="pt-0">
                    {Menus.map((menu, index) => (
                        <li
                            key={index}
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-[#3572EF] hover:rounded-r-3xl hover:text-white text-black text-m items-center gap-x-4 ${menu.gap ? "mt-3" : "mt-2"}`}
                        >
                            <Link to={menu.path} className="flex items-center gap-x-4 w-full">
                                <div className="size-6">
                                    <img src={`./src/assets/${menu.src}.svg`} alt={menu.title} className="group-hover:bg-white" />
                                </div>
                                <span className={`${!open && "hidden"} origin-left duration-200 group-hover:text-white`}>
                                {menu.title}
                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="h-screen flex-1 p-7">
                {/*<div className='absolute ml-[0%] w-20 mr-[99%] mb-[100%] mt-[0%]'>*/}
                {/*  <img src={LOGO} className='bg-cover w-full h-full' alt="Logo" />*/}
                {/*</div>*/}
                <div>
                    <br></br>
                    {/* Content area */}
                </div>
            </div>

        </div>
    );
};

export default Navbar_admin;

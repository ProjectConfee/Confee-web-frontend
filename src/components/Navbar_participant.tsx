import { Link } from 'react-router-dom';
import { useState } from "react";
import LOGO from '../assets/logo-box-removebg.png'; // Replace with the actual path to your logo

const Navbar_participant = () => {
  const [open] = useState(true);

  const Menus = [
    { title: "Dashboard", src: "home", path: "/participant_dashboard", gap: true },
    { title: "Profile", src: "profile", path: "/participant_profile", gap: true },
    { title: "Events", src: "events", path: "#", gap: true },
    { title: "Schedule", src: "schedule", path: "/participant_view_schedules", gap: true },
    { title: "Winners", src: "winner", path: "#", gap: true },
    { title: "Innovation Studio", src: "sponsor", path: "/participant_stall", gap: true },
    { title: "Feedback", src: "feedback", path: "/participant_feedback", gap: true },
    { title: "Announcement", src: "announcement", path: "/participant_announcement", gap: true },
    { title: "Logout", src: "logout", path: "/" },
  ];

  return (
      <div className="flex bg-white w-72"
           // style={{backgroundColor: '#5773ff'}}
      >
        <div className={`${open ? "w-72" : "w-20"}  h-screen pl-6 relative duration-300`}>
          {/* Logo Section */}
          <div className="flex items-center justify-center ">
            <img src={LOGO} alt="Logo" className="w-28 h-28 "/>
            {/*<div className=" ml-2 font-semibold text-2xl">Confee</div>*/}
            {/* Adjust size as needed */}
          </div>
          {/* Menu Items */}
          <ul className="pt-0.5">
            {Menus.map((menu, index) => (
                <li
                    key={index}
                    className={`flex rounded-md p-2 cursor-pointer hover:bg-[#3572EF] hover:rounded-r-3xl hover:text-white text-black text-lg items-center gap-x-4 ${menu.gap ? "mt-3" : "mt-2"}`}
                >
                  <Link to={menu.path} className="flex items-center gap-x-4 w-full">
                    <div className="size-6">
                      <img src={`./src/assets/${menu.src}.svg`} alt={menu.title} className="group-hover:bg-white"/>
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
          <div>
            <br/>
            {/* Content area */}
          </div>
        </div>
      </div>
  );
};

export default Navbar_participant;

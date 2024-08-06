import { Link } from 'react-router-dom';
import { useState } from "react";
import LOGO from '../assets/logo.png'; // Replace with the actual path to your logo

const Navbar_participant = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Home", src: "home", path: "/view_events", gap: true },
    { title: "Profile", src: "profile", path: "/profile_participant", gap: true },
    { title: "Schedule", src: "schedule", path: "/view_schedules", gap: true },
    { title: "Winners", src: "winner", path: "/view_winners", gap: true },
    { title: "Innovation Studio", src: "sponsor", path: "/stall_allocation", gap: true },
    { title: "Announcement", src: "announcement", path: "/announcement_participant", gap: true },
    { title: "Logout", src: "logout", path: "/" },
  ];

  return (
    <div className="flex">
      <div className={`${open ? "w-80" : "w-20"} bg-white h-screen pl-2 pt-4 relative duration-300`}>
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-4">
          <img src={LOGO} alt="Logo" className="w-16 h-16 rounded-full" />
          <div className=" ml-2 font-semibold text-2xl">Confee</div>
         {/* Adjust size as needed */}
        </div>
        {/* Menu Items */}
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
        <div>
          <br />
          {/* Content area */}
        </div>
      </div>
    </div>
  );
};

export default Navbar_participant;

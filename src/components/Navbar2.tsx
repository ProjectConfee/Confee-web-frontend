import { Link } from 'react-router-dom';
import { useState } from "react";

const Navbar2 = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Home", src: "home", path: "/homepage", gap: true },
    { title: "Profile", src: "profile", path: "/profile", gap: true },
    { title: "Stall Details", src: "stall", path: "/stall-details", gap: true },
    { title: "Schedule", src: "schedule", path: "/schedule", gap: true },
    { title: "QR Code", src: "qrcode", path: "/qrcode", gap: true },
    { title: "Resource Upload", src: "upload", path: "/resource-home", gap: true },
    { title: "Announcement", src: "announcement", path: "/announcements", gap: true },
    { title: "Logout", src: "logout", path: "/" },
  ];

  return (
    <div className="flex">
      <div className={`${open ? "w-72" : "w-20"} bg-white h-screen px-5 pt-2  relative duration-300 shadow-xl`}>
      <div className="flex items-center cursor-pointer ">
        <div className="logo ">
          <img src="./src/assets/logo.jpeg" alt="Logo" className="w-20 h-20" />
        </div>
        <div className="text-4xl pl-2 font-semibold">
          Confee
        </div>
      </div>
        <div className="flex gap-x-4 items-center"></div>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`flex  p-2 py-4 cursor-pointer hover:bg-[#3572EF] hover:text-white hover:rounded-r-3xl text-xl  items-center gap-x-4 ${menu.gap ? "mt-3" : "mt-2"}`}
            >
              <Link to={menu.path} className="flex items-center gap-x-4 w-full">
                <div className="size-10">
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
    </div>
  );
};

export default Navbar2;

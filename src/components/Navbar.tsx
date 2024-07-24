import { Link } from 'react-router-dom';
import LOGO from '../assets/logo.jpeg';
import { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Home", src: "home", path: "/homepage", gap: true },
    { title: "Profile", src: "User", path: "/profile", gap: true },
    { title: "Stall Details", src: "stall", path: "/stall-details", gap: true },
    { title: "Schedule", src: "schedule", path: "/schedule", gap: true },
    { title: "QR Code", src: "qr-code", path: "/qrcode", gap: true },
    { title: "Resource Upload", src: "upload", path: "/resource-home", gap: true },
    { title: "Announcement", src: "marketing", path: "/announcement", gap: true },
    { title: "Logout", src: "logout", path: "/" },
  ];

  return (
    <div className="flex">
      <div className={`${open ? "w-72" : "w-20"} bg-white h-screen p-5 pt-8 relative duration-300`}>
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 bg-cyan-700 relative
           border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center"></div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-[#050C9B] hover:text-white text-black text-sm items-center gap-x-4 ${menu.gap ? "mt-3" : "mt-2"}`}
            >
              <Link to={menu.path} className="flex items-center gap-x-4 w-full">
                <div className="size-10">
                  <img src={`./src/assets/${menu.src}.png`} alt={menu.title} />
                </div>
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <div className='absolute ml-[0%] w-20 mr-[99%] mb-[100%] mt-[0%]'>
          <img src={LOGO} className='bg-cover w-full h-full' alt="Logo" />
        </div>
        <div>
          <br></br>
          {/* Content area */}
        </div>
      </div>
    </div>
  );
};

export default App;






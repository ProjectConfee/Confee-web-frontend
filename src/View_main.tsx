

// export default register
import LOGO from "./assets/logo.jpeg";


import { useState } from "react";
const View_main = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    // { title: "", src: "logo" , gap: true  },
    { title: "Home", src: "home", gap: true },
    { title: "Profile", src: "User", gap: true },
    { title: "Stall Details", src: "stall", gap: true },
    { title: "Schedule", src: "schedule", gap: true },
    { title: "QR Code", src: "qr-code", gap: true },
    { title: "Resource Upload", src: "upload", gap: true },
    { title: "Announcement ", src: "marketing", gap: true },
    { title: "Logout", src: "logout", gap: true },
  ];
 
  const linkedButtons = [
    { id: 1, label: 'Images/Videos', link: './Resource_upload' },
    { id: 2, label: 'Documents', link: 'https://link2.com' },
    { id: 3, label: 'Links ', link: 'https://link3.com' },
    { id: 4, label: 'Other ', link: 'https://link4.com' },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-cyan-700 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 bg-cyan-700relative
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center"></div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-3" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <div className="size-10">
                <img src={`./src/assets/${Menu.src}.png`} />
              </div>

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7 ">
        <div className="absolute ml-[0%] w-20 mr-[99%] mb-[100%] mt-[0%] ">
          <img src={LOGO} className="bg-cover w-full h-full " />
        </div>
        <h1 className="text-2xl font-semibold text-center text-sky-700 ">
          ICTer Conference 2024
        </h1>
        <h2 className="text-2xl font-semibold text-center ">
          Welcome Sponsors!
        </h2>
       
        <div className="min-h-screen flex items-start justify-center mt-60">
      <div className="grid grid-cols-2 gap-4 w-full max-w-4xl p-4">
        {linkedButtons.map((button) => (
          <div key={button.id} className="flex justify-center items-center bg-slate-50 p-6 rounded-md shadow-md">
            <a
              href={button.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-800 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              {button.label}
            </a>
          </div>
        ))}
      </div>
    </div>

    



      </div>
    </div>
  );
};
export default View_main;

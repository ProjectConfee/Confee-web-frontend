// import { useState } from "react"

// const register = () => {
//      const [open,setopen]=useState(true);
//   return (
//     <div className="flex">
//     <div className="${open ? 'w-72':'w-20'} h-screen bg-slate-900 relative ">
//      <img src="./src/assets/control.png"  className="absolute cursor-pointer  rounded-full right-3 top-9 w-7 border-2 border-slate-900"  />
//     </div>
//     <div className="p-7 text-2xl font-semibold flex-1 h-screen "> 
//          <h1>Homepage</h1>
//     </div>
//     </div>
//   )
// }

// export default register
import { Link } from 'react-router-dom';
import LOGO  from '../assets/logo.png'
import HOME1 from '../assets/image41.png'
import { useState } from "react";
const App = () => {
  const [open, setOpen] = useState(true);
  // const Menus = [
  //   // { title: "", src: "logo" , gap: true  },
  //   { title: "Home", src: "home" , gap: true  },
  //   { title: "Profile", src: "User" , gap: true  },
  //   { title: "Stall Details", src: "stall", gap: true  },
  //   { title: "Schedule", src: "schedule", gap: true  },
  //   { title: "QR Code", src: "qr-code" , gap: true },
  //   { title: "Resource Upload", src: "upload", gap: true  },
  //   { title: "Announcement ", src: "marketing", gap: true },
  //   { title: "Logout", src: "logout", gap: true  },
  // ];
  const Menus = [
    { title: "Home", src: "home", path: "/homepage", gap: true },
    { title: "Profile", src: "User", path: "/profile", gap: true },
    { title: "Stall Details", src: "stall", path: "/stall-details", gap: true },
    { title: "Schedule", src: "schedule", path: "/schedule", gap: true },
    { title: "QR Code", src: "qr-code", path: "/qrcode", gap: true },
    { title: "Resource Upload", src: "upload", path: "/resource-home", gap: true },
    { title: "Announcement", src: "marketing", path: "/announcement", gap: true },
    { title: "Logout", src: "logout", path: "/logout" },
  ];

  return (
    <div className="flex">
    <div className={`${open ? "w-72" : "w-20"} bg-stone-300  h-screen p-5 pt-8 relative duration-300`}>
    <img
        src="./src/assets/control.png" 
        className={`absolute cursor-pointer -right-3 top-9 w-7  bg-[#050C9B]relative
         border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center"></div>
      <ul className="pt-6">
        {Menus.map((menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-[#050C9B] hover:text-white text-black text-sm items-center gap-x-4 ${menu.gap ? "mt-3" : "mt-2"}`}          >
            <Link to={menu.path} className="flex items-center gap-x-4">
              <div className="size-10"><img src={`./src/assets/${menu.src}.png`} alt={menu.title} /></div>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="h-screen flex-1 p-7">
      <div className='absolute ml-[0%] w-20 mr-[99%] mb-[100%] mt-[0%]'><img src={LOGO} className='bg-cover w-full h-full' alt="Logo" /></div>
      <div>
        <br></br>
      <h1 className="text-2xl font-semibold text-center text-sky-700 ">ICTer Conference 2024</h1>
        <h2 className="text-2xl font-semibold text-center ">Welcome Sponsors!</h2>
        <div>
        <br></br>
        <p className='text-justify'>The International Conference on Advances in ICT for Emerging Regions (ICTer) is a prestigious gathering that continues the legacy of the International Information Technology Conference (IITC) held in Sri Lanka since 1998. Serving as a vital platform for global scholars, researchers, and practitioners, ICTer fosters collaboration and showcases cutting-edge advancements in information and communication technology. Through a rigorous peer-review process, high-quality papers are selected for presentation and publication with recognized publishers, driving both academic discourse and real-world impact. More than just a conference, ICTer cultivates a vibrant community where participants exchange ideas, forge partnerships, and collectively strive to address the challenges facing emerging regions. Committed to innovation, inclusivity, and excellence, ICTer invites all stakeholders to join in shaping a brighter future through the transformative power of ICT.</p></div>
        <div className='w-80 place-items-center'>
         <img src={HOME1} alt="Logo" />
        </div>
      </div>
    </div>
    </div>
  );
};
export default App;

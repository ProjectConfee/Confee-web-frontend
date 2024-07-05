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
import LOGO  from './assets/logo.jpeg'


import { useState } from "react";
const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    // { title: "", src: "logo" , gap: true  },
    { title: "Home", src: "home" , gap: true  },
    { title: "Profile", src: "User" , gap: true  },
    { title: "Stall Details", src: "stall", gap: true  },
    { title: "Schedule", src: "schedule", gap: true  },
    { title: "QR Code", src: "qr-code" , gap: true },
    { title: "Resource Upload", src: "upload", gap: true  },
    { title: "Announcement ", src: "marketing", gap: true },
    { title: "Logout", src: "logout", gap: true  },
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
        <div className="flex gap-x-4 items-center">
         
         
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-3" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            > 
               <div className="size-10"><img src={`./src/assets/${Menu.src}.png` } /></div>
              
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7 ">
      <div className='absolute ml-[0%] w-20 mr-[99%] mb-[100%] mt-[0%] ' ><img src={LOGO} className='bg-cover w-full h-full ' /></div>
      <h1 className="text-2xl font-semibold text-center text-sky-700 ">ICTer Conference 2024</h1>
        <h2 className="text-2xl font-semibold text-center ">Welcome Sponsors!</h2>
        <div>
        <br></br>
 


       </div>
      </div>
    </div>
  );
}
;
export default App;
import { Link } from 'react-router-dom';

const Navbar_admin = () => {
    const Menus = [
        {
            title: "Dashboard",
            src: "dashboard",
            path: "/admin_dashboard",
            gap: true
        },
        {
            title: "Profile",
            src: "profile",
            path: "/admin_profile",
            gap: true
        },
        {
            title: "Events",
            src: "events",
            path: "#",
            gap: true
        },
        {
            title: "Schedule",
            src: "schedule",
            path: "/admin_view_schedules",
            gap: true
        },
        {
            title: "Innovation Studio",
            src: "sponsor",
            path: "/admin_stall_allocation",
            gap: true
        },
        {
            title: "Announcement",
            src: "announcement",
            path: "/admin_announcement",
            gap: true
        },
        {
            title: "Feedback",
            src: "feedback",
            path: "/admin_feedback",
            gap: true
        },
        {
            title: "Logout",
            src: "logout",
            path: "/"
        },
    ];

    return (
        <div className="flex">
            <div className="w-64 bg-white h-screen p-5 pt-8 relative">
                <ul className="pt-0">
                    {Menus.map((menu, index) => (
                        <li
                            key={index}
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-[#3572EF] hover:rounded-r-3xl hover:text-white text-black text-m items-center gap-x-4 ${menu.gap ? "mt-3" : "mt-2"}`}
                        >
                            <Link to={menu.path}
                                  className="flex items-center gap-x-4 w-full"
                            >
                                <div className="size-6">
                                    <img src={`./src/assets/${menu.src}.svg`}
                                         alt={menu.title}
                                         className="group-hover:bg-white"
                                    />
                                </div>
                                <span className="origin-left duration-200 group-hover:text-white">
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

export default Navbar_admin;

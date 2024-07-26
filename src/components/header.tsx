// import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const Header = () => {
    const Menus = [
        { title: "ICTer", path: "/icter" },
        { title: "ABOUT US", path: "/about-us" },
        { title: "SPEAKERS", path: "/speakers" },
        { title: "SPONSORS", path: "/sponsors" },
        { title: "FEEDBACK", path: "/feedback" },
        { title: "CONTACT US", path: "/contact-us" }
    ];

    return (
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            {/*<div className="font-semibold text-3xl">*/}
            {/*    MyApp*/}
            {/*</div>*/}
            <div className="flex space-x-6">
                {Menus.map((menu, index) => (
                    <Link
                        key={index}
                        to={menu.path}
                        className="hover:text-gray-300 transition-colors duration-200"
                    >
                        {menu.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Header;

// import React from 'react';

import {Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* Left Side: Conference Cards */}
            <div className="w-2/3 p-4 grid grid-cols-2 gap-4">
                {/* Pre-Conference Card */}
                <div className="bg-white shadow-md rounded-2xl p-4">
                    <h3 className="text-lg font-semibold">Pre-Conference</h3>
                    <p>Details about pre-conference activities.</p>
                    <img src="src/assets/pre-conference.png" alt="Pre-Conference"
                         className="w-4/5 h-40 object-cover mt-4 mb-2 rounded-lg mx-10"/>
                </div>

                {/* Post-Conference Card */}
                <div className="bg-white shadow-md rounded-2xl p-4">
                    <h3 className="text-lg font-semibold">Post-Conference</h3>
                    <p>Details about post-conference activities.</p>
                    <img src="src/assets/post-conference.png" alt="Post-Conference"
                         className="w-4/5 h-36 object-cover mt-4 mb-2 rounded-lg mx-10"/>
                </div>

                {/* Conference Day 1 Card */}
                <div className="bg-white shadow-md rounded-2xl p-4">
                    <h3 className="text-lg font-semibold">Conference Day 1</h3>
                    <p>Schedule or details for Day 1.</p>
                    <img src="src/assets/conference1.png" alt="Conference Day 1"
                         className="w-4/5 h-40 object-cover mt-4 mb-2 rounded-lg mx-10"/>
                </div>

                {/* Conference Day 2 Card */}
                <div className="bg-white shadow-md rounded-2xl p-4">
                    <h3 className="text-lg font-semibold">Conference Day 2</h3>
                    <p>Schedule or details for Day 2.</p>
                    <img src="src/assets/conference2.png" alt="Conference Day 2"
                         className="w-4/5 h-40 object-cover mt-4 mb-2 rounded-lg mx-10"/>
                </div>
            </div>

            {/* Right Side: Profile and Sessions */}
            <div className="w-1/3 p-4">
                {/* Profile Card */}
                <Link to="/speaker_profile">
                    <div className="bg-white shadow-md rounded-2xl p-4 mb-4">
                        <img src="src/assets/profiles.png" alt="Profile" className="w-24 h-24 rounded-full mx-auto" />
                        <h2 className="text-xl font-bold text-center mt-2">Anjalee Fernando</h2>
                        <p className="text-center text-gray-600">anjalee@gmail.com</p>
                    </div>
                </Link>

                {/* Sessions Cards */}
                <div className="bg-white shadow-md rounded-2xl p-4">
                    <h3 className="text-lg font-semibold mb-2">Sessions</h3>
                    <div className="space-y-4">
                        {/* Repeat for each session */}
                        <div className="border border-gray-200 rounded-2xl p-4">
                            <h4 className="text-md font-bold">Artificial Intelligence</h4>
                            <p className="text-gray-600">Time: 10:00 AM</p>
                            <p className="text-gray-600">Date: November 10, 2024</p>
                            <p className="text-gray-600">Venue: Auditorium</p>
                        </div>
                        <div className="border border-gray-200 rounded-2xl p-4">
                            <h4 className="text-md font-bold">Machine Learning</h4>
                            <p className="text-gray-600">Time: 2:00 PM</p>
                            <p className="text-gray-600">Date: November 10, 2024</p>
                            <p className="text-gray-600">Venue: Auditorium</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

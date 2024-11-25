import { Link } from "react-router-dom";
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle
} from "react-icons/io";

const Dashboard = () => {
    return (
        <div className="flex flex-col">
            {/* Top Section: Conference Details and Profile Card */}
            <div className="flex justify-center p-4">
                {/* Conference Details Card */}
                <div className="w-[50%] h-[300px] bg-white shadow-md rounded-2xl p-4 text-center">
                    <h2 className="text-2xl font-bold mb-2">
                        ICTer Conference 2024
                    </h2>
                    <img
                        src="src/assets/icter_logo.png"
                        alt="Conference Logo"
                        className="w-52 h-auto object-cover mb-4 mx-auto"
                    />

                    {/* Start Date and End Date */}
                    <div className="flex justify-center space-x-8">
                        <p className="text-gray-600">
                            <strong>From: </strong>
                            November 05, 2024
                        </p>
                        <p className="text-gray-600">
                            <strong>To: </strong>
                            November 08, 2024
                        </p>
                    </div>

                    <p className="text-gray-600 mt-4">
                        <strong>Location: </strong>
                        Marino Beach Hotel, Colombo, Sri Lanka
                    </p>
                </div>

                {/* Profile Card */}
                <Link
                    to="/speaker_profile"
                    className="w-[30%] ml-14"
                >
                    <div className="bg-white shadow-md rounded-2xl p-4 h-[300px]">
                        <img
                            src="src/assets/profiles.png"
                            alt="Profile"
                            className="w-44 h-44 rounded-full mx-auto mt-5"
                        />
                        <h2 className="text-xl font-bold text-center mt-2">
                            Anjalee Fernando
                        </h2>
                        <p className="text-center text-gray-600">
                            anjalee@gmail.com
                        </p>
                    </div>
                </Link>
            </div>

            {/* Middle Section: Workshop and Session Sections */}
            <div className="flex justify-between items-start p-4">
                {/* Left Side: Workshop Section */}
                <div className="w-3/5">
                    <h2 className="text-xl font-bold mb-4">
                        Workshops
                    </h2>
                    <div className="flex items-center mb-8">
                        <IoIosArrowDropleftCircle
                            className="text-gray-600 cursor-pointer mr-4"
                            size={32}
                        />
                        <div className="grid grid-cols-2 gap-5">
                            {/* Pre-Conference Card */}
                            <div className="bg-white shadow-md rounded-2xl p-4">
                                <h3 className="text-xl font-bold">
                                    Pre-Conference
                                </h3>
                                <p>
                                    <strong>Date: </strong>
                                    5th November 2024
                                </p>
                                <img
                                    src="src/assets/pre-conference.png"
                                    alt="Pre-Conference"
                                    className="w-3/4 h-32 object-cover mt-4 mb-2 rounded-lg mx-10"
                                />
                            </div>

                            {/* Post-Conference Card */}
                            <div className="bg-white shadow-md rounded-2xl p-4">
                                <h3 className="text-xl font-bold">
                                    Post-Conference
                                </h3>
                                <p>
                                    <strong>Date: </strong>
                                    8th November 2024
                                </p>
                                <img
                                    src="src/assets/post-conference.png"
                                    alt="Post-Conference"
                                    className="w-3/4 h-32 object-cover mt-4 mb-2 rounded-lg mx-10"
                                />
                            </div>
                        </div>
                        <IoIosArrowDroprightCircle
                            className="text-gray-600 cursor-pointer ml-4"
                            size={32}
                        />
                    </div>

                    {/* Conference Section */}
                    <h2 className="text-xl font-bold mb-4">
                        Conference Day
                    </h2>
                    <div className="flex items-center">
                        <IoIosArrowDropleftCircle
                            className="text-gray-600 cursor-pointer mr-4"
                            size={32}
                        />
                        <div className="grid grid-cols-2 gap-5">
                            {/* Conference Day 1 Card */}
                            <div className="bg-white shadow-md rounded-2xl p-4">
                                <h3 className="text-xl font-bold">
                                    Conference Day 1
                                </h3>
                                <p>
                                    <strong>Date: </strong>
                                    6th November 2024
                                </p>
                                <img
                                    src="src/assets/conference1.png"
                                    alt="Conference Day 1"
                                    className="w-3/4 h-32 object-cover mt-4 mb-2 rounded-lg mx-10"
                                />
                            </div>

                            {/* Conference Day 2 Card */}
                            <div className="bg-white shadow-md rounded-2xl p-4">
                                <h3 className="text-xl font-bold">
                                    Conference Day 2
                                </h3>
                                <p>
                                    <strong>Date: </strong>
                                    7th November 2024
                                </p>
                                <img
                                    src="src/assets/conference2.png"
                                    alt="Conference Day 2"
                                    className="w-3/4 h-32 object-cover mt-4 mb-2 rounded-lg mx-10"
                                />
                            </div>
                        </div>
                        <IoIosArrowDroprightCircle
                            className="text-gray-600 cursor-pointer ml-4"
                            size={32}
                        />
                    </div>
                </div>

                {/* Right Side: Session Section */}
                <div className="w-1/3 ml-8">
                    <h2 className="text-xl font-bold mb-4">
                        Sessions
                    </h2>
                    <div className="bg-white shadow-md rounded-2xl px-10 py-5">
                        <div className="flex flex-col gap-4">
                            {/* Session Card 1 */}
                            <div className="bg-blue-50 shadow-md rounded-2xl p-4">
                                <h3 className="text-xl font-bold">
                                    Session 1
                                </h3>
                                <p>
                                    <strong>Topic: </strong>
                                    Introduction to React
                                </p>
                                <p>
                                    <strong>Date: </strong>
                                    6th November 2024
                                </p>
                                <p>
                                    <strong>Time: </strong>
                                    10:00 AM - 12:00 PM
                                </p>
                                <p>
                                    <strong>Location: </strong>
                                    Room A
                                </p>
                            </div>
                            {/* Session Card 2 */}
                            <div className="bg-blue-50 shadow-md rounded-2xl p-4">
                                <h3 className="text-xl font-bold">
                                    Session 2
                                </h3>
                                <p>
                                    <strong>Topic: </strong>
                                    Advanced TypeScript
                                </p>
                                <p>
                                    <strong>Date: </strong>
                                    7th November 2024
                                </p>
                                <p>
                                    <strong>Time: </strong>
                                    2:00 PM - 4:00 PM
                                </p>
                                <p>
                                    <strong>Location: </strong>
                                    Room B
                                </p>
                            </div>
                            <div className="bg-blue-50 shadow-md rounded-2xl p-4">
                                <h3 className="text-xl font-bold">
                                    Session 3
                                </h3>
                                <p>
                                    <strong>Topic: </strong>
                                    UI/UX Design Principles
                                </p>
                                <p>
                                    <strong>Date: </strong>
                                    8th November 2024
                                </p>
                                <p>
                                    <strong>Time: </strong>
                                    2:00 PM - 4:00 PM
                                </p>
                                <p>
                                    <strong>Location: </strong>
                                    Room A
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

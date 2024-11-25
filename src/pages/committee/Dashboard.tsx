// import React from 'react';
import {
    Link
} from "react-router-dom";
import {
    Doughnut
} from 'react-chartjs-2';
import 'chart.js/auto';  // Important for chart.js to work properly

const Dashboard = () => {
    // Data for the donut chart (example data)
    const seatDataDay1 = {
        labels: ['Booked Seats', 'Available Seats'],
        datasets: [
            {
                data: [60, 40], // Example: 60 booked, 40 available
                backgroundColor: ['#1E90FF', '#87CEFA'], // Blue colors
                hoverBackgroundColor: ['#1E90FF', '#87CEFA'],
            },
        ],
    };

    const seatDataDay2 = {
        labels: ['Booked Seats', 'Available Seats'],
        datasets: [
            {
                data: [80, 20], // Example: 80 booked, 20 available
                backgroundColor: ['#1E90FF', '#87CEFA'], // Blue colors
                hoverBackgroundColor: ['#1E90FF', '#87CEFA'],
            },
        ],
    };

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
                    to="/committee_profile"
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

            {/* Conference Participants Section */}
            <div className="p-4">
                <h2 className="text-2xl font-bold my-4 text-center">
                    Conference Participants
                </h2>
                <div className="flex justify-center space-x-10">
                    {/* Conference Day 1 Card */}
                    <div className="bg-white shadow-md rounded-2xl p-4 w-[60%] flex">
                        {/* Seat Details */}
                        <div className="w-1/2 pl-10">
                            <h3 className="text-2xl font-bold mb-10">
                                Conference Day 1
                            </h3>
                            <p className="text-lg mb-4">
                                <strong>Maximum Seats: </strong>
                                100
                            </p>
                            <p className="text-lg mb-4">
                                <strong>Booked Seats: </strong>
                                60
                            </p>
                            <p className="text-lg mb-4">
                                <strong>Available Seats: </strong>
                                40
                            </p>
                            {/*<Link to="/conference_day_1_details">*/}
                            {/*    <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4">View</button>*/}
                            {/*</Link>*/}
                        </div>
                        {/* Donut Chart */}
                        <div className="w-1/2 flex justify-center items-center">
                            <Doughnut
                                data={seatDataDay1}
                            />
                        </div>
                    </div>

                    {/* Conference Day 2 Card */}
                    <div className="bg-white shadow-md rounded-2xl p-4 w-[60%] flex">
                        {/* Seat Details */}
                        <div className="w-1/2 pl-10">
                            <h3 className="text-2xl font-bold mb-10">
                                Conference Day 2
                            </h3>
                            <p className="text-lg mb-4">
                                <strong>Maximum Seats: </strong>
                                100
                            </p>
                            <p className="text-lg mb-4">
                                <strong>Booked Seats: </strong>
                                80
                            </p>
                            <p className="text-lg mb-4">
                                <strong>Available Seats: </strong>
                                20
                            </p>
                            {/*<Link to="/conference_day_2_details">*/}
                            {/*    <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4">View</button>*/}
                            {/*</Link>*/}
                        </div>
                        {/* Donut Chart */}
                        <div className="w-1/2 flex justify-center items-center">
                            <Doughnut
                                data={seatDataDay2}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* User Profiles Section */}
            <div className="p-4">
                <h2 className="text-2xl font-bold my-4 text-center">
                    User Profiles
                </h2>
                <div className="flex justify-center space-x-8">
                    {/* Speaker Card */}
                    <div className="bg-white shadow-md rounded-2xl p-4 w-1/4 text-center">
                        <h3 className="text-xl font-bold mb-2">
                            Speaker
                        </h3>
                        <img
                            src="src/assets/speaker.png"
                            alt="Speaker"
                            className="w-40 h-40 rounded-full mx-auto mb-4"
                        />
                        <Link
                            to="/committee_speaker"
                        >
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600"
                            >
                                View
                            </button>
                        </Link>
                    </div>

                    {/* Author Card */}
                    <div className="bg-white shadow-md rounded-2xl p-4 w-1/4 text-center">
                        <h3 className="text-xl font-bold mb-2">
                            Author
                        </h3>
                        <img
                            src="src/assets/author.png"
                            alt="Author"
                            className="w-40 h-40 rounded-full mx-auto mb-4"
                        />
                        <Link
                            to="/committee_author"
                        >
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600"
                            >
                                View
                            </button>
                        </Link>
                    </div>

                    {/* Sponsor Card */}
                    <div className="bg-white shadow-md rounded-2xl p-4 w-1/4 text-center">
                        <h3 className="text-xl font-bold mb-2">
                            Sponsor
                        </h3>
                        <img
                            src="src/assets/sponsor.png"
                            alt="Sponsor"
                            className="w-40 h-40 rounded-full mx-auto mb-4"
                        />
                        <Link
                            to="/committee_sponsor"
                        >
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600"
                            >
                                View
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

import React from 'react';
import { FaUser, FaMicrophone, FaIdBadge } from 'react-icons/fa';
import { FaUsersGear } from "react-icons/fa6";
import { PiNewspaperClippingFill } from 'react-icons/pi';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface CardProps {
    userName: string;
    count: number;
    Icon: React.ElementType; // Accept a React component as an icon
}

const Card: React.FC<CardProps> = ({ userName, count, Icon }) => {
    return (
        <div className="flex items-center p-4 border rounded-lg shadow-lg bg-white w-52 h-32">
            <Icon className="text-4xl text-blue-500 mr-4" />
            <div>
                <div className="text-lg font-semibold text-center">{userName}</div>
                <div className="text-gray-500 text-center">{count}</div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const users = [
        { userName: 'Committee', count: 60, icon: FaUsersGear },
        { userName: 'Participants', count: 200, icon: FaUser },
        { userName: 'Authors', count: 10, icon: PiNewspaperClippingFill },
        { userName: 'Speakers', count: 20, icon: FaMicrophone },
        { userName: 'Sponsors', count: 50, icon: FaIdBadge },
    ];

    // Pie chart data with blue colors
    const data = {
        labels: ['Platinum', 'Gold', 'Silver'],
        datasets: [{
            label: 'Sponsors by Badge',
            data: [10, 20, 30], // Replace with actual data
            backgroundColor: [
                '#007bff', // Blue
                '#004085', // Dark Blue
                '#66b2ff', // Light Blue
            ],
            borderColor: '#ffffff',
            borderWidth: 1,
        }],
    };

    // Sample feedback data with profile photos
    const feedbacks = [
        { id: 1, name: 'Anjalee Fernando', feedback: 'Great event! Very informative and well-organized.', profilePhoto: 'src/assets/profiles.png' },
        { id: 2, name: 'Nadeesha Perera', feedback: 'The conference was well organized, and the topics covered were highly relevant.', profilePhoto: 'src/assets/profiles.png' },
        { id: 3, name: 'Ruwan Senewiratne', feedback: 'Excellent speakers and venue. Looking forward to the next one!', profilePhoto: 'src/assets/profiles.png' },
        { id: 4, name: 'Dumindu Silva', feedback: 'The keynote speakers were excellent, and the sessions were very informative.', profilePhoto: 'src/assets/profiles.png' },
    ];

    return (
        <div className="p-8">
            {/* Cards Section */}
            <div className="flex space-x-4 mb-8">
                {users.map((user, index) => (
                    <Card key={index} userName={user.userName} count={user.count} Icon={user.icon} />
                ))}
            </div>

            {/* Feedback Section and Pie Chart Section */}
            <div className="flex">
                {/* Feedback Section */}
                <div className="w-2/3 p-4">
                    <h2 className="text-xl font-semibold mb-4">Feedback</h2>
                    <div className="space-y-4">
                        {feedbacks.map(feedback => (
                            <div key={feedback.id} className="p-4 border border-gray-300 rounded-lg bg-white shadow-md flex items-start">
                                <img src={feedback.profilePhoto} alt={`${feedback.name}'s profile`} className="w-12 h-12 rounded-full mr-4 mt-2" />
                                <div>
                                    <h3 className="text-lg font-semibold">{feedback.name}</h3>
                                    <p className="text-gray-700 mt-2">{feedback.feedback}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Pie Chart */}
                <div className="w-1/3 p-3 mt-8 ml-10">
                    <h2 className="text-xl font-semibold mb-4">Sponsor Distribution</h2>
                    <Pie data={data} />
                </div>
            </div>
        </div>
    );
};

export default App;

import React, { useState } from 'react';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Link } from "react-router-dom";
import { AiOutlinePlus } from 'react-icons/ai';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface Detail {
    label: string;
    value: string;
}

interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
        borderColor: string;
        borderWidth: number;
        barThickness: number;
        borderRadius: number;
    }[];
}

interface MainCardProps {
    title: string;
    details?: Detail[];
    buttonText?: string;
    addNewButtonText?: string;
    chartData?: ChartData;
    imageSrc?: string;
    onAddNewConference?: () => void;
}

const MainCard: React.FC<MainCardProps> = ({ title, details, buttonText, addNewButtonText, chartData, imageSrc, onAddNewConference }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        return `${context.dataset.label}: ${context.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                grid: {
                    display: false,
                }
            }
        }
    };

    const data = {
        labels: chartData?.labels || [],
        datasets: [{
            label: chartData?.datasets[0]?.label || 'Dataset',
            data: chartData?.datasets[0]?.data || [],
            backgroundColor: chartData?.datasets[0]?.backgroundColor || ['#0056b3'],
            borderColor: chartData?.datasets[0]?.borderColor || '#ffffff',
            borderWidth: chartData?.datasets[0]?.borderWidth || 1,
            barThickness: 40,
            borderRadius: 10,
        }]
    };

    return (
        <div className="flex flex-col p-4 border rounded-2xl shadow-lg bg-white h-80 justify-center">
            <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
            {imageSrc && (
                <img src={imageSrc} alt={title} className="w-32 h-20 object-cover mb-4 mx-auto" />
            )}
            {details && (
                <div className="mb-4 text-center">
                    <div className="flex space-x-2 mb-2">
                        {details.slice(0, 2).map((detail, index) => (
                            <div key={index} className="flex-1">
                                <span className="font-medium">{detail.label}:</span> {detail.value}
                            </div>
                        ))}
                    </div>
                    <div className="mb-2">
                        <span className="font-medium">{details[2].label}:</span> {details[2].value}
                    </div>
                </div>
            )}
            {chartData && (
                <div className="flex-grow h-64 mt-6">
                    <Bar data={data} options={options} />
                </div>
            )}
            <div className="flex justify-center items-center mt-4">
                <Link to="/admin_2023">
                    {buttonText && (
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600">
                            {buttonText}
                        </button>
                    )}
                </Link>
                {buttonText && addNewButtonText && (
                    <div className="mx-8"></div>
                )}
                {addNewButtonText && (
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600"
                        onClick={onAddNewConference}
                    >
                        {addNewButtonText}
                    </button>
                )}
            </div>
        </div>
    );
};

interface SubCardProps {
    userName: string;
    imageSrc: string;
}

const SubCard: React.FC<SubCardProps> = ({ userName, imageSrc }) => {
    return (
        <div className="flex flex-col items-center p-4 border rounded-2xl shadow-lg bg-white w-60 h-64">
            <h3 className="text-lg font-semibold">{userName}</h3>
            <img src={imageSrc} alt={userName} className="w-40 h-40 object-cover" />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600">
                View
            </button>
        </div>
    );
};

const App: React.FC = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [conferenceDays, setConferenceDays] = useState<{ id: number, day: string }[]>([{ id: Date.now(), day: 'Conference Day 1' }]);

    const mainCards = [
        {
            title: 'ICTer Conference 2024',
            imageSrc: 'src/assets/icter_logo.png', // Ensure the correct path to your logo image
            details: [
                { label: 'From', value: '2024-11-05' },
                { label: 'To', value: '2024-11-08' },
                { label: 'Location', value: 'Marino Beach Hotel, Colombo, Sri Lanka' }
            ],
            buttonText: 'View Previous Conference',
            addNewButtonText: 'Add New Conference'
        },
        {
            title: 'User Profile',
            chartData: {
                labels: ['Committee', 'Speaker', 'Author', 'Sponsor'],
                datasets: [{
                    label: 'Profile Count',
                    data: [60, 20, 10, 50],
                    backgroundColor: [
                        '#0056b3',
                        '#007bff',
                        '#66b2ff',
                        '#0099ff'
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 1,
                    barThickness: 40,
                    borderRadius: 10,
                }]
            }
        }
    ];

    const subCards = [
        { userName: 'Committee', imageSrc: 'src/assets/committee.png' },
        { userName: 'Speaker', imageSrc: 'src/assets/speaker.png' },
        { userName: 'Author', imageSrc: 'src/assets/author.png' },
        { userName: 'Sponsor', imageSrc: 'src/assets/sponsor.png' },
    ];

    const handleAddNewConference = () => {
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    const addConferenceDay = () => {
        const nextDayNumber = conferenceDays.length + 1;
        setConferenceDays([...conferenceDays, { id: Date.now(), day: `Conference Day ${nextDayNumber}` }]);
    };

    return (
        <div className="p-4">
            {/* Topic at the Top */}
            <h1 className="text-4xl font-bold text-center mb-8">ICTer International Conference</h1>

            {/* Two Main Cards Side by Side */}
            <div className="flex space-x-8 mb-8 justify-center">
                <div className="w-1/2">
                    <MainCard
                        title={mainCards[0].title}
                        details={mainCards[0].details}
                        buttonText={mainCards[0].buttonText}
                        addNewButtonText={mainCards[0].addNewButtonText}
                        onAddNewConference={handleAddNewConference}
                        imageSrc={mainCards[0].imageSrc}
                    />
                </div>
                <div className="w-1/3">
                    <MainCard
                        title={mainCards[1].title}
                        chartData={mainCards[1].chartData}
                        imageSrc={mainCards[1].imageSrc}
                    />
                </div>
            </div>

            {/* Subtopic Aligned to the Left */}
            <h2 className="text-3xl font-semibold text-center mb-4 mt-12">User Profiles</h2>

            {/* Four Sub Cards in a Single Row */}
            <div className="flex space-x-10 justify-center mb-4">
                {subCards.map((card, index) => (
                    <SubCard
                        key={index} // Ensure a unique key is used
                        userName={card.userName}
                        imageSrc={card.imageSrc}
                    />
                ))}
            </div>

            {/* Popup for Adding New Conference */}
            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-2xl w-[500px] max-h-[80vh] overflow-y-auto mt-20"> {/* Added max-h-[80vh] and overflow-y-auto */}
                        <h2 className="text-2xl font-bold mb-4">Add New Conference</h2>
                        <div className="mb-4">
                            {/* Start Date and End Date */}
                            <div className="flex space-x-4 mb-4">
                                <div className="flex flex-col w-1/2">
                                    <label className="font-medium mb-1">Start Date</label>
                                    <input type="date" className="border rounded-lg p-2" />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label className="font-medium mb-1">End Date</label>
                                    <input type="date" className="border rounded-lg p-2" />
                                </div>
                            </div>

                            {/* Location */}
                            <div>
                                <label className="block mb-2">Location</label>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="border p-2 rounded-md w-full mb-4"
                                />
                            </div>

                            {/* Upload Logo */}
                            <div className="mb-4">
                                <label className="block mb-2">Upload Logo</label>
                                <input
                                    type="file"
                                    className="border p-2 rounded-md w-full"
                                />
                            </div>

                            {/* Additional Fields */}
                            {conferenceDays.map((day, index) => (
                                <div key={day.id} className="flex items-center mb-2 space-x-5">
                                    <input
                                        type="text"
                                        value={day.day}
                                        onChange={(e) => {
                                            const updatedDays = [...conferenceDays];
                                            updatedDays[index].day = e.target.value;
                                            setConferenceDays(updatedDays);
                                        }}
                                        className="border rounded-lg p-2 w-full"
                                    />
                                    <input
                                        type="date"
                                        placeholder="Date"
                                        className="border p-2 rounded-md flex-1"
                                    />
                                    <button
                                        className="ml-2 px-2 py-2 bg-blue-600 text-white rounded-full"
                                        onClick={addConferenceDay}
                                    >
                                        <AiOutlinePlus size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600">
                                Save
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-300 text-black rounded-2xl shadow-md hover:bg-gray-400"
                                onClick={closePopup}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default App;

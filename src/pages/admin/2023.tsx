import React from 'react';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {Link} from "react-router-dom";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface MainCardProps {
    title: string;
    details?: { label: string; value: string }[];
    buttonText?: string;
    secondButtonText?: string;  // New prop for the second button
    chartData?: any;
    imageSrc?: string;
}

const MainCard: React.FC<MainCardProps> = ({ title, details, buttonText, secondButtonText, chartData, imageSrc }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide the legend
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
            data: chartData?.datasets[0]?.data || [],
            backgroundColor: [
                '#0056b3',
                '#007bff',
                '#66b2ff',
                '#0099ff'
            ],
            borderColor: '#ffffff',
            borderWidth: 1,
            barThickness: 40, // Adjust the bar width here
            borderRadius: 10, // Curve the top corners
        }]
    };

    return (
        <div className="flex flex-col p-4 border rounded-2xl shadow-lg bg-white h-80 justify-center"> {/* Fixed height */}
            <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
            {imageSrc && (
                <img src={imageSrc} alt={`${title}`} className="w-32 h-20 object-cover mb-4 mx-auto" />
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
                <div className="flex-grow h-64 mt-6"> {/* Increase height of chart */}
                    <Bar data={data} options={options} />
                </div>
            )}
            {(buttonText || secondButtonText) && (
                <div className="flex justify-center space-x-10 mt-4"> {/* Align buttons horizontally */}
                    {buttonText && (
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600">
                            {buttonText}
                        </button>
                    )}
                    <Link to="/admin_dashboard">
                        {secondButtonText && (
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600">
                                {secondButtonText}
                            </button>
                        )}
                    </Link>
                </div>
            )}
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
            <img src={imageSrc} alt={`${userName}`} className="w-40 h-40 object-cover" />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600">
                View
            </button>
        </div>
    );
};

const App: React.FC = () => {
    const mainCards = [
        {
            title: 'ICTer Conference 2023',
            imageSrc: 'src/assets/icter_logo.png', // Image URL
            details: [
                { label: 'From', value: '2023-11-07' },
                { label: 'To', value: '2023-11-10' },
                { label: 'Location', value: 'Colombo, Sri Lanka' }
            ],
            buttonText: 'View Previous Conference',
            secondButtonText: 'Current Conference' // Add second button text here
        },
        {
            title: 'User Profile',
            chartData: {
                labels: ['Committee', 'Speaker', 'Author', 'Sponsor'],
                datasets: [{
                    label: 'Profile Count',
                    data: [60, 20, 10, 50],
                    backgroundColor: [
                        '#0056b3', // Dark Blue
                        '#007bff', // Blue
                        '#66b2ff', // Light Blue
                        '#0099ff'  // Sky Blue
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 1,
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
                        secondButtonText={mainCards[0].secondButtonText} // Pass the second button text here
                        chartData={mainCards[0].chartData}
                        imageSrc={mainCards[0].imageSrc}
                    />
                </div>
                <div className="w-1/3">
                    <MainCard
                        title={mainCards[1].title}
                        details={mainCards[1].details}
                        buttonText={mainCards[1].buttonText}
                        chartData={mainCards[1].chartData}
                        imageSrc={mainCards[1].imageSrc}
                    />
                </div>
            </div>

            {/* Subtopic Aligned to the Left */}
            <h2 className="text-3xl font-semibold text-center mb-4 mt-12">User Profiles</h2>

            {/* Four Sub Cards in a Single Row */}
            <div className="flex space-x-10 justify-center mb-8">
                {subCards.map((card, index) => (
                    <SubCard key={index} userName={card.userName} imageSrc={card.imageSrc} />
                ))}
            </div>

            {/* Buttons */}
            {/* <div className="flex justify-center space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                    Button 1
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
                    Button 2
                </button>
            </div> */}
        </div>
    );
};

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

// Define the Feedback type for TypeScript
type Feedback = {
    id: number;
    participant_name?: string;
    title?: string;
    content: string;
    rating: number;
    participantId: number;
};

const FeedbackPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

    // Fetch feedbacks from the backend
    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const token = localStorage.getItem("authToken"); // Retrieve token from localStorage
                if (token) {
                    const response = await axios.get<Feedback[]>(
                        'http://localhost:8080/api/participantFeedback/getParticipantFeedback',
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                    setFeedbacks(response.data); // Assuming response.data is an array of feedback objects
                } else {
                    console.error('No auth token found');
                }
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
            }
        };

        fetchFeedbacks();
    }, []);

    const handleNext = () => {
        if (currentIndex < feedbacks.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const leftArrowClasses = currentIndex === 0 ? 'bg-gray-300 text-gray-400' : 'bg-gray-400 hover:bg-gray-600';
    const rightArrowClasses = currentIndex >= feedbacks.length - 3 ? 'bg-gray-300 text-gray-400' : 'bg-gray-400 hover:bg-gray-600';

    return (
        <div className="flex justify-center items-center">
            <div className="flex items-center mt-10">
                {/* Left Arrow */}
                <button
                    onClick={handlePrev}
                    className={`${leftArrowClasses} p-2 rounded-full shadow focus:outline-none`}
                    disabled={currentIndex === 0}
                >
                    <FaArrowLeft size={24} />
                </button>

                {/* Feedback Cards */}
                <div className="flex space-x-20 mx-4">
                    {feedbacks.slice(currentIndex, currentIndex + 3).map(feedback => (
                        <div
                            key={feedback.id}
                            className="w-72 h-[550px] bg-white p-4 rounded-xl shadow-md text-center"
                        >
                            <img
                                src={'src/assets/profiles.png'} // Replace with actual image if available
                                alt={feedback.participant_name}
                                className="w-32 h-32 rounded-full mx-auto my-16"
                            />
                            <h2 className="text-lg font-bold mb-4">
                                {feedback.participant_name || `Participant ${feedback.participantId}`}
                            </h2>
                            <h3 className="text-sm font-semibold mb-2">
                                {feedback.title}
                            </h3>
                            <p className="text-gray-700 mb-4">
                                {feedback.content}
                            </p>
                            <div className="flex justify-center mt-auto">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        size={20}
                                        className={index < feedback.rating ? 'text-yellow-400' : 'text-gray-300'}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={handleNext}
                    className={`${rightArrowClasses} p-2 rounded-full shadow focus:outline-none`}
                    disabled={currentIndex >= feedbacks.length - 3}
                >
                    <FaArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default FeedbackPage;

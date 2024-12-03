import React, {
    useState,
    useEffect
} from 'react';

import axios from 'axios';

import {
    FaArrowLeft,
    FaArrowRight,
    FaStar,
    FaPlus
} from 'react-icons/fa';

// Define the Feedback type for TypeScript
type Feedback = {
    id: number;
    participant_name?: string;
    title?: string;
    content: string;
    rating: number;
};

const FeedbackPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [isFormOpen, setIsFormOpen] = useState(false); // Track if form is open
    const [newFeedback, setNewFeedback] = useState({
        participant_name: '',
        title: '',
        content: '',
        rating: 1,
    });

    // Fetch feedbacks from the backend
    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
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

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewFeedback((prevFeedback) => ({
            ...prevFeedback,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('authToken');
            if (token) {
                const response = await axios.post(
                    'http://localhost:8080/api/participantFeedback/saveParticipantFeedback',
                    {
                        ...newFeedback,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                // Update the feedback list
                setFeedbacks([...feedbacks, response.data]);
                setIsFormOpen(false); // Close the form after submission
                setNewFeedback({ participant_name: '', title: '', content: '', rating: 1 }); // Reset the form
            } else {
                console.error('No auth token found');
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
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
                    <FaArrowLeft
                        size={24}
                    />
                </button>

                {/* Feedback Cards */}
                <div className="flex space-x-20 mx-4">
                    {feedbacks.slice(currentIndex, currentIndex + 3).map((feedback) => (
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
                                {feedback.participant_name || `Participant ${feedback.id}`}
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
                    <FaArrowRight
                        size={24}
                    />
                </button>
            </div>

            {/* Plus Button for Feedback Form */}
            <button
                className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
                onClick={() => setIsFormOpen(true)}
            >
                <FaPlus size={24} />
            </button>

            {/* Feedback Form Popup */}
            {isFormOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">
                            Submit Feedback
                        </h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Participant Name
                                </label>
                                <input
                                    type="text"
                                    name="participant_name"
                                    value={newFeedback.participant_name}
                                    onChange={handleFormChange}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={newFeedback.title}
                                    onChange={handleFormChange}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Content
                                </label>
                                <textarea
                                    name="content"
                                    value={newFeedback.content}
                                    onChange={handleFormChange}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Rating
                                </label>
                                <input
                                    type="number"
                                    name="rating"
                                    value={newFeedback.rating}
                                    onChange={handleFormChange}
                                    max="5"
                                    min="1"
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setIsFormOpen(false)}
                                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeedbackPage;

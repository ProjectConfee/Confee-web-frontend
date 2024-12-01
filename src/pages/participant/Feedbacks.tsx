import { useState } from 'react';
import {
    FaArrowLeft,
    FaArrowRight,
    FaStar,
    FaPlus
} from 'react-icons/fa';

const FeedbackPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFormOpen, setIsFormOpen] = useState(false); // Track if form is open

    const feedbacks = [
        {
            id: 1,
            title: 'Relevant Session Topics',
            content: 'The sessions covered a wide range of timely and relevant topics that directly addressed the challenges and opportunities in our industry. The speakers were well-prepared and the discussions were insightful, sparking new ideas and conversations that continued long after the sessions ended.',
            name: 'Anjalee Fernando',
            picture: 'src/assets/profiles.png',
            rating: 5
        },
        {
            id: 2,
            title: 'Well-Organized Event',
            content: 'This conference was a model of excellence in event organization. From the seamless registration process to the meticulous adherence to the schedule, every detail was handled with precision. The staff were helpful and always available, making the entire experience stress-free and enjoyable.',
            name: 'Keshali Dhananjana',
            picture: 'src/assets/profiles.png',
            rating: 4
        },
        {
            id: 3,
            title: 'Networking Opportunities',
            content: 'The networking sessions were a standout feature of the conference. The structure allowed for meaningful connections with a diverse group of professionals. I appreciated the thoughtful mix of formal and informal networking opportunities, which made it easy to build both professional and personal relationships.',
            name: 'Viraji Dewmini',
            picture: 'src/assets/profiles.png',
            rating: 4
        },
        {
            id: 4,
            title: 'Insightful Keynotes',
            content: 'The keynote sessions were exceptional, featuring leading experts who delivered thought-provoking insights on the future of our industry. Their presentations were not only informative but also inspiring, leaving us with actionable takeaways and a renewed sense of purpose.',
            name: 'Ranuri Dissanayake',
            picture: 'src/assets/profiles.png',
            rating: 3 },
        {
            id: 5,
            title: 'Engaging Workshops',
            content: 'The workshops were incredibly engaging and practical. The facilitators did a fantastic job of blending theory with real-world applications, and the interactive elements kept us fully immersed. I left each session with new skills and strategies that I’m eager to implement in my daily work.',
            name: 'Senuri Bhagya',
            picture: 'src/assets/profiles.png',
            rating: 5
        },
    ];

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

    const openForm = () => setIsFormOpen(true);
    const closeForm = () => setIsFormOpen(false);

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
                    {feedbacks.slice(currentIndex, currentIndex + 3).map(feedback => (
                        <div
                            key={feedback.id}
                            className="w-72 h-[550px] bg-white p-4 rounded-xl shadow-md text-center"
                        >
                            <img
                                src={feedback.picture}
                                alt={feedback.name}
                                className="w-32 h-32 rounded-full mx-auto my-4"
                            />
                            <h2 className="text-lg font-bold mb-4">
                                {feedback.name}
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
                onClick={openForm}
            >
                <FaPlus
                    size={24}
                />
            </button>

            {/* Feedback Form Popup */}
            {isFormOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">
                            Submit Feedback
                        </h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Content
                                </label>
                                <textarea className="w-full p-2 border rounded"></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Rating
                                </label>
                                <input
                                    type="number"
                                    max="5"
                                    min="1"
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={closeForm}
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

import { useState } from 'react';
import {
    FaArrowLeft,
    FaArrowRight,
    FaStar
} from 'react-icons/fa';

const FeedbackPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
                    <FaArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default FeedbackPage;

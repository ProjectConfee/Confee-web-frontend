import React from 'react';
// import { Link } from 'react-router-dom';
import {Divider} from 'antd';

interface Feedback {
    id: number;
    participant: string;
    comment: string;
    rating: number;
}

const feedbacks: Feedback[] = [
    { id: 1, participant: 'Amaya Fernando', comment: 'Fantastic experience!', rating: 5 },
    { id: 2, participant: 'Olivia Grace', comment: 'Learned a lot!', rating: 4 },
    { id: 3, participant: 'Maria Smith', comment: 'Will attend again!', rating: 5 },
];

const feedbacks1: Feedback[] = [
    { id: 4, participant: 'Robert Wilson', comment: 'Very useful.', rating: 4 },
    { id: 5, participant: 'Alice Johnson', comment: 'Great organization!', rating: 5 },
    { id: 6, participant: 'John Doe', comment: 'Interesting topics.', rating: 4 },
];

const Feedbacks: React.FC = () => {
    return (
        <div className="flex flex-col justify-center min-h-screen bg-white rounded-3xl">
            <h1 className="text-4xl font-bold text-center">Feedbacks</h1>
            {/*<div className="ml-96">*/}
            {/*    <Link to="#"> /!* Adjust the path as needed *!/*/}
            {/*        <Button type="primary">Give Feedback</Button>*/}
            {/*    </Link>*/}
            {/*</div>*/}

            <Divider />

            <div className="flex flex-wrap w-full max-w-6xl">
                {/* Left side */}
                <div className="w-full lg:w-1/2 p-4">
                    {feedbacks.map((feedback) => (
                        <div key={feedback.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
                            <p className="text-xl font-semibold">{feedback.participant}</p>
                            <p className="mt-2 text-gray-700">{feedback.comment}</p>
                            <p className="mt-2 text-yellow-500">Rating: {'★'.repeat(feedback.rating)}</p>
                        </div>
                    ))}
                </div>

                {/* Right side */}
                <div className="w-full lg:w-1/2 p-4">
                    {feedbacks1.map((feedback) => (
                        <div key={feedback.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
                            <p className="text-xl font-semibold">{feedback.participant}</p>
                            <p className="mt-2 text-gray-700">{feedback.comment}</p>
                            <p className="mt-2 text-yellow-500">Rating: {'★'.repeat(feedback.rating)}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Feedbacks;

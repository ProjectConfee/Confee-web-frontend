import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Flex } from 'antd';

interface Feedback {
    id: number;
    participant: string;
    comment: string;
    rating: number;
}

const moreFeedbacks: Feedback[] = [
    { id: 5, participant: 'Amaya fernando', comment: 'Fantastic experience!', rating: 5 },
    { id: 6, participant: 'kamal Perera ', comment: 'Learned a lot!', rating: 4 },
    { id: 7, participant: 'Maria Smith', comment: 'Will attend again!', rating: 5 },
    { id: 8, participant: 'Robert Wilson', comment: 'Very useful.', rating: 4 },
];

const MoreFeedbacks:
    React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-white p-4  ">
            <h1 className="text-3xl font-bold text-center mb-10">More Feedbacks</h1>
            <div className="w-full max-w-4xl">
                {moreFeedbacks.map((feedback) => (
                    <div key={feedback.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
                        <p className="text-xl font-semibold">{feedback.participant}</p>
                        <p className="mt-2 text-gray-700">{feedback.comment}</p>
                        <p className="mt-2 text-yellow-500">Rating: {'★'.repeat(feedback.rating)}</p>
                    </div>
                ))}
            </div>
            <div>

                <Flex gap="small" wrap>
                    <Link to="/homepage"> {/* Adjust the path as needed */}
                        <Button type="primary" style={{ backgroundColor: '#3572EF', borderColor: '#3572EF' }}> Back to Homepage</Button>
                    </Link>


                </Flex>

            </div>
        </div>
    );
};

export default MoreFeedbacks;

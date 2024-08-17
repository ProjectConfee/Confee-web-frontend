// import React from 'react';

const feedbacks = [
    { id: 1, name: 'Anjalee Fernando', feedback: 'Great event! Very informative and well-organized.', profilePhoto: 'src/assets/profiles.png' },
    { id: 2, name: 'Nadeesha Perera', feedback: 'The conference was well organized, and the topics covered were highly relevant.', profilePhoto: 'src/assets/profiles.png' },
    { id: 3, name: 'Ruwan Senewiratne', feedback: 'Excellent speakers and venue. Looking forward to the next one!', profilePhoto: 'src/assets/profiles.png' },
    { id: 4, name: 'Dumindu Silva', feedback: 'The keynote speakers were excellent, and the sessions were very informative.', profilePhoto: 'src/assets/profiles.png' },
];

const Feedback = () => {
    const leftColumnFeedbacks = feedbacks.filter((_, index) => index % 2 === 0);
    const rightColumnFeedbacks = feedbacks.filter((_, index) => index % 2 !== 0);

    return (
        <div className="w-full p-4 flex">
            <div className="w-1/2 pr-2 space-y-4">
                {leftColumnFeedbacks.map(feedback => (
                    <div
                        key={feedback.id}
                        className="w-full h-40 p-4 border border-gray-300 rounded-lg bg-white shadow-md flex items-start"
                    >
                        <img
                            src={feedback.profilePhoto}
                            alt={`${feedback.name}'s profile`}
                            className="w-12 h-12 rounded-full mr-4 mt-2"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">{feedback.name}</h3>
                            <p className="text-gray-700 mt-2">{feedback.feedback}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-1/2 pl-2 space-y-4">
                {rightColumnFeedbacks.map(feedback => (
                    <div
                        key={feedback.id}
                        className="w-full h-40 p-4 border border-gray-300 rounded-lg bg-white shadow-md flex items-start"
                    >
                        <img
                            src={feedback.profilePhoto}
                            alt={`${feedback.name}'s profile`}
                            className="w-12 h-12 rounded-full mr-4 mt-2"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">{feedback.name}</h3>
                            <p className="text-gray-700 mt-2">{feedback.feedback}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feedback;

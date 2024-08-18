import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash,
    faPlus
} from '@fortawesome/free-solid-svg-icons';

interface Announcement {
    title: string;
    content: string;
    time: string; // Timestamp for the announcement
}

const initialAnnouncements: Announcement[] = [
    {
        title: 'Announcement 1',
        content: 'This is the content of the first announcement. Details about the event or information go here.',
        time: '2024-08-05 14:00'
    },
    {
        title: 'Announcement 2',
        content: 'Content of the second announcement goes here. This might include updates or important notes.',
        time: '2024-08-05 15:00'
    },
    {
        title: 'Announcement 3',
        content: 'Details of the third announcement. More information and updates.',
        time: '2024-08-06 10:00'
    },
    {
        title: 'Announcement 4',
        content: 'Fourth announcement content. Additional details and information.',
        time: '2024-08-06 12:00'
    },
    {
        title: 'Announcement 5',
        content: 'Content of the fifth announcement. Important updates and notes.',
        time: '2024-08-07 09:00'
    },
];

const AnnouncementPage: React.FC = () => {
    const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newAnnouncement, setNewAnnouncement] = useState<Partial<Announcement>>({});
    const [scheduleTime, setScheduleTime] = useState<'now' | 'later'>('now');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleAddClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setNewAnnouncement({});
        setScheduleTime('now');
        setDate('');
        setTime('');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewAnnouncement(prevState => ({ ...prevState, [name]: value }));
    };

    const handleScheduleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setScheduleTime(e.target.value as 'now' | 'later');
    };

    const handleSaveAnnouncement = () => {
        const scheduledTime = scheduleTime === 'now' ? new Date().toISOString() : `${date}T${time}:00`;
        if (newAnnouncement.title && newAnnouncement.content && scheduledTime) {
            setAnnouncements([...announcements, { ...newAnnouncement, time: scheduledTime } as Announcement]);
            handleCloseModal();
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="relative px-4">
            {announcements.map((announcement, index) => (
                <div key={index}>
                    <div className="relative bg-white mt-2 my-5 custom-card rounded-l-full pl-5 shadow-md mx-20">
                        <div className="absolute top-5 right-5">
                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{ color: 'red' }}
                                size={'xl'}
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{announcement.title}</h2>
                            <p>{announcement.content}</p>
                            <div className="absolute bottom-2 right-2 text-gray-500 text-sm">
                                {announcement.time}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Add New Announcement Button */}
            <div className="fixed bottom-4 right-4">
                <button
                    onClick={handleAddClick}
                    className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
                >
                    <FontAwesomeIcon icon={faPlus} size={'1x'} />
                </button>
            </div>

            {/* Modal for adding new announcement */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-xl font-semibold mb-4">
                            Add New Announcement
                        </h2>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                className="w-full p-2 border border-gray-300 rounded"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">
                                Content
                            </label>
                            <textarea
                                name="content"
                                className="w-full p-2 border border-gray-300 rounded"
                                rows={4}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">
                                Schedule Time
                            </label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded"
                                onChange={handleScheduleTimeChange}
                            >
                                <option value="now">
                                    Now
                                </option>
                                <option value="later">
                                    Later
                                </option>
                            </select>
                        </div>
                        {scheduleTime === 'later' && (
                            <div className="flex space-x-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        className="w-full p-2 border border-gray-300 rounded"
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        className="w-full p-2 border border-gray-300 rounded"
                                        onChange={(e) => setTime(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}
                        <div className="flex justify-end">
                            <button
                                onClick={handleCloseModal}
                                className="mr-2 p-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveAnnouncement}
                                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnnouncementPage;

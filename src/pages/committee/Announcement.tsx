// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faTrash,
//     faPlus
// } from '@fortawesome/free-solid-svg-icons';
//
// interface Announcement {
//     title: string;
//     content: string;
//     time: string; // Timestamp for the announcement
// }
//
// const initialAnnouncements: Announcement[] = [
//     {
//         title: 'Announcement 1',
//         content: 'This is the content of the first announcement. Details about the event or information go here.',
//         time: '2024-08-05 14:00'
//     },
//     {
//         title: 'Announcement 2',
//         content: 'Content of the second announcement goes here. This might include updates or important notes.',
//         time: '2024-08-05 15:00'
//     },
//     {
//         title: 'Announcement 3',
//         content: 'Details of the third announcement. More information and updates.',
//         time: '2024-08-06 10:00'
//     },
//     {
//         title: 'Announcement 4',
//         content: 'Fourth announcement content. Additional details and information.',
//         time: '2024-08-06 12:00'
//     },
//     {
//         title: 'Announcement 5',
//         content: 'Content of the fifth announcement. Important updates and notes.',
//         time: '2024-08-07 09:00'
//     },
// ];
//
// const AnnouncementPage: React.FC = () => {
//     const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [newAnnouncement, setNewAnnouncement] = useState<Partial<Announcement>>({});
//     const [scheduleTime, setScheduleTime] = useState<'now' | 'later'>('now');
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//
//     const handleAddClick = () => {
//         setIsModalOpen(true);
//     };
//
//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//         setNewAnnouncement({});
//         setScheduleTime('now');
//         setDate('');
//         setTime('');
//     };
//
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setNewAnnouncement(prevState => ({ ...prevState, [name]: value }));
//     };
//
//     const handleScheduleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         setScheduleTime(e.target.value as 'now' | 'later');
//     };
//
//     const handleSaveAnnouncement = () => {
//         const scheduledTime = scheduleTime === 'now' ? new Date().toISOString() : `${date}T${time}:00`;
//         if (newAnnouncement.title && newAnnouncement.content && scheduledTime) {
//             setAnnouncements([...announcements, { ...newAnnouncement, time: scheduledTime } as Announcement]);
//             handleCloseModal();
//         } else {
//             alert('Please fill in all fields');
//         }
//     };
//
//     return (
//         <div className="relative px-4">
//             {announcements.map((announcement, index) => (
//                 <div key={index}>
//                     <div className="relative bg-white mt-2 my-5 custom-card rounded-2xl pl-5 shadow-md mx-20">
//                         <div className="absolute top-5 right-5">
//                             <FontAwesomeIcon
//                                 icon={faTrash}
//                                 style={{ color: 'red' }}
//                                 size={'xl'}
//                             />
//                         </div>
//                         <div className="p-4">
//                             <h2 className="text-xl font-semibold mb-2">
//                                 {announcement.title}
//                             </h2>
//                             <p>
//                                 {announcement.content}
//                             </p>
//                             <div className="absolute bottom-2 right-2 text-gray-500 text-sm">
//                                 {announcement.time}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//
//             {/* Add New Announcement Button */}
//             <div className="fixed bottom-8 right-8">
//                 <button
//                     onClick={handleAddClick}
//                     className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
//                 >
//                     <FontAwesomeIcon
//                         icon={faPlus}
//                         size={'1x'}
//                     />
//                 </button>
//             </div>
//
//             {/* Modal for adding new announcement */}
//             {isModalOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//                     <div className="bg-white py-5 px-10 rounded-2xl shadow-lg w-1/3">
//                         <h2 className="text-xl font-semibold mb-4">
//                             Add New Announcement
//                         </h2>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-2">
//                                 Title
//                             </label>
//                             <input
//                                 type="text"
//                                 name="title"
//                                 className="w-full p-2 border border-gray-300 rounded"
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-2">
//                                 Content
//                             </label>
//                             <textarea
//                                 name="content"
//                                 className="w-full p-2 border border-gray-300 rounded"
//                                 rows={4}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-2">
//                                 Schedule Time
//                             </label>
//                             <select
//                                 className="w-full p-2 border border-gray-300 rounded"
//                                 onChange={handleScheduleTimeChange}
//                             >
//                                 <option value="now">
//                                     Now
//                                 </option>
//                                 <option value="later">
//                                     Later
//                                 </option>
//                             </select>
//                         </div>
//                         {scheduleTime === 'later' && (
//                             <div className="flex space-x-4 mb-4">
//                                 <div>
//                                     <label className="block text-sm font-medium mb-2">
//                                         Date
//                                     </label>
//                                     <input
//                                         type="date"
//                                         name="date"
//                                         className="w-full p-2 border border-gray-300 rounded"
//                                         onChange={(e) => setDate(e.target.value)}
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium mb-2">
//                                         Time
//                                     </label>
//                                     <input
//                                         type="time"
//                                         name="time"
//                                         className="w-full p-2 border border-gray-300 rounded"
//                                         onChange={(e) => setTime(e.target.value)}
//                                     />
//                                 </div>
//                             </div>
//                         )}
//                         <div className="flex justify-end">
//                             <button
//                                 onClick={handleCloseModal}
//                                 className="mr-2 py-2 px-4 bg-gray-300 text-black rounded-2xl shadow-md hover:bg-gray-400"
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 onClick={handleSaveAnnouncement}
//                                 className="py-2 px-4 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600"
//                             >
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default AnnouncementPage;
// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
// import axios from 'axios';
// import { IoMdAddCircleOutline, IoMdTrash, IoMdCreate } from 'react-icons/io';
// import { Button, Card } from 'antd';
// import 'antd/dist/reset.css'; // Ensure Ant Design styles are imported
//
// interface Announcement {
//     id: number;
//     announcement: string;
//     timestamp: string; // Adjust the type if it's a different format
// }
//
// const App: React.FC = () => {
//     const [announcements, setAnnouncements] = useState<Announcement[]>([]);
//     const API_BASE_URL = 'http://localhost:8080/api/announcements';
//
//     const getAuthToken = () => localStorage.getItem('authToken');
//
//     const fetchAnnouncements = async () => {
//         const token = getAuthToken();
//         if (!token) {
//             console.error('No auth token found in local storage.');
//             return;
//         }
//
//         try {
//             const response = await axios.get(`${API_BASE_URL}/getAll`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//
//             // Sort announcements by timestamp (most recent first)
//             const sortedAnnouncements = response.data.sort(
//                 (a: Announcement, b: Announcement) =>
//                     new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
//             );
//
//             setAnnouncements(sortedAnnouncements);
//         } catch (error) {
//             console.error('Error fetching announcements:', error);
//         }
//     };
//
//     useEffect(() => {
//         fetchAnnouncements();
//     }, []);
//
//     const handleAddClick = async () => {
//         const { value: text } = await Swal.fire({
//             input: 'textarea',
//             inputLabel: 'New Announcement',
//             inputPlaceholder: 'Enter new announcement',
//             inputAttributes: { 'aria-label': 'Enter new announcement' },
//             showCancelButton: true,
//             confirmButtonText: 'Add',
//             cancelButtonText: 'Cancel',
//         });
//
//         if (text) {
//             const token = getAuthToken();
//             if (!token) {
//                 Swal.fire('Error!', 'No auth token found.', 'error');
//                 return;
//             }
//
//             try {
//                 await axios.post(
//                     `${API_BASE_URL}/add`,
//                     { announcement: text },
//                     {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                             'Content-Type': 'application/json',
//                         },
//                     }
//                 );
//                 Swal.fire('Announcement added!', '', 'success');
//                 fetchAnnouncements();
//             } catch (error) {
//                 Swal.fire('Error!', 'Failed to add announcement.', 'error');
//             }
//         }
//     };
//
//     const handleEditClick = async (announcement: Announcement) => {
//         const { value: newText } = await Swal.fire({
//             input: 'textarea',
//             inputLabel: 'Edit Announcement',
//             inputValue: announcement.announcement,
//             inputPlaceholder: 'Edit announcement',
//             inputAttributes: { 'aria-label': 'Edit announcement' },
//             showCancelButton: true,
//             confirmButtonText: 'Save',
//             cancelButtonText: 'Cancel',
//         });
//
//         if (newText) {
//             const token = getAuthToken();
//             if (!token) {
//                 Swal.fire('Error!', 'No auth token found.', 'error');
//                 return;
//             }
//
//             try {
//                 await axios.put(
//                     `${API_BASE_URL}/update/${announcement.id}`,
//                     { announcement: newText },
//                     {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                             'Content-Type': 'application/json',
//                         },
//                     }
//                 );
//                 Swal.fire('Announcement updated!', '', 'success');
//                 fetchAnnouncements();
//             } catch (error) {
//                 Swal.fire('Error!', 'Failed to update announcement.', 'error');
//             }
//         }
//     };
//
//     const handleDeleteClick = async (id: number) => {
//         const token = getAuthToken();
//         if (!token) {
//             Swal.fire('Error!', 'No auth token found.', 'error');
//             return;
//         }
//
//         const result = await Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Yes, delete it!',
//             cancelButtonText: 'No, cancel!',
//         });
//
//         if (result.isConfirmed) {
//             try {
//                 await axios.delete(`${API_BASE_URL}/delete/${id}`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 Swal.fire('Deleted!', 'The announcement has been deleted.', 'success');
//                 fetchAnnouncements();
//             } catch (error) {
//                 Swal.fire('Error!', 'Failed to delete announcement.', 'error');
//             }
//         }
//     };
//
//     return (
//         <div className="bg-gradient-to-r from-blue-50 to-gray-100 mt-16 mx-auto max-w-5xl p-8 rounded-3xl shadow-xl">
//             <div className="flex items-center justify-between mb-8">
//                 <h2 className="text-4xl font-extrabold text-gray-800">Announcements</h2>
//                 <Button
//                     type="primary"
//                     onClick={handleAddClick}
//                     className="flex items-center space-x-2 text-lg rounded-full bg-blue-500 hover:bg-blue-600 shadow-md transition-transform transform hover:scale-105"
//                     icon={<IoMdAddCircleOutline className="text-2xl" />}
//                 >
//                     <span>Add</span>
//                 </Button>
//             </div>
//             <div className="space-y-6">
//                 {announcements.map((announcement) => (
//                     <Card
//                         key={announcement.id}
//                         className="bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-100"
//                         style={{ padding: '12px', borderRadius: '10px', position: 'relative' }}
//                     >
//                         <div className="flex flex-col">
//                             <p className="text-lg font-semibold text-gray-800 mb-0">{announcement.announcement}</p>
//                             <div className="text-gray-500 text-sm mb-4">
//                                 {new Date(announcement.timestamp).toLocaleString([], {
//                                     hour: '2-digit',
//                                     minute: '2-digit',
//                                     hour12: true,
//                                 })}
//                             </div>
//                             <div className="absolute top-4 right-4 flex space-x-4">
//                                 <Button
//                                     type="text"
//                                     icon={<IoMdCreate className="text-blue-600 text-2xl" />}
//                                     onClick={() => handleEditClick(announcement)}
//                                     className="text-lg"
//                                 />
//                                 <Button
//                                     type="text"
//                                     danger
//                                     icon={<IoMdTrash className="text-red-600 text-2xl" />}
//                                     onClick={() => handleDeleteClick(announcement.id)}
//                                     className="text-lg"
//                                 />
//                             </div>
//                         </div>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default App;
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { IoMdAddCircleOutline, IoMdTrash, IoMdCreate } from 'react-icons/io';
import { Button, Card } from 'antd';
import 'antd/dist/reset.css'; // Ensure Ant Design styles are imported

interface Announcement {
    id: number;
    announcement: string;
    timestamp: string; // Adjust the type if it's a different format
}

const App: React.FC = () => {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [workshopDetails, ] = useState<any>(null); // State for holding workshop data
    const API_BASE_URL = 'http://localhost:8080/api/announcements';

    const getAuthToken = () => localStorage.getItem('authToken');

    const fetchAnnouncements = async () => {
        const token = getAuthToken();
        if (!token) {
            console.error('No auth token found in local storage.');
            return;
        }

        try {
            const response = await axios.get(`${API_BASE_URL}/getAll`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Sort announcements by timestamp (most recent first)
            const sortedAnnouncements = response.data.sort(
                (a: Announcement, b: Announcement) =>
                    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
            );

            setAnnouncements(sortedAnnouncements);
        } catch (error) {
            console.error('Error fetching announcements:', error);
        }
    };

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    const handleAddClick = async () => {
        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'New Announcement',
            inputPlaceholder: 'Enter new announcement',
            inputAttributes: { 'aria-label': 'Enter new announcement' },
            showCancelButton: true,
            confirmButtonText: 'Add',
            cancelButtonText: 'Cancel',
        });

        if (text) {
            const token = getAuthToken();
            if (!token) {
                Swal.fire('Error!', 'No auth token found.', 'error');
                return;
            }

            try {
                await axios.post(
                    `${API_BASE_URL}/add`,
                    { announcement: text },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );
                Swal.fire('Announcement added!', '', 'success');
                fetchAnnouncements();
            } catch (error) {
                Swal.fire('Error!', 'Failed to add announcement.', 'error');
            }
        }
    };

    const handleEditClick = async (announcement: Announcement) => {
        const { value: newText } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Edit Announcement',
            inputValue: announcement.announcement,
            inputPlaceholder: 'Edit announcement',
            inputAttributes: { 'aria-label': 'Edit announcement' },
            showCancelButton: true,
            confirmButtonText: 'Save',
            cancelButtonText: 'Cancel',
        });

        if (newText) {
            const token = getAuthToken();
            if (!token) {
                Swal.fire('Error!', 'No auth token found.', 'error');
                return;
            }

            try {
                await axios.put(
                    `${API_BASE_URL}/update/${announcement.id}`,
                    { announcement: newText },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );
                Swal.fire('Announcement updated!', '', 'success');
                fetchAnnouncements();
            } catch (error) {
                Swal.fire('Error!', 'Failed to update announcement.', 'error');
            }
        }
    };

    const handleDeleteClick = async (id: number) => {
        const token = getAuthToken();
        if (!token) {
            Swal.fire('Error!', 'No auth token found.', 'error');
            return;
        }

        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`${API_BASE_URL}/delete/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                Swal.fire('Deleted!', 'The announcement has been deleted.', 'success');
                fetchAnnouncements();
            } catch (error) {
                Swal.fire('Error!', 'Failed to delete announcement.', 'error');
            }
        }
    };



    return (
        <div className="bg-gradient-to-r from-blue-50 to-gray-100 mt-16 mx-auto max-w-5xl p-8 rounded-3xl shadow-xl">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-extrabold text-gray-800">Announcements</h2>
                <Button
                    type="primary"
                    onClick={handleAddClick}
                    className="flex items-center space-x-2 text-lg rounded-full bg-blue-500 hover:bg-blue-600 shadow-md transition-transform transform hover:scale-105"
                    icon={<IoMdAddCircleOutline className="text-2xl" />}
                >
                    <span>Add</span>
                </Button>
            </div>
            <div className="space-y-6">
                {announcements.map((announcement) => (
                    <Card
                        key={announcement.id}
                        className="bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-100"
                        style={{ padding: '12px', borderRadius: '10px', position: 'relative' }}
                    >
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold text-gray-800 mb-0">{announcement.announcement}</p>
                            <div className="text-gray-500 text-sm mb-4">
                                {new Date(announcement.timestamp).toLocaleString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: true,
                                })}
                            </div>
                            <div className="absolute top-4 right-4 flex space-x-4">
                                <Button
                                    type="text"
                                    icon={<IoMdCreate className="text-blue-600 text-2xl" />}
                                    onClick={() => handleEditClick(announcement)}
                                    className="text-lg"
                                />
                                <Button
                                    type="text"
                                    danger
                                    icon={<IoMdTrash className="text-red-600 text-2xl" />}
                                    onClick={() => handleDeleteClick(announcement.id)}
                                    className="text-lg"
                                />

                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {workshopDetails && (
                <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-800">Workshop Details</h3>
                    <pre>{JSON.stringify(workshopDetails, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default App;
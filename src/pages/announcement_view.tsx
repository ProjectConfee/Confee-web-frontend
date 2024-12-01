//
//
// import React, { useEffect, useState } from 'react';
//
// import {  Card } from 'antd';
// import 'antd/dist/reset.css'; // Ensure Ant Design styles are imported
//
// // Define the type for announcements based on your backend entity
// interface Announcement {
//     id: number;
//     announcement: string;
//     timestamp: string; // Adjust the type if it's a different format
// }
//
// const App: React.FC = () => {
//     const [announcements, setAnnouncements] = useState<Announcement[]>([]);
//
//     // Fetch all announcements from the backend
//     const fetchAnnouncements = async () => {
//         try {
//             const response = await fetch('http://localhost:8080/api/announcements/getAll');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const data = await response.json();
//             setAnnouncements(data);
//         } catch (error) {
//             console.error('Error fetching announcements:', error);
//         }
//     };
//
//     useEffect(() => {
//         fetchAnnouncements();
//     }, []);
//
//
//
//
//     return (
//         <div className="bg-gradient-to-r from-blue-50 to-gray-100 mt-16 mx-auto max-w-5xl p-8 rounded-3xl shadow-xl">
//             <div className="flex items-center justify-between mb-8">
//                 <h2 className="text-4xl font-extrabold text-gray-800">Announcements</h2>
//
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
//                                     hour12: true
//                                 })}
//                             </div>
//
//                         </div>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default App;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card } from 'antd';
// import 'antd/dist/reset.css'; // Ensure Ant Design styles are imported
//
// // Define the type for announcements based on your backend entity
// interface Announcement {
//     id: number;
//     announcement: string;
//     timestamp: string; // Adjust the type if it's a different format
// }
//
// const App: React.FC = () => {
//     const [announcements, setAnnouncements] = useState<Announcement[]>([]);
//
//     // Fetch all announcements from the backend
//     const fetchAnnouncements = async () => {
//         const token = localStorage.getItem("authToken"); // Retrieve token from local storage
//         if (!token) {
//             console.error("No auth token found in local storage.");
//             return;
//         }
//
//         try {
//             const response = await axios.get('http://localhost:8080/api/announcements/getAll', {
//                 headers: {
//                     Authorization: `Bearer ${token}`, // Include the token in the Authorization header
//                 },
//             });
//
//             setAnnouncements(response.data); // Update the state with the fetched announcements
//         } catch (error) {
//             console.error('Error fetching announcements:', error);
//         }
//     };
//
//     useEffect(() => {
//         fetchAnnouncements();
//     }, []);
//
//     return (
//         <div className="bg-gradient-to-r from-blue-50 to-gray-100 mt-16 mx-auto max-w-5xl p-8 rounded-3xl shadow-xl">
//             <div className="flex items-center justify-between mb-8">
//                 <h2 className="text-4xl font-extrabold text-gray-800">Announcements</h2>
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
import axios from 'axios';
import { Card } from 'antd';
import 'antd/dist/reset.css'; // Ensure Ant Design styles are imported

// Define the type for announcements based on your backend entity
interface Announcement {
    id: number;
    announcement: string;
    timestamp: string; // Adjust the type if it's a different format
}

const App: React.FC = () => {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);

    // Fetch all announcements from the backend
    const fetchAnnouncements = async () => {
        const token = localStorage.getItem("authToken"); // Retrieve token from local storage
        if (!token) {
            console.error("No auth token found in local storage.");
            return;
        }

        try {
            const response = await axios.get('http://localhost:8080/api/announcements/getAll', {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                },
            });

            // Sort announcements by timestamp in descending order (most recent first)
            const sortedAnnouncements = response.data.sort(
                (a: Announcement, b: Announcement) =>
                    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
            );

            setAnnouncements(sortedAnnouncements); // Update the state with the sorted announcements
        } catch (error) {
            console.error('Error fetching announcements:', error);
        }
    };

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    return (
        <div className="bg-gradient-to-r from-blue-50 to-gray-100 mt-16 mx-auto max-w-5xl p-8 rounded-3xl shadow-xl">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-extrabold text-gray-800">Announcements</h2>
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
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default App;

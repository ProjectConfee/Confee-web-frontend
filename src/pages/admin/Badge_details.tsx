// import React, { useState, useEffect } from 'react';
// import { Input, Button, Space, Table, message } from 'antd';
//
// const App: React.FC = () => {
//     const [badgeName, setBadgeName] = useState('');
//     const [privileges, setPrivileges] = useState('');
//     const [badgeImage, setBadgeImage] = useState<File | null>(null);
//     const [badges, setBadges] = useState<any[]>([]);
//     const [loading, setLoading] = useState(false);
//
//     // useEffect(() => {
//     //     fetchBadges();
//     // }, []);
//     //
//     // const fetchBadges = async () => {
//     //     setLoading(true);
//     //     try {
//     //         const response = await fetch('http://localhost:8080/badges');
//     //         if (!response.ok) {
//     //             throw new Error('Network response was not ok');
//     //         }
//     //         const data = await response.json();
//     //         setBadges(data);
//     //     } catch (error) {
//     //         message.error('Error fetching badges');
//     //         console.error('Error fetching badges:', error);
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };
//     useEffect(() => {
//         fetchBadges();
//     }, []);
//
//     // const fetchBadges = async () => {
//     //     setLoading(true);
//     //     try {
//     //         const response = await fetch('http://localhost:8080/badges');
//     //         if (!response.ok) {
//     //             throw new Error('Network response was not ok');
//     //         }
//     //         const data = await response.json();
//     //         console.log('Fetched badges:', data);
//     //         setBadges(data);
//     //     } catch (error) {
//     //         message.error('Error fetching badges');
//     //         console.error('Error fetching badges:', error);
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };
//     const fetchBadges = async () => {
//         setLoading(true);
//         try {
//             const response = await fetch('http://localhost:8080/badges');
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             console.log('Fetched badges:', data); // Debugging line
//             setBadges(data);
//         } catch (error) {
//             message.error('Error fetching badges');
//             console.error('Error fetching badges:', error);
//         } finally {
//             setLoading(false);
//         }
//     };
//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files) {
//             setBadgeImage(e.target.files[0]);
//         }
//     };
//
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//
//         const formData = new FormData();
//         formData.append('badgeName', badgeName);
//         formData.append('privileges', privileges);
//         if (badgeImage) {
//             formData.append('image', badgeImage);
//         }
//
//         try {
//             const response = await fetch('http://localhost:8080/badges/add', {
//                 method: 'POST',
//                 body: formData,
//             });
//
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//
//             message.success('Badge registered successfully');
//             setBadgeName('');
//             setPrivileges('');
//             setBadgeImage(null);
//             fetchBadges(); // Refresh badges list after successful registration
//         } catch (error) {
//             message.error('Error registering badge');
//             console.error('Error registering badge:', error);
//         }
//     };
//
//     const columns = [
//         {
//             title: 'Badge Name',
//             dataIndex: 'badgeName',
//             key: 'badgeName',
//         },
//         {
//             title: 'Privileges',
//             dataIndex: 'privileges',
//             key: 'privileges',
//         },
//         {
//             title: 'Image',
//             dataIndex: 'imagePath',
//             key: 'imagePath',
//             render: (text: string) => (
//                 // <img src={`http://localhost:8080${text}`} alt="Badge" style={{width: '100px', height: 'auto'}}/>
//                 <a href={`http://localhost:8080/uploads/${text}`} target="_blank" rel="noopener noreferrer">
//                     <Button>View Image</Button>
//                 </a>
//
//
//             ),
//         },
//     ];
//
//     return (
//         <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
//         <div
//                 className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-2 border-black p-10 rounded-lg'>
//                 <h2 className="text-2xl font-semibold text-center">Badge Register Details</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <p>Badge Name:</p>
//                         <Input
//                             size="large"
//                             value={badgeName}
//                             onChange={(e) => setBadgeName(e.target.value)}
//                             placeholder="Badge Name"
//                             style={{ width: '600px' }}
//                         />
//                     </div>
//                     <div className="mt-4">
//                         <p>Privileges:</p>
//                         <Input
//                             size="large"
//                             value={privileges}
//                             onChange={(e) => setPrivileges(e.target.value)}
//                             placeholder="Privileges"
//                             style={{ width: '600px' }}
//                         />
//                     </div>
//                     <div className="mt-4">
//                         <p>Badge Image:</p>
//                         <input
//                             type="file"
//                             onChange={handleFileChange}
//                             style={{ width: '600px' }}
//                         />
//                     </div>
//                     <div className="mt-4">
//                         <Space>
//                             <Button type="primary" htmlType="submit">Submit</Button>
//                         </Space>
//                     </div>
//                 </form>
//             </div>
//             <div className='mt-10'>
//                 <Table
//                     dataSource={badges}
//                     columns={columns}
//                     rowKey="id"
//                     loading={loading}
//                 />
//             </div>
//         </div>
//     );
// };
//
// export default App;


// import React, { useState, useEffect } from 'react';
// import { Input, Button, Space, Table, message } from 'antd';
//
// const App: React.FC = () => {
//     const [badgeName, setBadgeName] = useState('');
//     const [privileges, setPrivileges] = useState('');
//     const [badgeImage, setBadgeImage] = useState<File | null>(null);
//     const [badges, setBadges] = useState<any[]>([]);
//     const [loading, setLoading] = useState(false);
//
//     useEffect(() => {
//         fetchBadges();
//     }, []);
//
//     const fetchBadges = async () => {
//         setLoading(true);
//         try {
//             const response = await fetch('http://localhost:8080/badges');
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             console.log('Fetched badges:', data);
//             setBadges(data);
//         } catch (error) {
//             message.error('Error fetching badges');
//             console.error('Error fetching badges:', error);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files) {
//             setBadgeImage(e.target.files[0]);
//         }
//     };
//
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//
//         const formData = new FormData();
//         formData.append('badgeName', badgeName);
//         formData.append('privileges', privileges);
//         if (badgeImage) {
//             formData.append('image', badgeImage);
//         }
//
//         try {
//             const response = await fetch('http://localhost:8080/badges/add', {
//                 method: 'POST',
//                 body: formData,
//             });
//
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//
//             message.success('Badge registered successfully');
//             setBadgeName('');
//             setPrivileges('');
//             setBadgeImage(null);
//             fetchBadges(); // Refresh badges list after successful registration
//         } catch (error) {
//             message.error('Error registering badge');
//             console.error('Error registering badge:', error);
//         }
//     };
//
//     const columns = [
//         {
//             title: 'Badge Name',
//             dataIndex: 'badgeName',
//             key: 'badgeName',
//         },
//         {
//             title: 'Privileges',
//             dataIndex: 'privileges',
//             key: 'privileges',
//         },
//         {
//             title: 'Image',
//             dataIndex: 'imagePath',
//             key: 'imagePath',
//             render: (text: string) => (
//                 <a href={`http://localhost:8080/uploads/${text}`} target="_blank" rel="noopener noreferrer">
//                     <Button>View Image</Button>
//                 </a>
//             ),
//         },
//     ];
//
//     return (
//         <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
//             <div className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-2 border-black p-10 rounded-lg'>
//                 <h2 className="text-2xl font-semibold text-center">Badge Register Details</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <p>Badge Name:</p>
//                         <Input
//                             size="large"
//                             value={badgeName}
//                             onChange={(e) => setBadgeName(e.target.value)}
//                             placeholder="Badge Name"
//                             style={{ width: '600px' }}
//                         />
//                     </div>
//                     <div className="mt-4">
//                         <p>Privileges:</p>
//                         <Input
//                             size="large"
//                             value={privileges}
//                             onChange={(e) => setPrivileges(e.target.value)}
//                             placeholder="Privileges"
//                             style={{ width: '600px' }}
//                         />
//                     </div>
//                     <div className="mt-4">
//                         <p>Badge Image:</p>
//                         <input
//                             type="file"
//                             onChange={handleFileChange}
//                             style={{ width: '600px' }}
//                         />
//                     </div>
//                     <div className="mt-4">
//                         <Space>
//                             <Button type="primary" htmlType="submit">Submit</Button>
//                         </Space>
//                     </div>
//                 </form>
//             </div>
//             <div className='mt-10'>
//                 <Table
//                     dataSource={badges}
//                     columns={columns}
//                     rowKey="id"
//                     loading={loading}
//                 />
//             </div>
//         </div>
//     );
// };
//
// export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
//
// interface Badge {
//     id: number;
//     badgeName: string;
//     privileges: string;
//     imagePath: string;
// }
//
// const BadgeForm = () => {
//     const [badgeName, setBadgeName] = useState('');
//     const [privileges, setPrivileges] = useState('');
//     const [image, setImage] = useState<File | null>(null);
//     const [badges, setBadges] = useState<Badge[]>([]);
//     const [error, setError] = useState<string | null>(null);
//
//     useEffect(() => {
//         fetchBadges();
//     }, []);
//
//     const fetchBadges = async () => {
//         try {
//             const response = await axios.get('/badges');
//             if (Array.isArray(response.data)) {
//                 setBadges(response.data);
//             } else {
//                 console.error('Unexpected response data:', response.data);
//                 setBadges([]);
//             }
//         } catch (err) {
//             console.error('Failed to fetch badges:', err);
//             setError('Failed to fetch badges');
//             setBadges([]);
//         }
//     };
//
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('badgeName', badgeName);
//         formData.append('privileges', privileges);
//         if (image) {
//             formData.append('image', image);
//         }
//
//         try {
//             await axios.post('/badges', formData);
//             fetchBadges();
//         } catch (err) {
//             console.error('Failed to save badge:', err);
//             setError('Failed to save badge');
//         }
//     };
//
//     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files.length > 0) {
//             setImage(e.target.files[0]);
//         }
//     };
//
//     return (
//         <div>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={badgeName}
//                     onChange={(e) => setBadgeName(e.target.value)}
//                     placeholder="Badge Name"
//                     required
//                 />
//                 <input
//                     type="text"
//                     value={privileges}
//                     onChange={(e) => setPrivileges(e.target.value)}
//                     placeholder="Privileges"
//                     required
//                 />
//                 <input
//                     type="file"
//                     onChange={handleImageChange}
//                     required
//                 />
//                 <button type="submit">Save Badge</button>
//             </form>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Badge Name</th>
//                     <th>Privileges</th>
//                     <th>Image</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {badges.map((badge) => (
//                     <tr key={badge.id}>
//                         <td>{badge.badgeName}</td>
//                         <td>{badge.privileges}</td>
//                         <td>
//                             <button onClick={() => window.open(badge.imagePath, '_blank')}>View Image</button>
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//
// export default BadgeForm;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
//
// interface Badge {
//     id: number;
//     badgeName: string;
//     privileges: string;
//     imagePath: string;
// }
//
// const BadgeForm = () => {
//     const [badgeName, setBadgeName] = useState('');
//     const [privileges, setPrivileges] = useState('');
//     const [image, setImage] = useState<File | null>(null);
//     const [badges, setBadges] = useState<Badge[]>([]);
//     const [error, setError] = useState<string | null>(null);
//
//     useEffect(() => {
//         fetchBadges();
//     }, []);
//
//     const fetchBadges = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/badges/getAll');
//             if (Array.isArray(response.data)) {
//                 setBadges(response.data);
//             } else {
//                 console.error('Unexpected response data:', response.data);
//                 setBadges([]);
//             }
//         } catch (err) {
//             console.error('Failed to fetch badges:', err);
//             setError('Failed to fetch badges');
//             setBadges([]);
//         }
//     };
//
//     const handleSubmit = async () => {
//         try {
//             const formData = new FormData();
//             formData.append('badgeName', badgeName);
//             formData.append('privileges', privileges);
//             formData.append('image', imageFile); // Ensure this is a file object
//
//             const response = await axios.post('http://localhost:8080/badges/add', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             console.log(response.data);
//             // Handle successful response
//         } catch (error) {
//             console.error('Failed to save badge:', error);
//         }
//     };
//
//     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files.length > 0) {
//             setImage(e.target.files[0]);
//         }
//     };
//
//     return (
//         <div>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={badgeName}
//                     onChange={(e) => setBadgeName(e.target.value)}
//                     placeholder="Badge Name"
//                     required
//                 />
//                 <input
//                     type="text"
//                     value={privileges}
//                     onChange={(e) => setPrivileges(e.target.value)}
//                     placeholder="Privileges"
//                     required
//                 />
//                 <input
//                     type="file"
//                     onChange={handleImageChange}
//                     required
//                 />
//                 <button type="submit">Save Badge</button>
//             </form>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Badge Name</th>
//                     <th>Privileges</th>
//                     <th>Image</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {badges.map((badge) => (
//                     <tr key={badge.id}>
//                         <td>{badge.badgeName}</td>
//                         <td>{badge.privileges}</td>
//                         <td>
//                             <button onClick={() => window.open(badge.imagePath, '_blank')}>View Image</button>
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//
// export default BadgeForm;

//
// import React, { useState } from 'react';
// import axios from 'axios';
//
// const BadgeDetails: React.FC = () => {
//     const [badgeName, setBadgeName] = useState('');
//     const [privileges, setPrivileges] = useState('');
//     const [imageFile, setImageFile] = useState<File | null>(null); // Define and use imageFile
//
//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files[0]) {
//             setImageFile(e.target.files[0]); // Set imageFile
//         }
//     };
//
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//
//         if (!imageFile) {
//             console.error('No image file selected');
//             return;
//         }
//
//         const formData = new FormData();
//         formData.append('badgeName', badgeName);
//         formData.append('privileges', privileges);
//         formData.append('image', imageFile);
//
//         try {
//             await axios.post('http://localhost:8080/badges/add', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             console.log('Badge saved successfully');
//         } catch (error) {
//             console.error('Failed to save badge:');
//         }
//     };
//
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={badgeName}
//                 onChange={(e) => setBadgeName(e.target.value)}
//                 placeholder="Badge Name"
//             />
//             <input
//                 type="text"
//                 value={privileges}
//                 onChange={(e) => setPrivileges(e.target.value)}
//                 placeholder="Privileges"
//             />
//             <input
//                 type="file"
//                 onChange={handleFileChange}
//             />
//             <button type="submit">Save Badge</button>
//         </form>
//     );
// };
//
// export default BadgeDetails;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Input, Button } from 'antd';


const BadgeDetails: React.FC = () => {
    const [badgeName, setBadgeName] = useState('');
    const [privileges, setPrivileges] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [badges, setBadges] = useState<never[]>([]);

    useEffect(() => {
        fetchBadges();
    }, []);

    const fetchBadges = async () => {
        try {
            const response = await axios.get('http://localhost:8080/badges/getAll');
            setBadges(response.data);
        } catch (error) {
            console.error('Failed to fetch badges:', error);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!imageFile) {
            console.error('No image file selected');
            return;
        }

        const formData = new FormData();
        formData.append('badgeName', badgeName);
        formData.append('privileges', privileges);
        formData.append('image', imageFile);

        try {
            await axios.post('http://localhost:8080/badges/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Badge saved successfully');
            fetchBadges(); // Refresh the badge list
        } catch (error) {
            console.error('Failed to save badge:', error);
        }
    };

    const columns = [
        {
            title: 'Badge Name',
            dataIndex: 'badgeName',
            key: 'badgeName',
        },
        {
            title: 'Privileges',
            dataIndex: 'privileges',
            key: 'privileges',
        },
        {
            title: 'Image',
            dataIndex: 'imagePath',
            key: 'imagePath',
            render: (text: string) => <img src={text} alt="Badge" style={{ width: 100 }} />,
        },
    ];

    return (
        <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
            <div
                className='flex flex-col justify-center items-center h-full mt-20 ml-50 border-2 border-black p-10 rounded-lg'>
                <h2 className="text-2xl font-semibold text-center items-center flex-auto">Badge Register Details</h2><br/><br/><br/>
                <div>
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            value={badgeName}
                            onChange={(e) => setBadgeName(e.target.value)}
                            placeholder="Badge Name"
                        /><br/><br/><br/>
                        <Input
                            type="text"
                            value={privileges}
                            onChange={(e) => setPrivileges(e.target.value)}
                            placeholder="Privileges"
                        /><br/><br/><br/>
                        <input
                            type="file"
                            onChange={handleFileChange}
                        /><br/><br/><br/>
                        <Button type="primary" htmlType="submit"> Save Badge</Button>
                    </form>


                </div>

            </div>
            <Table dataSource={badges} columns={columns} rowKey="id" style={{marginTop: 20}}/>
        </div>
)
    ;
};

export default BadgeDetails;

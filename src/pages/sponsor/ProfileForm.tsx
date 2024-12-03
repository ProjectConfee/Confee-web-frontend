// import React, { useState } from 'react';
//
// interface Profile {
//     role: string;
//     email: string;
//     address: string;
// }
// interface ProfileFormProps {
//     onSubmit: (profile: Profile) => void;
// }
//
//
// const ProfileForm: React.FC<ProfileFormProps> = ({ onSubmit }) => {
//     const [profile, setProfile] = useState<Profile>({ role: '', email: '', address: '' });
//
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setProfile({ ...profile, [name]: value });
//     };
//
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         onSubmit(profile);
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input name="name" value={profile.role} onChange={handleChange} placeholder="Name" required />
//             <input name="email" value={profile.email} onChange={handleChange} placeholder="Email" required />
//             <input name="address" value={profile.address} onChange={handleChange} placeholder="Address" required />
//             <button type="submit">Submit</button>
//         </form>
//     );
// };
//
// export default ProfileForm;

//
// // Define the Profile interface
// interface Profile {
//     companyName: string;
//     companyAddress: string;
//     contactNumber: string;
//     companyEmail: string;
//     biography: string;
//     playGames: Array<{ gameName: string; gameType: string }>;
//     companyLogo: string;
//     socialLinks: { [key: string]: string };
// }
//
// interface ProfileFormProps {
//     onSubmit: (profile: Profile) => void;
// }
//
// const ProfileForm: React.FC<ProfileFormProps> = ({ onSubmit }) => {
//     const [companyName, setCompanyName] = useState('');
//     const [companyAddress, setCompanyAddress] = useState('');
//     const [contactNumber, setContactNumber] = useState('');
//     const [companyEmail, setCompanyEmail] = useState('');
//     const [biography, setBiography] = useState('');
//     const [playGames, setPlayGames] = useState([{ gameName: '', gameType: '' }]);
//     const [companyLogo, setCompanyLogo] = useState('');
//     const [socialLinks, setSocialLinks] = useState<{ [key: string]: string }>({
//         facebook: '',
//         twitter: '',
//         instagram: '',
//         linkedin: '',
//         youtube: '',
//     });
//
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         const profile: Profile = {
//             companyName,
//             companyAddress,
//             contactNumber,
//             companyEmail,
//             biography,
//             playGames,
//             companyLogo,
//             socialLinks,
//         };
//         onSubmit(profile);
//     };
//
//     const handlePlayGameChange = (index: number, field: string, value: string) => {
//         const updatedPlayGames = [...playGames];
//         updatedPlayGames[index] = { ...updatedPlayGames[index], [field]: value };
//         setPlayGames(updatedPlayGames);
//     };
//
//     const handleAddGame = () => {
//         setPlayGames([...playGames, { gameName: '', gameType: '' }]);
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Company Name:
//                 <input
//                     type="text"
//                     value={companyName}
//                     onChange={(e) => setCompanyName(e.target.value)}
//                 />
//             </label>
//             <label>
//                 Company Address:
//                 <input
//                     type="text"
//                     value={companyAddress}
//                     onChange={(e) => setCompanyAddress(e.target.value)}
//                 />
//             </label>
//             <label>
//                 Contact Number:
//                 <input
//                     type="text"
//                     value={contactNumber}
//                     onChange={(e) => setContactNumber(e.target.value)}
//                 />
//             </label>
//             <label>
//                 Company Email:
//                 <input
//                     type="email"
//                     value={companyEmail}
//                     onChange={(e) => setCompanyEmail(e.target.value)}
//                 />
//             </label>
//             <label>
//                 Biography:
//                 <textarea
//                     value={biography}
//                     onChange={(e) => setBiography(e.target.value)}
//                 />
//             </label>
//
//             <div>
//                 <h3>Play Games</h3>
//                 {playGames.map((game, index) => (
//                     <div key={index}>
//                         <input
//                             type="text"
//                             placeholder="Game Name"
//                             value={game.gameName}
//                             onChange={(e) =>
//                                 handlePlayGameChange(index, 'gameName', e.target.value)
//                             }
//                         />
//                         <input
//                             type="text"
//                             placeholder="Game Type"
//                             value={game.gameType}
//                             onChange={(e) =>
//                                 handlePlayGameChange(index, 'gameType', e.target.value)
//                             }
//                         />
//                     </div>
//                 ))}
//                 <button type="button" onClick={handleAddGame}>Add Game</button>
//             </div>
//
//             <label>
//                 Company Logo (URL or base64 string):
//                 <input
//                     type="text"
//                     value={companyLogo}
//                     onChange={(e) => setCompanyLogo(e.target.value)}
//                 />
//             </label>
//
//             <h3>Social Links</h3>
//             <label>
//                 Facebook:
//                 <input
//                     type="text"
//                     value={socialLinks.facebook}
//                     onChange={(e) => setSocialLinks({ ...socialLinks, facebook: e.target.value })}
//                 />
//             </label>
//             <label>
//                 Twitter:
//                 <input
//                     type="text"
//                     value={socialLinks.twitter}
//                     onChange={(e) => setSocialLinks({ ...socialLinks, twitter: e.target.value })}
//                 />
//             </label>
//             <label>
//                 Instagram:
//                 <input
//                     type="text"
//                     value={socialLinks.instagram}
//                     onChange={(e) => setSocialLinks({ ...socialLinks, instagram: e.target.value })}
//                 />
//             </label>
//             <label>
//                 LinkedIn:
//                 <input
//                     type="text"
//                     value={socialLinks.linkedin}
//                     onChange={(e) => setSocialLinks({ ...socialLinks, linkedin: e.target.value })}
//                 />
//             </label>
//             <label>
//                 YouTube:
//                 <input
//                     type="text"
//                     value={socialLinks.youtube}
//                     onChange={(e) => setSocialLinks({ ...socialLinks, youtube: e.target.value })}
//                 />
//             </label>
//
//             <button type="submit">Submit</button>
//         </form>
//     );
// };
//
// export default ProfileForm;

// import { Form, Input, Button, message } from 'antd';
//
// const { TextArea } = Input;
//
// interface Profile {
//     id: number | null;
//     name: string;
//     email: string;
//     address: string;
// }
//
// const ProfileForm: React.FC<{ onSubmit: (profile: Profile) => void }> = ({ onSubmit }) => {
//     const [form] = Form.useForm();
//     const [profile, setProfile] = useState<Profile | null>(null);
//
//     const handleFinish = (values) => {
//         const profile: Profile = {
//             id: values.id || null,  // If ID is available, include it; otherwise, it's null
//             name: values.name,
//             email: values.email,
//             address: values.address,
//         };
//         onSubmit(profile);
//         form.resetFields();
//         message.success('Profile saved successfully!');
//     };
//
//     return (
//         <div className="flex items-center justify-center min-h-screen">
//             <div className="container p-8 bg-white shadow-lg rounded-lg w-full max-w-3xl">
//                 <h1 className="text-3xl font-bold mb-6 text-center text-black">Sponsor Profile</h1>
//                 <Form form={form} layout="vertical" onFinish={handleFinish}>
//                     <Form.Item label="ID" name="id">
//                         <Input className="rounded-md" disabled />  {/* ID field disabled if you don't want to edit it */}
//                     </Form.Item>
//                     <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
//                         <Input className="rounded-md" />
//                     </Form.Item>
//                     <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Please enter a valid email address' }]}>
//                         <Input className="rounded-md" />
//                     </Form.Item>
//                     <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please enter your address' }]}>
//                         <TextArea rows={4} className="rounded-md" />
//                     </Form.Item>
//                     <Form.Item>
//                         <Button type="primary" htmlType="submit" className="rounded-md w-full mt-6">Submit</Button>
//                     </Form.Item>
//                 </Form>
//             </div>
//         </div>
//     );
// };
//
// export default ProfileForm;
// import React, { useEffect, useState } from 'react';
// import { Form, Input, Button, message, Select, Row, Col, List } from 'antd';
//
// const { TextArea } = Input;
// const { Option } = Select;
//
// const platforms = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube'];
//
// interface SocialMediaLink {
//     platform: string;
//     url: string;
// }
//
// interface PlayGame {
//     gameName: string;
//     gameType: string;
// }
//
// interface Profile {
//     companyName: string;
//     companyAddress: string;
//     contactNumber: string;
//     companyEmail: string;
//     biography: string;
//     playGames: PlayGame[];
//     companyLogo: string;
//     socialMediaLinks: SocialMediaLink[];
// }
//
// const ProfileForm: React.FC<{ onSubmit: (profile: Profile) => void, profileData?: Profile }> = ({ onSubmit, profileData }) => {
//     const [form] = Form.useForm();
//     const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLink[]>(profileData?.socialMediaLinks || []);
//     const [playGames, setPlayGames] = useState<PlayGame[]>(profileData?.playGames || []);
//     const [logoFile] = useState<File | null>(null);
//
//     useEffect(() => {
//         if (profileData) {
//             form.setFieldsValue(profileData);
//         }
//     }, [profileData, form]);
//
//     const handleAddSocialMediaLink = () => {
//         setSocialMediaLinks([...socialMediaLinks, { platform: '', url: '' }]);
//     };
//
//     const handleAddPlayGame = () => {
//         setPlayGames([...playGames, { gameName: '', gameType: '' }]);
//     };
//
//     const handleSocialMediaChange = (index: number, key: string, value: string) => {
//         const newLinks = [...socialMediaLinks];
//         newLinks[index] = { ...newLinks[index], [key]: value };
//         setSocialMediaLinks(newLinks);
//     };
//
//     const handlePlayGameChange = (index: number, key: string, value: string) => {
//         const newPlayGames = [...playGames];
//         newPlayGames[index] = { ...newPlayGames[index], [key]: value };
//         setPlayGames(newPlayGames);
//     };
//
//     const handleFinish = (values: any) => {
//         const profile: Profile = {
//             ...values,
//             companyLogo: logoFile ? URL.createObjectURL(logoFile) : '',
//             socialMediaLinks: socialMediaLinks.filter(link => link.platform && link.url),
//             playGames: playGames.filter(game => game.gameName && game.gameType),
//         };
//         onSubmit(profile);
//         message.success('Profile submitted successfully!');
//     };
//
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="container p-6 bg-white shadow-md rounded-lg w-1/2">
//                 <h1 className="text-2xl font-bold mb-4 text-center">Sponsor Profile</h1>
//                 <Form form={form} layout="vertical" onFinish={handleFinish}>
//                     <Form.Item label="Company Name" name="companyName" rules={[{ required: true, message: 'Please enter the company name' }]}>
//                         <Input />
//                     </Form.Item>
//                     <Form.Item label="Company Address" name="companyAddress" rules={[{ required: true, message: 'Please enter the company address' }]}>
//                         <Input />
//                     </Form.Item>
//                     <Form.Item label="Contact Number" name="contactNumber" rules={[{ required: true, message: 'Please enter the contact number' }]}>
//                         <Input />
//                     </Form.Item>
//                     <Form.Item label="Company Email" name="companyEmail" rules={[{ required: true, message: 'Please enter the company email' }, { type: 'email', message: 'Please enter a valid email address' }]}>
//                         <Input />
//                     </Form.Item>
//                     <Form.Item label="Biography" name="biography" rules={[{ required: true, message: 'Please enter a biography' }]}>
//                         <TextArea rows={4} />
//                     </Form.Item>
//                     <Form.Item label="Play Games Added to the Event">
//                         {playGames.length > 0 && (
//                             <List
//                                 bordered
//                                 dataSource={playGames}
//                                 renderItem={(item, index) => (
//                                     <List.Item>
//                                         <Input
//                                             value={item.gameName}
//                                             onChange={(e) => handlePlayGameChange(index, 'gameName', e.target.value)}
//                                             placeholder="Game Name"
//                                             style={{ marginBottom: '10px' }}
//                                         />
//                                         <Input
//                                             value={item.gameType}
//                                             onChange={(e) => handlePlayGameChange(index, 'gameType', e.target.value)}
//                                             placeholder="Game Type"
//                                         />
//                                     </List.Item>
//                                 )}
//                             />
//                         )}
//                         <Button type="dashed" onClick={handleAddPlayGame} block style={{ marginTop: '10px' }}>
//                             Add Play Game
//                         </Button>
//                     </Form.Item>
//                     {socialMediaLinks.map((link, index) => (
//                         <Row key={index} gutter={16}>
//                             <Col span={12}>
//                                 <Select value={link.platform} onChange={(value) => handleSocialMediaChange(index, 'platform', value)}>
//                                     {platforms.map(platform => (
//                                         <Option key={platform} value={platform}>{platform}</Option>
//                                     ))}
//                                 </Select>
//                             </Col>
//                             <Col span={12}>
//                                 <Input value={link.url} onChange={(e) => handleSocialMediaChange(index, 'url', e.target.value)} placeholder="URL" />
//                             </Col>
//                         </Row>
//                     ))}
// //                     <Button type="dashed" onClick={handleAddSocialMediaLink} block>Add Social Media Link</Button>
// //                     <Form.Item>
// //                         <Button type="primary" htmlType="submit" style={{ marginTop: '20px' }}>Submit</Button>
// //                     </Form.Item>
// //                 </Form>
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default ProfileForm;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Form, Input, Button, message, Select, Row, Col, List } from 'antd';
//
// const { TextArea } = Input;
// const { Option } = Select;
//
// const platforms = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube'];
//
// interface SocialMediaLink {
//     platform: string;
//     url: string;
// }
//
// interface PlayGame {
//     gameName: string;
//     gameType: string;
// }
//
// interface Profile {
//     companyName: string;
//     companyAddress: string;
//     contactNumber: string;
//     companyEmail: string;
//     biography: string;
//     playGames: PlayGame[];
//     companyLogo: string;
//     socialMediaLinks: SocialMediaLink[];
// }
//
// const ProfileForm: React.FC<{ id: string }> = ({ id }) => {
//     const [form] = Form.useForm();
//     const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLink[]>([]);
//     const [playGames, setPlayGames] = useState<PlayGame[]>([]);
//     const [logoFile] = useState<File | null>(null);
//     const token = localStorage.getItem("authToken");
//
//
//     useEffect(() => {
//         const fetchProfileData = async () => {
//             if (!token) {
//                 message.error("No authentication token found.");
//                 return;
//             }
//
//             try {
//                 const response = await axios.get(`http://localhost:8080/api/v1/admin/workshop/${id}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//
//                 const profileData: Profile = response.data;
//                 form.setFieldsValue(profileData);
//                 setSocialMediaLinks(profileData.socialMediaLinks || []);
//                 setPlayGames(profileData.playGames || []);
//             } catch (error) {
//                 console.error("Error fetching profile data:", error);
//                 message.error("Failed to load profile data.");
//             }
//         };
//
//         fetchProfileData();
//     }, [id, token, form]);
//
//     const handleAddSocialMediaLink = () => {
//         setSocialMediaLinks([...socialMediaLinks, { platform: '', url: '' }]);
//     };
//
//     const handleAddPlayGame = () => {
//         setPlayGames([...playGames, { gameName: '', gameType: '' }]);
//     };
//
//     const handleSocialMediaChange = (index: number, key: string, value: string) => {
//         const newLinks = [...socialMediaLinks];
//         newLinks[index] = { ...newLinks[index], [key]: value };
//         setSocialMediaLinks(newLinks);
//     };
//
//     const handlePlayGameChange = (index: number, key: string, value: string) => {
//         const newPlayGames = [...playGames];
//         newPlayGames[index] = { ...newPlayGames[index], [key]: value };
//         setPlayGames(newPlayGames);
//     };
//
//     const handleFinish = async (values: any) => {
//         const profile: Profile = {
//             ...values,
//             companyLogo: logoFile ? URL.createObjectURL(logoFile) : '',
//             socialMediaLinks: socialMediaLinks.filter(link => link.platform && link.url),
//             playGames: playGames.filter(game => game.gameName && game.gameType),
//         };
//
//         try {
//             await axios.post(
//                 `http://localhost:8080/api/v1/admin/workshop`,
//                 profile,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         'Content-Type': 'application/json',
//                     },
//                 }
//             );
//             message.success('Profile submitted successfully!');
//         } catch (error) {
//             console.error("Error submitting profile:", error);
//             message.error("Failed to submit profile.");
//         }
//     };
//
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="container p-6 bg-white shadow-md rounded-lg w-1/2">
//                 <h1 className="text-2xl font-bold mb-4 text-center">Sponsor Profile</h1>
//                 <Form form={form} layout="vertical" onFinish={handleFinish}>
//                     <Form.Item label="Company Name" name="companyName" rules={[{ required: true, message: 'Please enter the company name' }]}>
//                         <Input />
//                     </Form.Item>
//                     <Form.Item label="Company Address" name="companyAddress" rules={[{ required: true, message: 'Please enter the company address' }]}>
//                         <Input />
//                     </Form.Item>
//                     <Form.Item label="Contact Number" name="contactNumber" rules={[{ required: true, message: 'Please enter the contact number' }]}>
//                         <Input />
//                     </Form.Item>
//                     <Form.Item label="Company Email" name="companyEmail" rules={[{ required: true, message: 'Please enter the company email' }, { type: 'email', message: 'Please enter a valid email address' }]}>
//                         <Input />
//                     </Form.Item>
//                     <Form.Item label="Biography" name="biography" rules={[{ required: true, message: 'Please enter a biography' }]}>
//                         <TextArea rows={4} />
//                     </Form.Item>
//                     <Form.Item label="Play Games Added to the Event">
//                         {playGames.length > 0 && (
//                             <List
//                                 bordered
//                                 dataSource={playGames}
//                                 renderItem={(item, index) => (
//                                     <List.Item>
//                                         <Input
//                                             value={item.gameName}
//                                             onChange={(e) => handlePlayGameChange(index, 'gameName', e.target.value)}
//                                             placeholder="Game Name"
//                                             style={{ marginBottom: '10px' }}
//                                         />
//                                         <Input
//                                             value={item.gameType}
//                                             onChange={(e) => handlePlayGameChange(index, 'gameType', e.target.value)}
//                                             placeholder="Game Type"
//                                         />
//                                     </List.Item>
//                                 )}
//                             />
//                         )}
//                         <Button type="dashed" onClick={handleAddPlayGame} block style={{ marginTop: '10px' }}>
//                             Add Play Game
//                         </Button>
//                     </Form.Item>
//                     {socialMediaLinks.map((link, index) => (
//                         <Row key={index} gutter={16}>
//                             <Col span={12}>
//                                 <Select
//                                     value={link.platform}
//                                     onChange={(value) => handleSocialMediaChange(index, 'platform', value)}
//                                 >
//                                     {platforms.map(platform => (
//                                         <Option key={platform} value={platform}>{platform}</Option>
//                                     ))}
//                                 </Select>
//                             </Col>
//                             <Col span={12}>
//                                 <Input value={link.url} onChange={(e) => handleSocialMediaChange(index, 'url', e.target.value)} placeholder="URL" />
//                             </Col>
//                         </Row>
//                     ))}
//                     <Button type="dashed" onClick={handleAddSocialMediaLink} block>Add Social Media Link</Button>
//                     <Form.Item>
//                         <Button type="primary" htmlType="submit" style={{ marginTop: '20px' }}>Submit</Button>
//                     </Form.Item>
//                 </Form>
//             </div>
//         </div>
//     );
// };
//
// export default ProfileForm;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, message, Select, Row, Col, List } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const platforms = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube'];

interface SocialMediaLink {
    platform: string;
    url: string;
}

interface PlayGame {
    gameName: string;
    gameType: string;
}

interface Profile {
    companyName: string;
    companyAddress: string;
    contactNumber: string;
    companyEmail: string;
    biography: string;
    playGames: PlayGame[];
    companyLogo: string;
    socialMediaLinks: SocialMediaLink[];
}

const ProfileForm: React.FC = () => {
    const [form] = Form.useForm();
    const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLink[]>([]);
    const [playGames, setPlayGames] = useState<PlayGame[]>([]);
    const [logoFile] = useState<File | null>(null);
    const [profileExists, setProfileExists] = useState<boolean>(false);
    const [profileData, setProfileData] = useState<Profile | null>(null);
    const token = localStorage.getItem("authToken");

    useEffect(() => {
        const fetchProfileData = async () => {
            if (!token) {
                message.error("No authentication token found.");
                return;
            }

            const userId = localStorage.getItem("id"); // Assuming you have the user ID stored in localStorage

            if (!userId) {
                message.error("No user ID found in session.");
                return;
            }

            try {
                // Check if profile exists in the database for this user
                const response = await axios.get(`http://localhost:8080/api/v1/profiles/{id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data) {
                    // Profile exists, display profile data
                    setProfileExists(true);
                    setProfileData(response.data);
                } else {
                    // No profile found, show the form
                    setProfileExists(false);
                }
            } catch (error) {
                console.error("Error fetching profile data:", error);
                message.error("Failed to load profile data.");
            }
        };

        fetchProfileData();
    }, [token]);

    const handleAddSocialMediaLink = () => {
        setSocialMediaLinks([...socialMediaLinks, { platform: '', url: '' }]);
    };

    const handleAddPlayGame = () => {
        setPlayGames([...playGames, { gameName: '', gameType: '' }]);
    };

    const handleSocialMediaChange = (index: number, key: string, value: string) => {
        const newLinks = [...socialMediaLinks];
        newLinks[index] = { ...newLinks[index], [key]: value };
        setSocialMediaLinks(newLinks);
    };

    const handlePlayGameChange = (index: number, key: string, value: string) => {
        const newPlayGames = [...playGames];
        newPlayGames[index] = { ...newPlayGames[index], [key]: value };
        setPlayGames(newPlayGames);
    };

    const handleFinish = async (values: any) => {
        const profile: Profile = {
            ...values,
            companyLogo: logoFile ? URL.createObjectURL(logoFile) : '',
            socialMediaLinks: socialMediaLinks.filter(link => link.platform && link.url),
            playGames: playGames.filter(game => game.gameName && game.gameType),
        };

        try {
            await axios.post(
                `http://localhost:8080/api/v1/profiles/add`,
                profile,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            message.success('Profile submitted successfully!');
        } catch (error) {
            console.error("Error submitting profile:", error);
            message.error("Failed to submit profile.");
        }
    };

    if (profileExists && profileData) {
        // If profile exists, show profile details
        return (
            <div className="profile-container">
                <h1>{profileData.companyName}</h1>
                <p>{profileData.companyAddress}</p>
                <p>{profileData.contactNumber}</p>
                <p>{profileData.companyEmail}</p>
                <p>{profileData.biography}</p>
                {/* Render playGames and social media links as necessary */}
                <h2>Games</h2>
                <ul>
                    {profileData.playGames.map((game, index) => (
                        <li key={index}>{game.gameName} - {game.gameType}</li>
                    ))}
                </ul>
                <h2>Social Media</h2>
                <ul>
                    {profileData.socialMediaLinks.map((link, index) => (
                        <li key={index}>{link.platform}: <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a></li>
                    ))}
                </ul>
            </div>
        );
    } else {
        // If profile doesn't exist, show profile form
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="container p-6 bg-white shadow-md rounded-lg w-1/2">
                    <h1 className="text-2xl font-bold mb-4 text-center">Sponsor Profile</h1>
                    <Form form={form} layout="vertical" onFinish={handleFinish}>
                        <Form.Item label="Company Name" name="companyName" rules={[{ required: true, message: 'Please enter the company name' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Company Address" name="companyAddress" rules={[{ required: true, message: 'Please enter the company address' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Contact Number" name="contactNumber" rules={[{ required: true, message: 'Please enter the contact number' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Company Email" name="companyEmail" rules={[{ required: true, message: 'Please enter the company email' }, { type: 'email', message: 'Please enter a valid email address' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Biography" name="biography" rules={[{ required: true, message: 'Please enter a biography' }]}>
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item label="Play Games Added to the Event">
                            {playGames.length > 0 && (
                                <List
                                    bordered
                                    dataSource={playGames}
                                    renderItem={(item, index) => (
                                        <List.Item>
                                            <Input
                                                value={item.gameName}
                                                onChange={(e) => handlePlayGameChange(index, 'gameName', e.target.value)}
                                                placeholder="Game Name"
                                                style={{ marginBottom: '10px' }}
                                            />
                                            <Input
                                                value={item.gameType}
                                                onChange={(e) => handlePlayGameChange(index, 'gameType', e.target.value)}
                                                placeholder="Game Type"
                                            />
                                        </List.Item>
                                    )}
                                />
                            )}
                            <Button type="dashed" onClick={handleAddPlayGame} block style={{ marginTop: '10px' }}>
                                Add Play Game
                            </Button>
                        </Form.Item>
                        {socialMediaLinks.map((link, index) => (
                            <Row key={index} gutter={16}>
                                <Col span={12}>
                                    <Select
                                        value={link.platform}
                                        onChange={(value) => handleSocialMediaChange(index, 'platform', value)}
                                    >
                                        {platforms.map(platform => (
                                            <Option key={platform} value={platform}>{platform}</Option>
                                        ))}
                                    </Select>
                                </Col>
                                <Col span={12}>
                                    <Input value={link.url} onChange={(e) => handleSocialMediaChange(index, 'url', e.target.value)} placeholder="URL" />
                                </Col>
                            </Row>
                        ))}
                        <Button type="dashed" onClick={handleAddSocialMediaLink} block>Add Social Media Link</Button>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ marginTop: '20px' }}>Submit</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
};

export default ProfileForm;

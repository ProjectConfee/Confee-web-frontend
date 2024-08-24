//
// import { Button, Divider, List } from "antd";
// import {Link} from "react-router-dom";
//
// const data = [
//     'Company Name: WSO2',
//     'Company Address: No:10,MainStreet,Colombo.',
//     'Contact Number: 011-25437654',
//     'Company Email: WSO2@gmail.com',
// ];
//
// const data1 = [
//     'Biography: pivotal partner in our API-first strategy, collaboratively built a scalable platform that transformed our postal business ',
//     'Play games added to the event : We are going to give small prizes to winners in out install games.',
//
// ];
//
// const App = () => {
//     return (
//         <div className="flex justify-center h-screen">
//             <div className="bg-white h-[500px] shadow-2xl w-7/8 mx-20 rounded-3xl mt-20">
//                 <div className="flex items-center pt-5 justify-between px-10">
//                     <div className="text-2xl font-bold">
//                         My Profile
//                     </div>
//                     <div className="flex items-center">
//                         <div className="mr-4">
//                             <img
//                                 src="src/assets/gold_badge.jpeg"
//                                 alt="Profile"
//                                 className="object-cover w-20 h-20"
//                             />
//                         </div>
//                         <Link to="/edit_sp_profile">
//                             <Button    type="primary" style={{ backgroundColor: '#3572EF', borderColor: '#3572EF' }}>
//                                 Edit Profile
//                             </Button>
//                         </Link>
//                     </div>
//                 </div>
//                 <Divider />
//                 <div className="mt-5 flex justify-around">
//                     <div className="flex flex-col items-center">
//                         <div className="bg-white shadow-md rounded-3xl h-50 w-56 overflow-hidden mt-2">
//                             <img
//                                 src="src/assets/profile_final.png"
//                                 alt="Profile"
//                                 className="object-cover w-full h-full"
//                             />
//                         </div>
//
//                         <div className="text-center mt-0">
//                             <p className="font-bold text-lg">
//                                 WSO2
//                             </p>
//                         </div>
//                         <div className="flex space-x-4">
//                             <a href="#linkedin" target="_blank" rel="noopener noreferrer">
//                                 <img src="/src/assets/linkedin1.png" alt="LinkedIn" className="w-10 h-10" />
//                             </a>
//
//                             <a href="#github" target="_blank" rel="noopener noreferrer">
//                                 <img src="/src/assets/github1.png" alt="GitHub" className="w-10 h-10" />
//                             </a>
//
//                             <a href="#twitter" target="_blank" rel="noopener noreferrer">
//                                 <img src="/src/assets/twitter1.png" alt="Twitter" className="w-8 h-9" />
//                             </a>
//                         </div>
//                     </div>
//                     <div className="p-3 w-3/5 text-xl font-semibold">
//                         <div className="space-y-4">
//                             <List
//                                 size="small"
//                                 className="shadow-md"
//                                 bordered
//                                 dataSource={data}
//                                 renderItem={(item) => <List.Item>{item}</List.Item>}
//                             />
//                             <List
//                                 size="small"
//                                 className="shadow-md"
//                                 bordered
//                                 dataSource={data1}
//                                 renderItem={(item) => <List.Item>{item}</List.Item>}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;
import React, { useState } from 'react';
import { Form, Input, Button, Upload, message, Select, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

const platforms = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube'];

interface SocialMediaLink {
    platform: string;
    url: string;
}

interface Profile {
    companyName: string;
    companyAddress: string;
    contactNumber: string;
    companyEmail: string;
    biography: string;
    playGames: string;
    companyLogo: string;
    socialMediaLinks: SocialMediaLink[];
}

const ProfileForm: React.FC<{ onSubmit: (profile: Profile) => void }> = ({ onSubmit }) => {
    const [form] = Form.useForm();
    const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLink[]>([]);
    const [logoFile, setLogoFile] = useState<File | null>(null);

    const handleAddSocialMediaLink = () => {
        setSocialMediaLinks([...socialMediaLinks, { platform: '', url: '' }]);
    };

    const handleSocialMediaChange = (index: number, key: string, value: string) => {
        const newLinks = [...socialMediaLinks];
        newLinks[index] = { ...newLinks[index], [key]: value };
        setSocialMediaLinks(newLinks);
    };

    const handleFileChange = (info: any) => {
        const file = info.file.originFileObj as File;
        setLogoFile(file);
    };

    const handleFinish = (values: any) => {
        const profile: Profile = {
            ...values,
            companyLogo: logoFile ? URL.createObjectURL(logoFile) : '',
            socialMediaLinks: socialMediaLinks.filter(link => link.platform && link.url),
        };
        onSubmit(profile);
        form.resetFields();
        setSocialMediaLinks([]);
        setLogoFile(null);
        message.success('Profile saved successfully!');
    };

    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="container  p-6 bg-white shadow-md rounded-lg w-1/2 items-center">
                <h1 className="text-2xl font-bold mb-4 text-center">Sponsor Profile</h1>
                <Form form={form} layout="vertical" onFinish={handleFinish}>
                    <Form.Item label="Company Name" name="companyName"
                               rules={[{required: true, message: 'Please enter the company name'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Company Address" name="companyAddress"
                               rules={[{required: true, message: 'Please enter the company address'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Contact Number" name="contactNumber"
                               rules={[{required: true, message: 'Please enter the contact number'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Company Email" name="companyEmail"
                               rules={[{required: true, message: 'Please enter the company email'}, {
                                   type: 'email',
                                   message: 'Please enter a valid email address'
                               }]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Biography" name="biography"
                               rules={[{required: true, message: 'Please enter a biography'}]}>
                        <TextArea rows={4}/>
                    </Form.Item>
                    <Form.Item label="Play Games Added to the Event" name="playGames"
                               rules={[{required: true, message: 'Please enter the play games'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Company Logo">
                        <Upload beforeUpload={() => false} onChange={handleFileChange}>
                            <Button icon={<UploadOutlined/>}>Upload Logo</Button>
                        </Upload>
                    </Form.Item>
                    {socialMediaLinks.map((link, index) => (
                        <Row key={index} gutter={16}>
                            <Col span={12}>
                                <Form.Item label={`Platform`}
                                           rules={[{required: true, message: 'Please select a platform'}]}>
                                    <Select value={link.platform}
                                            onChange={(value) => handleSocialMediaChange(index, 'platform', value)}>
                                        {platforms.map(platform => (
                                            <Option key={platform} value={platform}>{platform}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="URL" rules={[{required: true, message: 'Please enter the URL'}]}>
                                    <Input value={link.url}
                                           onChange={(e) => handleSocialMediaChange(index, 'url', e.target.value)}/>
                                </Form.Item>
                            </Col>
                        </Row>
                    ))}
                    <Button type="dashed" onClick={handleAddSocialMediaLink} block>Add Social Media Link</Button>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{marginTop: '20px'}}>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

const SponsorProfile: React.FC = () => {
    const handleProfileSubmit = (profile: Profile) => {
        // Handle the form submission here (e.g., send the data to the backend)
        console.log('Profile data:', profile);
    };

    return (
        <div>
            <ProfileForm onSubmit={handleProfileSubmit}/>
        </div>


    );

};

export default SponsorProfile;



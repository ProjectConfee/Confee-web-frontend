
import React, { useState } from 'react';
import { Form, Input, Button, message, Select, Row, Col, List } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

const platforms = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube'];

interface SocialMediaLink {
    platform: string;
    url: string;
}

interface PlayGamesAdded {
    playGamesAdded: string;
}

interface Profile {
    companyName: string;
    companyAddress: string;
    contactNumber: string;
    companyEmail: string;
    biography: string;
    playGames: string[];  // This should be an array of strings
    companyLogo: string;
    socialMediaLinks: SocialMediaLink[];
}

const ProfileForm: React.FC<{ onSubmit: (profile: Profile) => void }> = ({ onSubmit }) => {
    const [form] = Form.useForm();
    const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLink[]>([]);
    const [playGamesAdded, setPlayGamesAdded] = useState<PlayGamesAdded[]>([]);
    const [logoFile, setLogoFile] = useState<File | null>(null);

    const handleAddSocialMediaLink = () => {
        setSocialMediaLinks([...socialMediaLinks, { platform: '', url: '' }]);
    };

    const handleAddPlayGames = () => {
        setPlayGamesAdded([...playGamesAdded, {playGamesAdded: '' }]);
    };

    const handleSocialMediaChange = (index: number, key: string, value: string) => {
        const newLinks = [...socialMediaLinks];
        newLinks[index] = { ...newLinks[index], [key]: value };
        setSocialMediaLinks(newLinks);
    };

    const handlePlayGamesChange = (index: number, value: string) => {
        const newPlayGames = [...playGamesAdded];
        newPlayGames[index] = { ...newPlayGames[index], playGamesAdded: value };
        setPlayGamesAdded(newPlayGames);
    };

    const handlePlayGamesRemove = (index: number) => {
        const newPlayGames = playGamesAdded.filter((_, i) => i !== index);
        setPlayGamesAdded(newPlayGames);
    };

    // const handleFileChange = (info: any) => {
    //     if (info.file.status === 'done') {
    //         setLogoFile(info.file.originFileObj as File);
    //     }
    // };

    const handleFinish = (values: any) => {
        const profile: Profile = {
            ...values,
            companyLogo: logoFile ? URL.createObjectURL(logoFile) : '',
            socialMediaLinks: socialMediaLinks.filter(link => link.platform && link.url),
            playGames: playGamesAdded.filter(game => game.playGamesAdded), // Filter out empty play games
        };
        onSubmit(profile);
        form.resetFields();
        setSocialMediaLinks([]);
        setPlayGamesAdded([]);
        setLogoFile(null);
        message.success('Profile saved successfully!');
    };

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
                        {playGamesAdded.length > 0 && (
                            <List
                                bordered
                                dataSource={playGamesAdded}
                                renderItem={(item, index) => (
                                    <List.Item
                                        actions={[
                                            <Button onClick={() => handlePlayGamesRemove(index)} danger>Remove</Button>
                                        ]}
                                    >
                                        <Input
                                            value={item.playGamesAdded}
                                            onChange={(e) => handlePlayGamesChange(index, e.target.value)}
                                            placeholder="Enter play game"
                                        />
                                    </List.Item>
                                )}
                            />
                        )}
                        <Button type="dashed" onClick={handleAddPlayGames} block style={{ marginTop: '10px' }}>
                            Add Play Game
                        </Button>
                    </Form.Item>
                    {/*<Form.Item label="Company Logo">*/}
                    {/*    <Upload beforeUpload={() => false} onChange={handleFileChange} showUploadList={false}>*/}
                    {/*        <Button icon={<UploadOutlined />}>Upload Logo</Button>*/}
                    {/*    </Upload>*/}
                    {/*</Form.Item>*/}
                    {socialMediaLinks.map((link, index) => (
                        <Row key={index} gutter={16}>
                            <Col span={12}>
                                <Form.Item label={`Platform`} rules={[{ required: true, message: 'Please select a platform' }]}>
                                    <Select value={link.platform} onChange={(value) => handleSocialMediaChange(index, 'platform', value)}>
                                        {platforms.map(platform => (
                                            <Option key={platform} value={platform}>{platform}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="URL" rules={[{ required: true, message: 'Please enter the URL' }]}>
                                    <Input value={link.url} onChange={(e) => handleSocialMediaChange(index, 'url', e.target.value)} />
                                </Form.Item>
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
};

const SponsorProfile: React.FC = () => {
    const handleProfileSubmit = async (profile: Profile) => {
        console.log('Profile data:', profile); // Debug line
        try {
            const response = await fetch('http://localhost:8080/profiles/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profile),
            });



            const result = await response.json();
            console.log('Server response:', result);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };


    return (
        <div>
            <ProfileForm onSubmit={handleProfileSubmit} />
        </div>
    );
};

export default SponsorProfile;

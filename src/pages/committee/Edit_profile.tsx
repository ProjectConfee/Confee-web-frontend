import React, {
    useState,
    useEffect
} from 'react';

import {
    Form,
    Input,
    Button,
    Upload,
    Radio
} from 'antd';

import {
    FaCamera
} from "react-icons/fa";
import {
    useNavigate
} from "react-router-dom";

// Example user data type
interface UserData {
    fullname: string;
    email: string;
    phone: string;
    country: string;
    age: number;
    gender: string;
    bio: string;
    company: string;
    position: string;
    github: string;
    linkedin: string;
    qualification: string;
    profilePhoto: string;
}

const EditProfile: React.FC = () => {
    const [form] = Form.useForm();
    const [profilePhoto, setProfilePhoto] = useState('src/assets/profiles.png'); // Initial photo
    const [userData, setUserData] = useState<UserData | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data from an API or use props to get the data
        const fetchUserData = async () => {
            // Replace with actual data fetching logic
            const user = {
                fullname: 'Anjalee Fernando',
                email: 'anjalee@gmail.com',
                phone: '071 3457682',
                country: 'Sri Lanka',
                age: 29,
                gender: 'Female',
                bio: 'Anjalee Fernando is a highly motivated and experienced software engineer with a passion for developing innovative programs. She is well-versed in technology and writing code to create reliable, user-friendly, and functional systems.',
                company: 'Tech Solutions Inc.',
                position: 'Software Engineer',
                github: 'https://github.com/anjaleefernando',
                linkedin: 'https://www.linkedin.com/in/anjalee-fernando',
                qualification: 'B.Sc. in Computer Science',
                profilePhoto: 'src/assets/profiles.png'
            };
            setUserData(user);
            form.setFieldsValue(user);
            setProfilePhoto(user.profilePhoto);
        };
        fetchUserData();
    }, [form]);

    const handlePhotoChange = (info: any) => {
        if (info.file.status === 'done') {
            // Update profile photo on successful upload
            setProfilePhoto(URL.createObjectURL(info.file.originFileObj));
        }
    };

    const handleFinish = (values: UserData) => {
        console.log('Updated User Data:', values);
        // Add logic to handle form submission, e.g., sending updated data to an API
        navigate('/speaker_profile'); // Redirect after save
    };

    if (!userData) {
        return <div>Loading...</div>; // Display a loading state or skeleton
    }

    return (
        <div className="flex space-x-8 p-4">
            {/* Left Part: Change Profile Picture */}
            <div className="w-1/3 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                <Upload
                    showUploadList={false}
                    customRequest={handlePhotoChange}
                    accept="image/*"
                >
                    <div className="relative">
                        <img
                            src={profilePhoto}
                            alt="Profile"
                            className="w-36 h-36 rounded-full border-2 border-black"
                        />
                        <div className="absolute bottom-2 right-2 cursor-pointer bg-blue-500 text-white rounded-full p-2">
                            <FaCamera />
                        </div>
                    </div>
                </Upload>
                <Form
                    form={form}
                    layout="vertical"
                    className="mt-8 w-full"
                    onFinish={handleFinish}
                >
                    <Form.Item
                        name="fullname"
                        label="Full Name"
                        rules={[{ required: true, message: 'Please enter your Full name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please enter your Email!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone"
                        rules={[{ required: true, message: 'Please enter your Phone number!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="country"
                        label="Country"
                        rules={[{ required: true, message: 'Please enter your country!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="age"
                        label="Age"
                        rules={[{ required: true, message: 'Please enter your age!' }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item
                        name="gender"
                        label="Gender"
                        rules={[{ required: true, message: 'Please select your gender!' }]}
                    >
                        <Radio.Group>
                            <Radio value="male">
                                Male
                            </Radio>
                            <Radio value="female">
                                Female
                            </Radio>
                            <Radio value="other">
                                Other
                            </Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </div>

            {/* Right Part: Other Details */}
            <div className="w-2/3 bg-white rounded-2xl shadow-lg p-8">
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleFinish}
                >
                    <Form.Item
                        name="bio"
                        label="Bio"
                        rules={[{ required: true, message: 'Please enter your bio!' }]}
                    >
                        <Input.TextArea rows={4} />
                    </Form.Item>
                    <Form.Item
                        name="company"
                        label="Company"
                        rules={[{ required: true, message: 'Please enter your company!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="position"
                        label="Position"
                        rules={[{ required: true, message: 'Please enter your position!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="github"
                        label="GitHub"
                        rules={[{ required: true, message: 'Please enter your GitHub link!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="linkedin"
                        label="LinkedIn"
                        rules={[{ required: true, message: 'Please enter your LinkedIn link!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="qualification"
                        label="Qualifications"
                        rules={[{ required: true, message: 'Please enter your qualifications!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Save Changes
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default EditProfile;

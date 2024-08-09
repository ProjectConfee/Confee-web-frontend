import React, { useState } from 'react';
import { Form, Input, Button, Upload, Radio } from 'antd';
import { FaCamera } from "react-icons/fa";
import {Link} from "react-router-dom";

const EditProfile: React.FC = () => {
    const [form] = Form.useForm();
    const [profilePhoto, setProfilePhoto] = useState('src/assets/profiles.png'); // Initial photo

    const handlePhotoChange = (info: any) => {
        if (info.file.status === 'done') {
            // Update profile photo on successful upload
            setProfilePhoto(URL.createObjectURL(info.file.originFileObj));
        }
    };

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
                        <img src={profilePhoto} alt="Profile" className="w-36 h-36 rounded-full border-2 border-black" />
                        <div className="absolute bottom-2 right-2 cursor-pointer bg-blue-500 text-white rounded-full p-2">
                            <FaCamera />
                        </div>
                    </div>
                </Upload>
                <Form
                    form={form}
                    layout="vertical"
                    className="mt-8 w-full"
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
                            <Radio value="male">Male</Radio>
                            <Radio value="female">Female</Radio>
                            <Radio value="other">Other</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </div>

            {/* Right Part: Other Details */}
            <div className="w-2/3 bg-white rounded-2xl shadow-lg p-8">
                <Form
                    form={form}
                    layout="vertical"
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
                        <Link to="/speaker_profile">
                            <Button type="primary" htmlType="submit">
                                Save Changes
                            </Button>
                        </Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default EditProfile;

import React, { useState } from 'react';
import {
    Modal,
    Form,
    Input,
    Upload,
    Button
} from 'antd';

import {
    UploadOutlined
} from '@ant-design/icons';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const Profile: React.FC = () => {
    const profilePhoto = 'src/assets/profiles.png'; // Replace with the actual photo URL
    const name = 'Anjalee Fernando';

    const personalDetails = {
        age: ' 29',
        gender: ' Female',
        email: ' anjalee@gmail.com',
        phone: ' 071 3457682',
        address: ' 123, Colombo, Sri Lanka',
        country: ' Sri Lanka',
        company: ' Tech Solutions Inc.',
        position: ' Software Engineer'
    };

    const bio = "Anjalee Fernando is a highly motivated and experienced software engineer with a passion for developing innovative programs. She is well-versed in technology and writing code to create reliable, user-friendly, and functional systems.";

    const professionalDetails = {
        qualifications: ' B.Sc. in Computer Science',
        linkedin: ' https://www.linkedin.com/in/anjalee-fernando',
        github: ' https://github.com/anjaleefernando',
    };

    // Sample session data without images
    const sessions = [
        {
            topic: 'Introduction to React',
            date: '6th November 2024',
            time: '10:00 AM - 12:00 PM',
            location: 'Room A'
        },
        {
            topic: 'Advanced TypeScript',
            date: '7th November 2024',
            time: '02:00 PM - 04:00 PM',
            location: 'Room B'
        },
        {
            topic: 'UI/UX Design Principles',
            date: '8th November 2024',
            time: '02:00 PM - 04:00 PM',
            location: 'Room A'
        },
    ];

    const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
    const [isUploadModalVisible, setIsUploadModalVisible] = useState(false);
    const [isSessionsModalVisible, setIsSessionsModalVisible] = useState(false);
    const [passwordForm] = Form.useForm();
    const [uploadForm] = Form.useForm();

    const handleChangePassword = () => {
        setIsPasswordModalVisible(true);
    };

    const handleSessions = () => {
        setIsSessionsModalVisible(true);
    };

    const handleCancelPassword = () => {
        setIsPasswordModalVisible(false);
    };

    const handleCancelUpload = () => {
        setIsUploadModalVisible(false);
    };

    const handleCancelSessions = () => {
        setIsSessionsModalVisible(false);
    };

    const handleSavePassword = () => {
        passwordForm.validateFields()
            .then(values => {
                console.log('Password changed to:', values.newPassword);
                setIsPasswordModalVisible(false);
                passwordForm.resetFields();
                Swal.fire('Success', 'Password has been changed successfully', 'success');
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    const handleSaveUpload = () => {
        uploadForm.validateFields()
            .then(values => {
                console.log('Resource uploaded:', values);
                setIsUploadModalVisible(false);
                uploadForm.resetFields();
                Swal.fire('Success', 'Resource has been uploaded successfully', 'success');
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    const SessionCard: React.FC<{ topic: string, date: string, time: string, location: string }> = ({ topic, date, time, location }) => (
        <div className="flex p-5 bg-gray-100 rounded-2xl shadow-md my-3 mx-2">
            <div className="flex-1 pr-3">
                <h3 className="text-md font-semibold mb-2">
                    {topic}
                </h3>
                <p>
                    <strong>Date:</strong>
                    {date}
                </p>
                <p>
                    <strong>Time:</strong>
                    {time}
                </p>
                <p>
                    <strong>Location:</strong>
                    {location}
                </p>
            </div>
        </div>
    );

    return (
        <div className="flex px-8 space-x-20">
            {/* Left Part: Profile Card */}
            <div className="w-1/3 px-4 py-12 bg-white rounded-2xl shadow-lg ml-16">
                <div className="flex flex-col items-center">
                    <img
                        src={profilePhoto}
                        alt="Profile"
                        className="w-52 h-52 rounded-full mb-8"
                    />
                    <h2 className="text-xl font-semibold mb-2">
                        {name}
                    </h2>
                    <p className="text-gray-500 mb-12">
                        {personalDetails.email}
                    </p>
                    <div className="flex space-x-4 mb-4">
                        <Link to="/speaker_edit_profile">
                            <button className="w-40 py-2 px-4 bg-blue-500 text-white rounded-2xl">
                                Edit Profile
                            </button>
                        </Link>
                        <button
                            className="w-40 py-2 px-4 bg-blue-500 text-white rounded-2xl"
                            onClick={handleChangePassword}
                        >
                            Change Password
                        </button>
                    </div>
                    <button
                        className="w-40 py-2 px-4 bg-blue-500 text-white rounded-2xl"
                        onClick={handleSessions}
                    >
                        My Sessions
                    </button>
                </div>
            </div>

            {/* Middle Part: Bio, Personal Details, and Professional Details Cards */}
            <div className="w-1/2 space-y-8">
                {/* Bio Card */}
                <div className="p-4 bg-white rounded-2xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">
                        Bio
                    </h2>
                    <p>
                        {bio}
                    </p>
                </div>
                {/* Personal Details Card */}
                <div className="p-4 bg-white rounded-2xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">
                        Personal Details
                    </h2>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <p>
                                <strong>
                                    Age:
                                </strong>
                                {personalDetails.age}
                            </p>
                            <p className="text-left">
                                <strong>
                                    Gender:
                                </strong>
                                {personalDetails.gender}
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p>
                                <strong>
                                    Country:
                                </strong>
                                {personalDetails.country}
                            </p>
                            <p className="text-left">
                                <strong>
                                    Phone:
                                </strong>
                                {personalDetails.phone}
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p>
                                <strong>
                                    Company:
                                </strong>
                                {personalDetails.company}
                            </p>
                            <p className="text-left">
                                <strong>
                                    Position:
                                </strong>
                                {personalDetails.position}
                            </p>
                        </div>
                        <p>
                            <strong>
                                Address:
                            </strong>
                            {personalDetails.address}
                        </p>
                    </div>
                </div>
                {/* Professional Details Card */}
                <div className="p-4 bg-white rounded-2xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">
                        Professional Details
                    </h2>
                    <div className="space-y-2">
                        <p>
                            <strong>
                                Qualifications:
                            </strong>
                            {professionalDetails.qualifications}
                        </p>
                        <p>
                            <strong>
                                LinkedIn:
                            </strong>
                            <a
                                href={professionalDetails.linkedin}
                                className="text-blue-500"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {professionalDetails.linkedin}
                            </a>
                        </p>
                        <p>
                            <strong>
                                GitHub:
                            </strong>
                            <a
                                href={professionalDetails.github}
                                className="text-blue-500"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {professionalDetails.github}
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Session Modal */}
            <Modal
                title="My Sessions"
                visible={isSessionsModalVisible}
                onCancel={handleCancelSessions}
                footer={null}
                width={400}
                className="overflow-y-auto"
            >
                {sessions.map((session, index) => (
                    <SessionCard
                        key={index}
                        topic={session.topic}
                        date={session.date}
                        time={session.time}
                        location={session.location}
                    />
                ))}
            </Modal>

            {/* Change Password Modal */}
            <Modal
                title="Change Password"
                visible={isPasswordModalVisible}
                onCancel={handleCancelPassword}
                footer={null}
                width={500}
                className="overflow-y-auto"
            >
                <Form
                    form={passwordForm}
                    layout="vertical"
                    onFinish={handleSavePassword}
                >
                    <Form.Item
                        name="currentPassword"
                        label="Current Password"
                        rules={[{required: true, message: 'Please input your current password!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item
                        name="newPassword"
                        label="New Password"
                        rules={[{required: true, message: 'Please input your new password!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        label="Confirm New Password"
                        dependencies={['newPassword']}
                        rules={[
                            {required: true, message: 'Please confirm your new password!'},
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <div className="text-right">
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-1/3 py-2">
                                Save
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </Modal>

            {/* Upload Modal */}
            <Modal
                title="Upload New Resource"
                visible={isUploadModalVisible}
                onCancel={handleCancelUpload}
                footer={null}
                width={400}
                className="overflow-y-auto"
            >
                <Form
                    form={uploadForm}
                    layout="vertical"
                    onFinish={handleSaveUpload}
                >
                    <Form.Item
                        name="file"
                        label="Select File"
                        rules={[{ required: true, message: 'Please select a file to upload!' }]}
                    >
                        <Upload
                            beforeUpload={() => false}
                            accept=".pdf, .docx, .pptx"
                        >
                            <Button
                                icon={<UploadOutlined />}
                            >
                                Select File
                            </Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full py-2"
                        >
                            Upload
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Profile;

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
import {
    Link
} from "react-router-dom";

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

    // const uploadedResources = [
    //     { type: 'doc', name: 'Project Plan', url: '/resources/project-plan.doc' },
    //     { type: 'doc', name: 'Start New Project', url: '/resources/project-plan.doc' },
    //     { type: 'doc', name: 'Project Management', url: '/resources/project-plan.doc' },
    //     { type: 'image', name: 'Conference Photo', url: '/resources/conference-photo.jpg' },
    //     { type: 'image', name: 'Example UI', url: '/resources/conference-photo.jpg' },
    //     { type: 'video', name: 'Keynote Speech', url: '/resources/keynote-speech.mp4' },
    //     { type: 'video', name: 'Reference', url: '/resources/keynote-speech.mp4' },
    //     { type: 'link', name: 'Event Website', url: 'https://event-website.com' }
    // ];

    // const renderResourceIcon = (type: string) => {
    //     switch (type) {
    //         case 'doc':
    //             return '📄';
    //         case 'image':
    //             return '🖼';
    //         case 'video':
    //             return '🎥';
    //         case 'link':
    //             return '🔗';
    //         default:
    //             return '📁';
    //     }
    // };

    const [
        isPasswordModalVisible,
        setIsPasswordModalVisible
    ] = useState(false);
    const [
        isUploadModalVisible,
        setIsUploadModalVisible
    ] = useState(false);
    const [
        passwordForm
    ] = Form.useForm();
    const [
        uploadForm
    ] = Form.useForm();

    const handleChangePassword = () => {
        setIsPasswordModalVisible(true);
    };

    // const handleUploadResource = () => {
    //     setIsUploadModalVisible(true);
    // };

    const handleCancelPassword = () => {
        setIsPasswordModalVisible(false);
    };

    const handleCancelUpload = () => {
        setIsUploadModalVisible(false);
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

    return (
        <div className="flex px-8 space-x-20">
            {/* Left Part: Profile Card */}
            <div className="w-1/3 px-4 py-16 bg-white rounded-2xl shadow-lg ml-16">
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
                    <div className="space-y-2 text-center">
                        <Link to="/committee_edit_profile">
                            <button className="w-3/4 py-2 bg-blue-500 text-white rounded-2xl mb-2">
                                Edit Profile
                            </button>
                        </Link>
                        <button
                            className="w-3/4 py-2 bg-blue-500 text-white rounded-2xl mt-2"
                            onClick={handleChangePassword}
                        >
                            Change Password
                        </button>
                    </div>
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
                <div className="p-4 bg-white rounded-lg shadow-lg">
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
                            <p
                                className="text-left"
                            >
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
                            <p
                                className="text-left"
                            >
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
                            <p
                                className="text-left"
                            >
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
                <div className="p-4 bg-white rounded-lg shadow-lg">
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

            {/* Right Part: Registered Events and Resources */}
            {/*<div className="w-1/4 p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center">*/}
            {/*    <h2 className="text-xl font-semibold mb-8">Resources</h2>*/}
            {/*    <ul className="space-y-2 mb-4">*/}
            {/*        {uploadedResources.map((resource, index) => (*/}
            {/*            <li key={index} className="flex items-center space-x-4">*/}
            {/*                <span>{renderResourceIcon(resource.type)}</span>*/}
            {/*                <a href={resource.url} className="text-blue-500" target="_blank" rel="noopener noreferrer">{resource.name}</a>*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*    <button className="w-3/4 py-2 bg-blue-500 text-white rounded-2xl mt-8" onClick={handleUploadResource}>Upload Resource</button>*/}
            {/*</div>*/}

            {/* Change Password Modal */}
            <Modal
                title="Change Password"
                open={isPasswordModalVisible}
                onCancel={handleCancelPassword}
                footer={[
                    <Button
                        key="cancel"
                        onClick={handleCancelPassword}
                    >
                        Cancel
                    </Button>,
                    <Button
                        key="save"
                        type="primary"
                        onClick={handleSavePassword}
                    >
                        Save
                    </Button>,
                ]}
            >
                <Form
                    form={passwordForm}
                    layout="vertical"
                    name="change_password_form"
                >
                    <Form.Item
                        name="currentPassword"
                        label="Current Password"
                        rules={[{
                            required: true,
                            message: 'Please enter your current password!'
                        }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="newPassword"
                        label="New Password"
                        rules={[{
                            required: true,
                            message: 'Please enter your new password!'
                        }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        label="Confirm Password"
                        dependencies={['newPassword']}
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your new password!'
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error(
                                            'The two passwords do not match!'
                                        )
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>

            {/* Upload Resource Modal */}
            <Modal
                title="Upload Resource"
                open={isUploadModalVisible}
                onCancel={handleCancelUpload}
                footer={[
                    <Button
                        key="cancel"
                        onClick={handleCancelUpload}
                    >
                        Cancel
                    </Button>,
                    <Button
                        key="save"
                        type="primary"
                        onClick={handleSaveUpload}
                    >
                        Save
                    </Button>,
                ]}
            >
                <Form
                    form={uploadForm}
                    layout="vertical"
                    name="upload_resource_form"
                >
                    <Form.Item
                        name="resourceName"
                        label="Resource Name"
                        rules={[{
                            required: true,
                            message: 'Please enter the resource name!'
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="resourceType"
                        label="Resource Type"
                        rules={[{
                            required: true,
                            message: 'Please enter the resource type!'
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="resourceFile"
                        label="Resource File"
                        rules={[{
                            required: true,
                            message: 'Please upload the resource file!'
                        }]}
                    >
                        <Upload
                            name="resourceFile"
                            listType="text"
                            maxCount={1}
                        >
                            <Button
                                icon={<UploadOutlined />}
                            >
                                Click to Upload
                            </Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Profile;

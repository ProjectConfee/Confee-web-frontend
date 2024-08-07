import React, { useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { List, Button, Modal, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
// import { IoMdAddCircleOutline } from 'react-icons/io';

const Profile: React.FC = () => {
    const profilePhoto = 'src/assets/profiles.png'; // Replace with the actual photo URL
    const name = 'Anjalee Fernando';
    const email = 'anjalee@gmail.com';

    const badges = [
        { photo: 'src/assets/platinum.png', name: 'Platinum Badge' },
        { photo: 'src/assets/gold.png', name: 'Gold Badge' },
        { photo: 'src/assets/silver.png', name: 'Silver Badge' }
    ];

    const [currentBadgeIndex, setCurrentBadgeIndex] = useState(0);
    const [committeeMembers, setCommitteeMembers] = useState([
        { name: 'Kavindu Viranga', photo: 'src/assets/profiles.png' },
        { name: 'Keshali Dhananjana', photo: 'src/assets/profiles.png' },
        { name: 'Viraji Dewmini', photo: 'src/assets/profiles.png' }
    ]);

    const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
    const [isBadgeModalVisible, setIsBadgeModalVisible] = useState(false);
    const [isMemberModalVisible, setIsMemberModalVisible] = useState(false);
    const [badgeForm] = Form.useForm();
    const [passwordForm] = Form.useForm();
    const [memberForm] = Form.useForm();

    const handlePrevBadge = () => {
        setCurrentBadgeIndex((prevIndex) => (prevIndex - 1 + badges.length) % badges.length);
    };

    const handleNextBadge = () => {
        setCurrentBadgeIndex((prevIndex) => (prevIndex + 1) % badges.length);
    };

    const handleAddMember = () => {
        setIsMemberModalVisible(true);
    };

    const handleChangePassword = () => {
        setIsPasswordModalVisible(true);
    };

    const handleBadgeModal = () => {
        setIsBadgeModalVisible(true);
    };

    const handleCancelPassword = () => {
        setIsPasswordModalVisible(false);
    };

    const handleCancelBadge = () => {
        setIsBadgeModalVisible(false);
    };

    const handleCancelMember = () => {
        setIsMemberModalVisible(false);
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

    const handleSaveBadge = () => {
        badgeForm.validateFields()
            .then(values => {
                console.log('Badge added:', values);
                setIsBadgeModalVisible(false);
                badgeForm.resetFields();
                Swal.fire('Success', 'Badge has been added successfully', 'success');
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    const handleSaveMember = () => {
        memberForm.validateFields()
            .then(values => {
                setCommitteeMembers([...committeeMembers, values]);
                setIsMemberModalVisible(false);
                memberForm.resetFields();
                Swal.fire('Success', 'New member has been added successfully', 'success');
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    return (
        <div className="p-3">
            <div className="flex space-x-8 px-10">
                {/* Left Part: Profile Card */}
                <div className="w-1/2 bg-white rounded-2xl shadow-lg flex items-center pl-12 py-4">
                    <img src={profilePhoto} alt="Profile" className="w-36 h-36 rounded-full my-4 border-black border-2" />
                    <div className="pl-20">
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <p className="text-gray-500 mb-5">{email}</p>
                        <div className="flex space-x-8 mb-4 mt-10">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600" onClick={handleChangePassword}>Change Password</button>
                        </div>
                    </div>
                </div>

                {/* Right Part: Badge Card */}
                <div className="relative w-1/2 bg-white rounded-2xl shadow-lg flex items-center pl-12 py-4">
                    <button onClick={handlePrevBadge} className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                        <MdArrowBackIos size={24} />
                    </button>
                    <div className="flex items-center mx-4 pl-5">
                        <img src={badges[currentBadgeIndex].photo} alt={badges[currentBadgeIndex].name} className="w-36 h-36 my-4 mr-8" />
                        <div className="pl-12">
                            <h2 className="text-xl font-semibold">{badges[currentBadgeIndex].name}</h2>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 mt-4" onClick={handleBadgeModal}>New Badge</button>
                        </div>
                    </div>
                    <button onClick={handleNextBadge} className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                        <MdArrowForwardIos size={24} />
                    </button>
                </div>
            </div>

            {/* Organizing Committee Section */}
            <div className="bg-white mt-10 mx-20 rounded-2xl shadow-2xl pb-16 relative">
                <div className="flex items-center pt-6 mb-5 justify-center text-3xl font-medium">
                    <FaUsers className="mr-5" /> {/* Icon added here */}
                    Organizing Committee
                </div>
                <div className="px-20">
                    <List
                        itemLayout="horizontal"
                        dataSource={committeeMembers}
                        renderItem={(member, index) => (
                            <List.Item
                                actions={[
                                    <Button type="default">View</Button>,
                                    <Button
                                        type="primary"
                                        className="mr-2"
                                        onClick={() => {
                                            // Edit member logic here
                                        }}
                                    >
                                        Edit
                                    </Button>,
                                    <Button
                                        type="primary"
                                        danger
                                        onClick={() => {
                                            setCommitteeMembers(committeeMembers.filter((_, i) => i !== index));
                                            Swal.fire('Removed', `${member.name} has been removed from the OC committee`, 'success');
                                        }}
                                    >
                                        Delete
                                    </Button>,
                                ]}
                            >
                                <List.Item.Meta
                                    avatar={<img src={member.photo} alt={member.name} className="w-10 h-10 rounded-full" />}
                                    title={<span className="text-lg font-semibold ml-5">{member.name}</span>} // Increased font size
                                />
                            </List.Item>
                        )}
                    />
                </div>
                <button
                    onClick={handleAddMember}
                    className="absolute bottom-5 right-5 flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
                >
                    <FontAwesomeIcon icon={faPlus} size="1x" className="mr-2" />
                    Add Member
                </button>
            </div>

            {/* Change Password Modal */}
            <Modal
                title="Change Password"
                visible={isPasswordModalVisible}
                onCancel={handleCancelPassword}
                footer={[
                    <Button key="cancel" onClick={handleCancelPassword}>
                        Cancel
                    </Button>,
                    <Button key="save" type="primary" onClick={handleSavePassword}>
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
                        rules={[{ required: true, message: 'Please enter your current password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="newPassword"
                        label="New Password"
                        rules={[{ required: true, message: 'Please enter your new password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        label="Confirm Password"
                        dependencies={['newPassword']}
                        rules={[
                            { required: true, message: 'Please confirm your new password!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>

            {/* New Badge Modal */}
            <Modal
                title="New Badge"
                visible={isBadgeModalVisible}
                onCancel={handleCancelBadge}
                footer={[
                    <Button key="cancel" onClick={handleCancelBadge}>
                        Cancel
                    </Button>,
                    <Button key="save" type="primary" onClick={handleSaveBadge}>
                        Save
                    </Button>,
                ]}
            >
                <Form
                    form={badgeForm}
                    layout="vertical"
                    name="new_badge_form"
                >
                    <Form.Item
                        name="badgeName"
                        label="Badge Name"
                        rules={[{ required: true, message: 'Please enter the badge name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="badgeImage"
                        label="Badge Image"
                        valuePropName="fileList"
                        getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
                        rules={[{ required: true, message: 'Please upload the badge image!' }]}
                    >
                        <Upload name="badgeImage" listType="picture" maxCount={1}>
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>

            {/* New Member Modal */}
            <Modal
                title="New Member"
                visible={isMemberModalVisible}
                onCancel={handleCancelMember}
                footer={[
                    <Button key="cancel" onClick={handleCancelMember}>
                        Cancel
                    </Button>,
                    <Button key="save" type="primary" onClick={handleSaveMember}>
                        Save
                    </Button>,
                ]}
            >
                <Form
                    form={memberForm}
                    layout="vertical"
                    name="new_member_form"
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please enter the member\'s name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please enter the member\'s email!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone"
                        rules={[{ required: true, message: 'Please enter the member\'s phone number!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Profile;

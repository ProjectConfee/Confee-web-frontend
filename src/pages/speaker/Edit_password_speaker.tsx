// import React from 'react';
import {
    Button,
    Divider,
    Form,
    Input,
} from "antd";

import {
    LockOutlined,
    UserOutlined
} from "@ant-design/icons";

import {
    Link
} from "react-router-dom";

// const props = {
//     name: 'file',
//     action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
//     headers: {
//         authorization: 'authorization-text',
//     },
// };

const App = () => {

    // const onFinish = (values) => {
    //     console.log('Received values of form: ', values);
    // };

    return (
        <div className="flex justify-center h-screen">
            <div className="bg-white shadow-2xl w-4/5 mx-20 rounded-3xl mt-10 h-[400px]">
                <div className="flex items-center pt-5">
                    <div className="text-2xl font-bold ml-[300px]">
                        Change Password
                    </div>

                    <Link to="/profile_speaker">
                        <Button className="w-25 ml-[220px]" type="primary">
                            Save
                        </Button>
                    </Link>

                </div>
                <Divider />

                <div className="flex">
                    <div className="flex-1 pt-8 px-10">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            // onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <UserOutlined className="site-form-item-icon" />
                                    }
                                    placeholder="Username"
                                />
                            </Form.Item>

                            <Form.Item
                                name="current_password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Current Password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <LockOutlined className="site-form-item-icon" />
                                    }
                                    type="password"
                                    placeholder="Current Password"
                                />
                            </Form.Item>

                            <Form.Item
                                name="new_password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your New Password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <LockOutlined className="site-form-item-icon" />
                                    }
                                    type="password"
                                    placeholder="New Password"
                                />
                            </Form.Item>

                            <Form.Item
                                name="confirm_password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Confirm Password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <LockOutlined className="site-form-item-icon" />
                                    }
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            </Form.Item>


                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

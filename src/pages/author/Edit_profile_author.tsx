// import React from 'react';
import {
    Button,
    DatePicker,
    Divider,
    Form,
    Input,
    InputNumber,
    // message,
    Radio,
    Upload,
} from "antd";

import {
    UploadOutlined
} from "@ant-design/icons";

import {
    Link
} from "react-router-dom";

const props = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
        authorization: 'authorization-text',
    },
    // onChange(info) {
    //     if (info.file.status !== 'uploading') {
    //         console.log(info.file, info.fileList);
    //     }
    //     if (info.file.status === 'done') {
    //         message.success(`${info.file.name} file uploaded successfully`);
    //     } else if (info.file.status === 'error') {
    //         message.error(`${info.file.name} file upload failed.`);
    //     }
    // },
};

const App = () => {
    return (
        <div className="flex justify-center h-screen">
            <div className="bg-white shadow-2xl w-4/5 mx-20 rounded-3xl mt-10 h-[520px]">
                <div className="flex items-center pt-5">
                    <div className="text-2xl font-bold ml-[300px]">
                        Edit Profile
                    </div>

                    <Link to="/profile_author">
                        <Button className="w-25 ml-[220px]" type="primary">
                            Save
                        </Button>
                    </Link>
                </div>
                <Divider />

                <div className="flex">
                    <div className="flex-1">
                        <Form
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                        >
                            <Form.Item label="Full Name">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Email">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Phone Number">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Address">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Country">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Age">
                                <InputNumber />
                            </Form.Item>
                            <Form.Item label="University">
                                <Input />
                            </Form.Item>
                        </Form>
                    </div>

                    <div className="flex-1">
                        <Form
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                                padding: 10,
                            }}
                        >
                            <Form.Item label="Date of Birth">
                                <DatePicker />
                            </Form.Item>
                            <Form.Item label="Gender">
                                <Radio.Group>
                                    <Radio value="male">Male</Radio>
                                    <Radio value="female">Female</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Profile Picture">
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Form.Item>
                            <Form.Item label="LinkedIn Link">
                                <Input />
                            </Form.Item>
                            <Form.Item label="GitHub Link">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Twitter Link">
                                <Input />
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

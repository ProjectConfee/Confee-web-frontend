// import React from 'react';
// import { Input } from 'antd';
//
// import { InboxOutlined } from '@ant-design/icons';
// import type { UploadProps } from 'antd';
// import { message, Upload } from 'antd';
// import { Button, Flex } from 'antd';
// const { TextArea } = Input;
// const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     console.log('Change:', e.target.value);
//   };
//   const { Dragger } = Upload;
//
//   const props: UploadProps = {
//     name: 'file',
//     multiple: true,
//     action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
//     onChange(info) {
//       const { status } = info.file;
//       if (status !== 'uploading') {
//         console.log(info.file, info.fileList);
//       }
//       if (status === 'done') {
//         message.success(`${info.file.name} file uploaded successfully.`);
//       } else if (status === 'error') {
//         message.error(`${info.file.name} file upload failed.`);
//       }
//     },
//     onDrop(e) {
//       console.log('Dropped files', e.dataTransfer.files);
//     },
//   };
// const App: React.FC = () => (
//
//
// <div className='flex flex-col justify-center items-center h-full ml-50 border-4 border-black p-5 rounded-lg'>
//
// <h2 className="text-2xl font-semibold text-center mt-[-10]">Badge Details</h2><br></br><br></br>
// <div><p>Name of the Badge:</p><br></br>
// <Input  size="large" placeholder="Badge Name" style={{ width: '600px' }}/></div>
//
//     <br></br><br></br>
//
//       <p>Privilages:</p><br></br>
//       <TextArea
//       showCount
//       maxLength={100}
//       onChange={onChange}
//       placeholder="Enter the Privilages"
//       style={{ height: 120, resize: 'none' ,width:'600px'}}
//     />
//
//
//     <br></br><br></br>
//     {/*<div className='flex flex-col justify-center items-left h-full mt-100 ml-50'>*/}
//       <p>Upload the Badge:</p><br></br>
//       <Dragger {...props} style={{ width: '600px' }}>
//     <p className="ant-upload-drag-icon  " >
//       <InboxOutlined />
//     </p>
//     <p className="ant-upload-text">Click or drag file to this area to upload</p>
//     <p className="ant-upload-hint">
//       Support for a single or bulk upload. Strictly prohibited from uploading company data or other
//       banned files.
//     </p>
//   </Dragger>
//
//     {/*</div>*/}
//
//     <div className='flex flex-col justify-center items-left h-full mt-100 ml-50'>
//
//   </div>
//   <br></br>
//   <Flex gap="small" wrap  >
//     <Button type="primary">Submit</Button>
//
//   </Flex>
//
// </div>
//
// );
// export default App;



import React, { useState } from 'react';
import { Input, Button, message, Upload, Form } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';

const { TextArea } = Input;
const { Dragger } = Upload;

const BadgeForm: React.FC = () => {
    const [badgeName, setBadgeName] = useState('');
    const [privileges, setPrivileges] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleBadgeNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBadgeName(e.target.value);
    };

    const handlePrivilegesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPrivileges(e.target.value);
    };

    const handleImageChange: UploadProps['onChange'] = (info) => {
        const { status, originFileObj } = info.file;
        if (status === 'done') {
            setImage(originFileObj ?? null);
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    const handleSubmit = async () => {
        if (!badgeName || !privileges || !image) {
            message.error('Please fill all fields and upload an image.');
            return;
        }

        const formData = new FormData();
        formData.append('badgeName', badgeName);
        formData.append('privileges', privileges);
        formData.append('image', image);

        try {
            const response = await fetch('http://localhost:8080/badges/add', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Badge creation failed');
            }

            const result = await response.json();
            message.success(`Badge "${result.badgeName}" created successfully.`);
        } catch (error) {
            message.error(`Error`);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center h-full ml-50 border-4 border-black p-5 rounded-lg'>
            <h2 className="text-2xl font-semibold text-center mt-[-10]">Badge Details</h2>
            <br />
            <Form layout="vertical">
                <Form.Item label="Name of the Badge">
                    <Input
                        size="large"
                        placeholder="Badge Name"
                        style={{ width: '600px' }}
                        value={badgeName}
                        onChange={handleBadgeNameChange}
                    />
                </Form.Item>

                <Form.Item label="Privileges">
                    <TextArea
                        showCount
                        maxLength={100}
                        onChange={handlePrivilegesChange}
                        placeholder="Enter the Privileges"
                        style={{ height: 120, resize: 'none', width: '600px' }}
                        value={privileges}
                    />
                </Form.Item>

                <Form.Item label="Upload the Badge">
                    <Dragger
                        name="image"
                        multiple={false}
                        customRequest={({ file, onSuccess }) => {
                            setImage(file as File);
                            onSuccess && onSuccess(file);
                        }}
                        onChange={handleImageChange}
                        style={{ width: '600px' }}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.
                        </p>
                    </Dragger>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" onClick={handleSubmit}>Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default BadgeForm;



















import React from 'react';
import {Button, Input, message, Upload} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import type { UploadProps } from 'antd';

const App: React.FC = () => {
    const { Dragger } = Upload;

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <div className="flex flex-col items-center min-h-screen mt-20 ml-50">
            {/* Container for Upload Resources */}
            <div className="bg-white shadow-lg rounded-lg p-20 w-full md:w-4/5">
                <p className='text-3xl text-center'>UPLOAD YOUR RESOURCES HERE</p><br></br><br></br>
                <div className='items-center p-6'><p>Title of your Resource : <span className="ml-4"></span>
                    <Input size="large" placeholder="Resource title" style={{width: '600px'}}/></p>
                </div>
                <br></br>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined/>
                    </p>
                    <p className="ant-upload-text text-lg">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint text-sm">
                        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                        banned files.
                    </p>
                </Dragger>
                <br></br><br></br><br></br>
                <div className="flex items-center justify-center mt-10">
                    <Link to="/resource-home"> {/* Adjust the path as needed */}
                        <Button
                            type="primary"
                            style={{
                                backgroundColor: '#3572EF',
                                borderColor: '#3572EF',
                                fontSize: '18px',
                                padding: '12px 24px'
                            }}
                        >
                            Back to Homepage
                        </Button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default App;

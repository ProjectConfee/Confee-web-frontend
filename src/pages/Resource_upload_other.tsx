//
// import {Button, Input} from 'antd';
//
// import { Link } from 'react-router-dom';
// // import type { UploadProps } from 'antd';
// import React, {SetStateAction, useState} from "react";
//
// const App: React.FC = () => {
//
//
//     // const props: UploadProps = {
//     //     name: 'file',
//     //     multiple: true,
//     //     action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
//     //     onChange(info) {
//     //         const { status } = info.file;
//     //         if (status !== 'uploading') {
//     //             console.log(info.file, info.fileList);
//     //         }
//     //         if (status === 'done') {
//     //             message.success(`${info.file.name} file uploaded successfully.`);
//     //         } else if (status === 'error') {
//     //             message.error(`${info.file.name} file upload failed.`);
//     //         }
//     //     },
//     //     onDrop(e) {
//     //         console.log('Dropped files', e.dataTransfer.files);
//     //     },
//     // };
//
//         const [selectedOption, setSelectedOption] = useState('');
//
//         const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
//             setSelectedOption(event.target.value);
//         };
//
//
//     return (
//         <div className="flex flex-col items-center min-h-screen mt-20 ml-50">
//             {/* Container for Upload Resources */}
//             <div className="bg-white shadow-lg rounded-lg p-20 w-full md:w-4/5">
//                 <p className='text-3xl text-center'>UPLOAD YOUR SOCIAL MEDIA LINKS HERE </p><br></br><br></br>
//                 <form className="p-4 items-center">
//                     <div className="mb-4">
//                         <label htmlFor="dropdown" className="block text-lg font-medium mb-2">Select an Option</label>
//                         <select
//                             id="dropdown"
//                             value={selectedOption}
//                             onChange={handleChange}
//                             className="w-3/4 p-2 border border-gray-300 rounded-lg"
//                         >
//                             <option value="">Please select</option>
//                             <option value="option1">Facebook</option>
//                             <option value="option2">Twitter</option>
//                             <option value="option3">Youtube</option>
//                             <option value="option3">Linkedin</option>
//                             <option value="option3">Instagram</option>
//                         </select>
//
//                         <label htmlFor="dropdown" className="block text-lg font-medium mb-2">Select an Option</label>
//                         <Input size="large" placeholder="Resource title" className='w-3/4 p-2 border border-gray-300 rounded-lg'/>
//                     </div>
//                     <button type="submit" className="bg-blue-500 text-white p-4 rounded">Submit</button>
//                 </form>
//                 <br></br>
//                 {/*<Dragger {...props}>*/}
//                 {/*    <p className="ant-upload-drag-icon">*/}
//                 {/*        <InboxOutlined/>*/}
//                 {/*    </p>*/}
//                 {/*    <p className="ant-upload-text text-lg">Click or drag file to this area to upload</p>*/}
//                 {/*    <p className="ant-upload-hint text-sm">*/}
//                 {/*        Support for a single or bulk upload. Strictly prohibited from uploading company data or other*/}
//                 {/*        banned files.*/}
//                 {/*    </p>*/}
//                 {/*</Dragger>*/}
//                 <br></br><br></br><br></br>
//                 <div className="flex items-center justify-center mt-10">
//                     <Link to="/resource-home"> {/* Adjust the path as needed */}
//                         <Button
//                             type="primary"
//                             style={{
//                                 backgroundColor: '#3572EF',
//                                 borderColor: '#3572EF',
//                                 fontSize: '18px',
//                                 padding: '12px 24px'
//                             }}
//                         >
//                             Back to Homepage
//                         </Button>
//                     </Link>
//                 </div>
//             </div>
//
//
//         </div>
//     );
// };
//
// export default App;
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const App: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-10">
            {/* Container for Upload Resources */}
            <div className="bg-white shadow-lg rounded-lg p-10 w-full md:w-1/4 lg:w-3/4">
                <p className='text-3xl font-bold text-center mb-8'>Upload Your Social Media Links</p>
                <p className='text-xl font-bold text-center mb-8'>You can upload you Social media links like linkedin,facebook etc. to our platform to display to our participants. </p>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="dropdown" className="block text-lg font-medium mb-2">Select an Option</label>
                        <select
                            id="dropdown"
                            value={selectedOption}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Please select</option>
                            <option value="facebook">Facebook</option>
                            <option value="twitter">Twitter</option>
                            <option value="youtube">YouTube</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="instagram">Instagram</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="title" className="block text-lg font-medium mb-2">Resource Title</label>
                        <Input
                            id="title"
                            size="large"
                            placeholder="Enter resource title"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/*<Button*/}
                    {/*    type="primary"*/}
                    {/*    htmlType="submit"*/}
                    {/*    className="w-1/2 bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "*/}
                    {/*>*/}
                    {/*    Submit*/}
                    {/*</Button>*/}
                    <div className="flex justify-center p-4 ">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-1/2 bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </Button>
                    </div>
                </form>

                <div className="mt-8 flex items-center justify-center">
                    <Link to="/resource-home">
                        <Button
                            type="default"
                            style={{
                                fontSize: '16px',
                                padding: '10px 20px',
                                color: '#3572EF',
                                borderColor: '#3572EF',
                                borderRadius: '8px',
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

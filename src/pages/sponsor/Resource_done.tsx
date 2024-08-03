

import { FileImageFilled, CopyOutlined, ProfileOutlined, LinkOutlined,VideoCameraOutlined } from '@ant-design/icons';
import { Segmented} from 'antd';
import {useState} from "react";


import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter,FaYoutube} from "react-icons/fa";



const App = () => {
    // const [open, setOpen] = useState(true);
    const [selectedSegment, setSelectedSegment] = useState('Images');


    const resources = [
        {title: 'Audio File 1', type: 'audio', src: 'https://example.com/audio1.mp3'},
        {title: 'MP4 Video 1', type: 'video', src: 'https://youtu.be/nr1cFyxVdDw?si=kdK5uLAu1_ZdoZNO'},
        {title: 'MP4 Video 2', type: 'video', src: 'https://example.com/video2.mp4'},
        {title: 'Image 1', type: 'image', src: './src/assets/image41.png'},
        {title: 'Image 2', type: 'image', src: './src/assets/image42.png'},
        {title: 'Image 2', type: 'image', src: './src/assets/signup.jpg'},
        {title: 'Document 1', type: 'document', src: '././src/assets/document 1.pdf'},
        {title: 'Document 2', type: 'document', src: 'https://example.com/document2.pdf'},
        {title: 'Document 3', type: 'document', src: 'https://example.com/document2.pdf'},
        {title: 'Document 4', type: 'document', src: 'https://example.com/document2.pdf'},
        {title: 'Document 5', type: 'document', src: 'https://example.com/document2.pdf'},
        {title: 'Webpage', type: 'link', url: 'https://wso2.com/'},
        {title: 'Link 2', type: 'link', url: 'https://example.com/link2'},


        ];
    const resources2 = [
        {url: 'https://facebook.com', title: 'Facebook',type:'other', icon: <FaFacebookF className="w-12 h-12"/>},
        {url: 'https://twitter.com', title: 'Twitter', type:'other',icon: <FaTwitter className="w-12 h-12"/>},
        {url: 'https://instagram.com', title: 'Instagram',type:'other', icon: <FaInstagram className="w-12 h-12"/>},
        {url: 'https://linkedin.com', title: 'Linkedin',type:'other', icon: <FaLinkedin className="w-12 h-12"/>},
        {url: 'https://youtube.com', title: 'Youtube',type:'other', icon: <FaYoutube className="w-12 h-12"/>},

        // Add more resources as needed
    ];





    return (

        <div className="flex flex-col justify-center items-center h-full  ml-50 mb-2">
            <div className="h-screen flex-1 p-7">
                <div className='absolute ml-[0%] w-20 mr-[99%] mb-[100%] mt-[0%]'>
                    {/* <img src={LOGO} className='bg-cover w-full h-full' alt="Logo" /> */}
                </div>
                <h2 className="text-2xl font-semibold text-center">Uploaded Resources</h2>
                <div>
                    <br/>
                    <div className="flex justify-center items-center p-2 ">
                        <Segmented
                            options={[
                                {label: 'Images', value: 'Images', icon: <FileImageFilled/>},
                                {label: 'Videos', value: 'Videos', icon: <VideoCameraOutlined/>},
                                {label: 'Docs', value: 'Docs', icon: <CopyOutlined/>},
                                {label: 'Links', value: 'Links', icon: <LinkOutlined/>},
                                {label: 'Other', value: 'Other', icon: <ProfileOutlined/>},
                            ]}
                            value={selectedSegment}
                            onChange={(value) => setSelectedSegment(value)}
                            defaultValue="Images"
                            className="text-lg" // Increase font size
                            style={{
                                padding: '10px 20px',
                                fontSize: '18px',
                                height: '60px',

                            }}
                        />
                    </div>

                    <div className="container mx-auto p-4">
                        {selectedSegment === 'Images' && (

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
                                {resources.filter(resource => resource.type === 'image').map((image, index) => (
                                    <div key={index} className="flex justify-center items-center">
                                        <div
                                            className="bg-gradient-to-r from-blue-400 to-blue-800 p-6 rounded-xl shadow-xl text-center w-full transform transition-transform hover:scale-105">
                                            <img
                                                src={image.src}
                                                alt={`Image ${index + 1}`}
                                                className="rounded-lg w-full h-64 object-cover"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                        )}

                        {selectedSegment === 'Docs' && (


                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
                                {resources.filter(resource => resource.type === 'document').map((doc, index) => (
                                    <div key={index} className="flex justify-center items-center">
                                        <div
                                            className="bg-white p-6 rounded-xl shadow-xl w-full transform transition-transform hover:scale-105">
                                            <a
                                                href={doc.src}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-gradient-to-r from-blue-400 to-blue-800 p-8 rounded-lg text-white text-center block"
                                            >
                                                <div className="flex flex-col items-center">
                                                    <div className="mb-4">
                                                        <svg className="w-24 h-24" fill="currentColor"
                                                             viewBox="0 0 24 24">
                                                            <path
                                                                d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-4H8V8h5v2zm0-5.5L18.5 9H13V4.5z"/>
                                                        </svg>
                                                    </div>
                                                    <div className="text-xl font-semibold">{doc.title}</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        )}

                        {selectedSegment === 'Links' && (


                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
                                {resources.filter(resource => resource.type === 'link').map((link, index) => (
                                    <div key={index} className="flex justify-center items-center">
                                        <div
                                            className="bg-white p-8 rounded-xl shadow-xl transform transition-transform hover:scale-105 w-full max-w-sm">
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block bg-gradient-to-r from-blue-400 to-blue-800 p-8 rounded-lg text-white text-center"
                                            >
                                                <div className="flex flex-col items-center">
                                                    <div className="mb-6">
                                                        <svg className="w-24 h-24" fill="currentColor"
                                                             viewBox="0 0 24 24">
                                                            <path
                                                                d="M12 2a10 10 0 00-6.36 17.64 1 1 0 01-1.36 1.36 12 12 0 0116.96-16.96 1 1 0 11-1.36 1.36A10 10 0 0012 2zm0 3a7 7 0 014.9 11.9A1 1 0 0115.66 16a5 5 0 10-7.32 0 1 1 0 01-1.24 1.52A7 7 0 0112 5zm1 10a1 1 0 112 0v2a1 1 0 11-2 0v-2zM11 7a1 1 0 112 0v6a1 1 0 11-2 0V7z"/>
                                                        </svg>
                                                    </div>
                                                    <div className="text-2xl font-bold">{link.title}</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        )}
                        {selectedSegment === 'Videos' && (

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
                                {resources.filter(resource => resource.type === 'video').map((video, index) => (
                                    <div key={index} className="flex justify-center items-center">
                                        <div
                                            className="bg-gradient-to-r from-blue-400 to-blue-800 p-6 rounded-xl shadow-xl text-center w-full transform transition-transform hover:scale-105">
                                            <video controls className="w-full h-64 rounded-lg">
                                                <source src={video.src} type="video/mp4"/>
                                                Your browser does not support the video tag.
                                            </video>
                                            <div className="mt-4 text-white font-semibold">{video.title}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedSegment === 'Other' && (


                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
                                {resources2.filter(resource2 => resource2.type === 'other').map((link, index) => (
                                    <div key={index} className="flex justify-center items-center">
                                        <div
                                            className="bg-white p-8 rounded-xl shadow-xl transform transition-transform hover:scale-105 w-full max-w-lg">
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block bg-gradient-to-r from-blue-400 to-blue-800 p-8 rounded-lg text-white text-center w-full h-full flex-col items-center justify-center"
                                            >
                                                <div className="mb-6 w-24 h-24">
                                                    {link.icon}
                                                </div>
                                                <div className="text-xl font-semibold">{link.title}</div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <br></br><br></br>


                    </div>

                </div>
            </div>





      </div>
  )
      ;
};

export default App;

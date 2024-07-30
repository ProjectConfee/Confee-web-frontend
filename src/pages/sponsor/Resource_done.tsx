
// import LOGO from '../assets/logo.png';
// import { Pagination } from 'antd';
import { FileImageFilled, CopyOutlined, ProfileOutlined, LinkOutlined } from '@ant-design/icons';
import {Button,  Segmented} from 'antd';
import { useState } from "react";
import {Link} from "react-router-dom";

const App = () => {
  // const [open, setOpen] = useState(true);
  const [selectedSegment, setSelectedSegment] = useState('Images');

  // const Menus = [
  //   { title: "Home", src: "home", gap: true },
  //   { title: "Profile", src: "User", gap: true },
  //   { title: "Stall Details", src: "stall", gap: true },
  //   { title: "Schedule", src: "schedule", gap: true },
  //   { title: "QR Code", src: "qr-code", gap: true },
  //   { title: "Resource Upload", src: "upload", gap: true },
  //   { title: "Announcement", src: "marketing", gap: true },
  //   { title: "Logout", src: "logout", gap: true },
  // ];

  const resources = [
    { title: 'Audio File 1', type: 'audio', src: 'https://example.com/audio1.mp3' },

    { title: 'MP4 Video 1', type: 'video', src: 'https://example.com/video1.mp4' },
    { title: 'MP4 Video 2', type: 'video', src: 'https://example.com/video2.mp4' },
    { title: 'Image 1', type: 'image', src: './src/assets/image41.png' },
    { title: 'Image 2', type: 'image', src: './src/assets/image42.png' },
    { title: 'Document 1', type: 'document', src: 'https://example.com/document1.pdf' },
    { title: 'Document 2', type: 'document', src: 'https://example.com/document2.pdf' },
    { title: 'Link 1', type: 'link', url: 'https://example.com/link1' },
    { title: 'Link 2', type: 'link', url: 'https://example.com/link2' },
    // Add more resources as needed
  ];

  return (

      <div className="flex flex-col justify-center items-center h-full mt-20 ml-50">
          <div className="h-screen flex-1 p-7">
              <div className='absolute ml-[0%] w-20 mr-[99%] mb-[100%] mt-[0%]'>
                  {/* <img src={LOGO} className='bg-cover w-full h-full' alt="Logo" /> */}
              </div>
              <h2 className="text-2xl font-semibold text-center">Uploaded Resources</h2>
              <div>
                  <br/>
                  <div className="flex justify-center items-center p-4">
                      <Segmented
                          options={[
                              {label: 'Media', value: 'Images', icon: <FileImageFilled/>},
                              {label: 'Docs', value: 'Docs', icon: <CopyOutlined/>},
                              {label: 'Links', value: 'Links', icon: <LinkOutlined/>},
                              {label: 'Other', value: 'Other', icon: <ProfileOutlined/>},
                          ]}
                          value={selectedSegment}
                          onChange={(value) => setSelectedSegment(value)}
                          defaultValue="Images"
                      />
                  </div>

                  <div className="container mx-auto p-4">
                      {selectedSegment === 'Images' && (
                          <div className="grid grid-cols-3 gap-4">
                              {resources.filter(resource => resource.type === 'image').map((image, index) => (
                                  <div key={index} className="flex justify-center items-center">
                                      <img src={image.src} alt={`Image ${index + 1}`}
                                           style={{width: 250, height: 250}}/>
                                  </div>
                              ))}
                          </div>
                      )}
                      {selectedSegment === 'Docs' && (
                          <div className="grid grid-cols-3 gap-4">
                              {resources.filter(resource => resource.type === 'document').map((doc, index) => (
                                  <div key={index} className="flex justify-center items-center">
                                      <a href={doc.src} target="_blank" rel="noopener noreferrer"
                                         className="bg-gray-200 p-6 rounded-md shadow-md size-60">
                                          {doc.title}
                                      </a>
                                  </div>
                              ))}
                          </div>
                      )}

                      {selectedSegment === 'Links' && (
                          <div className="grid grid-cols-3 gap-4">
                              {resources.filter(resource => resource.type === 'link').map((link, index) => (
                                  <div key={index} className="flex justify-center items-center">
                                      <a href={link.url} target="_blank" rel="noopener noreferrer"
                                         className="bg-gray-200 p-6 rounded-md shadow-md size-60">
                                          {link.title}
                                      </a>
                                  </div>
                              ))}
                          </div>
                      )}
                      {selectedSegment === 'Other' && (
                          <div className="grid grid-cols-3 gap-4">
                              {resources.map((resource, index) => (
                                  <div key={index} className="flex justify-center items-center">
                                      {resource.type === 'audio' && (
                                          <audio controls className="bg-gray-200 p-6 rounded-md shadow-md size-60">
                                              <source src={resource.src} type="audio/mp3"/>
                                              Your browser does not support the audio element.
                                          </audio>
                                      )}
                                      {resource.type === 'video' && (
                                          <video controls className="bg-gray-200 p-6 rounded-md shadow-md size-60">
                                              <source src={resource.src} type="video/mp4"/>
                                              Your browser does not support the video tag.
                                          </video>
                                      )}
                                  </div>
                              ))}
                          </div>
                      )}

                      <br></br><br></br>
                      {/*<div className="items-center ml-70">  <Flex gap="small " wrap>*/}
                      {/*    <Link to="/resource-home"> /!* Adjust the path as needed *!/*/}
                      {/*        <Button type="primary">Back to Homepage</Button>*/}
                      {/*    </Link>*/}


                      {/*</Flex>*/}
                      {/*</div>*/}


                  </div>

              </div>
          </div>

          {/*<div className="min-h-screen flex flex-col justify-between">*/}
          {/*  <div className="flex justify-center items-center p-4">*/}
          {/*    <Pagination defaultCurrent={1} total={50} />*/}
          {/*  </div>*/}
          {/*</div>*/}


          <div className=" items-center justify-center h-screen">
              <div className="text-center mb-20">
                  <Link to="/resource-home"> {/* Adjust the path as needed */}
                      <Button     type="primary" style={{ backgroundColor: '#12086f', borderColor: '#12086f' }}>Back to Homepage</Button>
                  </Link>
              </div>
          </div>


      </div>
  )
      ;
};

export default App;

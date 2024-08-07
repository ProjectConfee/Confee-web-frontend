

import { FileImageFilled, CopyOutlined, ProfileOutlined, LinkOutlined,VideoCameraOutlined } from '@ant-design/icons';
import {Button, Segmented} from 'antd';
import {useState} from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { FaFacebook } from "react-icons/fa";
import DocumentIcon from '@mui/icons-material/Description';
import LinkIcon from '@mui/icons-material/Link';



import { FaInstagram, FaLinkedin, FaTwitter,FaYoutube} from "react-icons/fa";



const App = () => {
    // const [open, setOpen] = useState(true);
    const [selectedSegment, setSelectedSegment] = useState('Images');


    const resources = [
        {title: 'Audio File 1', type: 'audio', src: 'https://example.com/audio1.mp3'},
        {title: ' Video ', type: 'video', src: 'https://www.youtube.com/watch?v=YyQUdyak3i4'},
        {title: 'Video ', type: 'video', src: 'https://example.com/video2.mp4'},
        {title: ' Video', type: 'video', src: 'https://youtu.be/nr1cFyxVdDw?si=kdK5uLAu1_ZdoZNO'},
        {title: 'Video ', type: 'video', src: 'https://example.com/video2.mp4'},
        // {title: 'Image 1', type: 'image', src: './src/assets/image41.png'},
        // {title: 'Image 2', type: 'image', src: './src/assets/image42.png'},
        {title: 'Image ', type: 'image', src: './src/assets/signup.jpg'},
        {title: 'Image ', type: 'image', src: './src/assets/signup.jpg'},
        {title: 'Image ', type: 'image', src: './src/assets/signup.jpg'},
        {title: 'Image ', type: 'image', src: './src/assets/signup.jpg'},
        {title: 'Image ', type: 'image', src: './src/assets/signup.jpg'},
        {title: 'Image ', type: 'image', src: './src/assets/signup.jpg'},
        {title: 'Image ', type: 'image', src: './src/assets/signup.jpg'},
        {title: 'Image ', type: 'image', src: './src/assets/signup.jpg'},
        {title: 'Document ', type: 'document', src: '././src/assets/document 1.pdf'},
        {title: 'Document ', type: 'document', src: 'https://example.com/document2.pdf'},
        {title: 'Document ', type: 'document', src: 'https://example.com/document2.pdf'},
        {title: 'Document ', type: 'document', src: 'https://example.com/document2.pdf'},
        {title: 'Document ', type: 'document', src: 'https://example.com/document2.pdf'},
        {title: 'Webpage', type: 'link', url: 'https://wso2.com/'},
        {title: 'Link ', type: 'link', url: 'https://example.com/link2'},


        ];
    const resources2 = [
        {url: 'https://facebook.com', title: 'Facebook',type:'other', icon: <FaFacebook className="w-12 h-12" />},
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


                            <ImageList sx={{ width: '100%', height: 'auto' }} cols={4} gap={16}>
                                {resources.filter(resource => resource.type === 'image').map((image, index) => (
                                    <ImageListItem key={index}>
                                        <img
                                            srcSet={`${image.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${image.src}?w=248&fit=crop&auto=format`}
                                            alt={image.title}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={image.title}
                                            // subtitle={<span>by: {image.author}</span>}
                                            position="below"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>


                        )}

                        {selectedSegment === 'Docs' && (



                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-3">
                                {resources.filter(resource => resource.type === 'document').map((doc, index) => (
                                    <Card sx={{maxWidth: 345}} key={index}>
                                        <CardMedia
                                            sx={{
                                                height: 200,
                                                width: 300,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '10px' // Optional: add some rounding to the container
                                            }}
                                            className='bg-sky-700'
                                        >
                                            <DocumentIcon
                                                sx={{
                                                    fontSize: 80,  // Adjust the size of the icon
                                                    color: 'white' // Ensure the icon has a contrasting color
                                                }}
                                            />
                                        </CardMedia>
                                        <CardContent>
                                            <div className='flex justify-center items-center mb-4'>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {doc.title}
                                                </Typography>
                                            </div>
                                        </CardContent>
                                        <Button
                                            className='flex items-center bg-sky-700 text-white'
                                            size="large"
                                            href={doc.src}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            // sx={{margin: '16px auto', width: '80%'}}
                                        >
                                            View Document
                                        </Button>
                                    </Card>
                                ))}
                            </div>

                        )}

                        {selectedSegment === 'Links' && (





                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
                        {resources.filter(resource => resource.type === 'link').map((link, index) => (
                            <Card sx={{ maxWidth: 345 }} key={index}>
                        <CardMedia
                            sx={{
                                height: 200,
                                width: 300,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '10px' // Optional: add some rounding to the container
                            }}
                            className='bg-sky-700'
                        >
                            <LinkIcon
                                sx={{
                                    fontSize: 80,  // Adjust the size of the icon
                                    color: 'white' // Ensure the icon has a contrasting color
                                }}
                            />
                        </CardMedia>
                        <CardContent>
                            <div className='flex justify-center items-center mb-4'>
                                <Typography gutterBottom variant="h5" component="div">
                                    {link.title}
                                </Typography>
                            </div>
                        </CardContent>
                        <Button
                            className='flex items-center bg-sky-700 text-white'
                            size="large"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            // sx={{ margin: '16px auto', width: '80%' }}
                        >
                            View Link
                        </Button>
                    </Card>
                    ))}
                </div>


                )}
                        {selectedSegment === 'Videos' && (


                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
                                {resources.filter(resource => resource.type === 'video').map((video, index) => (
                                    <Card sx={{display: 'flex', flexDirection: 'column', height: '80%', width: '100%'}}
                                          key={index}>
                                        <CardMedia
                                            component="video"
                                            controls
                                            sx={{width: '100%', height: 400, borderRadius: '10px'}}
                                            image={video.src}
                                            title={video.title}
                                        />
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            flexGrow: 1
                                        }}>
                                            <CardContent sx={{flex: '1 0 auto'}}>
                                                <Typography component="div" variant="h6">
                                                    {video.title}
                                                </Typography>
                                            </CardContent>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                pb: 1
                                            }}>



                                            </Box>
                                        </Box>
                                    </Card>
                                ))}
                            </div>
                        )}
                        {selectedSegment === 'Other' && (



                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-3">
                                {resources2.filter(resource => resource.type === 'other').map((link, index) => (
                                    <Card sx={{maxWidth: 345}} key={index}>
                                        <CardMedia
                                            sx={{
                                                height: 200,
                                                width: 300,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '10px' // Optional: add some rounding to the container
                                            }}
                                            className="bg-sky-700"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: '70%',  // Adjust the size of the container
                                                    maxHeight: '70%', // Adjust the size of the container
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: '10px', // Optional: add some rounding to the container
                                                    color: 'white', // Ensure the icon has a contrasting color
                                                }}
                                            >
                                                {link.icon}
                                            </div>
                                        </CardMedia>
                                        <CardContent>
                                            <div className='flex justify-center items-center mb-4'>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {link.title}
                                                </Typography>
                                            </div>
                                        </CardContent>
                                        <Button
                                            className='flex items-center bg-sky-700 text-white'
                                            size="large"
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            // sx={{margin: '16px auto', width: '80%'}}
                                        >
                                            View  {link.title}
                                        </Button>
                                    </Card>
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

import {Button, Divider, Input, List, message, Typography, Upload} from "antd";
import {InboxOutlined,} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faFilePdf, faTrash,} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import axios from "axios";



const { Title,Text } = Typography;




const { Dragger } = Upload;

interface prop{
    id:string|undefined
}

const App :React.FC<prop> = ({id}) => {

    interface UploadedResource {
        id: number;
        title: string;
        description: string;
        fileUrl: string; // URL for the uploaded file
        createdAt: string; // Timestamp when the resource was created
    }

    const [uploadedResources, setUploadedResources] = useState<UploadedResource[]>([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [workshopIds, setWorkshopIds] = useState<string>('');
    // const [fileList, setFileList] = useState([]);

    const workshopId = id;
    useEffect(() => {
        if (id !== undefined && id !== workshopIds) {
            setWorkshopIds(id); // Update only if the id has changed
        } else if (id === undefined && workshopIds !== 'defaultId') {
            setWorkshopIds('defaultId'); // Fallback value if id is undefined
        }
    }, [id, workshopIds]);
    const [fileList, setFileList] = useState<File[]>([]);

    useEffect(() => {
        const fetchResources = async () => {
            const token = localStorage.getItem("authToken");

            if (!token) {
                message.error("No token found, please log in.");
                return;
            }

            try {
                const response = await axios.get<UploadedResource[]>(
                    `http://localhost:8080/admin/files/${workshopId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                        },
                    }
                );

                setUploadedResources(response.data);
                console.log(response.data);
            } catch (error) {
                message.error("Failed to fetch uploaded resources.");
                console.error(error);
            }
        };

        fetchResources();
    }, [workshopId]);


    const props = {
        beforeUpload: (file: File) => {
            // Directly use File type in fileList
            setFileList([file]);
            return false; // Prevent auto-upload
        },
        // When passing to Upload, convert File to UploadFile
        fileList: fileList.map((file, index) => ({
            ...file,
            uid: `${index}-${file.name}`, // Ensure unique uid for UploadFile
        })),
    };


    const handleSubmit = async () => {

        const token = localStorage.getItem("authToken");

        if (!token) {
            message.error("No token found, please log in.");
            return;
        }


        if (!title || !description || !fileList.length) {
            message.error('Please fill in all fields and upload a file');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('workshopId', workshopIds);
        formData.append('file', fileList[0]);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data", // Ensure the correct content type for file upload
                Authorization: `Bearer ${token}`, // Add the Bearer token to the headers
            },
        };

        try {
            const response = await axios.post("http://localhost:8080/admin/files/upload", formData, config);

            if (response.status === 200) {
                message.success('File uploaded successfully');
            }
        } catch (error) {
            message.error('File upload failed');
        }
    };


    return (
        <>

            <div className="col-span-2 flex">
                <Title level={4}>Upload Resources</Title>
            </div>

            <div className={"flex gap-8"}>
                <div className={"w-1/2"}>
                    <div className="flex flex-col ">
                        <div className="mb-1">
                            <label style={{fontSize: '18px'}}>Title</label>
                        </div>
                        <div>
                            <Input placeholder="Enter the title" value={title}
                                   onChange={(e) => setTitle(e.target.value)}/>

                        </div>
                    </div>

                    <div className="flex flex-col mt-3 ">
                        <div className="mb-1">
                            <label style={{fontSize: '18px'}}>Description</label>
                        </div>
                        <div>
                            <TextArea rows={4} placeholder={"Enter the files and folders description"}
                                      value={description}
                                      onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                    </div>
                </div>

                <div className={"w-1/2"}>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined/>
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Dragger>
                </div>

            </div>

            <div className={"mt-6"}>
                <Button type={"primary"} onClick={handleSubmit}>Upload</Button>
            </div>

            <Divider></Divider>

            <div className="col-span-2 flex">
            <Title level={4}>Uploaded Resources</Title>
            </div>

            <div>

                <List
                    itemLayout="horizontal"
                    dataSource={uploadedResources}
                    renderItem={(item) => (
                        <List.Item
                            actions={[
                                <Button
                                    key="edit"
                                    type="link"
                                    icon={<FontAwesomeIcon icon={faEdit} size="lg" />}
                                    onClick={() => console.log(`Edit ${item.title}`)}
                                />,
                                <Button
                                    key="delete"
                                    type="link"
                                    icon={<FontAwesomeIcon icon={faTrash} size="lg" style={{ color: "#FF4D4F" }} />}
                                    onClick={() => console.log(`Edit ${item.title}`)}
                                />,
                            ]}
                        >
                            <List.Item.Meta
                                avatar={
                                    <FontAwesomeIcon
                                        icon={faFilePdf} // Default icon for demonstration
                                        style={{ fontSize: "24px", color: "#003eb3" }}
                                    />
                                }
                                title={<Text style={{ fontSize: "16px" }}>{item.title}</Text>}
                                description={
                                    <>
                                        {item.description}
                                        {item.fileUrl && (
                                            <img
                                                src={`http://localhost:8080/${item.fileUrl}`}
                                                alt={item.title}
                                                style={{
                                                    marginLeft: "16px",
                                                    marginTop: "16px",
                                                    width: "600px",
                                                    height: "400px",
                                                    borderRadius: "8px",
                                                }}
                                            />
                                        )}
                                    </>
                                }
                            />
                        </List.Item>
                    )}
                />
            </div>

        </>
    );
}
export default App

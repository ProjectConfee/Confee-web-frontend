import {List, Typography} from "antd";
// import Dragger from "antd/es/upload/Dragger";
// import {InboxOutlined,} from "@ant-design/icons";
// import TextArea from "antd/es/input/TextArea";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf, faImage} from "@fortawesome/free-solid-svg-icons";
import libreOffice from "../../assets/libreoffice.jpg";
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
const { Title,Text } = Typography;

const data = [
    {
        title: 'Introduction to LibreOffice',
        description:"This PDF provides a comprehensive introduction to LibreOffice, covering fundamental concepts, common algorithms, and practical applications. ",
        icon: faFilePdf
    },
    {
        title: 'LibreOffice Product',
        description:'It is available for a variety of computing platforms, with official support for Microsoft Windows, macOS and Linux[13] and community builds for many other platforms. ',
        imageUrl:libreOffice,
        icon:faImage
    },
    {
        title: 'LibreOffice New Features',
        icon:faYoutube,
        description: 'A look at some of the new features in LibreOffice 24.2, created by our community of volunteers and certified developers.',
    },

];


const App = () => (
    <>

        <div className="col-span-2 flex">
            <Title level={4}>Uploaded Resources</Title>
        </div>

        <div>

            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item actions={[
                        // <Button
                        //     key="edit"
                        //     type="link"
                        //     icon={<FontAwesomeIcon icon={faEdit} size={'lg'} />}
                        //     onClick={() => console.log(`Edit ${item.title}`)}
                        // />,
                        // <Button
                        //     key="delete"
                        //     type="link"
                        //     icon={<FontAwesomeIcon icon={faTrash} size={'lg'} style={{ color: '#FF4D4F' }}/>}
                        //     onClick={() => console.log(`Delete ${item.title}`)}
                        // />,
                    ]}>
                        <List.Item.Meta
                            avatar={<FontAwesomeIcon icon={item.icon} style={{ fontSize: '24px', color: '#003eb3'}} />}
                            title={<Text style={{ fontSize: '16px' }}>{item.title}</Text>}
                            description={
                                <>
                                    {item.description}
                                    {item.imageUrl && (
                                        <img src={item.imageUrl} alt={item.title} style={{ marginLeft: '16px', marginTop:'16px', width:'600px', height:'400px', borderRadius: '8px' }} />
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

export default App

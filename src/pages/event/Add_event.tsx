
import {useEffect, useState} from 'react';
import {
    Button,
    Checkbox,
    Col,
    DatePicker,

    Form,
    Input, InputNumber,
    Row,
    Select,
    Space,
    TimePicker,
    Typography
} from "antd";
import moment from 'moment';
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { InboxOutlined, MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import Dragger from "antd/es/upload/Dragger";
import {Link} from "react-router-dom";
import axios from "axios";

const { Title } = Typography;

const onChange = (time: moment.Moment | null, timeString: string | string[]) => {
    console.log(time, timeString);
};

const props = {
    name: 'file',
    multiple: false,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
};




const App = () => {
    interface User {
        noOfDate: number;
        name: string;
        description: string;
        venue: string;
        map?: string;
        certificate: string;
        post?: { file?: { originFileObj?: File } };
        coverPhoto?: { file?: { originFileObj?: File } };
        [key: string]: any;
    }

    interface SubTopic {
        subTopic: string;
    }

    interface WorkshopDay {
        day: string;
        date?: string|undefined;
        startTime?: string|undefined;
        endTime?: string|undefined;
        mainTopic?: string|undefined;
        investment: number;
        subTopics: SubTopic[];
    }

    interface FormValues {
        user: User;
        users: Array<{ event: string }>;
    }


    const [inputWidth, setInputWidth] = useState('20rem');

    useEffect(() => {
        const updateInputWidth = () => {
            if (window.innerWidth <= 576) {
                setInputWidth('12rem');
            } else if (window.innerWidth <= 768) {
                setInputWidth('14rem');
            } else if (window.innerWidth <= 992) {
                setInputWidth('16rem');
            } else if (window.innerWidth <= 1200) {
                setInputWidth('18rem');
            } else {
                setInputWidth('24rem');
            }
        };
        updateInputWidth();

        // Add event listener
        window.addEventListener('resize', updateInputWidth);

        // Clean up event listener on unmount
        return () => window.removeEventListener('resize', updateInputWidth);
    }, []);

    const [type, setType] = useState('');
    const [dateCount, setDateCount] = useState(1);
    const [lunchProvided, setLunchProvided] = useState(false);
    const checked = (e: CheckboxChangeEvent) => {
        setLunchProvided(e.target.checked);
    };


    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        setType(value);
    };

    const onChangeNo = (value: number | null) => {
        console.log('changed', value);
        setDateCount(value || 1);
    };

    const onFinish = async (values: FormValues) => {
        try {
            const formData = new FormData();

            // Prepare workshop days data
            const workshopDays: WorkshopDay[] = Array.from(
                { length: values.user.noOfDate },
                (_, i) => ({
                    day: `Day ${i + 1}`,
                    date: values.user[`date${i + 1}`]?.format('YYYY-MM-DD'),
                    startTime: values.user[`time${i + 1}`]?.[0]?.format('HH:mm'),
                    endTime: values.user[`time${i + 1}`]?.[1]?.format('HH:mm'),
                    mainTopic: values.user[`mainTopic${i + 1}`],
                    investment: parseFloat(values.user[`investment${i + 1}`]),
                    subTopics: values.users.map((u) => ({ subTopic: u.event })),
                })
            );

            // Payload for submission
            const payload = {
                title: values.user.name,
                description: values.user.description,
                location: values.user.venue,
                mapLink: values.user.map,
                type: 'workshop', // Replace with dynamic type if needed
                noOfSeat: 100,
                certificateFrom: values.user.certificate,
                lunch: lunchProvided, // Replace with dynamic lunch option if needed
                workshopDays,
            };

            formData.append(
                'data',
                new Blob([JSON.stringify(payload)], { type: 'application/json' })
            );

            if (values.user.post?.file?.originFileObj) {
                formData.append('post', values.user.post.file.originFileObj);
            }
            if (values.user.coverPhoto?.file?.originFileObj) {
                formData.append('coverPhoto', values.user.coverPhoto.file.originFileObj);
            }

            // Submit the form data
            const response = await axios.post('http://localhost:8080/workshops', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            alert('Workshop created successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error creating workshop:', error);
            alert('Failed to create workshop. Please try again.');
        }
    };



    return (
        <Form onFinish={onFinish}>
            <div className="bg-white rounded-3xl shadow-lg p-8">
                <div className="flex justify-center items-center mb-6">
                    <Title level={3}>Add Conference Event</Title>
                </div>

                <div>
                    <Row gutter={32}>
                        <Col span={12}>
                            <Form.Item name={['user', 'type']}>
                                <div>
                                    <label className="mb-2 font-medium text-gray-700">Type</label>
                                </div>
                                <div className="mt-2">
                                    <Select
                                        defaultValue="Select event type"
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: 'Pre-Workshop',
                                                label: 'Pre Conference Workshops',
                                            },
                                            {
                                                value: 'Post-Workshop',
                                                label: 'Post Conference Workshops',
                                            }
                                        ]}
                                    />
                                </div>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item name={['user', 'name']} rules={[{ required: true, message: 'Please input the title!' }]}>
                                <div>
                                    <label className="mb-2 font-medium text-gray-700">Title</label>
                                </div>
                                <Input className="mt-2"/>
                            </Form.Item>
                        </Col>
                    </Row>


                        <Form.Item name={['user', 'description']} rules={[{ required: true, message: 'Please input the description!' }]}>
                            <div className="flex flex-col">
                                <label className="mb-2 font-medium text-gray-700">Description</label>
                                <Input.TextArea className="w-full"/>
                            </div>
                        </Form.Item>


                        <Form.Item name={['user', 'noOfDate']}>
                            <div className="flex flex-row ">
                                <div className="flex items-center">
                                    <label className=" font-medium text-gray-700 mr-6 items-center ">No Of Date</label>
                                </div>
                                <InputNumber min={1} max={10} defaultValue={1} onChange={onChangeNo} className="w-1/5"/>
                            </div>
                        </Form.Item>



                    <Row gutter={32}>
                        <Col span={12}>

                            {[...Array(dateCount)].map((_, index) => (
                                <Form.Item name={['user', `date${index + 1}`]}>
                                    <div className="flex flex-col">

                                            <label className="mb-2 font-medium text-gray-700">Day {index + 1}</label>


                                        <DatePicker onChange={onChange}/>
                                    </div>
                                </Form.Item>
                            ))}
                        </Col>

                        <Col span={12}>
                            {[...Array(dateCount)].map(() => (
                                <Form.Item name={['user', 'time']}>
                                    <div className="flex flex-col">
                                        <label className="mb-2 font-medium text-gray-700">Time</label>
                                        <TimePicker.RangePicker/>
                                    </div>
                                </Form.Item>
                            ))}
                        </Col>
                    </Row>

                    <Row gutter={32}>
                        <Col span={12}>
                            <Form.Item name={['user', 'venue']}>
                                <div className="flex flex-col">
                                    <label className="mb-2 font-medium text-gray-700">Venue</label>
                                    <Input/>
                                </div>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item name={['user', 'map']}>
                                <div className="flex flex-col">
                                    <label className="mb-2 font-medium text-gray-700">Google Map Link</label>
                                    <Input/>
                                </div>
                            </Form.Item>
                        </Col>


                    </Row>


                    {type !== 'Conference Day 1' && type !== 'Conference Day 2' && (
                        [...Array(dateCount)].map((_,index) => (
                            <Row gutter={32} className={"mb-0"}>
                                <Col span={12}>
                                    <Form.Item name={['user', 'topic']}>
                                        <div className="flex flex-col">

                                                <label className="mb-2 font-medium text-gray-700">Main Topic Day {index + 1}</label>


                                            <Input/>
                                        </div>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item name={['user', 'map']}>
                                        <div className="flex flex-col">
                                            <label className="mb-2 font-medium text-gray-700">Sub Topics</label>
                                            <div>
                                                <Form
                                                    name="dynamic_form_nest_item"
                                                    onFinish={onFinish}
                                                    autoComplete="off"
                                                >
                                                    <Form.List name="users">
                                                        {(fields, {add, remove}) => (
                                                            <>
                                                                {fields.map(({key, name, ...restField}) => (
                                                                    <Space
                                                                        key={key}
                                                                        style={{
                                                                            display: 'flex',
                                                                            marginBottom: 2,
                                                                        }}
                                                                        align="baseline"
                                                                    >


                                                                        <Form.Item
                                                                            {...restField}
                                                                            name={[name, 'event']}
                                                                            style={{ flex: 1 }}
                                                                        >
                                                                            <Input style={{ width: inputWidth }} placeholder="Sub Topic"/>
                                                                        </Form.Item>

                                                                        <MinusCircleOutlined onClick={() => remove(name)}/>
                                                                    </Space>
                                                                ))}
                                                                <Form.Item>
                                                                    <Button type="dashed" onClick={() => add()} block
                                                                            icon={<PlusOutlined/>}>
                                                                        Add field
                                                                    </Button>
                                                                </Form.Item>
                                                            </>
                                                        )}
                                                    </Form.List>
                                                </Form>
                                            </div>
                                        </div>
                                    </Form.Item>
                                </Col>
                             </Row>
                        ))
                    )}



                        <Row gutter={32}>

                            <Col span={12}>
                                <Form.Item name={['user', 'certificate']}>
                                    <div className="flex flex-col">
                                        <label className="mb-2 font-medium text-gray-700">Certificate From</label>
                                        <Input/>
                                    </div>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={32}>

                                <Col span={12}>
                                    {[...Array(dateCount)].map((_,index) => (
                                        <Form.Item name={['user', 'investment']}>
                                            <div className="flex flex-col">
                                                <label className="mb-2 font-medium text-gray-700">Investment Day {index+1}</label>
                                                <Input />
                                            </div>
                                        </Form.Item>
                                    ))}
                                </Col>
                        </Row>

    <div className="mb-6">
        <Checkbox onChange={checked}>Lunch and refreshments are provided </Checkbox>
    </div>

    <Row gutter={32}>
        <Col span={12}>
            <Form.Item name={['user', 'post']}>
                <div className="flex flex-col">
                    <label className="mb-2 font-medium text-gray-700">Post</label>
                </div>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined/>
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single upload. Please upload social media post.
                    </p>
                </Dragger>
            </Form.Item>
        </Col>

        <Col span={12}>
            <Form.Item name={['user', 'post']}>
                <div className="flex flex-col">
                    <label className="mb-2 font-medium text-gray-700">Cover Photo</label>
                </div>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined/>
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single upload. Please upload social media post.
                    </p>
                </Dragger>
            </Form.Item>
        </Col>
    </Row>


                    <div className="flex justify-end mb-2">

                        <Link to="/view_events_oc">
                            <Button type="primary" size="large">
                                Add Event
                            </Button>
                        </Link>

                    </div>
                </div>
            </div>

        </Form>

    );
};

export default App;

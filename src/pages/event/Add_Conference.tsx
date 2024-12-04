import {
    Button,
    Checkbox,
    Col,
    DatePicker,
    Form,
    Input,
    message,
    Row,
    TimePicker,
    Typography,
} from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { InboxOutlined } from "@ant-design/icons";
import Dragger from "antd/es/upload/Dragger";
import axios from "axios";
import { useState } from "react";
import { Dayjs } from 'dayjs';

const { Title } = Typography;

const App = () => {
    const [title, setTitle] = useState("");
    const [investment, setInvestment] = useState("");
    const [date, setDate] = useState<moment.Moment | null>(null);
    const [timeRange, setTimeRange] = useState<[Dayjs, Dayjs] | null>(null);
    const [location, setLocation] = useState("");
    const [mapLink, setMapLink] = useState("");
    const [post, setPost] = useState<File[]>([]);
    const [lunch, setLunch] = useState(false);
    const [coverPhoto, setCoverPhoto] = useState<File[]>([]);

    const handleDateChange = (date: moment.Moment | null) => {
        setDate(date); // Store the selected date in state
    };

    const handleTimeChange = (value: [Dayjs, Dayjs] | null) => {
        setTimeRange(value); // Store the selected time range
    };

    const handleLunchChange = (e: CheckboxChangeEvent) => {
        setLunch(e.target.checked);
    };

    const draggerProps = {
        beforeUpload: (file: File) => {
            setPost([file]);
            return false; // Prevent auto-upload
        },
        fileList: post.map((file, index) => ({
            ...file,
            uid: `${index}-${file.name}`,
        })),
    };

    const draggerPropsCover = {
        beforeUpload: (file: File) => {
            setCoverPhoto([file]);
            return false; // Prevent auto-upload
        },
        fileList: coverPhoto.map((file, index) => ({
            ...file,
            uid: `${index}-${file.name}`,
        })),
    };

    const submitForm = async () => {
        const formData = new FormData();

        if (!timeRange) {
            message.error("Please select a time range.");
        } else {
            const startTime = timeRange[0].format('HH:mm:ss');
            const endTime = timeRange[1].format('HH:mm:ss');
            formData.append('startTime', startTime);
            formData.append('endTime', endTime);
            message.success(`Time range selected: ${startTime} - ${endTime}`);
        }

        const token = localStorage.getItem("authToken");

        if (!token) {
            message.error("No token found, please log in.");
            return;
        }

        formData.append('title', title);
        formData.append('investment', investment);
        formData.append('location', location);
        formData.append('mapLink', mapLink);
        if (date) {
            formData.append('date', date.format('YYYY-MM-DD'));
        } else {
            formData.append('date', '');
        }
        formData.append('post', post[0]);
        formData.append('coverPhoto', coverPhoto[0]);
        formData.append('lunch', String(lunch));

        formData.forEach((value, key) => {
            console.log(`${key}:`, value);
        });
        try {
            const response = await axios.post("http://localhost:8080/api/v1/admin/conference/saveConferenceDay", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                message.success('Event added successfully');
            }
        } catch (error) {
            message.error('Event addition failed');
        }
    };

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="flex justify-center items-center mb-6">
                <Title level={3}>Add Conference Event</Title>
            </div>

            <Form layout="vertical">
                <div>
                    <Row gutter={32}>
                        <Col span={12}>
                            <Form.Item
                                name="title"
                                rules={[{ required: true, message: "Please enter the event title" }]}
                            >
                                <label className="mb-2 font-medium text-gray-700">Title</label>
                                <Input className="mt-2" onChange={(e) => setTitle(e.target.value)} />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                name="investment"
                                rules={[{ required: true, message: "Please enter the investment amount" }]}
                            >
                                <label className="mb-2 font-medium text-gray-700">Investment</label>
                                <Input className="mt-2" onChange={(e) => setInvestment(e.target.value)} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={32}>
                        <Col span={12}>
                            <Form.Item
                                name="date"
                                rules={[{ required: true, message: "Please select the date" }]}
                                className={"flex flex-col"}
                            >
                                <div>
                                    <label className=" font-medium text-gray-700">Date</label>
                                </div>

                                <DatePicker onChange={handleDateChange} className={"w-full mt-4"} />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                name="time"
                                rules={[{ required: true, message: "Please select the time range" }]}
                                className={"flex flex-col"}
                            >
                                <div>
                                    <label className="font-medium text-gray-700">Time</label>
                                </div>

                                <TimePicker.RangePicker
                                    onChange={handleTimeChange}
                                    format="HH:mm:ss"
                                    value={timeRange}
                                    className={"w-full mt-4"}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={32}>
                        <Col span={12}>
                            <Form.Item
                                name="location"
                                rules={[{ required: true, message: "Please enter the venue" }]}
                            >
                                <label className="mb-2 mt-4 font-medium text-gray-700">Venue</label>
                                <Input className="mt-2" onChange={(e) => setLocation(e.target.value)} />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                name="mapLink"
                                rules={[{ required: true, message: "Please enter the Google Map link" }]}
                            >
                                <label className="mb-2 mt-4 font-medium text-gray-700">Google Map Link</label>
                                <Input className="mt-2" onChange={(e) => setMapLink(e.target.value)} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <div className="mb-6">
                        <Checkbox onChange={handleLunchChange}>
                            Lunch and refreshments are provided
                        </Checkbox>
                    </div>

                    <Row gutter={32}>
                        <Col span={12}>
                            <Form.Item
                                name="post"
                                valuePropName="file"
                                rules={[{ required: true, message: "Please upload the social media post" }]}
                            >
                                <label className="mb-2 font-medium text-gray-700">Post</label>
                                <Dragger {...draggerProps}>
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">
                                        Click or drag file to this area to upload
                                    </p>
                                    <p className="ant-upload-hint">
                                        Support for a single upload. Please upload social media post.
                                    </p>
                                </Dragger>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                name="coverPhoto"
                                valuePropName="file"
                                rules={[{ required: true, message: "Please upload the cover photo" }]}
                            >
                                <label className="mb-2 font-medium text-gray-700">Cover Photo</label>
                                <Dragger {...draggerPropsCover}>
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">
                                        Click or drag file to this area to upload
                                    </p>
                                    <p className="ant-upload-hint">
                                        Support for a single upload. Please upload cover photo.
                                    </p>
                                </Dragger>
                            </Form.Item>
                        </Col>
                    </Row>

                    <div className="flex justify-end mb-2">
                        <Button type="primary" size="large" onClick={submitForm}>
                            Add Event
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default App;

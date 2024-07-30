
import {useEffect, useState} from 'react';
import {
    Button,
    Checkbox,
    Col,
    DatePicker,
    Divider,
    Form,
    Input, InputNumber,
    Row,
    Select,
    Space,
    TimePicker,
    Typography, Upload
} from "antd";
import moment from 'moment';
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { InboxOutlined, MinusCircleOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import Dragger from "antd/es/upload/Dragger";
import {Link} from "react-router-dom";

const { Title } = Typography;

const format = 'HH:mm';

const checked = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};

const onFinish = (values: never) => {
    console.log('Received values of form:', values);
};

const onChange = (time: moment.Moment | null, timeString: string | string[]) => {
    console.log(time, timeString);
};

const props = {
    name: 'file',
    multiple: false,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
};


const App = () => {
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

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        setType(value);
    };

    const onChangeNo = (value: number | null) => {
        console.log('changed', value);
        setDateCount(value || 1);
    };


    return (
        <>
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
                                                value: 'Conference Day 1',
                                                label: 'Conference Day 1',
                                            },
                                            {
                                                value: 'Conference Day 2',
                                                label: 'Conference Day 2',
                                            },
                                            {
                                                value: 'Pre Conference Workshops',
                                                label: 'Pre Conference Workshops',
                                            },
                                            {
                                                value: 'Post Conference Workshops',
                                                label: 'Post Conference Workshops',
                                            }
                                        ]}
                                    />
                                </div>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item name={['user', 'name']}>
                                <div>
                                    <label className="mb-2 font-medium text-gray-700">Title</label>
                                </div>
                                <Input className="mt-2"/>
                            </Form.Item>
                        </Col>
                    </Row>

                    {type !== 'Conference Day 1' && type !== 'Conference Day 2' && (
                        <Form.Item name={['user', 'description']}>
                            <div className="flex flex-col">
                                <label className="mb-2 font-medium text-gray-700">Description</label>
                                <Input.TextArea className="w-full"/>
                            </div>
                        </Form.Item>
                    )}

                    {type !== 'Conference Day 1' && type !== 'Conference Day 2' && (
                        <Form.Item name={['user', 'noOfDate']}>
                            <div className="flex flex-row ">
                                <div className="flex items-center">
                                    <label className=" font-medium text-gray-700 mr-6 items-center ">No Of Date</label>
                                </div>
                                <InputNumber min={1} max={10} defaultValue={1} onChange={onChangeNo} className="w-1/5"/>
                            </div>
                        </Form.Item>
                    )}


                    <Row gutter={32}>
                        <Col span={12}>

                            {[...Array(dateCount)].map((_, index) => (
                                <Form.Item name={['user', `date${index + 1}`]}>
                                    <div className="flex flex-col">
                                        {type !== 'Conference Day 1' && type !== 'Conference Day 2' ? (
                                            <label className="mb-2 font-medium text-gray-700">Day {index + 1}</label>
                                        ) : (
                                            <label className="mb-2 font-medium text-gray-700">Date</label>
                                        )}

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
                                            {dateCount=== 1 ?(
                                                <label className="mb-2 font-medium text-gray-700">Main Topic </label>
                                            ): (
                                                <label className="mb-2 font-medium text-gray-700">Main Topic Day {index + 1}</label>
                                            )}

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


                    {type !== 'Conference Day 1' && type !== 'Conference Day 2' && (
                        <Row gutter={32}>
                            <Col span={12}>
                                <Form.Item name={['user', 'conductBy']}>
                                    <div className="flex flex-col">
                                        <label className="mb-2 font-medium text-gray-700">Conducted By</label>
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
                                                                        name={[name, 'Conducted By']}
                                                                        style={{ flex: 1 }}
                                                                    >
                                                                        <Input style={{ width: inputWidth }} placeholder="Conducted By"/>
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

                            <Col span={12}>
                                <Form.Item name={['user', 'certificate']}>
                                    <div className="flex flex-col">
                                        <label className="mb-2 font-medium text-gray-700">Certificate From</label>
                                        <Input/>
                                    </div>
                                </Form.Item>
                            </Col>
                        </Row>
                    )}
                    {type !== 'Conference Day 1' && type !== 'Conference Day 2' ? (
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

                            <Col span={12}>

                                <Form.Item name={['user', 'conductBy']}>
                                    <div className="flex flex-col">
                                        <label className="mb-2 font-medium text-gray-700">Sponsors</label>
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
                                                                        name={[name, 'Conducted By']}
                                                                        style={{ flex: 1 }}
                                                                    >
                                                                        <Input style={{ width: inputWidth }} placeholder="Sponsor"/>
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
                    ):(
                        <Row gutter={32}>
                            <Col span={12}>

                                <Form.Item name={['user', 'investment']}>
                                    <div className="flex flex-col">
                                        <label className="mb-2 font-medium text-gray-700">Investment</label>
                                        <Input />
                                    </div>
                                </Form.Item>

                            </Col>
                        </Row>
                    )}

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

{
    type === 'Conference Day 1' || type === 'Conference Day 2' ? (
        <div>
            <Divider/>
            <Title level={4}>Schedule</Title>
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
                                            marginBottom: 8,
                                        }}
                                        align="baseline"
                                    >
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'time']}
                                        >
                                            <TimePicker format={format}/>
                                        </Form.Item>

                                        <Form.Item
                                            {...restField}
                                            name={[name, 'event']}
                                        >
                                            <Input placeholder="Event"/>
                                        </Form.Item>

                                        <Divider type={"vertical"}></Divider>

                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, 'author']}
                                                        >
                                                            <Input placeholder="Author" />
                                                        </Form.Item>

                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, 'org']}
                                                        >
                                                            <Input placeholder="Organization/University" />
                                                        </Form.Item>

                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, 'topic']}
                                                        >
                                                            <Input placeholder="Topic" />
                                                        </Form.Item>

                                                        <Upload {...props}>
                                                            <Button icon={<UploadOutlined />}>Upload</Button>
                                                        </Upload>

                                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                                    </Space>
                                                ))}
                                                <Form.Item style={{ maxWidth: '50%' }}>
                                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                        Add field
                                                    </Button>
                                                </Form.Item>
                                            </>
                                        )}
                                    </Form.List>
                                </Form>
                            </div>
                        </div>
                    ) : null}

                    <div className="flex justify-end mb-2">

                        <Link to="/view_events_oc">
                            <Button type="primary" size="large">
                                Add Event
                            </Button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
};

export default App;

import { useState} from 'react';
import {Button, Steps, message, Typography, Select, Input, DatePicker, InputNumber, Form, Space, Checkbox} from 'antd';
import signUp from '../assets/Signup.jpg';
import {EyeInvisibleOutlined, EyeTwoTone, MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {CheckboxChangeEvent} from "antd/es/checkbox";

const { Title } = Typography;
const { Step } = Steps;

const onChange = (value: string) => {
    console.log(`selected ${value}`);
};

const onChangeNumber = (value:number|null) => {
    console.log('changed', value);
};

const onFinish = (values: never) => {
    console.log('Received values of form:', values);
};

const onChangeDate = (date: Date, dateString: string | string[]) => {
    console.log(date, dateString);
};

const onChangeCheck = (e:CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};

const steps = [
    {
        title: 'Personal Details',
        content: (
            <div>
                <div className="flex">
                    <div className="flex flex-col w-32 mb-3">
                        <div className="mb-1">
                            <label>Title</label>
                        </div>
                        <div className="w-16">
                            <Select
                                placeholder="Mr"
                                optionFilterProp="label"
                                onChange={onChange}
                                options={[
                                    {value: 'Mr', label: 'Mr'},
                                    {value: 'Mrs', label: 'Mrs'},
                                    {value: 'Miss', label: 'Miss'},
                                ]}
                                style={{width: '100px'}}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="mb-1">
                            <label>Name</label>
                        </div>
                        <div>
                            <Input placeholder="Enter your Name"/>
                        </div>
                    </div>
                </div>

                <div className="flex mt-3 gap-2 mb-6">
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Contact Number</label>
                        </div>
                        <div>
                            <Input placeholder="Enter your contact number"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Email Address</label>
                        </div>
                        <div>
                            <Input placeholder="Enter your email address"/>
                        </div>
                    </div>
                </div>

                <div className="flex mt-3 gap-2 mb-6">
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Username</label>
                        </div>
                        <div>
                            <Input placeholder="Enter Username"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Date of Birth</label>
                        </div>
                        <div>
                            <DatePicker onChange={onChangeDate} style={{width: '100%'}}/>
                        </div>
                    </div>
                </div>

                <div className="flex mt-3 gap-2 mb-3">
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Password</label>
                        </div>
                        <div>
                            <Input.Password
                                placeholder="input password"
                                iconRender={(visible) =>
                                    visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>
                                }
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Re-Enter Password</label>
                        </div>
                        <div>
                            <Input.Password
                                placeholder="input password"
                                iconRender={(visible) =>
                                    visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Academic & Professional',
        content: (
            <div>
                <div className="flex gap-3">
                    <div className="flex flex-col mb-3 w-1/2">
                        <div className="mb-1">
                            <label>Job Title</label>
                        </div>
                        <div>
                            <Input placeholder="Enter your Job Title"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Organization/University</label>
                        </div>
                        <div>
                            <Input placeholder="Enter your organization/university"/>
                        </div>
                    </div>
                </div>

                <div className="flex mt-3 gap-2 mb-6">
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Country</label>
                        </div>
                        <div>
                            <Input placeholder="Enter your country"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Number of previous attendance </label>
                        </div>
                        <div>
                            <InputNumber min={1} max={10} defaultValue={1} onChange={onChangeNumber}  style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>

                <div className={"flex"}>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Research Interest</label>
                        </div>
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
                                                        <Input placeholder="Research Interest" style={{ width: '300px' }}/>
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
                </div>
            </div>
        ),
    },
    {
        title: 'Special',
        content: (
            <div>
                <div className="flex flex-col w-1/2 mb-3">
                    <div className="mb-1">
                        <label>Meal Preference</label>
                    </div>
                    <div className={"w-full"}>
                        <Select
                            placeholder="Select Meal Preference"
                            optionFilterProp="label"
                            onChange={onChange}
                            options={[
                                {value: 'nonVeg', label: 'Non-Vegetarian Meal'},
                                {value: 'veg', label: 'Vegetarian Meal'},

                            ]}
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div>
                    <Checkbox onChange={onChangeCheck} style={{fontSize: '16px'}}>Please specify if you have any
                        accessibility needs</Checkbox>
                </div>

                <div className={"mt-6"}>
                    <Checkbox onChange={onChangeCheck} style={{fontSize: '16px'}}>Yes, I agree to <span style={{ color: 'blue' }}>terms and conditions</span></Checkbox>
                </div>
            </div>
        ),
    },
];

const App = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <div className="bg-white mt-5 rounded-lg shadow-lg p-8 relative">
            <div className="flex flex-row gap-8 w-full h-full">
                <div className="w-1/2">
                    <img
                        src={signUp}
                        alt="No Event Scheduled"
                        className="mr-8 rounded-lg h-full w-full"
                    />
                </div>
                <div className="w-1/2 flex flex-col">
                    <div className="flex justify-center p-4">
                        <Title level={2}>Create a New Account</Title>
                    </div>
                    <Steps current={current}>
                        {steps.map((item) => (
                            <Step key={item.title} title={item.title}/>
                        ))}
                    </Steps>
                    <div className="flex-1 overflow-auto">
                        <div style={{margin: '24px 0'}}>
                            <div>{steps[current].content}</div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        {current > 0 && (
                            <Button style={{ marginRight: 'auto' }} onClick={prev} size={"large"}>
                                Previous
                            </Button>
                        )}
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={next} size={"large"}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button
                                type="primary"
                                onClick={() => message.success('Processing complete!')}
                                size={"large"}
                            >
                                Submit
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

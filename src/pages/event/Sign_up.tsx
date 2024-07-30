import { useState } from 'react';
import { Button, Steps, message, Typography, Select, Input, DatePicker, InputNumber, Form, Checkbox } from 'antd';
import signUp from '../../assets/Signup.jpg';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { CheckboxChangeEvent } from "antd/es/checkbox";

const { Title } = Typography;
const { Step } = Steps;

const onChange = (value: string) => {
    console.log(`selected ${value}`);
};

const onChangeNumber = (value: number | null) => {
    console.log('changed', value);
};

const onChangeDate = (date: Date, dateString: string | string[]) => {
    console.log(date, dateString);
};

const onChangeCheck = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};

interface FormValues {
    title: string;
    name: string;
    contactNumber: string;
    email: string;
    username: string;
    dateOfBirth: string;
    password: string;
    jobTitle: string;
    organization: string;
    country: string;
    numberOfPreviousAttendance: number;
    researchInterest: string;
    mealPreference: string;
    accessibilityNeeds: boolean;
}

const initialValues: FormValues = {
    title: '',
    name: '',
    contactNumber: '',
    email: '',
    username: '',
    dateOfBirth: '',
    password: '',
    jobTitle: '',
    organization: '',
    country: '',
    numberOfPreviousAttendance: 1,
    researchInterest: '',
    mealPreference: '',
    accessibilityNeeds: false,
};

// const onFinish = async (values: FormValues) => {
//     console.log('Received values of form:', values);
//     try {
//         const response = await fetch('http://localhost:8080/api/participant/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(values),
//         });
//
//         if (response.ok) {
//             message.success('Form submitted successfully!');
//         } else {
//             message.error('Failed to submit form. Please try again.');
//         }
//     } catch (error) {
//         message.error('An error occurred. Please try again.');
//     }
// };

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
                            <Form.Item name="title">
                                <Select
                                    placeholder="Mr"
                                    optionFilterProp="label"
                                    onChange={onChange}
                                    options={[
                                        { value: 'Mr', label: 'Mr' },
                                        { value: 'Mrs', label: 'Mrs' },
                                        { value: 'Miss', label: 'Miss' },
                                    ]}
                                    style={{ width: '100px' }}
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="mb-1">
                            <label>Name</label>
                        </div>
                        <div>
                            <Form.Item name="name">
                                <Input placeholder="Enter your Name" />
                            </Form.Item>
                        </div>
                    </div>
                </div>

                <div className="flex mt-3 gap-2 mb-6">
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Contact Number</label>
                        </div>
                        <div>
                            <Form.Item name="contactNumber">
                                <Input placeholder="Enter your contact number" />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Email Address</label>
                        </div>
                        <div>
                            <Form.Item name="email">
                                <Input placeholder="Enter your email address" />
                            </Form.Item>
                        </div>
                    </div>
                </div>

                <div className="flex mt-3 gap-2 mb-6">
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Username</label>
                        </div>
                        <div>
                            <Form.Item name="username">
                                <Input placeholder="Enter Username" />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Date of Birth</label>
                        </div>
                        <div>
                            <Form.Item name="dateOfBirth">
                                <DatePicker onChange={onChangeDate} style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                    </div>
                </div>

                <div className="flex mt-3 gap-2 mb-3">
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Password</label>
                        </div>
                        <div>
                            <Form.Item name="password">
                                <Input.Password
                                    placeholder="input password"
                                    iconRender={(visible) =>
                                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                    }
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Re-Enter Password</label>
                        </div>
                        <div>
                            <Form.Item name="confirmPassword">
                                <Input.Password
                                    placeholder="input password"
                                    iconRender={(visible) =>
                                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                    }
                                />
                            </Form.Item>
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
                            <Form.Item name="jobTitle">
                                <Input placeholder="Enter your Job Title" />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Organization/University</label>
                        </div>
                        <div>
                            <Form.Item name="organization">
                                <Input placeholder="Enter your organization/university" />
                            </Form.Item>
                        </div>
                    </div>
                </div>

                <div className="flex mt-3 gap-2 mb-6">
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Country</label>
                        </div>
                        <div>
                            <Form.Item name="country">
                                <Input placeholder="Enter your country" />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Number of previous attendance</label>
                        </div>
                        <div>
                            <Form.Item name="numberOfPreviousAttendance">
                                <InputNumber min={1} max={10} defaultValue={1} onChange={onChangeNumber} style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                    </div>
                </div>

                <div className={"flex"}>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Research Interest</label>
                        </div>
                        <div>
                            <Form.Item name="researchInterests">
                                <Input placeholder="Enter your research interests" />
                            </Form.Item>
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
                        <Form.Item name="mealPreference">
                            <Select
                                placeholder="Select Meal Preference"
                                optionFilterProp="label"
                                onChange={onChange}
                                options={[
                                    { value: 'nonVeg', label: 'Non-Vegetarian Meal' },
                                    { value: 'veg', label: 'Vegetarian Meal' },
                                ]}
                                style={{ width: '100%' }}
                            />
                        </Form.Item>
                    </div>
                </div>
                <div>
                    <Form.Item name="accessibilityNeeds" valuePropName="checked">
                        <Checkbox onChange={onChangeCheck} style={{ fontSize: '16px' }}>
                            Please specify if you have any accessibility needs
                        </Checkbox>
                    </Form.Item>
                </div>

                <div className={"mt-6"}>
                    <Checkbox onChange={onChangeCheck} style={{ fontSize: '16px' }}>
                        Yes, I agree to <span style={{ color: 'blue' }}>terms and conditions</span>
                    </Checkbox>
                </div>
            </div>
        ),
    },
];

const App = () => {
    const [current, setCurrent] = useState(0);
    const [form] = Form.useForm();
    const [formValues, setFormValues] = useState<FormValues>(initialValues);

    const next = async () => {
        try {
            const values = await form.validateFields();
            setFormValues({ ...formValues, ...values });
            setCurrent(current + 1);
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const handleFinish = async (values: FormValues) => {
        const finalValues = { ...formValues, ...values };
        console.log('Received values of form:', finalValues);
        try {
            const response = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(finalValues),
            });

            if (response.ok) {
                message.success('Form submitted successfully!');
            } else {
                message.error('Failed to submit form. Please try again.');
            }
        } catch (error) {
            message.error('An error occurred. Please try again.');
        }
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
                    <Form form={form} onFinish={handleFinish} initialValues={initialValues}>
                        <Steps current={current}>
                            {steps.map((item) => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                        <div className="flex-1 overflow-auto">
                            <div style={{ margin: '24px 0' }}>
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
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        size={"large"}
                                        htmlType="submit"
                                    >
                                        Submit
                                    </Button>
                                </Form.Item>
                            )}
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default App;

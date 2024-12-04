import { useState } from 'react';
import { Button, Steps, message, Typography, Select, Input,InputNumber, Form, Checkbox } from 'antd';
import signUp from '../../assets/Signup.jpg';
import { CheckboxChangeEvent } from "antd/es/checkbox";

const { Title } = Typography;
const { Step } = Steps;

const onChange = (value: string) => {
    console.log(`selected ${value}`);
};

const onChangeNumber = (value: number | null) => {
    console.log('changed', value);
};

const onChangeCheck = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};

interface FormValues {

    name: string;
    phone: string;
    email: string;
    altPhone: string;
    jobTitle: string;
    organization: string;
    country: string;
    noOfAttendance: number;
    yearOfExperience:number;
    researchInterest: string;
    dietaryReference: string;
    accessibility: boolean;
}

const initialValues: FormValues = {

    name: '',
    phone: '',
    email: '',
    altPhone: '',
    jobTitle: '',
    organization: '',
    country: '',
    yearOfExperience:0,
    noOfAttendance: 0,
    researchInterest: '',
    dietaryReference: '',
    accessibility: false,
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

                    <div className="flex flex-col w-full">
                        <div className="mb-1">
                            <label>Name</label>
                        </div>
                        <div>
                            <Form.Item name="name">
                                <Input placeholder="Enter your Name"
                                       style={{height: '40px', border: '2px solid #D9D9D9',}}/>
                            </Form.Item>
                        </div>
                    </div>
                </div>

                <div className="flex mt-3 gap-2 mb-6">
                    <div className="flex flex-col w-full">
                        <div className="mb-1">
                            <label>Email Address</label>
                        </div>
                        <div>
                            <Form.Item name="email">
                                <Input placeholder="Enter your email address"
                                       style={{height: '40px', border: '2px solid #D9D9D9',}}/>
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
                            <Form.Item name="phone">
                                <Input placeholder="Enter your contact number"
                                       style={{height: '40px', border: '2px solid #D9D9D9',}}/>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Alternative Contact Number</label>
                        </div>
                        <div>
                            <Form.Item name="altPhone">
                                <Input placeholder="Enter your alternative contact number"
                                       style={{height: '40px', border: '2px solid #D9D9D9',}}/>
                            </Form.Item>
                        </div>
                    </div>
                </div>


            </div>
        ),
    },
    {
        title: 'Academic',
        content: (
            <div>
                <div className="flex gap-3">
                    <div className="flex flex-col mb-3 w-1/2">
                        <div className="mb-1">
                        <label>Job Title</label>
                        </div>
                        <div>
                            <Form.Item name="jobTitle">
                                <Input placeholder="Enter your Job Title"
                                       style={{height: '40px', border: '2px solid #D9D9D9',}}/>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Organization/University</label>
                        </div>
                        <div>
                            <Form.Item name="organization">
                                <Input placeholder="Enter your organization/university"
                                       style={{height: '40px', border: '2px solid #D9D9D9',}}/>
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
                                <Input placeholder="Enter your country" style={{height:'40px',border: '2px solid #D9D9D9',}}/>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Number of previous attendance</label>
                        </div>
                        <div>
                            <Form.Item name="noOfAttendance">
                                <InputNumber min={1} max={10} defaultValue={1} onChange={onChangeNumber} style={{height:'40px',border: '2px solid #D9D9D9', width: '100%'}}/>
                            </Form.Item>
                        </div>
                    </div>
                </div>

                <div className={"flex mt-3 gap-2 mb-6"}>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Number of Year of Experience</label>
                        </div>
                        <div>
                            <Form.Item name="numberOfYear">
                                <InputNumber min={1} max={10} defaultValue={1} onChange={onChangeNumber}
                                             style={{height: '40px', border: '2px solid #D9D9D9', width: '100%'}}/>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="mb-1">
                            <label>Research Interest</label>
                        </div>
                        <div>
                            <Form.Item name="researchInterest">
                                <Input placeholder="Enter your research interests"
                                       style={{height: '40px', border: '2px solid #D9D9D9', width: '100%'}}/>
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
                        <Form.Item name="dietaryReference">
                            <Select
                                placeholder="Select Meal Preference"
                                optionFilterProp="label"
                                onChange={onChange}
                                options={[
                                    { value: 'nonVeg', label: 'Non-Vegetarian Meal' },
                                    { value: 'veg', label: 'Vegetarian Meal' },
                                ]}
                                style={{height:'40px',border: '1.4px solid #D9D9D9',  width: '100%', borderRadius:'8px'}}
                            />
                        </Form.Item>
                    </div>
                </div>
                <div>
                    <Form.Item name="accessibility" valuePropName="checked">
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
        const token = localStorage.getItem("authToken");

        if (!token) {
            message.error("No token found, please log in.");
            return;
        }
        const finalValues = { ...formValues, ...values };
        console.log('Received values of form:', finalValues);
        try {
            const response = await fetch('http://localhost:8080/admin/profile', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(finalValues),
            });

            console.log(response)

            if (response.ok) {
                message.success('Form submitted successfully!');
                window.location.href = '/';
            } else {
                message.error('Failed to submit form. Please try again.');
            }
        } catch (error) {
            message.error('An error occurred. Please try again.');
        }
    };

    return (

            <div className={"min-h-screen flex items-center justify-center bg-gray-100"}>
                <div className={"w-10/12 h-9/12 grid grid-cols-2 gap-4 rounded-2xl bg-white"}>
                    <div className={"h-full"}>
                        <img
                            src={signUp}
                            alt="No Event Scheduled"
                            className="mr-8 w-full h-full object-cover rounded-l-2xl"
                        />
                    </div>
                    <div className={"h-full p-4"}>

                        <div className="flex justify-center p-4">
                            <Title level={2}>Create a New Account</Title>
                        </div>

                        <Form form={form} onFinish={handleFinish} initialValues={initialValues } className={"min-h-[550px] flex flex-col flex-grow "}>
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
                            <div className="flex justify-end">
                                {current > 0 && (
                                    <Button style={{marginRight: 'auto'}} onClick={prev} size={"large"}>
                                        Previous
                                    </Button>
                                )}
                                {current < steps.length - 1 && (
                                    <Button type="primary" onClick={next} size={"large"}>
                                        Next
                                    </Button>
                                )}
                                {current === steps.length - 1 && (
                                    // <Form.Item>
                                    <Button
                                        type="primary"
                                        size={"large"}
                                        htmlType="submit"
                                    >
                                        Submit
                                    </Button>
                                    // </Form.Item>
                                )}
                            </div>
                        </Form>
                    </div>


                </div>



            {/*<div className="bg-white mt-5 rounded-lg  p-8 relative">*/}
            {/*<div className="flex flex-row gap-8 w-full">*/}
            {/*    <div className="w-1/2 flex justify-center items-center h-full">*/}
            {/*        <img*/}
            {/*            src={signUp}*/}
            {/*            alt="No Event Scheduled"*/}
            {/*            className="mr-8 rounded-lg "*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className="w-1/2 flex flex-col ">*/}
            {/*        <div className="flex justify-center p-4">*/}
            {/*            <Title level={2}>Create a New Account</Title>*/}
            {/*        </div>*/}
            {/*        <Form form={form} onFinish={handleFinish} initialValues={initialValues} className={"min-h-[550px] flex flex-col flex-grow"}>*/}
            {/*            <Steps current={current}>*/}
            {/*                {steps.map((item) => (*/}
            {/*                    <Step key={item.title} title={item.title} />*/}
            {/*                ))}*/}
            {/*            </Steps>*/}
            {/*            <div className="flex-1 overflow-auto">*/}
            {/*                <div style={{ margin: '24px 0' }}>*/}
            {/*                    <div>{steps[current].content}</div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="flex justify-end">*/}
            {/*                {current > 0 && (*/}
            {/*                    <Button style={{ marginRight: 'auto' }} onClick={prev} size={"large"}>*/}
            {/*                        Previous*/}
            {/*                    </Button>*/}
            {/*                )}*/}
            {/*                {current < steps.length - 1 && (*/}
            {/*                    <Button type="primary" onClick={next} size={"large"}>*/}
            {/*                        Next*/}
            {/*                    </Button>*/}
            {/*                )}*/}
            {/*                {current === steps.length - 1 && (*/}
            {/*                    // <Form.Item>*/}
            {/*                        <Button*/}
            {/*                            type="primary"*/}
            {/*                            size={"large"}*/}
            {/*                            htmlType="submit"*/}
            {/*                        >*/}
            {/*                            Submit*/}
            {/*                        </Button>*/}
            {/*                    // </Form.Item>*/}
            {/*                )}*/}
            {/*            </div>*/}
            {/*        </Form>*/}
            {/*    </div>*/}
            {/*</div>*/}
        {/*</div>*/}
    </div>

    );
};

export default App;

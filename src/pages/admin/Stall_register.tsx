// import React from 'react';
// import { Input } from 'antd';
//
//
// import { Button, Flex } from 'antd';
//
//
//
// const App: React.FC = () => (
//
//
//     <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
//         <div
//             className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-4 border-black p-10 rounded-lg'>
//             <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Register Details</h2><br></br><br></br>
//             <div><p>Stall Type and No:</p><br></br>
//                 <Input size="large" placeholder="Stall Type and No" style={{width: '600px'}}/>
//             </div>
//             <br></br><br></br>
//             <div><p>Stall Company Name:</p><br></br>
//                 <Input size="large" placeholder="Company Name" style={{width: '600px'}}/>
//             </div>
//             <br></br><br></br>
//             <div>
//                 <Flex gap="small" wrap>
//                     <Button type="primary">Submit</Button>
//
//                 </Flex></div>
//         </div>
//         <br></br><br></br>
//
//
//
//
//         <div className='flex flex-col justify-center items-left h-full mt-100 ml-50'>
//
//         </div>
//         <br></br><br></br>
//
//
//     </div>
//
// );
// export default App;

// import React, { useState } from 'react';
// import {Input, Button, message, Form, Select} from 'antd';
// import { Flex } from 'antd';
//
//
//
//
//
//
//
// const StallRegister: React.FC = () => {
//     const [stallName, setStallName] = useState('');
//     const [sponsorId, setSponsorId] = useState('');
//     const [stallType, setStallType] = React.useState('');
//     const [stallNumber, setStallNumber] = React.useState('');
//
//     const handleStallNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setStallName(e.target.value);
//     };
//
//     const handleSponsorIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSponsorId(e.target.value);
//     };
//
//     const handleSubmit = async () => {
//         if (!stallName || !sponsorId) {
//             message.error('Please fill all fields.');
//             return;
//         }
//
//         const stallData = {
//             stallName,
//             sponsorId,
//         };
//
//         try {
//             const response = await fetch('http://localhost:8080/api/stall/add', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(stallData),
//             });
//
//             if (!response.ok) {
//                 throw new Error('Stall registration failed');
//             }
//
//             message.success('Stall registered successfully!');
//         } catch (error) {
//             message.error(`Error`);
//         }
//     };
//
//     return (
//         <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
//             <div className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-4 border-black p-10 rounded-lg'>
//                 <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Register Details</h2>
//                 <br />
//                 <Form layout="vertical">
//                     {/*<Form.Item label="Stall Name:">*/}
//                     {/*    <Input*/}
//                     {/*        size="large"*/}
//                     {/*        placeholder="Stall Name"*/}
//                     {/*        style={{ width: '600px' }}*/}
//                     {/*        value={stallName}*/}
//                     {/*        onChange={handleStallNameChange}*/}
//                     {/*    />*/}
//                     {/*</Form.Item>*/}
//                     <Form.Item label="Stall Type:">
//                         <Select
//                             size="large"
//                             placeholder="Select Stall Type"
//                             style={{ width: '300px' }}
//                             value={stallType}
//                             onChange={handleStallTypeChange}
//                         >
//                             <Option value="main">Main Stall</Option>
//                             <Option value="sub">Sub Stall</Option>
//                         </Select>
//                     </Form.Item>
//                     <Form.Item label="Stall Number:">
//                         <Input
//                             size="large"
//                             placeholder="Stall Number"
//                             style={{ width: '300px' }}
//                             value={stallNumber}
//                             onChange={handleStallNumberChange}
//                         />
//                     </Form.Item>
//
//                     <Form.Item label="Sponsor ID:">
//                         <Input
//                             size="large"
//                             placeholder="Sponsor ID"
//                             style={{ width: '600px' }}
//                             value={sponsorId}
//                             onChange={handleSponsorIdChange}
//                         />
//                     </Form.Item>
//
//                     <Form.Item>
//                         <Flex gap="small" wrap>
//                             <Button type="primary" onClick={handleSubmit}>
//                                 Submit
//                             </Button>
//                         </Flex>
//                     </Form.Item>
//                 </Form>
//             </div>
//         </div>
//     );
// };
//
// export default StallRegister;
// import React, { useState } from 'react';
// import { Input, Button, message, Form, Select } from 'antd';
//
// const { Option } = Select;
//
// const StallRegister: React.FC = () => {
//     const [stallType, setStallType] = useState('');
//     const [stallNumber, setStallNumber] = useState('');
//     const [sponsorId, setSponsorId] = useState('');
//
//     const handleStallTypeChange = (value: string) => {
//         setStallType(value);
//     };
//
//     const handleStallNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setStallNumber(e.target.value);
//     };
//
//     const handleSponsorIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSponsorId(e.target.value);
//     };
//
//     const handleSubmit = async () => {
//         if (!stallType || !stallNumber || !sponsorId) {
//             message.error('Please fill all fields.');
//             return;
//         }
//
//         const stallData = {
//             stallName: `${stallType} ${stallNumber}`,
//             sponsorId,
//         };
//
//         try {
//             const response = await fetch('http://localhost:8080/api/stall/add', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(stallData),
//             });
//
//             if (!response.ok) {
//                 throw new Error('Stall registration failed');
//             }
//
//             message.success('Stall registered successfully!');
//         } catch (error) {
//             message.error('Error');
//         }
//     };
//
//     return (
//         <div className="flex flex-col justify-center items-center h-full mt-30 ml-50">
//             <div className="flex flex-col justify-center items-center h-full mt-40 ml-50 border-4 border-black p-10 rounded-lg">
//                 <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Register Details</h2>
//                 <br />
//                 <Form layout="vertical">
//                     <Form.Item label="Stall Type:">
//                         <Select
//                             size="large"
//                             placeholder="Select Stall Type"
//                             style={{ width: '300px' }}
//                             value={stallType}
//                             onChange={handleStallTypeChange}
//                         >
//                             <Option value="main">Main Stall</Option>
//                             <Option value="sub">Sub Stall</Option>
//                         </Select>
//                     </Form.Item>
//
//                     <Form.Item label="Stall Number:">
//                         <Input
//                             size="large"
//                             placeholder="Stall Number"
//                             style={{ width: '300px' }}
//                             value={stallNumber}
//                             onChange={handleStallNumberChange}
//                         />
//                     </Form.Item>
//
//                     <Form.Item label="Company Name:">
//                         <Input
//                             size="large"
//                             placeholder="Sponsor ID"
//                             style={{ width: '600px' }}
//                             value={sponsorId}
//                             onChange={handleSponsorIdChange}
//                         />
//                     </Form.Item>
//
//                     <Form.Item>
//                         <Button type="primary" onClick={handleSubmit}>
//                             Submit
//                         </Button>
//                     </Form.Item>
//                 </Form>
//             </div>
//         </div>
//     );
// };
//
// export default StallRegister;
// import React, { useState } from 'react';
// import { Input, Button, message, Form, Select } from 'antd';
//
// const { Option } = Select;
//
// const StallRegister: React.FC = () => {
//     const [stallType, setStallType] = useState('');
//     const [stallNumber, setStallNumber] = useState('');
//     const [sponsorId, setSponsorId] = useState('');
//
//     const handleStallTypeChange = (value: string) => {
//         setStallType(value);
//     };
//
//     const handleStallNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setStallNumber(e.target.value);
//     };
//
//     const handleSponsorIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSponsorId(e.target.value);
//     };
//
//     const handleSubmit = async () => {
//         if (!stallType || !stallNumber || !sponsorId) {
//             message.error('Please fill all fields.');
//             return;
//         }
//
//         const stallData = {
//             stallType,
//             stallNumber,
//             sponsorId
//         };
//
//         try {
//             const response = await fetch('http://localhost:8080/api/stall/add', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(stallData),
//             });
//
//             if (!response.ok) {
//                 throw new Error('Stall registration failed');
//             }
//
//             message.success('Stall registered successfully!');
//         } catch (error) {
//             message.error('Error');
//         }
//     };
//
//     return (
//         <div className="flex flex-col justify-center items-center h-full mt-30 ml-50">
//             <div className="flex flex-col justify-center items-center h-full mt-40 ml-50 border-4 border-black p-10 rounded-lg">
//                 <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Register Details</h2>
//                 <br />
//                 <Form layout="vertical">
//                     <Form.Item label="Stall Type:">
//                         <Select
//                             size="large"
//                             placeholder="Select Stall Type"
//                             style={{ width: '300px' }}
//                             value={stallType}
//                             onChange={handleStallTypeChange}
//                         >
//                             <Option value="main">Main Stall</Option>
//                             <Option value="sub">Sub Stall</Option>
//                         </Select>
//                     </Form.Item>
//
//                     <Form.Item label="Stall Number:">
//                         <Input
//                             size="large"
//                             placeholder="Stall Number"
//                             style={{ width: '300px' }}
//                             value={stallNumber}
//                             onChange={handleStallNumberChange}
//                         />
//                     </Form.Item>
//
//                     <Form.Item label="Sponsor ID:">
//                         <Input
//                             size="large"
//                             placeholder="Sponsor ID"
//                             style={{ width: '600px' }}
//                             value={sponsorId}
//                             onChange={handleSponsorIdChange}
//                         />
//                     </Form.Item>
//
//                     <Form.Item>
//                         <Button type="primary" onClick={handleSubmit}>
//                             Submit
//                         </Button>
//                     </Form.Item>
//                 </Form>
//             </div>
//         </div>
//     );
// };
//
// export default StallRegister;
// import React, { useState, useEffect } from 'react';
// import { Input, Button, message, Form, Select, Table } from 'antd';
//
// const { Option } = Select;
//
// interface StallData {
//     id: number;
//     stallType: string;
//     stallNumber: string;
//     sponsorId: string;
// }
//
// const StallRegister: React.FC = () => {
//     const [stallType, setStallType] = useState('');
//     const [stallNumber, setStallNumber] = useState('');
//     const [sponsorId, setSponsorId] = useState('');
//     const [stallData, setStallData] = useState<StallData[]>([]);
//
//     useEffect(() => {
//         fetchStallData();
//     }, []);
//
//     const fetchStallData = async () => {
//         try {
//             const response = await fetch('http://localhost:8080/api/stall/all');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch stall data');
//             }
//             const data: StallData[] = await response.json();
//             setStallData(data);
//         } catch (error) {
//             message.error('Error fetching stall data');
//         }
//     };
//
//     const handleStallTypeChange = (value: string) => {
//         setStallType(value);
//     };
//
//     const handleStallNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setStallNumber(e.target.value);
//     };
//
//     const handleSponsorIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSponsorId(e.target.value);
//     };
//
//     const handleSubmit = async () => {
//         if (!stallType || !stallNumber || !sponsorId) {
//             message.error('Please fill all fields.');
//             return;
//         }
//
//         const stallData = {
//             stallType,
//             stallNumber,
//             sponsorId
//         };
//
//         try {
//             const response = await fetch('http://localhost:8080/api/stall/add', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(stallData),
//             });
//
//             if (!response.ok) {
//                 throw new Error('Stall registration failed');
//             }
//
//             message.success('Stall registered successfully!');
//             fetchStallData(); // Refresh the data after successful submission
//         } catch (error) {
//             message.error('Error');
//         }
//     };
//
//     const columns = [
//
//         {
//             title: 'Stall Type',
//             dataIndex: 'stallType',
//             key: 'stallType',
//         },
//         {
//             title: 'Stall Number',
//             dataIndex: 'stallNumber',
//             key: 'stallNumber',
//         },
//         {
//             title: 'Sponsor ID',
//             dataIndex: 'sponsorId',
//             key: 'sponsorId',
//         },
//     ];
//
//     return (
//         <div className="flex flex-col justify-center items-center h-full mt-30 ml-50">
//             <div
//                 className="flex flex-col justify-center items-center h-full mt-40 ml-50 border-4 border-black p-10 rounded-lg">
//                 <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Register Details</h2>
//                 <br/>
//                 <Form layout="vertical">
//                     <Form.Item label="Stall Type:">
//                         <Select
//                             size="large"
//                             placeholder="Select Stall Type"
//                             style={{width: '300px'}}
//                             value={stallType}
//                             onChange={handleStallTypeChange}
//                         >
//                             <Option value="main">Main Stall</Option>
//                             <Option value="sub">Sub Stall</Option>
//                         </Select>
//                     </Form.Item>
//
//                     <Form.Item label="Stall Number:">
//                         <Input
//                             size="large"
//                             placeholder="Stall Number"
//                             style={{width: '300px'}}
//                             value={stallNumber}
//                             onChange={handleStallNumberChange}
//                         />
//                     </Form.Item>
//
//                     <Form.Item label="Sponsor ID:">
//                         <Input
//                             size="large"
//                             placeholder="Sponsor ID"
//                             style={{width: '600px'}}
//                             value={sponsorId}
//                             onChange={handleSponsorIdChange}
//                         />
//                     </Form.Item>
//
//                     <Form.Item>
//                         <Button type="primary" onClick={handleSubmit}>
//                             Submit
//                         </Button>
//                     </Form.Item>
//                 </Form>
//
//
//             </div>
//             <div className="mt-10 w-1/2">
//                 <Table
//                     dataSource={stallData}
//                     columns={columns}
//                     rowKey="id"
//                     pagination={{pageSize: 5}}
//                 />
//             </div>
//         </div>
//     );
// };
//
// export default StallRegister;
import React, { useState, useEffect } from 'react';
import { Input, Button, message, Form, Select, Table, Card } from 'antd';

const { Option } = Select;

interface StallData {
    id: number;
    stallType: string;
    stallNumber: string;
    sponsorId: string;
}

const StallRegister: React.FC = () => {
    const [stallType, setStallType] = useState('');
    const [stallNumber, setStallNumber] = useState('');
    const [sponsorId, setSponsorId] = useState('');
    const [stallData, setStallData] = useState<StallData[]>([]);

    useEffect(() => {
        fetchStallData();
    }, []);

    const fetchStallData = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/stall/all');
            if (!response.ok) {
                throw new Error('Failed to fetch stall data');
            }
            const data: StallData[] = await response.json();
            setStallData(data);
        } catch (error) {
            message.error('Error fetching stall data');
        }
    };

    const handleStallTypeChange = (value: string) => {
        setStallType(value);
    };

    const handleStallNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStallNumber(e.target.value);
    };

    const handleSponsorIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSponsorId(e.target.value);
    };

    const handleSubmit = async () => {
        if (!stallType || !stallNumber || !sponsorId) {
            message.error('Please fill all fields.');
            return;
        }

        const stallData = {
            stallType,
            stallNumber,
            sponsorId
        };

        try {
            const response = await fetch('http://localhost:8080/api/stall/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(stallData),
            });

            if (!response.ok) {
                throw new Error('Stall registration failed');
            }

            message.success('Stall registered successfully!');
            fetchStallData(); // Refresh the data after successful submission
        } catch (error) {
            message.error('Error');
        }
    };

    const columns = [
        {
            title: 'Stall Type',
            dataIndex: 'stallType',
            key: 'stallType',
        },
        {
            title: 'Stall Number',
            dataIndex: 'stallNumber',
            key: 'stallNumber',
        },
        {
            title: 'Sponsor ID',
            dataIndex: 'sponsorId',
            key: 'sponsorId',
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center h-full p-8">
            <Card
                title="Stall Register Details"
                bordered={false}
                className="w-full max-w-4xl mb-8"
                headStyle={{ fontSize: '1.5rem', fontWeight: '600' }}
            >
                <Form layout="vertical">
                    <Form.Item label="Stall Type:">
                        <Select
                            size="large"
                            placeholder="Select Stall Type"
                            style={{ width: '100%' }}
                            value={stallType}
                            onChange={handleStallTypeChange}
                        >
                            <Option value="main">Main Stall</Option>
                            <Option value="sub">Sub Stall</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Stall Number:">
                        <Input
                            size="large"
                            placeholder="Stall Number"
                            style={{ width: '100%' }}
                            value={stallNumber}
                            onChange={handleStallNumberChange}
                        />
                    </Form.Item>

                    <Form.Item label="Sponsor ID:">
                        <Input
                            size="large"
                            placeholder="Sponsor ID"
                            style={{ width: '100%' }}
                            value={sponsorId}
                            onChange={handleSponsorIdChange}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" size="large" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

            <Card
                title="Stall Data"
                bordered={false}
                className="w-full max-w-4xl"
                headStyle={{ fontSize: '1.5rem', fontWeight: '600' }}
            >
                <Table
                    dataSource={stallData}
                    columns={columns}
                    rowKey="id"
                    pagination={{ pageSize: 5 }}
                    bordered
                    size="middle"
                />
            </Card>
        </div>
    );
};

export default StallRegister;

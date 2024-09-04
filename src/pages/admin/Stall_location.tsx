// // import React from 'react';
// // import { Input } from 'antd';
// //
// //
// // import { Button, Flex } from 'antd';
// //
// //
// //
// // const App: React.FC = () => (
// //
// //
// //     <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
// //         <div className='flex flex-col justify-center items-center h-full mt-20 ml-50'>
// //             <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Location Details</h2><br></br><br></br>
// //             <div><p>Stall Type :</p><br></br>
// //                 <Input size="large" placeholder="Stall Type " style={{width: '600px'}}/>
// //             </div>
// //             <br></br><br></br>
// //             <div><p>Stalls Location:</p><br></br>
// //                 <Input size="large" placeholder="Location" style={{width: '600px'}}/>
// //             </div>
// //         </div>
// //         <br></br><br></br>
// //
// //
// //
// //
// //         <div className='flex flex-col justify-center items-left h-full mt-100 ml-50'>
// //
// //         </div>
// //         <br></br><br></br>
// //         <Flex gap="small" wrap  >
// //             <Button type="primary">Submit</Button>
// //
// //         </Flex>
// //
// //     </div>
// //
// // );
// // export default App;
// import React from 'react';
// import { Input, Button } from 'antd';
//
// const App: React.FC = () => (
//     <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
//         <div className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-4 border-black p-10 rounded-lg'>
//             <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Location Details</h2><br/><br/>
//             <div>
//                 <p>Stall Type :</p><br/>
//                 <Input size="large" placeholder="Stall Type" style={{width: '600px'}}/>
//             </div>
//             <br/><br/>
//             <div>
//                 <p>Stalls Location:</p><br/>
//                 <Input size="large" placeholder="Location" style={{width: '600px'}}/>
//             </div>
//             <br/><br/>
//             <Button type="primary">Submit</Button>
//         </div>
//     </div>
// );
//
// export default App;
// import React, { useState } from 'react';
// import { Input, Button, message, Form } from 'antd';
//
// const StallLocationForm: React.FC = () => {
//     const [stallType, setStallType] = useState('');
//     const [location, setLocation] = useState('');
//
//     const handleStallTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setStallType(e.target.value);
//     };
//
//     const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setLocation(e.target.value);
//     };
//
//     const handleSubmit = async () => {
//         if (!stallType || !location) {
//             message.error('Please fill all fields.');
//             return;
//         }
//
//         const stallLocationData = {
//             stallType,
//             location,
//         };
//
//         try {
//             const response = await fetch('http://localhost:8080/api/stall-locations/add', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(stallLocationData),
//             });
//
//             if (!response.ok) {
//                 throw new Error('Stall location registration failed');
//             }
//
//             message.success('Stall location registered successfully!');
//         } catch (error) {
//             message.error(`Error`);
//         }
//     };
//
//     return (
//         <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
//             <div className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-4 border-black p-10 rounded-lg'>
//                 <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Location Details</h2>
//                 <br /><br />
//                 <Form layout="vertical">
//                     <Form.Item label="Stall Type:">
//                         <Input
//                             size="large"
//                             placeholder="Stall Type"
//                             style={{ width: '600px' }}
//                             value={stallType}
//                             onChange={handleStallTypeChange}
//                         />
//                     </Form.Item>
//
//                     <Form.Item label="Location:">
//                         <Input
//                             size="large"
//                             placeholder="Location"
//                             style={{ width: '600px' }}
//                             value={location}
//                             onChange={handleLocationChange}
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
// export default StallLocationForm;
// import React, { useState } from 'react';
// import { Input, Button, message, Form, Select } from 'antd';
//
// const { Option } = Select;
//
// const StallLocationForm: React.FC = () => {
//     const [stallType, setStallType] = useState('');
//     const [location, setLocation] = useState('');
//
//     const handleStallTypeChange = (value: string) => {
//         setStallType(value);
//     };
//
//     const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setLocation(e.target.value);
//     };
//
//     const handleSubmit = async () => {
//         if (!stallType || !location) {
//             message.error('Please fill all fields.');
//             return;
//         }
//
//         const stallLocationData = {
//             stallType,
//             location,
//         };
//
//         try {
//             const response = await fetch('http://localhost:8080/api/stall-locations/add', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(stallLocationData),
//             });
//
//             if (!response.ok) {
//                 throw new Error('Stall location registration failed');
//             }
//
//             message.success('Stall location registered successfully!');
//         } catch (error) {
//             message.error(`Error`);
//         }
//     };
//
//     return (
//         <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
//             <div className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-4 border-black p-10 rounded-lg'>
//                 <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Location Details</h2>
//                 <br /><br />
//                 <Form layout="vertical">
//                     <Form.Item label="Stall Type:">
//                         <Select
//                             size="large"
//                             placeholder="Select Stall Type"
//                             style={{ width: '600px' }}
//                             value={stallType}
//                             onChange={handleStallTypeChange}
//                         >
//                             <Option value="main">Main Stall</Option>
//                             <Option value="sub">Sub Stall</Option>
//                         </Select>
//                     </Form.Item>
//
//                     <Form.Item label="Location:">
//                         <Input
//                             size="large"
//                             placeholder="Location"
//                             style={{ width: '600px' }}
//                             value={location}
//                             onChange={handleLocationChange}
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
// export default StallLocationForm;
// import React, { useState, useEffect } from 'react';
// import { Input, Button, message, Form, Select, Table } from 'antd';
//
// const { Option } = Select;
//
// const StallLocationForm: React.FC = () => {
//     const [stallType, setStallType] = useState('');
//     const [location, setLocation] = useState('');
//     const [stallLocations, setStallLocations] = useState([]);
//
//     const handleStallTypeChange = (value: string) => {
//         setStallType(value);
//     };
//
//     const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setLocation(e.target.value);
//     };
//
//     const fetchStallLocations = async () => {
//         try {
//             const response = await fetch('http://localhost:8080/api/stall-locations/getAll');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch stall locations');
//             }
//             const data = await response.json();
//             setStallLocations(data);
//         } catch (error) {
//             message.error('Error fetching stall locations');
//         }
//     };
//
//     useEffect(() => {
//         fetchStallLocations();
//     }, []);
//
//     const handleSubmit = async () => {
//         if (!stallType || !location) {
//             message.error('Please fill all fields.');
//             return;
//         }
//
//         const stallLocationData = {
//             stallType,
//             location,
//         };
//
//         try {
//             const response = await fetch('http://localhost:8080/api/stall-locations/add', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(stallLocationData),
//             });
//
//             if (!response.ok) {
//                 throw new Error('Stall location registration failed');
//             }
//
//             message.success('Stall location registered successfully!');
//             fetchStallLocations(); // Refresh the list after adding a new location
//         } catch (error) {
//             message.error('Error');
//         }
//     };
//
//     const columns = [
//         {
//             title: 'Stall Type',
//             dataIndex: 'stallType',
//             key: 'stallType',
//         },
//         {
//             title: 'Location',
//             dataIndex: 'location',
//             key: 'location',
//         },
//     ];
//
//     return (
//         <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
//             <div className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-4 border-black p-10 rounded-lg'>
//                 <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Location Details</h2>
//                 <br /><br />
//                 <Form layout="vertical">
//                     <Form.Item label="Stall Type:">
//                         <Select
//                             size="large"
//                             placeholder="Select Stall Type"
//                             style={{ width: '600px' }}
//                             value={stallType}
//                             onChange={handleStallTypeChange}
//                         >
//                             <Option value="main">Main Stall</Option>
//                             <Option value="sub">Sub Stall</Option>
//                         </Select>
//                     </Form.Item>
//
//                     <Form.Item label="Location:">
//                         <Input
//                             size="large"
//                             placeholder="Location"
//                             style={{ width: '600px' }}
//                             value={location}
//                             onChange={handleLocationChange}
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
//             <br />
//             <div className='w-full mt-10'>
//                 <h3 className="text-xl font-semibold">Stall Locations</h3>
//                 <Table
//                     columns={columns}
//                     dataSource={stallLocations}
//                     rowKey="id"
//                     pagination={false}
//                     className='mt-5'
//                 />
//             </div>
//         </div>
//     );
// };
//
// export default StallLocationForm;
import React, { useState, useEffect } from 'react';
import { Input, Button, message, Form, Select, Table } from 'antd';

const { Option } = Select;

const StallLocationForm: React.FC = () => {
    const [stallType, setStallType] = useState('');
    const [location, setLocation] = useState('');
    const [stallLocations, setStallLocations] = useState([]);

    const handleStallTypeChange = (value: string) => {
        setStallType(value);
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    };

    const fetchStallLocations = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/stall-locations/getAll');
            if (!response.ok) {
                throw new Error('Failed to fetch stall locations');
            }
            const data = await response.json();
            setStallLocations(data);
        } catch (error) {
            message.error('Error fetching stall locations');
        }
    };

    useEffect(() => {
        fetchStallLocations();
    }, []);

    const handleSubmit = async () => {
        if (!stallType || !location) {
            message.error('Please fill all fields.');
            return;
        }

        const stallLocationData = {
            stallType,
            location,
        };

        try {
            const response = await fetch('http://localhost:8080/api/stall-locations/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(stallLocationData),
            });

            if (!response.ok) {
                throw new Error('Stall location registration failed');
            }

            message.success('Stall location registered successfully!');
            fetchStallLocations(); // Refresh the list after adding a new location
        } catch (error) {
            message.error('Error');
        }
    };

    const columns = [
        {
            title: 'Stall Type',
            dataIndex: 'stallType',
            key: 'stallType',
            render: (text: string) => <span className="font-medium">{text}</span>,
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            render: (text: string) => <span className="font-medium">{text}</span>,
        },
    ];

    return (
        <div className="min-h-screen bg-white py-10 px-5 flex flex-col items-center">
            <div className="bg-gray-50 shadow-md rounded-lg p-8 w-full max-w-2xl">
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Stall Location Details</h2>
                <Form layout="vertical">
                    <Form.Item label="Stall Type" className="text-gray-600">
                        <Select
                            size="large"
                            placeholder="Select Stall Type"
                            className="w-full"
                            value={stallType}
                            onChange={handleStallTypeChange}
                        >
                            <Option value="main">Main Stall</Option>
                            <Option value="sub">Sub Stall</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Location" className="text-gray-600">
                        <Input
                            size="large"
                            placeholder="Enter Location"
                            className="w-full"
                            value={location}
                            onChange={handleLocationChange}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            block
                            onClick={handleSubmit}
                            className="bg-blue-600 hover:bg-green-700 border-none text-white"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="w-full mt-12">
                <h3 className="text-xl font-semibold text-gray-700 text-center mb-4">Registered Stall Locations</h3>
                <div className="max-w-4xl mx-auto">
                    <Table
                        columns={columns}
                        dataSource={stallLocations}
                        rowKey="id"
                        pagination={false}
                        className="shadow-md rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default StallLocationForm;

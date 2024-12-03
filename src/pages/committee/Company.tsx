// import React, { useState } from 'react';
//
// const StallCompanyDetailsForm = () => {
//     const [stallNumber, setStallNumber] = useState<string>('');
//     const [companyName, setCompanyName] = useState<string>('');
//     const [stallCompanyDetails, setStallCompanyDetails] = useState<{ stallNumber: string; companyName: string }[]>([]);
//     const [isDataAdded, setIsDataAdded] = useState<boolean>(false); // To track if data has been added
//
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//
//         const newStallCompanyDetail = { stallNumber, companyName };
//         setStallCompanyDetails([...stallCompanyDetails, newStallCompanyDetail]);
//
//         // Reset the form fields
//         setStallNumber('');
//         setCompanyName('');
//
//         // Set data added to true to show the table
//         setIsDataAdded(true);
//     };
//
//     return (
//         <div className="bg-white p-6 rounded-2xl w-full max-w-full mx-auto">
//             {/* Form */}
//             <form onSubmit={handleSubmit}>
//                 <h2 className="text-2xl font-semibold mb-6 text-center">Company Locations</h2>
//
//                 <div className="flex items-end space-x-4">
//                     {/* Stall Number Dropdown */}
//                     <div className="w-2/5">
//                         <label htmlFor="stallNumber" className="block text-gray-700 font-medium mb-2">Stall Number</label>
//                         <select
//                             id="stallNumber"
//                             value={stallNumber}
//                             onChange={(e) => setStallNumber(e.target.value)}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                             required
//                         >
//                             <option value="" disabled>Select Stall Number</option>
//                             <option value="Stall 1">Stall 1</option>
//                             <option value="Stall 2">Stall 2</option>
//                             <option value="Stall 3">Stall 3</option>
//                             <option value="Stall 4">Stall 4</option>
//                             <option value="Stall 5">Stall 5</option>
//                             <option value="Stall 6">Stall 6</option>
//                             <option value="Stall 7">Stall 7</option>
//                             <option value="Stall 8">Stall 8</option>
//                             <option value="Stall 9">Stall 9</option>
//                             <option value="Stall 10">Stall 10</option>
//                         </select>
//                     </div>
//
//                     {/* Company Name Dropdown */}
//                     <div className="w-2/5">
//                         <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">Company Name</label>
//                         <select
//                             id="companyName"
//                             value={companyName}
//                             onChange={(e) => setCompanyName(e.target.value)}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                             required
//                         >
//                             <option value="" disabled>Select Company</option>
//                             <option value="WSO2">WSO2</option>
//                             <option value="IFS">IFS</option>
//                             <option value="Sysco Lab">Sysco Lab</option>
//                             <option value="Fcode Lab">Fcode Lab</option>
//                             <option value="Creative Software">Creative Software</option>
//                             <option value="Axiata Digital Labs">Axiata Digital Labs</option>
//                             <option value="LSEG">LSEG</option>
//                             <option value="GTN">GTN</option>
//                             <option value="Finap">Finap</option>
//                             <option value="CodeGen">CodeGen</option>
//                         </select>
//                     </div>
//
//                     {/* Submit Button */}
//                     <div className="w-1/5">
//                         <button
//                             type="submit"
//                             className="w-1/2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
//                         >
//                             Save
//                         </button>
//                     </div>
//                 </div>
//             </form>
//
//             {/* Conditional Rendering: Show Image or Table */}
//             {!isDataAdded ? (
//                 <div className="mt-8 flex justify-center">
//                     <img src="src/assets/no_schedule.jpg" alt="Placeholder" className="w-1/3 h-auto"/>
//                 </div>
//             ) : (
//                 <div className="mt-8">
//                     <h3 className="text-xl font-semibold mb-4">Company Allocation Details</h3>
//                     <table className="min-w-full bg-white border border-gray-200">
//                         <thead>
//                         <tr>
//                             <th className="py-2 px-4 border-b">Stall Number</th>
//                             <th className="py-2 px-4 border-b">Company Name</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {stallCompanyDetails.map((detail, index) => (
//                             <tr key={index}>
//                                 <td className="py-2 px-4 border-b text-center">{detail.stallNumber}</td>
//                                 <td className="py-2 px-4 border-b text-center">{detail.companyName}</td>
//                             </tr>
//                         ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default StallCompanyDetailsForm;

import React, { useState, useEffect } from 'react';
import { Input, Button, message, Form, Select, Table, Card } from 'antd';
import axios from 'axios';

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
        const token = localStorage.getItem("authToken");

        if (!token) {
            message.error('No authentication token found');
            return;
        }

        try {
            const response = await axios.get('http://localhost:8080/api/stall/all', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setStallData(response.data);
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
            sponsorId,
        };

        const token = localStorage.getItem("authToken");

        if (!token) {
            message.error('No authentication token found');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/stall/add', stallData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                message.success('Stall registered successfully!');
                fetchStallData(); // Refresh the data after successful submission
            }
        } catch (error) {
            message.error('Stall registration failed or an error occurred');
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

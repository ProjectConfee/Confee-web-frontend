// import React, { useState } from 'react';
//
// const StallDetailsForm = () => {
//     const [stallNumber, setStallNumber] = useState<string>('');
//     const [location, setLocation] = useState<string>('');
//     const [stallDetails, setStallDetails] = useState<{ stallNumber: string; location: string }[]>([]);
//     const [isDataAdded, setIsDataAdded] = useState<boolean>(false); // To track if data has been added
//
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//
//         const newStallDetail = { stallNumber, location };
//         setStallDetails([...stallDetails, newStallDetail]);
//
//         // Reset the form fields
//         setStallNumber('');
//         setLocation('');
//
//         // Set data added to true to show the table
//         setIsDataAdded(true);
//     };
//
//     return (
//         <div className="bg-white p-6 rounded-2xl w-full max-w-full mx-auto mb-10">
//             {/* Form */}
//             <form onSubmit={handleSubmit}>
//                 <h2 className="text-2xl font-semibold mb-6 text-center">Stall Details</h2>
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
//                     {/* Location Dropdown */}
//                     <div className="w-2/5">
//                         <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location</label>
//                         <select
//                             id="location"
//                             value={location}
//                             onChange={(e) => setLocation(e.target.value)}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                             required
//                         >
//                             <option value="" disabled>Select Location</option>
//                             <option value="Open Area">Open Area</option>
//                             <option value="W001">W001</option>
//                             <option value="W002">W002</option>
//                             <option value="S104">S104</option>
//                             <option value="S203">S203</option>
//                             <option value="S204">S204</option>
//                             <option value="S205">S205</option>
//                             <option value="E401">E401</option>
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
//                     <img src="src/assets/no_schedule.jpg" alt="Placeholder" className="w-1/3 h-auto" />
//                 </div>
//             ) : (
//                 <div className="mt-8">
//                     <h3 className="text-xl font-semibold mb-4">Added Stall Details</h3>
//                     <table className="min-w-full bg-white border border-gray-200">
//                         <thead>
//                         <tr>
//                             <th className="py-2 px-4 border-b">Stall Number</th>
//                             <th className="py-2 px-4 border-b">Location</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {stallDetails.map((detail, index) => (
//                             <tr key={index}>
//                                 <td className="py-2 px-4 border-b text-center">{detail.stallNumber}</td>
//                                 <td className="py-2 px-4 border-b text-center">{detail.location}</td>
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
// export default StallDetailsForm;
import React, { useState, useEffect } from 'react';
import { Input, Button, message, Form, Select, Table } from 'antd';
import axios from 'axios';

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
        const token = localStorage.getItem("authToken");

        if (!token) {
            message.error('No authentication token found');
            return;
        }

        try {
            const response = await axios.get('http://localhost:8080/api/stall-locations/getAll', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setStallLocations(response.data);
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

        const token = localStorage.getItem("authToken");

        if (!token) {
            message.error('No authentication token found');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/stall-locations/add', stallLocationData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                message.success('Stall location registered successfully!');
                fetchStallLocations(); // Refresh the list after adding a new location
            }
        } catch (error) {
            message.error('Error registering stall location');
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
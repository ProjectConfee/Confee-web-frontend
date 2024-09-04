//
// import React, { useState } from 'react';
// import { Table } from 'antd';
// import type { TableColumnsType, TableProps } from 'antd';
//
//
// type TableRowSelection<T> = TableProps<T>['rowSelection'];
//
// interface DataType {
//     key: React.Key;
//     name: string;
//     age: number;
//     university: string;
//     email: string;
//     phone: string;
// }
//
// const columns: TableColumnsType<DataType> = [
//     {
//         title: 'Contact Logo ',
//         dataIndex: 'company_logo',
//     },
//     {
//         title: 'Company Name',
//         dataIndex: 'company_name',
//     },
//     {
//         title: 'Company Address',
//         dataIndex: 'company_address',
//     },
//     {
//         title: 'Company Email Address',
//         dataIndex: 'company_email',
//     },
//     {
//         title: 'Email Address',
//         dataIndex: 'email',
//     },
//     {
//         title: 'Company Description',
//         dataIndex: 'biography',
//     },
//     {
//         title: 'Contact Number ',
//         dataIndex: 'contact_number',
//     },
//
// ];
//
// const data: DataType[] = [
//     { key: 1, name: "Alice Johnson", age: 28, email: "alice.johnson@example.com", university: "New York University", phone: "+1-212-555-1234" },
//     { key: 2, name: "Bob Smith", age: 35, email: "bob.smith@example.com", university: "Stanford University", phone: "+1-650-555-5678" },
//     { key: 3, name: "Charlie Brown", age: 40, email: "charlie.brown@example.com", university: "University of Texas", phone: "+1-512-555-8765" },
//     { key: 4, name: "Diana Prince", age: 32, email: "diana.prince@example.com", university: "Georgetown University", phone: "+1-202-555-2345" },
//     { key: 5, name: "Edward King", age: 29, email: "edward.king@example.com", university: "University College London", phone: "+44-20-7946-0958" },
//     { key: 6, name: "Fiona Green", age: 26, email: "fiona.green@example.com", university: "Sorbonne University", phone: "+33-1-45-67-89-10" },
//     { key: 7, name: "George White", age: 45, email: "george.white@example.com", university: "Humboldt University", phone: "+49-30-12345678" },
//     { key: 8, name: "Hannah Lee", age: 38, email: "hannah.lee@example.com", university: "University of Tokyo", phone: "+81-3-1234-5678" },
//     { key: 9, name: "Iris Watson", age: 33, email: "iris.watson@example.com", university: "University of Sydney", phone: "+61-2-9876-5432" },
//     { key: 10, name: "Jack Brown", age: 31, email: "jack.brown@example.com", university: "University of Rome", phone: "+39-06-12345678" }
// ];
//
// const App: React.FC = () => {
//     const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
//
//     const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
//         console.log('selectedRowKeys changed: ', newSelectedRowKeys);
//         setSelectedRowKeys(newSelectedRowKeys);
//     };
//
//     const rowSelection: TableRowSelection<DataType> = {
//         selectedRowKeys,
//         onChange: onSelectChange,
//         selections: [
//             {
//                 key: 'odd',
//                 text: 'Select Odd Row',
//                 onSelect: (changeableRowKeys) => {
//                     let newSelectedRowKeys = [];
//                     newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
//                         if (index % 2 !== 0) {
//                             return false;
//                         }
//                         return true;
//                     });
//                     setSelectedRowKeys(newSelectedRowKeys);
//                 },
//             },
//             {
//                 key: 'even',
//                 text: 'Select Even Row',
//                 onSelect: (changeableRowKeys) => {
//                     let newSelectedRowKeys = [];
//                     newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
//                         if (index % 2 !== 0) {
//                             return true;
//                         }
//                         return false;
//                     });
//                     setSelectedRowKeys(newSelectedRowKeys);
//                 },
//             },
//         ],
//     };
//
//     return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
// };
//
// export default App;
import {TableRowSelection} from "antd/es/table/interface";

interface DataType {
    key: React.Key;
    company_logo: string;
    company_name: string;
    company_address: string;
    company_email: string;
    email: string;
    biography: string;
    contact_number: string;
}
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import axios from 'axios';

const App: React.FC = () => {
    const [data, setData] = useState<DataType[]>([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/profiles/getAll');
                const profiles = response.data.map((profile: any, index: number) => ({
                    key: index,
                    company_logo: profile.companyLogo,
                    company_name: profile.companyName,
                    company_address: profile.companyAddress,
                    company_email: profile.companyEmail,
                    email: profile.email,
                    biography: profile.biography,
                    contact_number: profile.contactNumber,
                }));
                setData(profiles);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
import React, { useState } from 'react';

const StallCompanyDetailsForm = () => {
    const [stallNumber, setStallNumber] = useState<string>('');
    const [companyName, setCompanyName] = useState<string>('');
    const [stallCompanyDetails, setStallCompanyDetails] = useState<{ stallNumber: string; companyName: string }[]>([]);
    const [isDataAdded, setIsDataAdded] = useState<boolean>(false); // To track if data has been added

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newStallCompanyDetail = { stallNumber, companyName };
        setStallCompanyDetails([...stallCompanyDetails, newStallCompanyDetail]);

        // Reset the form fields
        setStallNumber('');
        setCompanyName('');

        // Set data added to true to show the table
        setIsDataAdded(true);
    };

    return (
        <div className="bg-white p-6 rounded-2xl w-full max-w-full mx-auto">
            {/* Form */}
            <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-6 text-center">Company Locations</h2>
        fetchData();
    }, []);

                <div className="flex items-end space-x-4">
                    {/* Stall Number Dropdown */}
                    <div className="w-2/5">
                        <label htmlFor="stallNumber" className="block text-gray-700 font-medium mb-2">Stall Number</label>
                        <select
                            id="stallNumber"
                            value={stallNumber}
                            onChange={(e) => setStallNumber(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            required
                        >
                            <option value="" disabled>Select Stall Number</option>
                            <option value="Stall 1">Stall 1</option>
                            <option value="Stall 2">Stall 2</option>
                            <option value="Stall 3">Stall 3</option>
                            <option value="Stall 4">Stall 4</option>
                            <option value="Stall 5">Stall 5</option>
                            <option value="Stall 6">Stall 6</option>
                            <option value="Stall 7">Stall 7</option>
                            <option value="Stall 8">Stall 8</option>
                            <option value="Stall 9">Stall 9</option>
                            <option value="Stall 10">Stall 10</option>
                        </select>
                    </div>
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

                    {/* Company Name Dropdown */}
                    <div className="w-2/5">
                        <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">Company Name</label>
                        <select
                            id="companyName"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            required
                        >
                            <option value="" disabled>Select Company</option>
                            <option value="WSO2">WSO2</option>
                            <option value="IFS">IFS</option>
                            <option value="Sysco Lab">Sysco Lab</option>
                            <option value="Fcode Lab">Fcode Lab</option>
                            <option value="Creative Software">Creative Software</option>
                            <option value="Axiata Digital Labs">Axiata Digital Labs</option>
                            <option value="LSEG">LSEG</option>
                            <option value="GTN">GTN</option>
                            <option value="Finap">Finap</option>
                            <option value="CodeGen">CodeGen</option>
                        </select>
                    </div>
    const rowSelection: TableRowSelection<DataType> = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changeableRowKeys) => {
                    const newSelectedRowKeys = changeableRowKeys.filter((_, index) => index % 2 === 0);
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changeableRowKeys) => {
                    const newSelectedRowKeys = changeableRowKeys.filter((_, index) => index % 2 !== 0);
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Contact Logo',
            dataIndex: 'company_logo',
            render: (text: string) => <img src={text} alt="Company Logo" style={{ width: '50px', height: '50px' }} />,
        },
        {
            title: 'Company Name',
            dataIndex: 'company_name',
        },
        {
            title: 'Company Address',
            dataIndex: 'company_address',
        },
        {
            title: 'Company Email Address',
            dataIndex: 'company_email',
        },

        {
            title: 'Company Description',
            dataIndex: 'biography',
        },
        {
            title: 'Contact Number',
            dataIndex: 'contact_number',
        },
    ];

    return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
                    {/* Submit Button */}
                    <div className="w-1/5">
                        <button
                            type="submit"
                            className="w-1/2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>

            {/* Conditional Rendering: Show Image or Table */}
            {!isDataAdded ? (
                <div className="mt-8 flex justify-center">
                    <img src="src/assets/no_schedule.jpg" alt="Placeholder" className="w-1/3 h-auto"/>
                </div>
            ) : (
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Company Allocation Details</h3>
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Stall Number</th>
                            <th className="py-2 px-4 border-b">Company Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {stallCompanyDetails.map((detail, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b text-center">{detail.stallNumber}</td>
                                <td className="py-2 px-4 border-b text-center">{detail.companyName}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default App;
export default StallCompanyDetailsForm;

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
import {TableRowSelection} from "antd/es/table/interface";

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

        fetchData();
    }, []);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

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
            title: 'Email Address',
            dataIndex: 'email',
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
};

export default App;

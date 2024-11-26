// import React, { useState } from 'react';
// import { Table } from 'antd';
// import type { TableColumnsType, TableProps } from 'antd';
//
// type TableRowSelection<T> = TableProps<T>['rowSelection'];
//
// interface DataType {
//     key: React.Key;
//     name: string;
//     age: number;
//    university: string;
//     email: string;
//     phone: string;
// }
//
// const columns: TableColumnsType<DataType> = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//     },
//     {
//         title: 'Age',
//         dataIndex: 'age',
//     },
//     {
//         title: 'University ',
//         dataIndex: 'university',
//     },
//     {
//         title: 'Email Address ',
//         dataIndex: 'email',
//     },
//     {
//         title: 'Phone Number ',
//         dataIndex: 'phone',
//     },
// ];
//
//
// const data: DataType[] = [
//     { key: 1, name: "Alice Johnson", age: 28, email: "alice.johnson@example.com", university: "New York University", phone: "+1-212-555-1234" },
//     { key: 2, name: "Bob Smith", age: 35, email: "bob.smith@example.com", university: "Stanford University", phone: "+1-650-555-5678" },
//     { key: 3, name: "Charlie Brown", age: 40,  email: "charlie.brown@example.com", university: "University of Texas", phone: "+1-512-555-8765" },
//     { key: 4, name: "Diana Prince", age: 32,  email: "diana.prince@example.com", university: "Georgetown University", phone: "+1-202-555-2345" },
//     { key: 5, name: "Edward King", age: 29,  email: "edward.king@example.com", university: "University College London", phone: "+44-20-7946-0958" },
//     { key: 6, name: "Fiona Green", age: 26,email: "fiona.green@example.com", university: "Sorbonne University", phone: "+33-1-45-67-89-10" },
//     { key: 7, name: "George White", age: 45,  email: "george.white@example.com", university: "Humboldt University", phone: "+49-30-12345678" },
//     { key: 8, name: "Hannah Lee", age: 38,  email: "hannah.lee@example.com", university: "University of Tokyo", phone: "+81-3-1234-5678" },
//     { key: 9, name: "Iris Watson", age: 33,  email: "iris.watson@example.com", university: "University of Sydney", phone: "+61-2-9876-5432" },
//     { key: 10, name: "Jack Brown", age: 31,  email: "jack.brown@example.com", university: "University of Rome", phone: "+39-06-12345678" }
// ];
//
//
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
//             Table.SELECTION_ALL,
//             Table.SELECTION_INVERT,
//             Table.SELECTION_NONE,
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
import React, { useState } from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';


type TableRowSelection<T> = TableProps<T>['rowSelection'];

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    university: string;
    email: string;
    phone: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'University',
        dataIndex: 'university',
    },
    {
        title: 'Email Address',
        dataIndex: 'email',
    },
    {
        title: 'Phone Number',
        dataIndex: 'phone',
    },
];

const data: DataType[] = [
    { key: 1, name: "Alice Johnson", age: 28, email: "alice.johnson@example.com", university: "New York University", phone: "+1-212-555-1234" },
    { key: 2, name: "Bob Smith", age: 35, email: "bob.smith@example.com", university: "Stanford University", phone: "+1-650-555-5678" },
    { key: 3, name: "Charlie Brown", age: 40, email: "charlie.brown@example.com", university: "University of Texas", phone: "+1-512-555-8765" },
    { key: 4, name: "Diana Prince", age: 32, email: "diana.prince@example.com", university: "Georgetown University", phone: "+1-202-555-2345" },
    { key: 5, name: "Edward King", age: 29, email: "edward.king@example.com", university: "University College London", phone: "+44-20-7946-0958" },
    { key: 6, name: "Fiona Green", age: 26, email: "fiona.green@example.com", university: "Sorbonne University", phone: "+33-1-45-67-89-10" },
    { key: 7, name: "George White", age: 45, email: "george.white@example.com", university: "Humboldt University", phone: "+49-30-12345678" },
    { key: 8, name: "Hannah Lee", age: 38, email: "hannah.lee@example.com", university: "University of Tokyo", phone: "+81-3-1234-5678" },
    { key: 9, name: "Iris Watson", age: 33, email: "iris.watson@example.com", university: "University of Sydney", phone: "+61-2-9876-5432" },
    { key: 10, name: "Jack Brown", age: 31, email: "jack.brown@example.com", university: "University of Rome", phone: "+39-06-12345678" }
];

const App: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

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
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };

    return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
};

export default App;

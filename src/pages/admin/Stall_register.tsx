//
// import React, {useEffect, useState} from 'react';
// import { Input, Button, Space } from 'antd';
//
//
// const App: React.FC = () => {
//     const [type, setType] = useState('');
//     const [cname, setCname] = useState('');
//     const [stall, setStall] = useState<any[]>([]);
//
//     const handleClick=(e: { preventDefault: () => void; })=>{
//         e.preventDefault()
//
//
//         const stall={type,cname}
//         console.log(stall)
//         fetch("http://localhost:8080/stall/add",{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify(stall)
//
//         }).then(()=>{
//             console.log(" Stall registered successfully");
//         })
//     }
//     useEffect(()=>{
//         fetch("http://localhost:8080/stall/getAll")
//             .then(res=>res.json())
//             .then((result)=>{
//                     setstall(result);
//                 }
//             )
//     },[])
//     return (
//         <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
//             <div className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-2 border-black p-10 rounded-lg'>
//                 <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Register Details</h2>
//                 <br></br><br></br>
//                 <form onSubmit={handleClick}>
//                     <div>
//                         <p>Stall Type and No:</p>
//                         <br></br>
//                         <Input size="large" value={type} onChange={(e) => setType(e.target.value)} placeholder="Stall Type and No" style={{ width: '600px' }} />
//                     </div>
//                     <br></br><br></br>
//                     <div>
//                         <p>Stall Company Name:</p>
//                         <br></br>
//                         <Input size="large" value={cname} onChange={(e) => setCname(e.target.value)} placeholder="Company Name" style={{ width: '600px' }} />
//                     </div>
//                     <br></br><br></br>
//                     <div>
//                         <Space>
//                             <Button type="primary" onClick={handleClick}>Submit</Button>
//                         </Space>
//                     </div>
//                 </form>
//
//             </div>
//         </div>
//     );
// };
//
// export default App;
// import React, {  useState } from 'react';
// import { Input, Button, Space } from 'antd';
//
// const App: React.FC = () => {
//     const [sponsorId, setsponsorId] = useState('');
//     const [stallName, setstallName] = useState('');
//
//
//
//     const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const stall = { sponsorId, stallName};
//         console.log(stall);
//
//         fetch("http://localhost:8080/stall/add", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(stall)
//         }).then(() => {
//             console.log("Stall registered successfully");
//
//         });
//     };
//
//
//     return (
//         <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
//             <div className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-2 border-black p-10 rounded-lg'>
//                 <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Register Details</h2>
//                 <br></br><br></br>
//                 <form onSubmit={handleClick}>
//                     <div>
//                         <p>Sponsor Number:</p>
//                         <br></br>
//                         <Input size="large" value={sponsorId} onChange={(e) => setsponsorId(e.target.value)}
//                                placeholder="Stall Type and No" style={{width: '600px'}}/>
//                     </div>
//                     <br></br><br></br>
//
//                     <div>
//                         <p>Stall Type and Number:</p>
//                         <br></br>
//                         <Input size="large" value={stallName} onChange={(e) => setstallName(e.target.value)}
//                                placeholder="Company Name" style={{width: '600px'}}/>
//                     </div>
//                     <br></br><br></br>
//                     <div>
//                         <Space>
//                             <Button type="primary" htmlType="submit">Submit</Button>
//                         </Space>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };
//
// export default App;
// import React, { useEffect, useState } from 'react';
// import { Input, Button, Space, message } from 'antd';
//
// import { Table } from 'antd'; // Assuming you're using Ant Design for the table
// import axios from 'axios';
//
// interface Stall {
//     sponsorId: string;
//     stallName: string;
// }
//
// const App: React.FC = () => {
//     const [sponsorId, setsponsorId] = useState('');
//     const [stallName, setstallName] = useState('');
//     const [existingStalls, setExistingStalls] = useState<Stall[]>([]);
//
//     useEffect(() => {
//         // Fetch existing stalls from the server
//         fetch("http://localhost:8080/stall/getAll")
//             .then(res => res.json())
//             .then((result) => {
//                 setExistingStalls(result);
//             });
//     }, []);
//
//     const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//
//         // Check if sponsorId or stallName already exists
//         const isSponsorIdExists = existingStalls.some(stall => stall.sponsorId === sponsorId);
//         const isStallNameExists = existingStalls.some(stall => stall.stallName === stallName);
//
//         if (isSponsorIdExists) {
//             message.error("Sponsor ID already exists. Please enter a different one.");
//             return;
//         }
//
//         if (isStallNameExists) {
//             message.error("Stall Name already exists. Please enter a different one.");
//             return;
//         }
//
//         const stall = { sponsorId, stallName };
//         console.log(stall);
//
//         fetch("http://localhost:8080/stall/add", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(stall)
//         }).then(() => {
//             console.log("Stall registered successfully");
//
//             // Update the existing stalls list after successful registration
//             setExistingStalls([...existingStalls, stall]);
//             setsponsorId('');
//             setstallName('');
//             message.success("Stall registered successfully");
//         }).catch(() => {
//             message.error("Failed to register the stall. Please try again.");
//         });
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars,react-hooks/rules-of-hooks
//         const [stalls, setStalls] = useState<never[]>([]);
//
//         // eslint-disable-next-line react-hooks/rules-of-hooks
//         useEffect(() => {
//             // Fetch all stalls when the component mounts
//             axios.get('http://localhost:8080/stalls')
//                 .then(response => setStalls(response.data))
//                 .catch(error => console.error('Error fetching stalls:', error));
//         }, []);
//
//
//     };
//
//     return (
//         <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
//             <div className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-2 border-black p-10 rounded-lg'>
//                 <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Register Details</h2>
//                 <br /><br />
//                 <form onSubmit={handleClick}>
//                     <div>
//                         <p>Sponsor Number:</p>
//                         <br />
//                         <Input
//                             size="large"
//                             value={sponsorId}
//                             onChange={(e) => setsponsorId(e.target.value)}
//                             placeholder="Sponsor Number"
//                             style={{ width: '600px' }}
//                         />
//                     </div>
//                     <br /><br />
//                     <div>
//                         <p>Stall Type and Number:</p>
//                         <br />
//                         <Input
//                             size="large"
//                             value={stallName}
//                             onChange={(e) => setstallName(e.target.value)}
//                             placeholder="Stall Type and Number"
//                             style={{ width: '600px' }}
//                         />
//                     </div>
//                     <br /><br />
//                     <div>
//                         <Space>
//                             <Button type="primary" htmlType="submit">Submit</Button>
//                         </Space>
//                     </div>
//                 </form>
//             </div>
//             <Table
//                 dataSource={stalls}
//                 columns={columns}
//                 rowKey="id"
//                 style={{ marginTop: '20px' }} // Add some spacing between form and table
//             />
//         </div>
//     );
// };
//
// export default App;
// import React, { useEffect, useState } from 'react';
// import { Input, Button, Space, message } from 'antd';
// import { Table } from 'antd';
//
//
// interface Stall {
//     id: number; // Assuming you have an ID field
//     sponsorId: string;
//     stallName: string;
// }
//
// const App: React.FC = () => {
//     const [sponsorId, setSponsorId] = useState('');
//     const [stallName, setStallName] = useState('');
//     const [existingStalls, setExistingStalls] = useState<Stall[]>([]);
//     const [stalls, setStalls] = useState<Stall[]>([]);
//
//     useEffect(() => {
//         // Fetch existing stalls from the server
//         fetch("http://localhost:8080/stall/getAll")
//             .then(res => res.json())
//             .then((result) => {
//                 setExistingStalls(result);
//                 setStalls(result); // Initialize stalls with fetched data
//             })
//             .catch(error => console.error('Error fetching stalls:', error));
//     }, []);
//
//     const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//
//         // Check if sponsorId or stallName already exists
//         const isSponsorIdExists = existingStalls.some(stall => stall.sponsorId === sponsorId);
//         const isStallNameExists = existingStalls.some(stall => stall.stallName === stallName);
//
//         if (isSponsorIdExists) {
//             message.error("Sponsor ID already exists. Please enter a different one.");
//             return;
//         }
//
//         if (isStallNameExists) {
//             message.error("Stall Name already exists. Please enter a different one.");
//             return;
//         }
//
//         const stall = { sponsorId, stallName };
//         console.log(stall);
//
//         fetch("http://localhost:8080/stall/add", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(stall)
//         })
//             .then(() => {
//                 console.log("Stall registered successfully");
//
//                 // Update the existing stalls list after successful registration
//                 setExistingStalls([...existingStalls, stall]);
//                 setStalls([...stalls, stall]); // Update table data
//                 setSponsorId('');
//                 setStallName('');
//                 message.success("Stall registered successfully");
//             })
//             .catch(() => {
//                 message.error("Failed to register the stall. Please try again.");
//             });
//     };
//
//     const columns = [
//         { title: 'ID', dataIndex: 'id', key: 'id' },
//         { title: 'Sponsor ID', dataIndex: 'sponsorId', key: 'sponsorId' },
//         { title: 'Stall Name', dataIndex: 'stallName', key: 'stallName' },
//     ];
//
//     return (
//         <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
//             <div className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-2 border-black p-10 rounded-lg'>
//                 <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Register Details</h2>
//                 <br /><br />
//                 <form onSubmit={handleClick}>
//                     <div>
//                         <p>Sponsor Number:</p>
//                         <br />
//                         <Input
//                             size="large"
//                             value={sponsorId}
//                             onChange={(e) => setSponsorId(e.target.value)}
//                             placeholder="Sponsor Number"
//                             style={{ width: '600px' }}
//                         />
//                     </div>
//                     <br /><br />
//                     <div>
//                         <p>Stall Type and Number:</p>
//                         <br />
//                         <Input
//                             size="large"
//                             value={stallName}
//                             onChange={(e) => setStallName(e.target.value)}
//                             placeholder="Stall Type and Number"
//                             style={{ width: '600px' }}
//                         />
//                     </div>
//                     <br /><br />
//                     <div>
//                         <Space>
//                             <Button type="primary" htmlType="submit">Submit</Button>
//                         </Space>
//                     </div>
//                 </form>
//             </div>
//             <Table
//                 dataSource={stalls}
//                 columns={columns}
//                 rowKey="id"
//                 style={{ marginTop: '20px' }} // Add some spacing between form and table
//             />
//         </div>
//     );
// };
//
// export default App;
import React, { useEffect, useState } from 'react';
import { Input, Button, Space, message } from 'antd';
import { Table } from 'antd';

interface Stall {
    id: number; // Assuming you have an ID field
    sponsorId: string;
    stallName: string;
}

const App: React.FC = () => {
    const [sponsorId, setSponsorId] = useState('');
    const [stallName, setStallName] = useState('');
    const [existingStalls, setExistingStalls] = useState<Stall[]>([]);
    const [stalls, setStalls] = useState<Stall[]>([]);

    useEffect(() => {
        // Fetch existing stalls from the server
        fetch("http://localhost:8080/stall/getAll")
            .then(res => res.json())
            .then((result: Stall[]) => {
                setExistingStalls(result);
                setStalls(result); // Initialize stalls with fetched data
            })
            .catch(error => console.error('Error fetching stalls:', error));
    }, []);

    const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check if sponsorId or stallName already exists
        const isSponsorIdExists = existingStalls.some(stall => stall.sponsorId === sponsorId);
        const isStallNameExists = existingStalls.some(stall => stall.stallName === stallName);

        if (isSponsorIdExists) {
            message.error("Sponsor ID already exists. Please enter a different one.");
            return;
        }

        if (isStallNameExists) {
            message.error("Stall Name already exists. Please enter a different one.");
            return;
        }

        const stall = { sponsorId, stallName };
        console.log(stall);

        fetch("http://localhost:8080/stall/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(stall)
        })
            .then(res => res.json())
            .then((newStall: Stall) => {
                console.log("Stall registered successfully");

                // Update the existing stalls list after successful registration
                setExistingStalls([...existingStalls, newStall]);
                setStalls([...stalls, newStall]); // Update table data
                setSponsorId('');
                setStallName('');
                message.success("Stall registered successfully");
            })
            .catch(() => {
                message.error("Failed to register the stall. Please try again.");
            });
    };

    const columns = [
        // { title: 'ID', dataIndex: 'stall_id', key: 'stall_id' },
        { title: 'Sponsor ID', dataIndex: 'sponsorId', key: 'sponsorId' },
        { title: 'Stall Name', dataIndex: 'stallName', key: 'stallName' },
    ];

    console.log('Stalls:', stalls);
    return (
        <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
            <div className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-2 border-black p-10 rounded-lg'>
                <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Register Details</h2>
                <br /><br />
                <form onSubmit={handleClick}>
                    <div>
                        <p>Sponsor Number:</p>
                        <br />
                        <Input
                            size="large"
                            value={sponsorId}
                            onChange={(e) => setSponsorId(e.target.value)}
                            placeholder="Sponsor Number"
                            style={{ width: '600px' }}
                        />
                    </div>
                    <br /><br />
                    <div>
                        <p>Stall Type and Number:</p>
                        <br />
                        <Input
                            size="large"
                            value={stallName}
                            onChange={(e) => setStallName(e.target.value)}
                            placeholder="Stall Type and Number"
                            style={{ width: '600px' }}
                        />
                    </div>
                    <br /><br />
                    <div>
                        <Space>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Space>
                    </div>
                </form>
            </div>
            <Table
                dataSource={stalls}
                columns={columns}
                rowKey="stall_id"
                style={{ marginTop: '20px' }} // Add some spacing between form and table
            />
        </div>
    );
};

export default App;

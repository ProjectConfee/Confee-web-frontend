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
import React, { useState } from 'react';
import { Input, Button, message, Form } from 'antd';

const StallLocationForm: React.FC = () => {
    const [stallType, setStallType] = useState('');
    const [location, setLocation] = useState('');

    const handleStallTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStallType(e.target.value);
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    };

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
            const response = await fetch('http://localhost:8080/stall-locations/add', {
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
        } catch (error) {
            message.error(`Error`);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
            <div className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-4 border-black p-10 rounded-lg'>
                <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Location Details</h2>
                <br /><br />
                <Form layout="vertical">
                    <Form.Item label="Stall Type:">
                        <Input
                            size="large"
                            placeholder="Stall Type"
                            style={{ width: '600px' }}
                            value={stallType}
                            onChange={handleStallTypeChange}
                        />
                    </Form.Item>

                    <Form.Item label="Location:">
                        <Input
                            size="large"
                            placeholder="Location"
                            style={{ width: '600px' }}
                            value={location}
                            onChange={handleLocationChange}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default StallLocationForm;

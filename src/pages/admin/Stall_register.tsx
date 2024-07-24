import React from 'react';
import { Input } from 'antd';


import { Button, Flex } from 'antd';



const App: React.FC = () => (


    <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
        <div
            className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-4 border-black p-10 rounded-lg'>
            <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Register Details</h2><br></br><br></br>
            <div><p>Stall Type and No:</p><br></br>
                <Input size="large" placeholder="Stall Type and No" style={{width: '600px'}}/>
            </div>
            <br></br><br></br>
            <div><p>Stall Company Name:</p><br></br>
                <Input size="large" placeholder="Company Name" style={{width: '600px'}}/>
            </div>
            <br></br><br></br>
            <div>
                <Flex gap="small" wrap>
                    <Button type="primary">Submit</Button>

                </Flex></div>
        </div>
        <br></br><br></br>




        <div className='flex flex-col justify-center items-left h-full mt-100 ml-50'>

        </div>
        <br></br><br></br>


    </div>

);
export default App;
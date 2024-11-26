// import React from 'react';
import {
    Button,
    Divider,
    List
} from "antd";

import {
    Link
} from "react-router-dom";

// import React from "react";
// import {Card} from "antd";
// const {  Image  } = antd;

const data = [
    'Email: olivia@gmail.com',
    'Phone: 071 3456987',
    'Address: 123 Main St, Kandy',
    'Country: Sri Lanka',
];

const data1 = [
    'Age: 30',
    'Date of Birth: 1994-09-10',
    'Gender: Female',
    'University: UCSC',
];

const App = () => {
    return (
        <div className="flex justify-center h-screen">
            <div className="bg-white h-[500px] shadow-2xl w-4/5 mx-20 rounded-3xl mt-10">
                <div className="flex items-center pt-5">
                    <div className="text-2xl font-bold ml-[300px]">
                        My Profile
                    </div>

                    <Link to="/edit_profile_author">

                        <Button
                            className="w-25 ml-[220px]"
                            type="primary"
                        >
                            Edit Profile
                        </Button>

                    </Link>

                    <Link to="/change_password_author">

                        <Button className="w-25 ml-[50px]" type="primary">
                            Change Password
                        </Button>

                    </Link>

                </div>
                <Divider />
                <div className="mt-5 flex justify-around">
                    <div className="h-80 w-56 flex flex-col justify-center items-center">
                        <div className="bg-white shadow-md rounded-3xl h-80 relative overflow-hidden mt-10">
                            <img
                                src="src/assets/profile.png"
                                alt="Profile"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className="text-center mt-2">
                            <p className="font-bold text-lg">
                                Olivia Grace
                            </p>
                            {/*<p className="text-lg">olivia@gmail.com</p>*/}
                        </div>
                        <div className="flex">
                            <div className="bg-white rounded-xl flex items-center mt-5">

                                <a href="#linkedin" target="_blank" rel="noopener noreferrer">
                                    <img src="/src/assets/linkedin.png" alt="LinkedIn" className="w-20 h-20"/>
                                </a>

                                <a href="#github" target="_blank" rel="noopener noreferrer">
                                    <img src="/src/assets/github.png" alt="GitHub" className="w-12 h-12"/>
                                </a>

                                <a href="#twitter" target="_blank" rel="noopener noreferrer">
                                    <img src="/src/assets/twitter.png" alt="Twitter" className="w-12 h-12"/>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-3/5 flex flex-col justify-evenly text-xl font-semibold">
                        <div className="flex justify-around">
                            <div className="w-4/5">
                                <List
                                    size="small"
                                    className="shadow-md"
                                    // header={<div>Header</div>}
                                    // footer={<div>Footer</div>}
                                    bordered
                                    dataSource={data}
                                    renderItem={(item) => <List.Item>{item}</List.Item>}
                                />
                                <br/>
                                <List
                                    size="small"
                                    className="shadow-md"
                                    // header={<div>Header</div>}
                                    // footer={<div>Footer</div>}
                                    bordered
                                    dataSource={data1}
                                    renderItem={(item) => <List.Item>{item}</List.Item>}
                                />

                                {/* <Card
                                    style={{
                                        width: 300,
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        paddingLeft: 20,
                                    }}
                                >
                                    <p>Email: olivia@gmail.com</p>
                                    <p>Phone: 071 3456987</p>
                                    <p>Address: 123 Main St, Kandy</p>
                                    <p>Country: Sri Lanka</p>
                                </Card>
                                <br />
                                <Card
                                    style={{
                                        width: 300,
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        paddingLeft: 20,
                                    }}
                                >
                                    <p>Age: 30</p>
                                    <p>Date of Birth: 1994-09-10</p>
                                    <p>Gender: Female</p>
                                    <p>University: UCSC</p>
                                </Card> */}
                            </div>

                        </div>
                        {/* <div className="flex justify-center mt-5">
                            <Button className="w-25" type="primary">Edit Profile</Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

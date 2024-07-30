// // import React from 'react';
// import {Button, Divider, List} from "antd";
// // import {Card} from "antd";
// // const {  Image  } = antd;
//
// const data = [
//     'Email: olivia@gmail.com',
//     'Phone: 071 3456987',
//     'Address: 123 Main St, Kandy',
//     'Country: Sri Lanka',
// ];
//
// const data1 = [
//     'Age: 30',
//     'Date of Birth: 1994-09-10',
//     'Gender: Female',
//     'University: UCSC',
// ];
//
// const App = () => {
//     return (
//         <div className="flex justify-center h-screen">
//             <div className="bg-white h-[500px] shadow-2xl w-4/5 mx-20 rounded-3xl mt-10">
//                 <div className="flex items-center pt-5">
//                     <div className="text-2xl font-bold ml-[300px]">
//                         My Profile
//                     </div>
//                     <Button className="w-25 ml-[200px]" type="primary">
//                         Edit Profile
//                     </Button>
//                 </div>
//                 <Divider />
//                 <div className="mt-5 flex justify-around">
//                     <div className="h-80 w-56 flex flex-col justify-center items-center">
//                         <div className="bg-white shadow-md rounded-3xl h-80 relative overflow-hidden mt-10">
//                             <img
//                                 src="src/assets/profile2.png"
//                                 alt="Profile"
//                                 className="object-cover w-full h-full"
//                             />
//                         </div>
//
//                         <div className="text-center mt-2">
//                             <p className="font-bold text-lg">
//                                 Olivia Grace
//                             </p>
//                             {/*<p className="text-lg">olivia@gmail.com</p>*/}
//                         </div>
//                         <div className="flex">
//                             <div className="bg-white rounded-xl flex items-center mt-5 ">
//
//                                 <a href="#linkedin" target="_blank" rel="noopener noreferrer">
//                                     <img src="/src/assets/linkedin1.png" alt="LinkedIn" className="w-20 h-20"/>
//                                 </a>
//
//                                 <a href="#github" target="_blank" rel="noopener noreferrer">
//                                     <img src="/src/assets/github1.png" alt="GitHub" className="w-14 h-14 ml-0"/>
//                                 </a>
//
//                                 <a href="#twitter" target="_blank" rel="noopener noreferrer">
//                                     <img src="/src/assets/twitter1.png" alt="Twitter" className="w-12 h-12"/>
//                                 </a>
//
//                             </div>
//                         </div>
//                     </div>
//                     <div className="p-3 w-3/5 flex flex-col justify-evenly text-xl font-semiboldb ">
//                         <div className="flex justify-around">
//                             <div className="w-4/5 ">
//                                 <List
//                                     size="small"
//                                     className="shadow-md"
//                                     // header={<div>Header</div>}
//                                     // footer={<div>Footer</div>}
//                                     bordered
//                                     dataSource={data}
//                                     renderItem={(item) => <List.Item>{item}</List.Item>}
//                                 />
//                                 <br/>
//                                 <List
//                                     size="small"
//                                     className="shadow-md"
//                                     // header={<div>Header</div>}
//                                     // footer={<div>Footer</div>}
//                                     bordered
//                                     dataSource={data1}
//                                     renderItem={(item) => <List.Item>{item}</List.Item>}
//                                 />
//
//
//
//                             </div>
//
//                         </div>
//
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;
// import { Button, Divider, List } from "antd";
//
// const data = [
//     'Email: olivia@gmail.com',
//     'Phone: 071 3456987',
//     'Address: 123 Main St, Kandy',
//     'Country: Sri Lanka',
// ];
//
// const data1 = [
//     'Age: 30',
//     'Date of Birth: 1994-09-10',
//     'Gender: Female',
//     'University: UCSC',
// ];
//
// const App = () => {
//     return (
//         <div className="flex justify-center h-screen">
//             <div className="bg-white h-[500px] shadow-2xl w-4/6 mx-20 rounded-3xl mt-10">
//                 <div className="flex items-center pt-5">
//                     <div className="text-2xl font-bold ml-[200px]">
//                         My Profile
//                     </div>
//                     <Button className="w-25 ml-[200px]" type="primary">
//                         Edit Profile
//                     </Button>
//                     <div
//                         className="bg-white shadow-md rounded-xl h-10 relative overflow-hidden mt-10 ml-20"> {/* Added ml-10 */}
//                         <img
//                             src="src/assets/gold%20badge.svg"
//                             alt="Profile"
//                             className="object-cover w-full h-full"
//                         />
//                     </div>
//                 </div>
//                 <Divider/>
//                 <div className="mt-5 flex justify-around">
//                     <div className="h-80 w-56 flex flex-col justify-center items-center">
//                         <div
//                             className="bg-white shadow-md rounded-3xl h-80 relative overflow-hidden mt-10 ml-10"> {/* Added ml-10 */}
//                             <img
//                                 src="src/assets/profile2.png"
//                                 alt="Profile"
//                                 className="object-cover w-full h-full"
//                             />
//                         </div>
//
//                         <div className="text-center mt-2">
//                             <p className="font-bold text-lg">
//                                 Olivia Grace
//                             </p>
//                         </div>
//                         <div className="flex">
//                             <div className="bg-white rounded-xl flex items-center mt-5">
//
//                                 <a href="#linkedin" target="_blank" rel="noopener noreferrer">
//                                     <img src="/src/assets/linkedin1.png" alt="LinkedIn" className="w-20 h-20" />
//                                 </a>
//
//                                 <a href="#github" target="_blank" rel="noopener noreferrer">
//                                     <img src="/src/assets/github1.png" alt="GitHub" className="w-14 h-14 ml-0" />
//                                 </a>
//
//                                 <a href="#twitter" target="_blank" rel="noopener noreferrer">
//                                     <img src="/src/assets/twitter1.png" alt="Twitter" className="w-12 h-12" />
//                                 </a>
//
//                             </div>
//                         </div>
//                     </div>
//                     <div className="p-3 w-3/5 flex flex-col justify-evenly text-xl font-semiboldb ">
//                         <div className="flex justify-around">
//                             <div className="w-4/5 ">
//                                 <List
//                                     size="small"
//                                     className="shadow-md"
//                                     bordered
//                                     dataSource={data}
//                                     renderItem={(item) => <List.Item>{item}</List.Item>}
//                                 />
//                                 <br />
//                                 <List
//                                     size="small"
//                                     className="shadow-md"
//                                     bordered
//                                     dataSource={data1}
//                                     renderItem={(item) => <List.Item>{item}</List.Item>}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;
// import { Button, Divider, List } from "antd";
//
// const data = [
//     'Email: olivia@gmail.com',
//     'Phone: 071 3456987',
//     'Address: 123 Main St, Kandy',
//     'Country: Sri Lanka',
// ];
//
// const data1 = [
//     'Age: 30',
//     'Date of Birth: 1994-09-10',
//     'Gender: Female',
//     'University: UCSC',
// ];
//
// const App = () => {
//     return (
//         <div className="flex justify-center h-screen">
//             <div className="bg-white h-[500px] shadow-2xl w-4/6 mx-20 rounded-3xl mt-10">
//                 <div className="flex items-center pt-5">
//                     <div className="text-2xl font-bold mx-auto">
//                         My Profile
//                     </div>
//                     <Button className="ml-auto" type="primary">
//                         Edit Profile
//                     </Button>
//                     <div className="ml-4 mt-2">
//                         <img
//                             src="src/assets/gold%20badge.svg"
//                             alt="Profile"
//                             className="object-cover w-10 h-10"
//                         />
//                     </div>
//                 </div>
//                 <Divider />
//                 <div className="mt-5 flex justify-around">
//                     <div className="flex flex-col items-center">
//                         <div className="bg-white shadow-md rounded-3xl h-80 w-56 overflow-hidden mt-10">
//                             <img
//                                 src="src/assets/profile2.png"
//                                 alt="Profile"
//                                 className="object-cover w-full h-full"
//                             />
//                         </div>
//
//                         <div className="text-center mt-2">
//                             <p className="font-bold text-lg">
//                                 Olivia Grace
//                             </p>
//                         </div>
//                         <div className="flex mt-5 space-x-4">
//                             <a href="#linkedin" target="_blank" rel="noopener noreferrer">
//                                 <img src="/src/assets/linkedin1.png" alt="LinkedIn" className="w-10 h-10" />
//                             </a>
//
//                             <a href="#github" target="_blank" rel="noopener noreferrer">
//                                 <img src="/src/assets/github1.png" alt="GitHub" className="w-10 h-10" />
//                             </a>
//
//                             <a href="#twitter" target="_blank" rel="noopener noreferrer">
//                                 <img src="/src/assets/twitter1.png" alt="Twitter" className="w-10 h-10" />
//                             </a>
//                         </div>
//                     </div>
//                     <div className="p-3 w-3/5 text-xl font-semibold">
//                         <div className="space-y-4">
//                             <List
//                                 size="small"
//                                 className="shadow-md"
//                                 bordered
//                                 dataSource={data}
//                                 renderItem={(item) => <List.Item>{item}</List.Item>}
//                             />
//                             <List
//                                 size="small"
//                                 className="shadow-md"
//                                 bordered
//                                 dataSource={data1}
//                                 renderItem={(item) => <List.Item>{item}</List.Item>}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;
import { Button, Divider, List } from "antd";
import {Link} from "react-router-dom";

const data = [
    'Company Name: WSO2',
    'Company Address: No:10,MainStreet,Colombo.',
    'Contact Number: 011-25437654',
    'Company Email: WSO2@gmail.com',
];

const data1 = [
    'Biography: pivotal partner in our API-first strategy, collaboratively built a scalable platform that transformed our postal business ',
    'Play games added to the event : We are going to give small prizes to winners in out install games.',

];

const App = () => {
    return (
        <div className="flex justify-center h-screen">
            <div className="bg-white h-[500px] shadow-2xl w-4/6 mx-20 rounded-3xl mt-10">
                <div className="flex items-center pt-5 justify-between px-10">
                    <div className="text-2xl font-bold">
                        My Profile
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4">
                            <img
                                src="src/assets/gold%20badge.svg"
                                alt="Profile"
                                className="object-cover w-20 h-20"
                            />
                        </div>
                        <Link to="/edit_sp_profile">
                            <Button    type="primary" style={{ backgroundColor: '#12086f', borderColor: '#12086f' }}>
                                Edit Profile
                            </Button>
                        </Link>
                    </div>
                </div>
                <Divider />
                <div className="mt-5 flex justify-around">
                    <div className="flex flex-col items-center">
                        <div className="bg-white shadow-md rounded-3xl h-50 w-56 overflow-hidden mt-10">
                            <img
                                src="src/assets/profile2.png"
                                alt="Profile"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className="text-center mt-2">
                            <p className="font-bold text-lg">
                                WSO2
                            </p>
                        </div>
                        <div className="flex mt-5 space-x-4">
                            <a href="#linkedin" target="_blank" rel="noopener noreferrer">
                                <img src="/src/assets/linkedin1.png" alt="LinkedIn" className="w-10 h-10" />
                            </a>

                            <a href="#github" target="_blank" rel="noopener noreferrer">
                                <img src="/src/assets/github1.png" alt="GitHub" className="w-10 h-10" />
                            </a>

                            <a href="#twitter" target="_blank" rel="noopener noreferrer">
                                <img src="/src/assets/twitter1.png" alt="Twitter" className="w-8 h-9" />
                            </a>
                        </div>
                    </div>
                    <div className="p-3 w-3/5 text-xl font-semibold">
                        <div className="space-y-4">
                            <List
                                size="small"
                                className="shadow-md"
                                bordered
                                dataSource={data}
                                renderItem={(item) => <List.Item>{item}</List.Item>}
                            />
                            <List
                                size="small"
                                className="shadow-md"
                                bordered
                                dataSource={data1}
                                renderItem={(item) => <List.Item>{item}</List.Item>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;


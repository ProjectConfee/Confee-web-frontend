
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
            <div className="bg-white h-[500px] shadow-2xl w-7/8 mx-20 rounded-3xl mt-20">
                <div className="flex items-center pt-5 justify-between px-10">
                    <div className="text-2xl font-bold">
                        My Profile
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4">
                            <img
                                src="src/assets/gold_badge.jpeg"
                                alt="Profile"
                                className="object-cover w-20 h-20"
                            />
                        </div>
                        <Link to="/edit_sp_profile">
                            <Button    type="primary" style={{ backgroundColor: '#3572EF', borderColor: '#3572EF' }}>
                                Edit Profile
                            </Button>
                        </Link>
                    </div>
                </div>
                <Divider />
                <div className="mt-5 flex justify-around">
                    <div className="flex flex-col items-center">
                        <div className="bg-white shadow-md rounded-3xl h-50 w-56 overflow-hidden mt-2">
                            <img
                                src="src/assets/profile_final.png"
                                alt="Profile"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className="text-center mt-0">
                            <p className="font-bold text-lg">
                                WSO2
                            </p>
                        </div>
                        <div className="flex space-x-4">
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


import event from "../../assets/icter_logo.png";
// import {Divider, QRCode, Typography} from "antd";

import {Button, Divider, QRCode, Typography} from "antd";

const { Title,Text } = Typography;

const App = () => (

    <>
        {/*<div className=" bg-white  rounded-lg shadow-lg p-2">*/}
        <div className="  rounded-3xl shadow-lg p-8 "
             style={{background: 'white'}}>

            <div className={"flex flex-1 mb-8"}>
                <div className=" flex justify-start">
                    <img
                        src={event}
                        alt="Event Post"
                    />
                </div>
                <div className="flex flex-1 justify-center items-center">
                    <Title level={3}>ICTer International Conference </Title>
                </div>
            </div>

            <div className="flex gap-28">
                <div>
                    <div>
                        <Text className={"font-bold"} style={{color: '#878787'}}>Transaction ID</Text>
                    </div>
                    <div>
                        <Title level={5}>14236789</Title>
                    </div>

                    <div>
                        <Text className={"font-bold"} style={{color: '#878787'}}>Investment</Text>
                    </div>
                    <div>
                        <Title level={5}>Rs.30000.00</Title>
                    </div>

                    <Divider></Divider>
                    <div>
                        <Text className={"font-bold"} style={{color: '#878787'}}> Conference Details</Text>
                    </div>
                    <div>
                        <Title level={5}>8th - 9th of November</Title>
                    </div>

                    <div>
                        <Title level={5}>8.00 AM - 5.00 PM</Title>
                    </div>

                    <div>
                        <Title level={5}>University of Colombo School of Computing</Title>
                    </div>


                    <Divider></Divider>
                    <div>
                        <Text className={"font-bold"} style={{color: '#878787'}}>Participant Details </Text>
                    </div>
                    <div>
                        <Title level={5}>Viraji Dewmini</Title>
                    </div>

                    <div>
                        <Title level={5}>University of Peradeniya</Title>
                    </div>

                </div>

                <div>

                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <QRCode
                        size={400}
                        style={{
                            marginBottom: 16,
                        }}

                        value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    />
                </div>

            </div>
        </div>
        <div className="flex justify-end mt-3 gap-4">
            <div className="flex ">
                <Button type="primary" size="large">Print</Button>
            </div>
            <div className="flex">
                <Button type="primary" size="large">Download</Button>
            </div>
        </div>


    </>
);

export default App

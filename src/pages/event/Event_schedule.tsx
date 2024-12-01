import {Button, Card, Divider, Typography} from "antd";
import {faClock, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import speaker from "../../assets/Speaker_1.jpg";
import speaker_2 from "../../assets/Speaker_2.jpg";
import speaker_3 from "../../assets/Speaker_3.jpg";
import React, {useEffect} from "react";
import axios from "axios";


const { Title,Text } = Typography;

interface prop{
    id:string|undefined
}
const App:React.FC<prop> = ({id}) => {

    useEffect(() => {
        // Fetch workshop data from API
        const token = localStorage.getItem("authToken");
        if (token) {
            axios.get(`http://localhost:8080/api/v1/admin/workshop/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(response => {
                    console.log(response.data)


                })
                .catch(error => console.error("Error fetching workshops:", error));
        } else {
            console.error("Token is missing or invalid");
        }
    }, []);
    return(
        <>


            <div className="col-span-2 flex">
                <Title level={3}>20th of November 2024</Title>

            </div>
            <div className={"flex w-full justify-end"}>
                <Button type="primary" size="middle" >Go To Current Session</Button>
            </div>

            <div className={"p-4"}>
                <div>
                    <div className={"flex flex-row"}>
                        <div className={" flex min-w-20 items-center"}>
                            <Text className={"text-base"}>7.00 AM</Text>
                        </div>

                        <Divider className={"min-w-52"}></Divider>

                    </div>
                    <Card
                        style={{
                            marginLeft:'80px',
                            width:'92%',
                            backgroundColor:'#F2F3F7',


                        }}
                        bodyStyle={{ padding: 10 }}
                        className={"!p-0"}
                    >
                        <div className={"flex flex-row justify-between"}>
                            <div className={"flex flex-col"}>
                                <div>
                                    <FontAwesomeIcon
                                        icon={faClock}
                                        style={{color: '#878787'}}
                                    />
                                    <Text className={"text-base ml-3"}>7.30 AM</Text>
                                </div>

                                <div>
                                    <Title level={5} style={{color: "#060C93"}}>Registration</Title>
                                </div>

                            </div>

                            <div className={"flex items-center gap-4"}>
                                <Button type="primary" size="large" style={{backgroundColor: '#007bff',cursor: 'not-allowed'}}>Completed</Button>
                            </div>
                        </div>

                    </Card>
                </div>


                <div className={"flex flex-row"}>
                    <div className={" flex min-w-20 items-center"}>
                        <Text className={"text-base"}>8.00 AM</Text>
                    </div>

                    <Divider className={"min-w-52"}></Divider>

                </div>
                <Card
                    style={{
                        marginLeft:'80px',
                        width:'92%',
                        backgroundColor:'#F2F3F7',


                    }}
                    bodyStyle={{ padding: 10 }}
                    className={"!p-0"}
                >
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{color: '#878787'}}
                                />
                                <Text className={"text-base ml-3"}>8.00 AM</Text>
                            </div>

                            <div>
                                <Title level={5} style={{color: "#060C93"}}>Inauguration and Introduction of ICTer 2023</Title>
                            </div>

                        </div>

                        <div className={"flex items-center gap-4"}>
                            <Button type="primary" size="large" style={{backgroundColor: '#007bff',cursor: 'not-allowed'}}>Completed</Button>
                        </div>
                    </div>

                </Card>

                <Card
                    style={{
                        marginLeft:'80px',
                        width:'92%',
                        backgroundColor:'#F2F3F7',
                        marginTop:10

                    }}
                    bodyStyle={{ padding: 10 }}
                    className={"!p-0"}
                >
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{color: '#878787'}}
                                />
                                <Text className={"text-base ml-3"}>8.30 AM</Text>
                            </div>

                            <div>
                                <Title level={5} style={{color: "#060C93"}}>Welcome address by the Conference Chair</Title>
                            </div>

                        </div>

                        <div className={"flex items-center gap-4"}>

                            <Button type="primary" size="large" style={{backgroundColor: '#ffc107'}}>Ongoing</Button>
                        </div>
                    </div>

                </Card>

                <Card
                    style={{
                        marginLeft:'80px',
                        width:'92%',
                        backgroundColor:'#F2F3F7',
                        marginTop:10

                    }}
                    bodyStyle={{ padding: 10 }}
                    className={"!p-0"}
                >
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{color: '#878787'}}
                                />
                                <Text className={"text-base ml-3"}>8.35 AM</Text>
                            </div>

                            <div>
                                <Title level={5} style={{color: "#060C93"}}>Address by the UCSC Director </Title>
                            </div>

                        </div>

                        <div className={"flex items-center gap-4"}>
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{color:'#406ed6'}}
                                size={'xl'}
                            />

                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{color:'red'}}
                                size={'xl'}
                            />
                            <Button type="primary" size="large" style={{backgroundColor: '#28a745'}}>Start</Button>
                        </div>
                    </div>

                </Card>

                <Card
                    style={{
                        marginLeft:'80px',
                        width:'92%',
                        backgroundColor:'#F2F3F7',
                        marginTop:10

                    }}
                    bodyStyle={{ padding: 10 }}
                    className={"!p-0"}
                >
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{color: '#878787'}}
                                />
                                <Text className={"text-base ml-3"}>8.40 AM</Text>
                            </div>

                            <div>
                                <Title level={5} style={{color: "#060C93"}}>Address by the Vice Chancellor</Title>
                            </div>

                        </div>

                        <div className={"flex items-center gap-4"}>
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{color:'#406ed6'}}
                                size={'xl'}
                            />

                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{color:'red'}}
                                size={'xl'}
                            />
                            <Button type="primary" size="large" style={{backgroundColor: '#28a745'}}>Start</Button>
                        </div>
                    </div>

                </Card>

                <Card
                    style={{
                        marginLeft:'80px',
                        width:'92%',
                        backgroundColor:'#F2F3F7',
                        marginTop:10

                    }}
                    bodyStyle={{ padding: 10 }}
                    className={"!p-0"}
                >
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{color: '#878787'}}
                                />
                                <Text className={"text-base ml-3"}>8.50 AM</Text>
                            </div>

                            <div>
                                <Title level={5} style={{color: "#060C93"}}>Address by the Chief Guest</Title>
                            </div>

                        </div>

                        <div className={"flex items-center gap-4"}>
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{color:'#406ed6'}}
                                size={'xl'}
                            />

                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{color:'red'}}
                                size={'xl'}
                            />
                            <Button type="primary" size="large" style={{backgroundColor: '#28a745'}}>Start</Button>
                        </div>
                    </div>

                </Card>

                <div className={"flex flex-row"}>
                    <div className={" flex min-w-20 items-center"}>
                        <Text className={"text-base"}>9.00 AM</Text>
                    </div>

                    <Divider className={"min-w-52"}></Divider>
                </div>

                <Card
                    style={{
                        marginLeft:'80px',
                        width:'92%',
                        backgroundColor:'#F2F3F7',
                        marginTop:10

                    }}
                    bodyStyle={{ padding: 10 }}
                    className={"!p-0"}
                >
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{color: '#878787'}}
                                />
                                <Text className={"text-base ml-3"}>9.00 AM</Text>
                            </div>

                            <div className={"flex"}>
                                <div>
                                    <img
                                        src={speaker}
                                        alt="No Event Scheduled"
                                        className="mr-8 rounded-full w-24 h-24"
                                    />
                                </div>
                                <div>
                                    <div>
                                        <Title level={5} style={{color: "#060C93"}}>Keynote: Dr. Ruvan Weerasinghe</Title>
                                    </div>
                                    <div>
                                        <Text className={"text-base"} style={{color: "#060C93"}}>University of Colombo School of Computing</Text>
                                    </div>
                                    <div>
                                        <Text className={"font-bold"} style={{color:'#878787'}}>When Machines Go Rogue: The Risks and Rewards of AI Hallucination</Text>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className={"flex items-center gap-4"}>
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{color: '#406ed6'}}
                                size={'xl'}
                            />

                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{color:'red'}}
                                size={'xl'}
                            />
                            <Button type="primary" size="large" style={{backgroundColor: '#28a745'}}>Start</Button>
                        </div>
                    </div>

                </Card>

                <div className={"flex flex-row"}>
                    <div className={" flex min-w-20 items-center"}>
                        <Text className={"text-base"}>10.00 AM</Text>
                    </div>

                    <Divider className={"min-w-52"}></Divider>
                </div>

                <Card
                    style={{
                        marginLeft:'80px',
                        width:'92%',
                        backgroundColor:'#F2F3F7',
                        marginTop:10

                    }}
                    bodyStyle={{ padding: 10 }}
                    className={"!p-0"}
                >
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{color: '#878787'}}
                                />
                                <Text className={"text-base ml-3"}>10.00 AM</Text>
                            </div>

                            <div>
                                <Title level={5} style={{color: "#060C93"}}>Tea Break</Title>
                            </div>

                        </div>

                        <div className={"flex items-center gap-4"}>
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{color:'#406ed6'}}
                                size={'xl'}
                            />

                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{color:'red'}}
                                size={'xl'}
                            />
                            <Button type="primary" size="large" style={{backgroundColor: '#28a745'}}>Start</Button>
                        </div>
                    </div>

                </Card>

                <Card
                    style={{
                        marginLeft:'80px',
                        width:'92%',
                        backgroundColor:'#F2F3F7',
                        marginTop:10

                    }}
                    bodyStyle={{ padding: 10 }}
                    className={"!p-0"}
                >
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{color: '#878787'}}
                                />
                                <Text className={"text-base ml-3"}>10.30 AM</Text>
                            </div>

                            <div>
                                <Title level={5} style={{color: "#060C93"}}>Tech Talk: Cambio Software Engineering</Title>
                                <Text className={"font-bold"} style={{color:'#878787'}}>Demystify Zero Downtime Upgrades</Text>
                            </div>

                        </div>

                        <div className={"flex items-center gap-4"}>
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{color:'#406ed6'}}
                                size={'xl'}
                            />

                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{color:'red'}}
                                size={'xl'}
                            />
                            <Button type="primary" size="large" style={{backgroundColor: '#28a745'}}>Start</Button>
                        </div>
                    </div>

                </Card>

                <Card
                    style={{
                        marginLeft:'80px',
                        width:'92%',
                        backgroundColor:'#F2F3F7',
                        marginTop:10

                    }}
                    bodyStyle={{ padding: 10 }}
                    className={"!p-0"}
                >
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{color: '#878787'}}
                                />
                                <Text className={"text-base ml-3"}>10.50 AM</Text>
                            </div>

                            <div>
                                <Title level={5} style={{color: "#060C93"}}>Paper Presentations (Session 01)</Title>
                            </div>

                        </div>

                        <div className={"flex items-center gap-4"}>
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{color:'#406ed6'}}
                                size={'xl'}
                            />

                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{color:'red'}}
                                size={'xl'}
                            />
                            <Button type="primary" size="large" style={{backgroundColor: '#28a745'}}>Start</Button>
                        </div>
                    </div>

                </Card>


                <div className={"flex flex-row"}>
                    <div className={" flex min-w-20 items-center"}>
                        <Text className={"text-base"}>11.00 AM</Text>
                    </div>

                    <Divider className={"min-w-52"}></Divider>
                </div>

                <Card
                    style={{
                        marginLeft:'80px',
                        width:'92%',
                        backgroundColor:'#F2F3F7',
                        marginTop:10

                    }}
                    bodyStyle={{ padding: 10 }}
                    className={"!p-0"}
                >
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{color: '#878787'}}
                                />
                                <Text className={"text-base ml-3"}>11.50 AM</Text>
                            </div>

                            <div>
                                <Title level={5} style={{color: "#060C93"}}>Tech Talk: Altria Consulting & WIA Systems Inc.</Title>
                                <Text className={"font-bold"} style={{color:'#878787'}}>Cloud ERP: The Benefits And Challenges Of Adopting Cloud-Based Solutions</Text>
                            </div>

                        </div>

                        <div className={"flex items-center gap-4"}>
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{color:'#406ed6'}}
                                size={'xl'}
                            />

                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{color:'red'}}
                                size={'xl'}
                            />
                            <Button type="primary" size="large" style={{backgroundColor: '#28a745'}}>Start</Button>
                        </div>
                    </div>

                </Card>

                <div className={"flex flex-row"}>
                    <div className={" flex min-w-20 items-center"}>
                        <Text className={"text-base"}>12.00 AM</Text>
                    </div>

                    <Divider className={"min-w-52"}></Divider>
                </div>


                <Card
                    style={{
                        marginLeft:'80px',
                        width:'92%',
                        backgroundColor:'#F2F3F7',
                        marginTop:10

                    }}
                    bodyStyle={{ padding: 10 }}
                    className={"!p-0"}
                >
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{color: '#878787'}}
                                />
                                <Text className={"text-base ml-3"}>12.10 PM</Text>
                            </div>

                            <div className={"flex"}>
                                <div>
                                    <img
                                        src={speaker_2}
                                        alt="No Event Scheduled"
                                        className="mr-8 rounded-full w-24 h-24"
                                    />
                                </div>
                                <div>
                                    <div>
                                        <Title level={5} style={{color: "#060C93"}}>Keynote: Prof. Timothy Baldwin</Title>
                                    </div>
                                    <div>
                                        <Text className={"text-base"} style={{color: "#060C93"}}>Mohamed bin Zayed University of Artificial Intelligence</Text>
                                    </div>
                                    <div>
                                        <Text className={"font-bold"} style={{color:'#878787'}}>Fairness in Artificial Intelligence</Text>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className={"flex items-center gap-4"}>
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{color: '#406ed6'}}
                                size={'xl'}
                            />

                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{color:'red'}}
                                size={'xl'}
                            />
                            <Button type="primary" size="large" style={{backgroundColor: '#28a745'}}>Start</Button>
                        </div>
                    </div>

                </Card>


                <div className={"flex flex-row"}>
                    <div className={" flex min-w-20 items-center"}>
                        <Text className={"text-base"}>01.00 PM</Text>
                    </div>

                    <Divider className={"min-w-52"}></Divider>
                </div>

                <Card
                    style={{
                        marginLeft:'80px',
                        width:'92%',
                        backgroundColor:'#F2F3F7',
                        marginTop:10

                    }}
                    bodyStyle={{ padding: 10 }}
                    className={"!p-0"}
                >
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{color: '#878787'}}
                                />
                                <Text className={"text-base ml-3"}>1.10 PM</Text>
                            </div>

                            <div>
                                <Title level={5} style={{color: "#060C93"}}>Lunch Break</Title>
                            </div>

                        </div>

                        <div className={"flex items-center gap-4"}>
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{color:'#406ed6'}}
                                size={'xl'}
                            />

                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{color:'red'}}
                                size={'xl'}
                            />
                            <Button type="primary" size="large" style={{backgroundColor: '#28a745'}}>Start</Button>
                        </div>
                    </div>

                </Card>

                <div className={"flex flex-row"}>
                    <div className={" flex min-w-20 items-center"}>
                        <Text className={"text-base"}>02.00 PM</Text>
                    </div>

                    <Divider className={"min-w-52"}></Divider>
                </div>

                <Card
                    style={{
                        marginLeft:'80px',
                        width:'92%',
                        backgroundColor:'#F2F3F7',
                        marginTop:10

                    }}
                    bodyStyle={{ padding: 10 }}
                    className={"!p-0"}
                >
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{color: '#878787'}}
                                />
                                <Text className={"text-base ml-3"}>2.10 AM</Text>
                            </div>

                            <div>
                                <Title level={5} style={{color: "#060C93"}}>Tech Talk: Softlogic Information Technologies (Pvt) Ltd & Dell Technologies</Title>
                                <Text className={"font-bold"} style={{color:'#878787'}}>EDGE, NFVI and Telecom Future</Text>
                            </div>

                        </div>

                        <div className={"flex items-center gap-4"}>
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{color:'#406ed6'}}
                                size={'xl'}
                            />

                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{color:'red'}}
                                size={'xl'}
                            />
                            <Button type="primary" size="large" style={{backgroundColor: '#28a745'}}>Start</Button>
                        </div>
                    </div>

                </Card>

                <Card
                    style={{
                        marginLeft:'80px',
                        width:'92%',
                        backgroundColor:'#F2F3F7',
                        marginTop:10

                    }}
                    bodyStyle={{ padding: 10 }}
                    className={"!p-0"}
                >
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{color: '#878787'}}
                                />
                                <Text className={"text-base ml-3"}>2.30 AM</Text>
                            </div>

                            <div>
                                <Title level={5} style={{color: "#060C93"}}>Paper Presentations (Session 02)</Title>
                            </div>

                        </div>

                        <div className={"flex items-center gap-4"}>
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{color:'#406ed6'}}
                                size={'xl'}
                            />

                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{color:'red'}}
                                size={'xl'}
                            />
                            <Button type="primary" size="large" style={{backgroundColor: '#28a745'}}>Start</Button>
                        </div>
                    </div>

                </Card>

                <div className={"flex flex-row"}>
                    <div className={" flex min-w-20 items-center"}>
                        <Text className={"text-base"}>03.00 PM</Text>
                    </div>

                    <Divider className={"min-w-52"}></Divider>
                </div>

                <Card
                    style={{
                        marginLeft:'80px',
                        width:'92%',
                        backgroundColor:'#F2F3F7',
                        marginTop:10

                    }}
                    bodyStyle={{ padding: 10 }}
                    className={"!p-0"}
                >
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{color: '#878787'}}
                                />
                                <Text className={"text-base ml-3"}>3.35 PM</Text>
                            </div>

                            <div className={"flex"}>
                                <div>
                                    <img
                                        src={speaker_3}
                                        alt="No Event Scheduled"
                                        className="mr-8 rounded-full w-24 h-24"
                                    />
                                </div>
                                <div>
                                    <div>
                                        <Title level={5} style={{color: "#060C93"}}>Keynote: Italo Vignoli</Title>
                                    </div>
                                    <div>
                                        <Text className={"text-base"} style={{color: "#060C93"}}>Associazione LibreItalia</Text>
                                    </div>
                                    <div>
                                        <Text className={"font-bold"} style={{color:'#878787'}}>LibreOffice Technology, a FOSS platform for personal productivity</Text>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className={"flex items-center gap-4"}>
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{color: '#406ed6'}}
                                size={'xl'}
                            />

                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{color:'red'}}
                                size={'xl'}
                            />
                            <Button type="primary" size="large" style={{backgroundColor: '#28a745'}}>Start</Button>
                        </div>
                    </div>

                </Card>

                <div className={"flex flex-row"}>
                    <div className={" flex min-w-20 items-center"}>
                        <Text className={"text-base"}>04.00 PM</Text>
                    </div>

                    <Divider className={"min-w-52"}></Divider>
                </div>

                <Card
                    style={{
                        marginLeft:'80px',
                        width:'92%',
                        backgroundColor:'#F2F3F7',
                        marginTop:10

                    }}
                    bodyStyle={{ padding: 10 }}
                    className={"!p-0"}
                >
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{color: '#878787'}}
                                />
                                <Text className={"text-base ml-3"}>4.35 AM</Text>
                            </div>

                            <div>
                                <Title level={5} style={{color: "#060C93"}}>Tea Break & Reception</Title>
                            </div>

                        </div>

                        <div className={"flex items-center gap-4"}>
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{color:'#406ed6'}}
                                size={'xl'}
                            />

                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{color:'red'}}
                                size={'xl'}
                            />
                            <Button type="primary" size="large" style={{backgroundColor: '#28a745'}}>Start</Button>
                        </div>
                    </div>

                </Card>

            </div>

        </>
    );

}


export default App

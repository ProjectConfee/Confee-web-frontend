import {Button, Card, Divider, Input, message, Modal, TimePicker, Typography} from "antd";
import {faClock,} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useEffect, useState} from "react";
import axios from "axios";
import { Dayjs } from 'dayjs';

const { Title,Text } = Typography;

interface prop{
    id:string|undefined
}
const App:React.FC<prop> = ({id}) => {

    const [sessions,setSessions]=useState<prop[]>()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [startTime, setStartTime] = useState<Dayjs | null>(null);
    const [session, setSession] = useState<string>("");
    const [time,setTime]=useState<string|null>(null)
    const [conferenceId,setConferenceId]=useState<number>(0)
    const [reload,setReload]=useState(false)

    const showModal = (id:number) => {
        setIsModalOpen(true);
        setConferenceId(id)
    };
    const handleOk = async () => {
        console.log("time", time)
        console.log("session", session)

        const data = {
            "event": session,
            "startTime": time,
            "conferenceId": conferenceId
        }


        console.log("data ",data)

        const token = localStorage.getItem("authToken");

        if (!token) {
            message.error("No token found, please log in.");
            return;
        }

        try {
            const response = await axios.post(`http://localhost:8080/admin/conferenceSchedules`, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                setReload(true)
                setStartTime(null)
                setSession("")
                message.success('Event added successfully');
            }
        } catch (error) {
            message.error('Event addition failed');
        }


        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleTimeChange = (time: Dayjs | null) => {
        if (time) {
            const formattedTime = time.format("HH:mm:ss"); // Convert to desired format
            console.log("Formatted Time:", formattedTime);
            setStartTime(time);
            setTime(formattedTime)// Optionally keep the Dayjs object in state
        } else {
            setStartTime(null);
            setTime(null)
        }
    };

    const handleSessionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSession(e.target.value); // Updates session state without re-rendering the input
    };

    useEffect(() => {
        // Fetch workshop data from API
        const token = localStorage.getItem("authToken");
        if (token) {
            axios.get(`http://localhost:8080/admin/conferenceSchedules/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(response => {
                    console.log(response.data)
                    setSessions(response.data)


                })
                .catch(error => console.error("Error fetching workshops:", error));
        } else {
            console.error("Token is missing or invalid");
        }
        setReload(false)
    }, [reload]);

    type SessionCardProps = {
        id: number,
        event:string ,
        startTime:string,
        status:string ,
        conferenceId:number
    };

    type prop={
        events:SessionCardProps[]
    }




    const Schedule : React.FC<prop> = ({events })=>{
        useEffect(() => {
            console.log("Events:", events);
        }, [events]);
        return (

            <div>

                <div className="col-span-2 flex w-full">
                    {/*<Title level={3} className="w-9/12">{date || "Schedule"}</Title>*/}
                    <div className="flex w-3/12 justify-end">
                        <Button type="primary" size="large" onClick={()=>showModal(conferenceId)}>
                            Add Session
                        </Button>
                    </div>
                </div>
                {events .length === 0 ? (
                    <div>
                        <Text className="font-bold">No Sessions Available</Text>
                    </div>
                ) : (
                    <div className="p-4">
                        {events.map((session, index) => (
                            <div key={index}>
                                <SessionDivider time={session.startTime} />
                                <SessionCard
                                    startTime={session.startTime}
                                    event={session.event}
                                    status={session.status}
                                    id={session.id}
                                    conferenceId={conferenceId}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

        );
    }

    const SessionCard: React.FC<SessionCardProps> = ({startTime, event, status}) => {
        return (

            <Card
                style={{
                    marginLeft: "80px",
                    width: "92%",
                    backgroundColor: "#F2F3F7",
                    marginBottom:"12px"
                }}
                bodyStyle={{padding: 10}}
                className={"!p-0"}
            >
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <div>
                            <FontAwesomeIcon icon={faClock} style={{color: "#878787"}}/>
                            <Text className="text-base ml-3">{startTime}</Text>
                        </div>
                        <div>
                            <Title level={5} style={{color: "#060C93"}}>
                                {event}
                            </Title>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            type="primary"
                            size="large"
                            style={{
                                backgroundColor: status === "Completed" ? "#007bff" : "#878787",
                                cursor: "not-allowed",
                            }}
                        >
                            {status}
                        </Button>
                    </div>
                </div>
            </Card>
        );
    };

    type SessionDividerProps = {
        time: string;
    };


    const SessionDivider: React.FC<SessionDividerProps> = ({ time }) => {
        return (
            <div className="flex flex-row">
                <div className="flex min-w-20 items-center">
                    <Text className="text-base">{time}</Text>
                </div>
                <Divider className="min-w-52" />
            </div>
        );
    };

    return(

        <>
            {isModalOpen && (
                <Modal
                    open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                >
                    <div className={"mb-2"}>Start Time</div>
                    <TimePicker
                        value={startTime}
                        onChange={handleTimeChange}
                        format="HH:mm:ss"
                    />

                    <div className={"mb-2 mt-4"}>Session</div>
                    <Input
                        value={session}
                        onChange={handleSessionChange}
                        placeholder="Enter session name"
                    />
                </Modal>
            )}

            {sessions && sessions.map((item, index) => (
                <Schedule key={index} events={item.events} />
            ))}
        </>
    );

}


export default App

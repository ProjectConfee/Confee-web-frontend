"use client"
import {Divider, Typography} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faClock, faCreditCard, faLink, faLocationDot, faUsers} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import axios from "axios";


// import {Link} from "react-router-dom";

const { Title,Text } = Typography;


interface prop{
    id:string|undefined
}

const App :React.FC<prop> = ({id}) => {

    interface Workshop {
        id: number | null;
        day: string;
        date: string | null;
        startTime: string | null;
        endTime: string | null;
        mainTopic: string; // This should match your data structure
        investment: number;
        subTopics: Subtopics[] | null; // Define this according to your actual data structure
    }

    interface Subtopics{
        id: number;
        subTopic:string
    }

    const [type,setType] = useState('');
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [location,setLocation] = useState('');
    const [mapLink,setMapLink] = useState('');
    const [noOfSeat,setNoOfSeat] = useState('');
    const [certificateFrom,setCertificateFrom] = useState('');
    const [lunch,setLunch] = useState('');
    const [post,setPost] = useState('');
    // const [coverPhoto,setCoverPhoto] = useState('');

    const [workshop, setWorkshop] =useState<Workshop[]>();


    useEffect(() => {
        if (workshop) {
            console.log(workshop);  // Logs workshop when it's updated
        }
    }, [workshop]);

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
                    setType(response.data.type)
                    setTitle(response.data.title)
                    setDescription(response.data.description)
                    setLocation(response.data.location)
                    setMapLink(response.data.mapLink)
                    setLunch(response.data.lunch)
                    setNoOfSeat(response.data.noOfSeat)
                    setCertificateFrom(response.data.certificateFrom)
                    setPost(response.data.post)
                    setWorkshop(response.data.workshopDays)


                })
                .catch(error => console.error("Error fetching workshops:", error));
        } else {
            console.error("Token is missing or invalid");
        }
    }, []);


    return(
        <>
            <div className={"flex flex-col"}>
                <div className=" flex bg-white rounded-lg   gap-4 p-8">

                    <div className="w-2/3 ">

                        <div className="mt-2 flex-1">
                            <div>
                                <Title level={5}>Type</Title>
                            </div>
                            <div>
                                <Text className="text-base">{type}</Text>
                            </div>
                            <div>
                                <Title level={5}>Title</Title>
                            </div>
                            <div>
                                <Text className="text-base">{title}</Text>
                            </div>

                            <div className={"mt-3"}>
                                <Title level={5}>Description</Title>
                            </div>
                            <div style={{textAlign: "justify"}}>
                                <Text className="text-base">{description}</Text>
                            </div>

                            <Divider></Divider>
                            {workshop && workshop.map(workshopItem => (
                                <div style={{backgroundColor: '#f5f5f5'}} className="p-4 rounded-lg mb-4"
                                     key={workshopItem.id}>


                                    <div className=" items-center">
                                        <Title level={5} className="mr-2 mt-3">{workshopItem.day}</Title>

                                        <div className=" flex items-center">
                                            <div className={"flex mr-2"}>
                                                <FontAwesomeIcon
                                                    icon={faCalendarDays}

                                                    style={{color: '#878787'}}
                                                />
                                            </div>
                                            <Text style={{color: '#878787'}} className="mr-2 font-bold">Date :</Text>

                                            <div className="flex-1 ">
                                                <Text style={{color: '#878787'}}
                                                      className={"font-bold"}>{workshopItem.date}</Text>
                                            </div>
                                        </div>

                                        <div className=" flex items-center">
                                            <div className={"flex mr-2"}>

                                                <FontAwesomeIcon
                                                    icon={faClock}

                                                    style={{color: '#878787'}}
                                                />
                                            </div>
                                            <Text style={{color: '#878787'}} className="mr-2 font-bold">Time :</Text>

                                            <div className="flex-1 ">
                                                <Text style={{color: '#878787'}}
                                                      className="font-bold">{workshopItem.startTime} to {workshopItem.endTime}</Text>
                                            </div>


                                        </div>


                                        <div className="flex-1 mt-3">
                                            <Title style={{color: '#4C3BCF'}} level={5}>{workshopItem.mainTopic}</Title>
                                        </div>
                                    </div>

                                    <div>
                                        {workshopItem.subTopics && workshopItem.subTopics.length > 0 ? (
                                            <ul className="list-disc pl-5">
                                                {workshopItem.subTopics.map(subTopicItem => (
                                                    <li className="mb-2 text-base" key={subTopicItem.id}>
                                                        {subTopicItem.subTopic}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <Text>No subtopics available</Text>  // Fallback if no subtopics
                                        )}
                                    </div>

                                    <div className=" flex items-center">
                                        <div className={"flex mr-2"}>
                                            <FontAwesomeIcon
                                                icon={faCreditCard}
                                            />
                                        </div>
                                        <Text className="mr-2 font-bold">Investment :</Text>

                                        <div className="flex-1 ">
                                            <Text style={{color: "Red"}}
                                                  className={"font-bold"}>Rs. {workshopItem.investment}</Text>
                                        </div>
                                    </div>

                                </div>
                            ))}

                            <Divider></Divider>


                            <div className=" flex items-center">
                                <div className={"flex mr-2"}>
                                    <FontAwesomeIcon
                                        icon={faLocationDot}

                                    />
                                </div>
                                <Text className="mr-2 font-bold">Venue :</Text>

                                <div className="flex-1">
                                    <Text className={"font-bold"}>{location}</Text>
                                </div>
                            </div>

                            <div className=" flex items-center">
                                <div className={"flex mr-2"}>
                                    <FontAwesomeIcon
                                        icon={faLink}
                                    />
                                </div>
                                <Text className="mr-2 font-bold">Google Map Link :</Text>

                                <div className="flex-1 ">
                                    <a href={mapLink}
                                       className="text-base text-blue-500 underline" target="_blank"
                                       rel="noopener noreferrer">
                                        {mapLink}
                                    </a>
                                </div>
                            </div>

                            <div className=" flex items-center">
                                <div className={"flex mr-2"}>
                                    <FontAwesomeIcon
                                        icon={faUsers}

                                    />
                                </div>
                                <Text className="mr-2 font-bold">No of Seats :</Text>

                                <div className="flex-1">
                                    <Text className={"font-bold"}>{noOfSeat}</Text>
                                </div>
                            </div>


                            <div className="flex-1 mt-3">
                                {lunch ? (
                                    <Text style={{color: 'red'}} className={"font-bold"}>* Lunch & Refreshments are
                                        provided </Text>
                                ) : (
                                    <Text style={{color: 'red'}} className={"font-bold"}>* Lunch & Refreshments are NOT
                                        provided </Text>
                                )}
                            </div>
                        </div>

                    </div>

                    <div className="flex-1 items-start">
                        <div className="mt-10 flex-1">
                            <div className=" flex">
                                <img
                                    src={`http://localhost:8080/${post}`}
                                    alt="Event Post"
                                    className=" rounded-lg h-[400px] w-full"
                                />
                            </div>


                            <div className="mt-2 ">
                                <Title level={5}>Certificates From</Title>
                            </div>
                            <div>
                                <ul className="list-disc pl-5">
                                    <li className="mb-2 text-base">{certificateFrom}</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                {/*<div className={"flex justify-end"}>*/}

                {/*    <Link to="/view_ticket">*/}
                {/*        <Button type="primary" size="large">*/}
                {/*            Buy Ticket*/}
                {/*        </Button>*/}
                {/*    </Link>*/}

                {/*</div>*/}
            </div>

        </>
    );
}



export default App

"use client"
import { Typography} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faClock, faCreditCard, faLink, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import axios from "axios";




const { Text } = Typography;


interface prop{
    id:string|undefined
}

const App :React.FC<prop> = ({id}) => {

    // interface Conference {
    //     id: number | null;
    //     title: string | null;
    //     date: string | null;
    //     startTime: string | null;
    //     endTime: string | null;
    //     location: string;
    //     mapLink: string;// This should match your data structure
    //     investment: number;
    // }

    interface Conference{
        id: number,
        title: string,
        investment: number,
        date: string,
        startTime: string,
        endTime: string,
        location: string,
        mapLink: string,
        lunch: boolean,
        post: string,
        coverPhoto:string
    }


    //
    // const [title,setTitle] = useState('');
    // const [location,setLocation] = useState('');
    // const [mapLink,setMapLink] = useState('');
    // const [lunch,setLunch] = useState('');
    // const [post,setPost] = useState('');

    const [conference,setConference]= useState<Conference>()



    useEffect(() => {
        // Fetch workshop data from API
        const token = localStorage.getItem("authToken");
        if (token) {
            axios.get(`http://localhost:8080/api/v1/admin/conference/all/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(response => {

                    // setTitle(response.data.title)
                    // setLocation(response.data.location)
                    // setMapLink(response.data.mapLink)
                    // setLunch(response.data.lunch)
                    // setPost(response.data.post)
                    setConference(response.data)
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
                            {/*<div>*/}
                            {/*    <Title level={5}>Title</Title>*/}
                            {/*</div>*/}
                            <div>
                                <Text className="font-bold text-4xl">{conference?.title}</Text>
                            </div>

                            <div className=" flex items-center mt-8 text-xl">
                                <div className={"flex mr-2"}>
                                    <FontAwesomeIcon
                                        icon={faCalendarDays}

                                        style={{color: '#878787'}}
                                    />
                                </div>
                                <Text style={{color: '#878787'}} className="mr-2 font-bold text-xl">Date :</Text>

                                <div className="flex-1 text-xl">
                                    <Text style={{color: '#878787'}}
                                          className={"font-bold text-xl"}>{conference?.date}</Text>
                                </div>
                            </div>

                            <div className=" flex items-center text-xl">
                                <div className={"flex mr-2"}>

                                    <FontAwesomeIcon
                                        icon={faClock}

                                        style={{color: '#878787'}}
                                    />
                                </div>
                                <Text style={{color: '#878787'}} className="mr-2 font-bold text-xl">Time :</Text>

                                <div className="flex-1 ">
                                    <Text style={{color: '#878787'}}
                                          className="font-bold text-xl">{conference?.startTime} to {conference?.endTime}</Text>
                                </div>


                            </div>


                            <div className=" flex items-center mt-4 mb-4 text-xl">
                                <div className={"flex mr-2"}>
                                    <FontAwesomeIcon
                                        icon={faCreditCard}
                                    />
                                </div>
                                <Text className="mr-2 font-bold text-xl">Investment : Rs.</Text>

                                <div className="flex-1 ">
                                    <Text style={{color: "Red"}}
                                          className={"font-bold text-xl"}>{conference?.investment}.00</Text>
                                </div>
                            </div>

                            <div className={"flex flex-col justify-end h-full"}>
                                <div className=" flex items-center">
                                    <div className={"flex mr-2"}>
                                        <FontAwesomeIcon
                                            icon={faLocationDot}

                                        />
                                    </div>
                                    <Text className="mr-2 font-bold">Venue :</Text>

                                    <div className="flex-1">
                                        <Text className={"font-bold"}>{conference?.location}</Text>
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
                                        <a href={conference?.mapLink}
                                           className="text-base text-blue-500 underline" target="_blank"
                                           rel="noopener noreferrer">
                                            {conference?.mapLink}
                                        </a>
                                    </div>
                                </div>


                                {/*<div className=" flex items-center">*/}
                                {/*    <div className={"flex mr-2"}>*/}
                                {/*        <FontAwesomeIcon*/}
                                {/*            icon={faUsers}*/}

                                {/*        />*/}
                                {/*    </div>*/}
                                {/*    <Text className="mr-2 font-bold">No of Seats :</Text>*/}

                                {/*    <div className="flex-1">*/}
                                {/*        <Text className={"font-bold"}>{noOfSeat}</Text>*/}
                                {/*    </div>*/}
                                {/*</div>*/}


                                <div className="flex-1 mt-3">
                                    {conference?.lunch ? (
                                        <Text style={{color: 'red'}} className={"font-bold"}>* Lunch & Refreshments are
                                            provided </Text>
                                    ) : (
                                        <Text style={{color: 'red'}} className={"font-bold"}>* Lunch & Refreshments are
                                            NOT
                                            provided </Text>
                                    )}
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="flex-1 items-start">
                        <div className="mt-10 flex-1">
                            <div className=" flex">
                                <img
                                    src={`http://localhost:8080/${conference?.post}`}
                                    alt="Event Post"
                                    className=" rounded-lg h-[400px] w-full"
                                />
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

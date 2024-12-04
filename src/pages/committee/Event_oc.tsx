"use client"
import {Button, Divider, message, Modal, Radio, RadioChangeEvent, Typography} from "antd";
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

    interface PaymentRequest {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        address: string;
        city: string;
        country: string;
        orderId: string;
        items: string;
        currency: string;
        amount: number;
        hash?: string;
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
    const [day1,setDay1]=useState(0);
    const [day2,setDay2]=useState(0);
    const [payAmount, setPayAmount]=useState(0);

    const onChange=(e: RadioChangeEvent)=> {
        setPayAmount(e.target.value)
    }



    const [workshop, setWorkshop] =useState<Workshop[]>();


    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        handlePayment();
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const popup = (
        <Modal title="Select Participant Type" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Radio.Group onChange={onChange} >
                {day1 !=0 ?<Radio value={day1}>For First Day only</Radio> :""}
                {day2 !=0?<Radio value={day2}>For All days</Radio>:""}
            </Radio.Group>
        </Modal>
    )


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

                    response.data.workshopDays?.map((item: { investment: React.SetStateAction<number>; }, index: number)=>{
                        if(index==0){
                            setDay1(item.investment)
                        }else{
                            setDay2(item.investment)
                        }
                    })

                   // console.log(setWorkshopId(response.data.workshopDays.id)) ;


                })
                .catch(error => console.error("Error fetching workshops:", error));
        } else {
            console.error("Token is missing or invalid");
        }
    }, []);


    const handlePayment = async () => {
        try {
            // Sample payment data
            const paymentRequest: PaymentRequest = {
                firstName: "John",
                lastName: "Doe",
                email: "johndoe@example.com",
                phone: "0771234567",
                address: "No.1, Main Street",
                city: "Colombo",
                country: "Sri Lanka",
                orderId: `${Date.now()}`,
                items: "Sample Items",
                currency: "LKR",
                amount: payAmount,
            };

            const token = localStorage.getItem("authToken");

            if (!token) {
                message.error("No token found, please log in.");
                return;
            }

            // Call the backend API to initiate the payment and get the hash
            const response = await fetch("http://localhost:8080/admin/payments/initiate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(paymentRequest),
            });

            if (!response.ok) {
                throw new Error("Failed to initiate payment");
            }

            const data: PaymentRequest = await response.json();

            // Dynamically create a form and submit it to PayHere
            const form = document.createElement("form");
            form.method = "post";
            form.action = "https://sandbox.payhere.lk/pay/checkout";

            const addField = (name: string, value: string | number) => {
                const input = document.createElement("input");
                input.type = "hidden";
                input.name = name;
                input.value = String(value);
                form.appendChild(input);
            };

            addField("merchant_id", "1225745");
            addField("return_url", `http://localhost:5173/successful_payment?workshop_id=${id}&amount=${data.amount}`);
            addField("cancel_url", "http://localhost:5173/successful_payment");
            addField("notify_url", "http://localhost:5173/successful_payment");
            addField("order_id", data.orderId);
            addField("items", data.items);
            addField("currency", data.currency);
            addField("amount", data.amount);
            addField("first_name", data.firstName);
            addField("last_name", data.lastName);
            addField("email", data.email);
            addField("phone", data.phone);
            addField("address", data.address);
            addField("city", data.city);
            addField("country", data.country);
            addField("hash", data.hash || "");

            document.body.appendChild(form);
            form.submit();
        } catch (error) {
            console.error("Payment initiation failed", error);
        }
    };


    return(
        <>
            {popup}
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
                            {workshop && workshop.map((workshopItem) => (
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
                <div className={"flex justify-end"}>


                        <Button type="primary" size="large" onClick={showModal}>
                            Buy Ticket
                        </Button>


                </div>
            </div>

        </>
    );
}



export default App

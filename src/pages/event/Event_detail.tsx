import {Button, Divider, Typography} from "antd";
import event from "../../assets/event_post.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faClock, faCreditCard, faLink, faLocationDot} from "@fortawesome/free-solid-svg-icons";

const { Title,Text } = Typography;


const App = () => (
    <>
        <div className={"flex flex-col"}>
            <div className=" flex bg-white rounded-lg   gap-4 p-8">

                <div className="w-2/3 ">

                    <div className="mt-2 flex-1">
                        <div>
                            <Title level={5}>Type</Title>
                        </div>
                        <div>
                            <Text className="text-base">Pre Conference Workshop</Text>
                        </div>

                        <div className={"mt-3"}>
                            <Title level={5}>Description</Title>
                        </div>
                        <div style={{textAlign: "justify"}}>
                            <Text className="text-base">Join us for an in-depth exploration of LibreOffice and its
                                technology. This workshop is designed for individuals and organizations looking to
                                migrate
                                to LibreOffice or simply learn more about this powerful open-source office suite.

                            </Text>
                        </div>

                        <Divider></Divider>

                        <div style={{backgroundColor: '#f5f5f5'}} className="p-4 rounded-lg">
                            <div className=" items-center">
                                <Title level={5} className="mr-2 mt-3">Day 1 </Title>

                                <div className=" flex items-center">
                                    <div className={"flex mr-2"}>
                                        <FontAwesomeIcon
                                            icon={faCalendarDays}

                                            style={{color: '#878787'}}
                                        />
                                    </div>
                                    <Text style={{color: '#878787'}} className="mr-2 font-bold">Date :</Text>

                                    <div className="flex-1 ">
                                        <Text style={{color: '#878787'}} className={"font-bold"}>20 th of November
                                            2024</Text>
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
                                        <Text style={{color: '#878787'}} className="font-bold">8.30 AM to 5.00 PM</Text>
                                    </div>


                                </div>


                                <div className="flex-1 mt-3">
                                    <Title style={{color: '#4C3BCF'}} level={5}>Introduction to LibreOffice and
                                        LibreOffice
                                        Technology</Title>
                                </div>
                            </div>

                            <div>
                                <ul className="list-disc pl-5">
                                    <li className="mb-2 text-base">LibreOffice Project's History</li>
                                    <li className="mb-2 text-base">Technical Evolution of the development platform</li>
                                    <li className="mb-2 text-base">LibreOffice six modules</li>
                                    <li className="mb-2 text-base">Introduction to main features</li>
                                    <li className="mb-2 text-base">Introduction to open source software and open
                                        standards
                                    </li>
                                </ul>

                            </div>

                        </div>

                        <div style={{backgroundColor: '#f5f5f5'}} className="p-4 rounded-lg mt-2">
                            <div className="items-center">

                                <Title level={5} className="mr-2 mt-3">Day 2 </Title>

                                <div className=" flex items-center">
                                    <div className={"flex mr-2"}>
                                        <FontAwesomeIcon
                                            icon={faCalendarDays}

                                            style={{color: '#878787'}}
                                        />
                                    </div>
                                    <Text className="mr-2 font-bold " style={{color: '#878787'}}>Date :</Text>


                                    <div className="flex-1 ">
                                        <Text style={{color: '#878787'}} className="font-bold">23 th of November
                                            2024</Text>
                                    </div>
                                </div>

                                <div className=" flex items-center">
                                    <div className={"flex mr-2"}>

                                        <FontAwesomeIcon
                                            icon={faClock}

                                            style={{color: '#878787'}}
                                        />
                                    </div>
                                    <Text className="mr-2 font-bold" style={{color: '#878787'}}>Time :</Text>

                                    <div className="flex-1">
                                        <Text style={{color: '#878787'}} className="font-bold">8.30 AM to 5.00 PM</Text>
                                    </div>


                                </div>

                                <div className="mt-3">
                                    <Title style={{color: '#4C3BCF'}} level={5}>LibreOffice Migration Protocol</Title>
                                </div>
                            </div>

                            <div>
                                <ul className="list-disc pl-5">
                                    <li className="mb-2 text-base">Interoperability with proprietary document formats
                                    </li>
                                    <li className="mb-2 text-base">Conversion of document templates and macros</li>
                                    <li className="mb-2 text-base">Compatibility with VBA macros</li>
                                    <li className="mb-2 text-base">Integration with third party application</li>
                                    <li className="mb-2 text-base">Fixing bugs and regression</li>
                                </ul>

                            </div>
                        </div>


                        <Divider></Divider>


                        <div className=" flex items-center">
                            <div className={"flex mr-2"}>
                                <FontAwesomeIcon
                                    icon={faLocationDot}

                                />
                            </div>
                            <Text  className="mr-2 font-bold" >Venue :</Text>

                            <div className="flex-1">
                                <Text className={"font-bold"}>University of Colombo School of Computing</Text>
                            </div>
                        </div>

                        <div className=" flex items-center">
                            <div className={"flex mr-2"}>
                                <FontAwesomeIcon
                                    icon={faLink}
                                />
                            </div>
                            <Text className="mr-2 font-bold" >Google Map Link :</Text>

                            <div className="flex-1 ">
                                <a href="https://maps.app.goo.gl/N6jbYPNALgMkS2227"
                                   className="text-base text-blue-500 underline" target="_blank"
                                   rel="noopener noreferrer">
                                    https://maps.app.goo.gl/N6jbYPNALgMkS2227
                                </a>
                            </div>
                        </div>

                        <div className=" flex items-center">
                            <div className={"flex mr-2"}>
                                <FontAwesomeIcon
                                    icon={faCreditCard}
                                />
                            </div>
                            <Text className="mr-2 font-bold" >Investment :</Text>

                            <div className="flex-1 ">
                                <Text style={{color: "Red"}} className={"font-bold"}>Rs.8500.00 per day</Text>
                            </div>
                        </div>


                        <div className="flex-1 mt-3">
                            <Text style={{color: 'red'}} className={"font-bold"}>* Lunch & Refreshments are
                                provided</Text>
                        </div>
                    </div>

                </div>

                <div className="flex-1 items-start">
                    <div className="mt-10 flex-1">
                        <div className=" flex">
                            <img
                                src={event}
                                alt="Event Post"
                                className=" rounded-lg h-[400px] w-full"
                            />
                        </div>

                        <div className="mt-2 ">
                            <Title level={5}>Conducted By </Title>
                        </div>
                        <div>
                            <ul className="list-disc pl-5">
                                <li className="mb-2 text-base">Italo Vignoli</li>
                                <li className="mb-2 text-base">Lother K. Becker</li>
                            </ul>

                        </div>

                        <div className="mt-2 ">
                            <Title level={5}>Certificates From</Title>
                        </div>
                        <div>
                            <ul className="list-disc pl-5">
                                <li className="mb-2 text-base">LibreOffice</li>
                                <li className="mb-2 text-base">University of Colombo School of Computing</li>
                            </ul>

                        </div>
                        <div className="mt-2 ">
                            <Title level={5}>Sponsors </Title>
                        </div>
                        <div>
                            <ul className="list-disc pl-5">
                                <li className="mb-2 text-base">Cambio</li>
                                <li className="mb-2 text-base">LSEG</li>
                                <li className="mb-2 text-base">Softlogic</li>
                                <li className="mb-2 text-base">Dell</li>
                            </ul>

                        </div>

                    </div>

                    {/*<div className={"flex flex-col justify-end items-end bottom-0"}>*/}
                    {/*    */}

                    {/*</div>*/}
                </div>

            </div>
            <div className={"flex justify-end"}>
                <Button type="primary" size="large">Buy Ticket</Button>
            </div>
        </div>

    </>
);

export default App

import {Divider, Typography} from "antd";
import event from "../assets/event_post.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faClock, faCreditCard, faLink, faLocationDot} from "@fortawesome/free-solid-svg-icons";

const { Title,Text } = Typography;


const App = () => (
    <>

        <div className="bg-white rounded-lg shadow-lg p-8 flex">

            <div className=" flex-1 flex ">

                <div className="mt-10 flex-1">
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
                            technology. This workshop is designed for individuals and organizations looking to migrate
                            to LibreOffice or simply learn more about this powerful open-source office suite.

                        </Text>
                    </div>

                    <div className="mt-3 flex items-center">
                        <Title level={5} className="mr-2">No of Date :</Title>
                        <div className="flex-1 ">
                            <Title level={5}>2</Title>
                        </div>
                    </div>

                    {/*<div className={"flex"}>*/}
                    <div className={"mr-2"}>
                        <div className=" flex items-center">
                            <div className={"flex mr-2"}>
                                <FontAwesomeIcon
                                    icon={faCalendarDays}
                                    size="lg"
                                />
                            </div>
                            <Title level={5} className="mr-2 mt-3">Date :</Title>

                            <div className="flex-1 mt-3">
                                <Title level={5}>20 th of November 2024</Title>
                            </div>
                        </div>

                        <div className=" flex items-center">
                            <div className={"flex mr-2"}>

                                <FontAwesomeIcon
                                    icon={faClock}
                                    size="lg"
                                />
                            </div>
                            <Title level={5} className="mr-2 mt-3">Time :</Title>

                            <div className="flex-1 mt-3">
                                <Title level={5}>8.30 AM to 5.00 PM</Title>
                            </div>


                        </div>

                    </div>
                    <Divider></Divider>

                    <div className={"mr-2"}>
                        <div className=" flex items-center">
                            <div className={"flex mr-2"}>
                                <FontAwesomeIcon
                                    icon={faCalendarDays}
                                    size="lg"
                                />
                            </div>
                            <Title level={5} className="mr-2 mt-3">Date :</Title>

                            <div className="flex-1 mt-3">
                                <Title level={5}>23 th of November 2024</Title>
                            </div>
                        </div>

                        <div className=" flex items-center">
                            <div className={"flex mr-2"}>

                                <FontAwesomeIcon
                                    icon={faClock}
                                    size="lg"
                                />
                            </div>
                            <Title level={5} className="mr-2 mt-3">Time :</Title>

                            <div className="flex-1 mt-3">
                                <Title level={5}>8.30 AM to 5.00 PM</Title>
                            </div>


                        </div>

                    </div>
                    {/*</div>*/}

                    <Divider></Divider>


                    <div className=" flex items-center">
                        <div className={"flex mr-2"}>
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                size="lg"
                            />
                        </div>
                        <Title level={5} className="mr-2 mt-3">Venue :</Title>

                        <div className="flex-1 mt-3">
                            <Title level={5}>University of Colombo School of Computing</Title>
                        </div>
                    </div>

                    <div className=" flex items-center">
                        <div className={"flex mr-2"}>
                            <FontAwesomeIcon
                                icon={faLink}
                                size="lg"
                            />
                        </div>
                        <Title level={5} className="mr-2 mt-3">Google Map Link :</Title>

                        <div className="flex-1 mt-2">
                            <a href="https://maps.app.goo.gl/N6jbYPNALgMkS2227"
                               className="text-base text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                                https://maps.app.goo.gl/N6jbYPNALgMkS2227
                            </a>
                        </div>
                    </div>

                    <div className=" flex items-center">
                        <div className={"flex mr-2"}>
                            <FontAwesomeIcon
                                icon={faCreditCard}
                                size="lg"
                            />
                        </div>
                        <Title level={5} className="mr-2 mt-3">Investment :</Title>

                        <div className="flex-1 mt-3">
                            <Title  style={{color: "Red"}} level={5}>Rs.8500.00 per day</Title>
                        </div>
                    </div>


                    <div style={{backgroundColor: '#f5f5f5'}} className="p-4 rounded-lg">
                        <div className=" flex items-center">
                        <Title level={5} className="mr-2 mt-3">Day 1 - </Title>

                            <div className="flex-1 mt-3">
                                <Title style={{color: '#4C3BCF'}} level={5}>Introduction to LibreOffice and LibreOffice
                                    Technology</Title>
                            </div>
                        </div>

                        <div>
                            <ul className="list-disc pl-5">
                                <li className="mb-2">LibreOffice Project's History</li>
                                <li className="mb-2">Technical Evolution of the development platform</li>
                                <li className="mb-2">LibreOffice six modules</li>
                                <li className="mb-2">Introduction to main features</li>
                                <li className="mb-2">Introduction to open source software and open standards</li>
                            </ul>

                        </div>

                    </div>

                    <div style={{backgroundColor: '#f5f5f5'}} className="p-4 rounded-lg mt-2">
                        <div className=" flex items-center">

                            <Title level={5} className="mr-2 mt-3">Day 2 - </Title>

                            <div className="flex-1 mt-3">
                                <Title style={{color: '#4C3BCF'}} level={5}>LibreOffice Migration Protocol</Title>
                            </div>
                        </div>

                        <div>
                            <ul className="list-disc pl-5">
                                <li className="mb-2">Interoperability with proprietary document formats</li>
                                <li className="mb-2">Conversion of document templates and macros</li>
                                <li className="mb-2">Compatibility with VBA macros</li>
                                <li className="mb-2">Integration with third party application</li>
                                <li className="mb-2">Fixing bugs and regression</li>
                            </ul>

                        </div>
                    </div>


                </div>

            </div>

            <div className="flex-1 items-start">
                <div className="mt-10 flex-1">
                    <div className=" flex justify-end">
                        <img
                            src={event}
                            alt="Event Post"
                            className=" rounded-lg h-[700px] w-fit"
                        />
                    </div>

                    <div className="mt-2 ml-6">
                        <Title level={5}>Conducted By </Title>
                    </div>
                    <div className="ml-6">
                        <ul className="list-disc pl-5">
                            <li className="mb-2">Italo Vignoli</li>
                            <li className="mb-2">Lother K. Becker</li>
                        </ul>

                    </div>

                </div>


                {/*<div className="mt-4 flex-1">*/}
                {/*    /!* Content below the image *!/*/}
                {/*    <p className="text-gray-700">Details about the event go here.</p>*/}
                {/*</div>*/}


            </div>

        </div>
    </>
);

export default App

import {Button, Card, Col, Divider, Row, Typography} from "antd";
import Meta from "antd/es/card/Meta";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const { Title } = Typography;


const App = () => {

    interface Workshop {
        id: number | null;
        title: string;
        description: string | null;
        location: string | null;
        mapLink: string | null;
        type: string; // This should match your data structure
        noOfSeat: number;
        certificateFrom: string | null;
        lunch: boolean;
        post: string | null;
        coverPhoto: string | null;
        workshopDays: number[] | null; // Define this according to your actual data structure
    }

    interface Conference{
        id:number;
        title:string;
        investment:number;
        date:string;
        startTime:string;
        endTime:string;
        location:string;
        mapLink:string;
        lunch:boolean;
        post:string;
        coverPhoto:string;
        startDate:string;
    }

    const [workshops, setWorkshops] = useState<Workshop[]>([]);
    const [conference, setConference] = useState<Conference[]>([]);
    const preWorkshops = workshops.filter((workshop) => workshop.type === "Pre-Workshop");
    const postWorkshops = workshops.filter((workshop) => workshop.type === "Post-Workshop");


    function getWorcshops(){
        const token = localStorage.getItem("authToken");
        if (token) {
            axios.get("http://localhost:8080/api/v1/admin/workshop", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(response => setWorkshops(response.data))
                .catch(error => console.error("Error fetching workshops:", error));
        } else {
            console.error("Token is missing or invalid");
        }
    }

    function getConference(){
        const token = localStorage.getItem("authToken");
        if (token) {
            axios.get("http://localhost:8080/api/v1/admin/conference/all", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(response => setConference(response.data))
                .catch(error => console.error("Error fetching workshops:", error));
        } else {
            console.error("Token is missing or invalid");
        }
    }
    useEffect(() => {
        getWorcshops();
        getConference();

    }, []);



    const renderConferences = (data: Conference[]) => (
        <Row gutter={32}>
            {data.map((conference: Conference, index: number) => (
                <Col key={index}>
                    <Link to={`/conference_detail/${conference.id}`}>
                        <Card
                            hoverable
                            style={{
                                width: 250,
                            }}
                            cover={<img alt="Conference day 1"
                                        src={`http://localhost:8080/${conference.coverPhoto}`}
                                        style={{
                                            height: 160,
                                            objectFit: "cover",
                                        }}

                            />}
                        >
                            <Meta title={conference.title} description={conference.date}/>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    );

    const renderWorkshops = (data: Workshop[]) => (
        <Row gutter={32}>
            {data.map((workshop: Workshop, index: number) => (
                <Col key={index}>
                    <Link to={`/view_event/${workshop.id}`}>
                        <Card
                            hoverable
                            style={{
                                width: 250,
                            }}
                            cover={<img alt="Conference day 1"
                                        src={`http://localhost:8080/${workshop.coverPhoto}`}
                                        style={{
                                            height: 160,
                                            objectFit: "cover",
                                        }}

                            />}
                        >
                            <Meta title={workshop.title} description={`Total Participant : ${workshop.noOfSeat}`} />
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    );




    return(
        <>

            <div className="bg-white rounded-3xl shadow-lg p-8">
                <div className="col-span-2 flex justify-center items-center">
                    <Title level={3}>Conference Event</Title>
                </div>

                <div className="flex justify-end mb-8">

                    <Link to="/add_conference">
                        <Button type="primary" size="large" >
                            Add Conference
                        </Button>
                    </Link>
                </div>

                <div>
                    <div>
                        <div>
                            <Title level={4}>Conference</Title>
                        </div>
                        <div>
                            {renderConferences(conference)}

                        </div>
                    </div>

                    <Divider></Divider>
                    <div className="flex justify-end mb-8">
                        <Link to="/add_event_oc">
                            <Button type="primary" size="large" >
                                Add Workshop
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <div>
                            <Title level={4}>Pre Conference Workshops</Title>
                        </div>
                        <div>
                            {renderWorkshops(preWorkshops)}
                        </div>
                    </div>

                    <Divider></Divider>

                    <div>
                        <div>
                            <Title level={4}>Post Conference Workshops</Title>
                        </div>
                        <div>
                            {renderWorkshops(postWorkshops)}

                        </div>
                    </div>
                </div>
            </div>
        </>
        );
};





export default App

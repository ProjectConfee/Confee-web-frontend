import {Button, Card, Col, Divider, Row, Typography} from "antd";
import Meta from "antd/es/card/Meta";
import conference_day1 from "../../assets/event1.jpeg";
import conference_day2 from "../../assets/event2.jpeg";
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

    const [workshops, setWorkshops] = useState<Workshop[]>([]);

    const preWorkshops = workshops.filter((workshop) => workshop.type === "Pre-Workshop");
    const postWorkshops = workshops.filter((workshop) => workshop.type === "Post-Workshop");

    useEffect(() => {
        // Fetch workshop data from API
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
    }, []);

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

                    <Link to="/add_event_oc">
                        <Button type="primary" size="large" >
                            Add Event
                        </Button>
                    </Link>
                </div>

                <div>
                    <div>
                        <div>
                            <Title level={4}>Conference</Title>
                        </div>
                        <div>
                            <Row gutter={32}>
                                <Col>

                                    <Link to="/event_details_oc">
                                        <Card
                                            hoverable
                                            style={{
                                                width: 250,

                                            }}
                                            cover={<img alt="Conference day 1"
                                                        src={conference_day1}
                                                        style={{
                                                            height: 160,
                                                            objectFit: "cover",
                                                        }}

                                            />}
                                        >
                                            <Meta title="Conference Day 1" description="Date : 10th of November 2024"/>
                                        </Card>
                                    </Link>

                                </Col>

                                <Col>

                                    <Link to="/event_details_oc">
                                        <Card
                                            hoverable
                                            style={{
                                                width: 250,

                                            }}
                                            cover={<img alt="Conference day 2"
                                                        src={conference_day2}
                                                        style={{
                                                            height: 160,
                                                            objectFit: "cover",
                                                        }}

                                            />}
                                        >
                                            <Meta title="Conference day 2" description="Date : 11th of November 2024"/>
                                        </Card>
                                    </Link>

                                </Col>
                            </Row>

                        </div>
                    </div>

                    <Divider></Divider>

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

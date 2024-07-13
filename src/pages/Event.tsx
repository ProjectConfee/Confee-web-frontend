import {Button, Card, Col, Divider, Row, Typography} from "antd";
import Meta from "antd/es/card/Meta";
import conference_day1 from "../assets/event1.jpeg";
import conference_day2 from "../assets/event2.jpeg";
import pre_conference_1 from "../assets/event3.jpeg";
import pre_conference_2 from "../assets/event4.jpeg";
import pre_conference_3 from "../assets/event5.jpeg";
import post_conference_1 from "../assets/event6.jpeg";

const { Title } = Typography;


const App = () => (
    <>

        <div className="bg-white mt-20 rounded-lg shadow-lg p-8">
            <div className="col-span-2 flex justify-center items-center">
                <Title>Conference Event</Title>
            </div>

            <div className="flex justify-end mb-8">
                <Button type="primary" size="large" >Add Event</Button>
            </div>

            <div>
                <div>
                    <div>
                        <Title level={3}>Conference</Title>
                    </div>
                    <div>
                        <Row gutter={32}>
                            <Col>
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
                            </Col>

                            <Col>
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
                                    <Meta title="Europe Street beat" description="Date : 11th of November 2024"/>
                                </Card>
                            </Col>
                        </Row>

                    </div>
                </div>

                <Divider></Divider>

                <div>
                    <div>
                        <Title level={3}>Pre Conference Workshops</Title>
                    </div>
                    <div>
                        <Row gutter={32}>
                            <Col>
                                <Card
                                    hoverable
                                    style={{
                                        width: 250,

                                    }}
                                    cover={<img alt="pre conference 1"
                                                src={pre_conference_1}
                                                style={{
                                                    height: 160,
                                                    objectFit: "cover",
                                                }}

                                    />}
                                >
                                    <Meta title="Europe Street beat" description="Date : 04th of November 2024"/>
                                </Card>
                            </Col>

                            <Col>
                                <Card
                                    hoverable
                                    style={{
                                        width: 250,

                                    }}
                                    cover={<img alt="Conference day 2"
                                                src={pre_conference_2}
                                                style={{
                                                    height: 160,
                                                    objectFit: "cover",
                                                }}

                                    />}
                                >
                                    <Meta title="Europe Street beat" description="Date : 05th of November 2024"/>
                                </Card>
                            </Col>

                            <Col>
                                <Card
                                    hoverable
                                    style={{
                                        width: 250,

                                    }}
                                    cover={<img alt="Conference day 2"
                                                src={pre_conference_3}
                                                style={{
                                                    height: 160,
                                                    objectFit: "cover",
                                                }}

                                    />}
                                >
                                    <Meta title="Europe Street beat" description="Date : 08th of November 2024"/>
                                </Card>
                            </Col>
                        </Row>

                    </div>
                </div>

                <Divider></Divider>

                <div>
                    <div>
                        <Title level={3}>Post Conference Workshops</Title>
                    </div>
                    <div>
                        <Row gutter={32}>
                            <Col>
                                <Card
                                    hoverable
                                    style={{
                                        width: 250,

                                    }}
                                    cover={<img alt="post conference 1"
                                                src={post_conference_1}
                                                style={{
                                                    height: 160,
                                                    objectFit: "cover",
                                                }}

                                    />}
                                >
                                    <Meta title="Europe Street beat" description="Date : 14th of November 2024"/>
                                </Card>
                            </Col>
                        </Row>

                    </div>
                </div>
            </div>
        </div>
    </>
);

export default App

import {
    Card,
    Col,
    Divider,
    Row,
    Typography
} from "antd";

import Meta from "antd/es/card/Meta";

import conference_day1 from "../../assets/event1.jpeg";
import conference_day2 from "../../assets/event2.jpeg";
import pre_conference_1 from "../../assets/event3.jpeg";
import pre_conference_2 from "../../assets/event4.jpeg";
import pre_conference_3 from "../../assets/event5.jpeg";
import post_conference_1 from "../../assets/event6.jpeg";

import {Link} from "react-router-dom";

const { Title } = Typography;


const App = () => (
    <>

        <div className="bg-white rounded-3xl shadow-lg p-8 text-2xl">
            <div className="col-span-2 flex justify-center items-center">
                <Title level={3}>Conference Events</Title>
            </div>

            {/*<div className="flex justify-end mb-8">*/}
            {/*    <Button type="primary" size="large" >Add Event</Button>*/}
            {/*</div>*/}

            <div>
                <div>
                    <div>
                        <Title level={4}>Conference</Title>
                    </div>
                    <div>
                        <Row gutter={32}>
                            <Col>

                                <Link to="/event_details_author">
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

                                <Link to="/event_details_author">
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
                        <Row gutter={32}>
                            <Col>

                                <Link to="/event_details_author">
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
                                        <Meta title="Workshop 1" description="Date : 04th of November 2024"/>
                                    </Card>
                                </Link>

                            </Col>

                            <Col>

                                <Link to="/event_details_author">
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
                                        <Meta title="Workshop 2" description="Date : 05th of November 2024"/>
                                    </Card>
                                </Link>

                            </Col>

                            <Col>

                                <Link to="/event_details_author">
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
                                        <Meta title="Workshop 3" description="Date : 08th of November 2024"/>
                                    </Card>
                                </Link>

                            </Col>
                        </Row>

                    </div>
                </div>

                <Divider></Divider>

                <div>
                    <div>
                        <Title level={4}>Post Conference Workshops</Title>
                    </div>
                    <div>
                        <Row gutter={32}>
                            <Col>

                                <Link to="/event_details_author">
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
                                        <Meta title="Workshop 1" description="Date : 14th of November 2024"/>
                                    </Card>
                                </Link>

                            </Col>
                        </Row>

                    </div>
                </div>
            </div>
        </div>
    </>
);

export default App

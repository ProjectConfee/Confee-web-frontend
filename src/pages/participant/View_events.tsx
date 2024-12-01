import {

    Divider,
    Typography
} from "antd";

import pre_conference_2 from "../../assets/event4.jpeg";
import EventCard from "../../components/event/EventCard.tsx";

const { Title } = Typography;

const events = [
    {
        ImgUrl : pre_conference_2,
        title : "Workshop 3",
        date : "2024-08-10"
    },
    {
        ImgUrl : pre_conference_2,
        title : "Workshop 3",
        date : "2024-08-10"
    },
    {
        ImgUrl : pre_conference_2,
        title : "Workshop 3",
        date : "2024-08-10"
    },
    {
        ImgUrl : pre_conference_2,
        title : "Workshop 3",
        date : "2024-08-10"
    },
    {
        ImgUrl : pre_conference_2,
        title : "Workshop 3",
        date : "2024-08-10"
    },
    {
        ImgUrl : pre_conference_2,
        title : "Workshop 3",
        date : "2024-08-10"
    }
]


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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {events.map((event, index) => (
                            <EventCard key={index} events={event}/>
                        ))}
                    </div>
                </div>

                <Divider></Divider>

                <div>
                    <div>
                        <Title level={4}>Pre Conference Workshops</Title>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {events.map((event, index) => (
                            <EventCard key={index} events={event}/>
                        ))}
                    </div>
                </div>

                <Divider></Divider>

                <div>
                    <div>
                        <Title level={4}>Post Conference Workshops</Title>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {events.map((event, index) => (
                            <EventCard key={index} events={event}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default App

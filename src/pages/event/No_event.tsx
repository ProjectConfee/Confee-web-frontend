import {Button, Typography} from "antd";
import no_event from "../../assets/no_schedule.jpg";
import {Link} from "react-router-dom";


const { Title } = Typography;


const App = () => (
    <>

        <div className="bg-white rounded-3xl shadow-lg p-8">
                <div className="col-span-2 flex justify-center items-center">
                        <Title level={3}>Conference Events</Title>
                </div>

                <div className="flex justify-end">
                        <Link to="/add_event_oc">
                                <Button type="primary" size="large" >
                                        Add Event
                                </Button>
                        </Link>
                </div>

                <div className="flex justify-center items-center">
                        <img
                            src={no_event}
                            alt="No Event Scheduled"
                            className="mr-8 rounded-lg h-96 w-96"
                        />
                </div>

                <div className="flex justify-center items-center">
                        <Title level={5}>No event scheduled yet</Title>
                </div>


        </div>
    </>
);

export default App

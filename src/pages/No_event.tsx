import {Button, Typography} from "antd";
import no_event from "../assets/no_schedule.jpg";


const { Title } = Typography;


const App = () => (
    <>

        <div className="bg-white mt-20 rounded-lg shadow-lg p-8">
                <div className="col-span-2 flex justify-center items-center">
                        <Title level={3}>Conference Event</Title>
                </div>

                <div className="flex justify-end">
                        <Button type="primary" size="large" >Add Event</Button>
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

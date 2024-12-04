import {Tabs, Typography} from "antd";

import { useParams } from 'react-router-dom';

import ConferenceDetail from './Conference_Detail.tsx';

import EventSchedule from './ConferenceSchedule.tsx';

const onChange = (key:string) => {
    console.log(key);
};
const { Title } = Typography;



const App = () => {
    const { id } = useParams();

    return(
        <>

            <div className="bg-white rounded-3xl shadow-lg p-4">

                <div className="col-span-2 flex justify-center items-center">
                    <Title level={3}>Pre Conference Workshop</Title>
                </div>

                <div>

                    <Tabs
                        onChange={onChange}
                        size={'large'}
                        type="card"
                        items={[
                            {
                                label: 'View Detail',
                                key: '1',
                                children: <ConferenceDetail id={id}/>,
                            },
                            {
                                label: 'Schedule',
                                key: '3',
                                children: <EventSchedule id={id}/>,
                            },
                        ]}
                    />
                </div>



            </div>
        </>
    );
}




export default App

import {Tabs, Typography} from "antd";



import EventDetail from './Event_detail.tsx';
import EventSchedule from './Event_schedule.tsx';

const onChange = (key:string) => {
    console.log(key);
};
const { Title } = Typography;


const App = () => (
    <>

        <div className="bg-white mt-10 rounded-lg shadow-lg p-4">

            <div className="col-span-2 flex justify-center items-center">
                <Title level={3}>Pre Conference Workshop</Title>
            </div>

            <div>
            {/*    <Tabs*/}
            {/*        onChange={onChange}*/}
            {/*        size={'large'}*/}
            {/*        type="card"*/}
            {/*        items={[*/}
            {/*            {*/}
            {/*                label: 'Event Details',*/}
            {/*                key:'1',*/}
            {/*                children:<EventDetail/>,*/}
            {/*            },*/}


            {/*        ]*/}

            {/*        }*/}
            {/*//         new Array(3).fill(null).map((_, i) => {*/}
            {/*//     const id = String(i + 1);*/}
            {/*//     return {*/}
            {/*//     label: `Tab ${id}`,*/}
            {/*//     key: id,*/}
            {/*//     children: <EventDetail/>,*/}
            {/*// };*/}
            {/*// })*/}
            {/*    />*/}

                <Tabs
                    onChange={onChange}
                    size={'large'}
                    type="card"
                    items={[
                        {
                            label: 'View Detail',
                            key: '1',
                            children: <EventDetail/>,
                        },
                        {
                            label: 'Resources',
                            key: '2',
                            children: <EventDetail/>,
                        },
                        {
                            label: 'Schedule',
                            key: '3',
                            children: <EventSchedule/>,
                        },
                    ]}
                />
            </div>



        </div>
    </>
);

export default App

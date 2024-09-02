import {Tabs, Typography} from "antd";

import StallLocation from './Stall_location.tsx';
import Location from './Location.tsx';
import Company from './Company.tsx';

const onChange = (key:string) => {
    console.log(key);
};
const { Title } = Typography;


const App = () => (
    <>

        <div className="bg-white rounded-3xl shadow-lg p-4">

            <div className="col-span-2 flex justify-center items-center">
                <Title level={3}>Innovation Studio</Title>
            </div>

            <div>

                <Tabs
                    onChange={onChange}
                    size={'large'}
                    type="card"
                    items={[
                        {
                            label: 'Stall Allocation',
                            key: '1',
                            children: <StallLocation />,
                        },
                        {
                            label: 'Add Stall',
                            key: '2',
                            children: <Location />,
                        },
                        {
                            label: 'Allocate Company',
                            key: '3',
                            children: <Company />,
                        },
                    ]}
                />
            </div>



        </div>
    </>
);

export default App

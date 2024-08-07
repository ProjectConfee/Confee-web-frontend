

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Input, Button ,Table} from 'antd';
//
// interface StallLocation {
//     id: number;
//     stallType: string;
//     location: string;
// }
//
// const StallLocationForm: React.FC = () => {
//     const [stallType, setStallType] = useState('');
//     const [location, setLocation] = useState('');
//     const [stallLocations, setStallLocations] = useState<StallLocation[]>([]);
//
//     // Handle form submission
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:8080/stall-locations', { stallType, location });
//             setStallType('');
//             setLocation('');
//             fetchStallLocations(); // Refresh the list after submission
//         } catch (error) {
//             console.error('Error adding stall location', error);
//         }
//     };
//
//     // Fetch stall locations from the backend
//     const fetchStallLocations = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/stall-locations');
//             setStallLocations(response.data);
//         } catch (error) {
//             console.error('Error fetching stall locations', error);
//         }
//     };
//
//     useEffect(() => {
//         fetchStallLocations();
//     }, []);
//
//     return (
//         <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
//             <div
//                 className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-4 border-black p-10 rounded-lg'>
//                 <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Location Details</h2><br/><br/>
//                 <form onSubmit={handleSubmit}>
//                     <label>
//                         Stall Type:
//                         <Input
//                             size="large"
//                             value={stallType}
//                             onChange={(e) => setStallType(e.target.value)}
//                             required
//                         />
//                     </label>
//                     <br/>
//                     <label>
//                         Location:
//                         <Input
//                             size="large"
//                             value={location}
//                             onChange={(e) => setLocation(e.target.value)}
//                             required
//                         />
//                     </label>
//                     <br/><br/><br/>
//                     <div className="flex flex-auto items-center">
//                         <Button type="primary" htmlType="submit">
//                             Submit
//                         </Button>
//                     </div>
//                 </form>
//
//             </div>
//             <table className='mt-10 table-auto border-collapse	'>
//                 <caption className="caption-top bold">
//                     STALL LOCATIONS.
//                 </caption>
//                 <thead>
//                 <tr>
//                     <th>Stall Type</th>
//                     <th>Location</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {stallLocations.map((stall) => (
//                     <tr key={stall.id}>
//                         <td>{stall.stallType}</td>
//                         <td>{stall.location}</td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//
// export default StallLocationForm;
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, Button, Table } from 'antd';

interface StallLocation {
    id: number;
    stallType: string;
    location: string;
}

const StallLocationForm: React.FC = () => {
    const [stallType, setStallType] = useState('');
    const [location, setLocation] = useState('');
    const [stallLocations, setStallLocations] = useState<StallLocation[]>([]);

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/stall-locations', { stallType, location });
            setStallType('');
            setLocation('');
            fetchStallLocations(); // Refresh the list after submission
        } catch (error) {
            console.error('Error adding stall location', error);
        }
    };

    // Fetch stall locations from the backend
    const fetchStallLocations = async () => {
        try {
            const response = await axios.get('http://localhost:8080/stall-locations');
            setStallLocations(response.data);
        } catch (error) {
            console.error('Error fetching stall locations', error);
        }
    };

    useEffect(() => {
        fetchStallLocations();
    }, []);

    const columns = [
        {
            title: 'Stall Type',
            dataIndex: 'stallType',
            key: 'stallType',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
    ];

    return (
        <div className='flex flex-col justify-center items-center h-full mt-30 ml-50'>
            <div className='flex flex-col justify-center items-center h-full mt-40 ml-50 border-4 border-black p-10 rounded-lg'>
                <h2 className="text-2xl font-semibold text-center mt-[-10]">Stall Location Details</h2><br/><br/>
                <form onSubmit={handleSubmit}>
                    <label>
                        Stall Type:
                        <Input
                            size="large"
                            value={stallType}
                            onChange={(e) => setStallType(e.target.value)}
                            required
                        />
                    </label>
                    <br/>
                    <label>
                        Location:
                        <Input
                            size="large"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </label>
                    <br/><br/><br/>
                    <div className="flex flex-auto items-center">
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </div>
                </form>

            </div>
            <Table className='mt-10' columns={columns} dataSource={stallLocations} rowKey="id" />
        </div>
    );
};

export default StallLocationForm;

//
//
//
// import { Link } from 'react-router-dom';
//
// interface Feedback {
//   id: number;
//   participant: string;
//   comment: string;
//   rating: number;
// }
//
// const feedbacks: Feedback[] = [
//   { id: 1, participant: 'Damiru Herath', comment: 'Great event!', rating: 3 },
//   { id: 2, participant: 'Jane Smith', comment: 'Very informative.', rating: 4 },
// ];
//
//
// import './Home.css';
// import { GiShop } from "react-icons/gi";
// import {  BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//
//
// function Home() {
//   const data = [
//     { name: 'Participants who visit', value: 50 },
//     { name: 'Participants yet to come', value: 200 },
//   ];
//
//   const COLORS = ['#0088FE', '#23b37f', '#b19041', '#b66544'];
//
//   return (
//       <main className='main-container'>
//
//         <div className='main-cards'>
//
//           <div className='card'>
//             <Link to='/participant-details'>
//             <div className='card-inner'>
//               <h3>REGISTERED PARTICIPANTS</h3>
//               <h2>FOR CONFERENCE DAY 1</h2>
//               <BsPeopleFill/>
//             </div>
//             </Link>
//             <h1>300</h1>
//           </div>
//           <div className='card'>
//             <Link to='/participant-details'>
//             <div className='card-inner'>
//               <h3>REGISTERED PARTICIPANTS</h3>
//               <h2>FOR CONFERENCE DAY 2</h2>
//               <BsPeopleFill/>
//             </div>
//             <h1>120</h1></Link >
//           </div>
//           <div className='card'>
//             <Link to='/stall-details'>
//             <div className='card-inner'>
//               <h3>STALL </h3>
//               <br></br>
//
//               <GiShop/>
//             </div></Link>
//             <h1>STALL NO 3</h1>
//           </div>
//           <div className='card'>
//             <Link to="/announcement_view">
//             <div className='card-inner'>
//               <h3>ALERTS</h3><br></br>
//               <BsFillBellFill/>
//             </div></Link>
//             <h1>2</h1>
//           </div>
//         </div>
//         <br></br><br></br>
//         <div className='charts-container'>
//           <div className='chart-container'>
//             <h3>PARTICIPANT COUNT</h3>
//             <ResponsiveContainer width="100%" height={200}>
//               <PieChart>
//                 <Pie
//                     data={data}
//                     cx="50%"
//                     cy="50%"
//                     labelLine={false}
//                     outerRadius={80}
//                     fill="#8884d8"
//                     dataKey="value"
//                 >
//                   {data.map((_entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
//                   ))}
//                 </Pie>
//                 <Tooltip/>
//                 <Legend/>
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//           <div className='right-container'>
//             <div className="mt-10 items-left">
//               <h1 className="text-3xl font-bold text-center mb-10">Participant Feedback</h1>
//               <div className="w-full max-w-2xl mx-auto">
//                 {feedbacks.map((feedback) => (
//                     <div key={feedback.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
//                       <p className="text-xl font-semibold">{feedback.participant}</p>
//                       <p className="mt-2 text-gray-700">{feedback.comment}</p>
//                       <p className="mt-2 text-yellow-500">Rating: {'★'.repeat(feedback.rating)}</p>
//                     </div>
//                 ))}
//               </div>
//               <div className="flex justify-center mt-6">
//                 <Link to="/more-feedbacks">
//                   <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
//                     See More
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//   )
// }
//
// export default Home;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Card } from 'antd';
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { GiShop } from "react-icons/gi";
// import { FaUser} from 'react-icons/fa';
// import { PiNewspaperClippingFill } from 'react-icons/pi';
// import './Home.css';
//
//
//
// const data = [
//   { name: 'Participants who visit', value: 50 },
//   { name: 'Participants yet to come', value: 200 },
// ];
//
// const users = [
//   { userName: 'Registered Participants for Conference Day 01', count: 60, icon: FaUser, link: '/participant-details' },
//   { userName: 'Registered Participants for Conference Day 02', count: 200, icon: FaUser, link: '/participant-details' },
//   { userName: 'Stall Details', count: 10, icon: GiShop, link: '/stall-details' },
//   { userName: 'Alerts', count: 20, icon: PiNewspaperClippingFill, link: '/announcement_view' },
// ];
//
//
// const COLORS = ['#0088FE', '#23b37f', '#b19041', '#b66544'];
//
// const Home: React.FC = () => {
//   return (
//       <main className='main-container'>
//         <div className="flex">
//           {users.map((user, index) => (
//               <Card key={index} className="card">
//                 <Link to={user.link}>
//                   <div className="flex flex-col items-center"> {/* Changed to flex-col to align text below icon */}
//                     <user.icon className="icon mt-5" />
//                     <div className="text-center">
//                       <h3 >{user.userName}</h3>
//                       <h2>{user.count}</h2>
//                     </div>
//                   </div>
//                 </Link>
//               </Card>
//           ))}
//         </div>
//
//         <div className='charts-container'>
//           <div className='chart-container'>
//
//             <h1 className="text-3xl font-bold text-center mt-10  mb-10">Participant Feedback</h1>
//             {/*<h1 className=' text-3xl font-bold text-center mb-10 '>PARTICIPANT COUNT</h1>*/}
//             <ResponsiveContainer width="100%" height={200}>
//               <PieChart>
//                 <Pie
//                     data={data}
//                     cx="50%"
//                     cy="50%"
//                     labelLine={false}
//                     outerRadius={80}
//
//                     dataKey="value"
//                 >
//                   {data.map((_entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//
//           <div className='chart-container'>
//             <div className="mt-10">
//               <h1 className="text-3xl font-bold text-center mb-20">Participant Feedback</h1>
//
//               <img src="src/assets/pre-conference.png" alt="feedback"
//                    className="w-4/5 h-40 object-cover mt-4 mb-2 rounded-lg mx-10"/>
//
//               {/*<div className="w-full max-w-2xl mx-auto">*/}
//               {/*  {feedbacks.map((feedback) => (*/}
//               {/*      <div key={feedback.id} className="bg-white shadow-md rounded-lg p-6 mb-4">*/}
//               {/*        <p className="text-xl font-semibold">{feedback.participant}</p>*/}
//               {/*        <p className="mt-2 text-gray-700">{feedback.comment}</p>*/}
//               {/*        <p className="mt-2 text-yellow-500">Rating: {'★'.repeat(feedback.rating)}</p>*/}
//               {/*      </div>*/}
//               {/*  ))}*/}
//               {/*</div>*/}
//               <div className="flex justify-center mt-6">
//                 <Link to="/more-feedbacks">
//                   <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
//                     See More
//                   </button>
//                 </Link>
//
//               </div>
//             </div>
//           </div>
//         </div>
//
//       </main>
//   );
// }
//
// export default Home;

//
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Card } from 'antd';
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { GiShop } from "react-icons/gi";
// import { FaUser, FaImage } from 'react-icons/fa';
// import { PiNewspaperClippingFill } from 'react-icons/pi';
//
// // Define the styles with TypeScript type assertions
// const styles: { [key: string]: React.CSSProperties } = {
//   mainContainer: {
//     padding: '10px',
//     backgroundColor: '#f4f4f4',
//     marginTop: '0px',
//   },
//   flex: {
//     display: 'flex',
//     flexWrap: 'wrap', // Type assertion
//     gap: '20px'
//   },
//   card: {
//     width: '325px',
//     height: '220px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#fff',
//     transition: 'transform 0.3s, box-shadow 0.3s',
//     marginTop: '20px',
//   },
//   card2: {
//   width: '670px',
//       height: '200px',
//       borderRadius: '8px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       backgroundColor: '#fff',
//       transition: 'transform 0.3s, box-shadow 0.3s',
//       marginTop: '20px',
//     marginBottom: '10px',
// },
//   cardHover: {
//     transform: 'translateY(-10px)',
//     boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)'
//   },
//   icon: {
//     fontSize: '40px',
//     color: '#4a90e2',
//     marginBottom: '20px',
//   },
//   chartsContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '20px',
//     backgroundColor: '#fff',
//     borderRadius: '8px',
//     padding: '20px'
//   },
//   chartContainer: {
//     flex: 1,
//     marginRight: '20px',
//     marginLeft: '20px'
//   },
//
//   image: {
//     width: '80%',
//     height: '160px',
//     objectFit: 'cover', // Type assertion
//     marginTop: '10px',
//     marginBottom: '8px',
//     borderRadius: '8px',
//     marginLeft: '10px',
//     marginRight: '10px'
//   },
//   button: {
//     backgroundColor: '#007bff',
//     color: '#fff',
//     padding: '10px 20px',
//     borderRadius: '8px',
//     border: 'none',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s'
//   },
//   buttonHover: {
//     backgroundColor: '#0056b3'
//   }
// };
//
// const data = [
//   { name: 'Participants who visit', value: 50 },
//   { name: 'Participants yet to come', value: 200 },
// ];
//
// const users = [
//   { userName: 'Registered Participants for Conference Day 01', count: 60, icon: FaUser, link: '/participant-details' },
//   { userName: 'Registered Participants for Conference Day 02', count: 200, icon: FaUser, link: '/participant-details' },
//   { userName: 'Stall Details', count: 10, icon: GiShop, link: '/stall-details' },
//   { userName: 'Alerts', count: 20, icon: PiNewspaperClippingFill, link: '/announcement_view' },
// ];
//
// const users2 = [
//   {
//     userName: 'ICTer Conference 2024',
//     link: '/topic1',
//     venue: 'At Marino Beach Hotel',
//     date: '2024-10-05 to 2024-10-08'
//   },
//   {
//     userName: 'Topic 2',
//     link: '/topic2',
//     icon: FaImage,
//     imageUrl: 'src/assets/gold_badge.jpeg'
//   }
// ];
// const COLORS = ['#0088FE', '#23b37f', '#b19041', '#b66544'];
//
// const Home: React.FC = () => {
//   return (
//       <main style={styles.mainContainer}>
//
//         <div style={styles.flex}>
//
//           <Card style={styles.card2} hoverable>
//             <Link to={users2[1].link}>
//               <div className="flex flex-col items-center">
//                 <div style={styles.textCenter} className="mt-3">
//                   <h3>{users2[0].userName}</h3>
//                   <p>{users2[0].venue}</p>
//                   <p>{users2[0].date}</p>
//
//                 </div>
//               </div>
//             </Link>
//           </Card>
//           <Card style={styles.card2} hoverable>
//             <Link to={users2[1].link}>
//               <div className="flex flex-col items-center">
//                 <div style={styles.textCenter} className="mt-3">
//                   <h3>{users2[1].userName}</h3>
//                   <div className='size-30'>
//                   {users2[1].imageUrl && <img src={users2[1].imageUrl} alt={users2[1].userName} style={styles.image}/>}
//                   </div></div>
//               </div>
//             </Link>
//           </Card>
//         </div>
//
//         <div style={styles.flex}>
//           {users.map((user, index) => (
//               <Card key={index} style={styles.card} hoverable>
//                 <Link to={user.link}>
//                   <div className="flex flex-col items-center">
//                     <user.icon style={styles.icon} className="mt-5"/>
//                     <div className="text-center text-xl">
//                       <h3>{user.userName}</h3>
//                       <h2>{user.count}</h2>
//                     </div>
//                   </div>
//                 </Link>
//               </Card>
//           ))}
//         </div>
//
//         <div style={styles.chartsContainer}>
//           <div style={styles.chartContainer}>
//             <h1 className="text-3xl font-bold text-center mb-10 mt-10">Participant Count</h1>
//             <ResponsiveContainer width="100%" height={200}>
//               <PieChart>
//                 <Pie
//                     data={data}
//                     cx="50%"
//                     cy="50%"
//                     labelLine={false}
//                     outerRadius={80}
//                     fill="#8884d8"
//                     dataKey="value"
//                 >
//                   {data.map((_entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
//                   ))}
//                 </Pie>
//                 <Tooltip/>
//                 <Legend/>
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//
//           <div style={styles.chartContainer}>
//             <div className="mt-10">
//               <h1 className="text-3xl font-bold text-center mb-10">Participant Feedback</h1>
//               <img
//                   src="src/assets/pre-conference.png"
//                   alt="Pre-Conference"
//                   style={styles.image}
//               />
//               <div className="flex justify-center mt-6">
//                 <Link to="/more-feedbacks">
//                   <button
//                       style={styles.button}
//
//                   >
//                     See More
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//   );
// }
//
// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GiShop } from "react-icons/gi";
import { FaUser, FaImage } from 'react-icons/fa';
import { PiNewspaperClippingFill } from 'react-icons/pi';

// Define the styles with TypeScript type assertions
const styles: { [key: string]: React.CSSProperties } = {
  mainContainer: {
    padding: '20px',
    backgroundColor: '#f9f9f9',

  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap', // Type assertion
    gap: '20px',
    justifyContent: 'center', // Center content horizontally
  },
  card: {
    width: '320px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.3s, box-shadow 0.3s',
    marginTop: '0px',
    overflow: 'hidden', // Ensure content does not overflow
  },
  card2: {
    width: '660px',
    height: '250px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.3s, box-shadow 0.3s',
    marginTop: '0px',
    marginBottom: '20px',
    overflow: 'hidden',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)'
  },
  icon: {
    fontSize: '40px',
    color: '#4a90e2',
    marginBottom: '20px',
  },
  chartsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  chartContainer: {
    flex: 1,
    margin: '0 20px',
    height: '100%',
  },
  image: {
    width: '50%',
    height: 'auto',
    objectFit: 'cover', // Type assertion
    borderRadius: '8px',
    marginTop: '0px',
    marginBottom: '10px',
    marginLeft:'160px',
  },
  image2: {
    width: '27%',
    height: 'auto',
    objectFit: 'cover', // Type assertion
    borderRadius: '8px',
    marginTop: '0px',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  buttonHover: {
    backgroundColor: '#0056b3'
  },
  textCenter: {
    textAlign: 'center',
    padding: '10px',
  },
};

const data = [
  { name: 'Participants who visit', value: 50 },
  { name: 'Participants yet to come', value: 200 },
];

const users = [
  { userName: 'Registered Participants for Conference Day 01', count: 60, icon: FaUser, link: '/participant-details' },
  { userName: 'Registered Participants for Conference Day 02', count: 200, icon: FaUser, link: '/participant-details' },
  { userName: 'Stall Details', count: 10, icon: GiShop, link: '/stall-details' },
  { userName: 'Alerts', count: 20, icon: PiNewspaperClippingFill, link: '/announcement_view' },
];

const users2 = [
  {
    userName: 'ICTer Conference 2024',
    link: '/topic1',
    venue: 'At Marino Beach Hotel',
    date: '2024-10-05 to 2024-10-08'
  },
  {
    userName: 'Your Sponsor Level',
    link: '/topic2',
    icon: FaImage,
    imageUrl: 'src/assets/gold_badge.jpeg'
  }
];

const COLORS = ['#0088FE', '#23b37f', '#b19041', '#b66544'];

const Home: React.FC = () => {
  return (
      <main style={styles.mainContainer}>

        <div style={styles.flex}>
          <Card style={styles.card2} hoverable>
            <Link to={users2[0].link}>
              <div style={styles.textCenter} className="flex flex-col items-center">
                <h3 style={{ margin: '5px 0' ,fontSize:'50px'}}>{users2[0].userName}</h3>
                <p style={{ margin: '2px 0' ,fontSize:'30px'}}>{users2[0].venue}</p>
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{users2[0].date}</p>
              </div>
            </Link>
          </Card>

          <Card style={styles.card2} hoverable>
            <Link to={users2[1].link}>
              <div style={styles.textCenter} className="flex flex-col items-center">
                <h3 style={{ margin: '0px 0' ,fontSize:'30px'}}>{users2[1].userName}</h3>
                {users2[1].imageUrl && <img src={users2[1].imageUrl} alt={users2[1].userName} style={styles.image2} />}
              </div>
            </Link>
          </Card>
        </div>

        <div style={styles.flex}>
          {users.map((user, index) => (
              <Card key={index} style={styles.card} hoverable>
                <Link to={user.link}>
                  <div className="flex flex-col items-center">
                    <user.icon style={styles.icon} />
                    <div className="text-center text-xl">
                      <h3>{user.userName}</h3>
                      <h2>{user.count}</h2>
                    </div>
                  </div>
                </Link>
              </Card>
          ))}
        </div>

        <div style={styles.chartsContainer}>
          <div style={styles.chartContainer}>
            <h1 className="text-3xl font-bold text-center mb-10 mt-10">Participant Count</h1>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                  {data.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div style={styles.chartContainer}>
            <h1 className="text-3xl font-bold text-center mb-0 mt-10">Participant Feedback</h1>
            <img
                src="src/assets/pre-conference.png"
                alt="Pre-Conference"
                style={styles.image}
            />
            <div className="flex justify-center mt-0">
              <Link to="/more-feedbacks">
                <button
                    style={styles.button}
                    onMouseEnter={() => ( styles.buttonHover.backgroundColor)}
                    onMouseLeave={() => (styles.button.backgroundColor)}
                >
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
  );
}

export default Home;

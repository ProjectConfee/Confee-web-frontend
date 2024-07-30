


import { Link } from 'react-router-dom';

interface Feedback {
  id: number;
  participant: string;
  comment: string;
  rating: number;
}

const feedbacks: Feedback[] = [
  { id: 1, participant: 'Damiru Herath', comment: 'Great event!', rating: 3 },
  { id: 2, participant: 'Jane Smith', comment: 'Very informative.', rating: 4 },
];


import './Home.css';
import { GiShop } from "react-icons/gi";
import {  BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Home() {
  const data = [
    { name: 'Participants who visit', value: 50 },
    { name: 'Participants yet to come', value: 200 },
  ];

  const COLORS = ['#0088FE', '#23b37f', '#b19041', '#b66544'];

  return (
      <main className='main-container'>

        <div className='main-cards'>

          <div className='card'>
            <div className='card-inner'>
              <h3>REGISTERED PARTICIPANTS</h3>
              <h2>FOR CONFERENCE DAY 1</h2>
              <BsPeopleFill/>
            </div>
            <h1>300</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>REGISTERED PARTICIPANTS</h3>
              <h2>FOR CONFERENCE DAY 2</h2>
              <BsPeopleFill/>
            </div>
            <h1>120</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>STALL </h3>
              <br></br>

              <GiShop/>
            </div>
            <h1>STALL NO 3</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>ALERTS</h3><br></br>
              <BsFillBellFill/>
            </div>
            <h1>42</h1>
          </div>
        </div>
        <br></br><br></br>
        <div className='charts-container'>
          <div className='chart-container'>
            <h3>PARTICIPANT COUNT</h3>
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
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                  ))}
                </Pie>
                <Tooltip/>
                <Legend/>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className='right-container'>
            <div className="mt-10 items-left">
              <h1 className="text-3xl font-bold text-center mb-10">Participant Feedback</h1>
              <div className="w-full max-w-2xl mx-auto">
                {feedbacks.map((feedback) => (
                    <div key={feedback.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
                      <p className="text-xl font-semibold">{feedback.participant}</p>
                      <p className="mt-2 text-gray-700">{feedback.comment}</p>
                      <p className="mt-2 text-yellow-500">Rating: {'★'.repeat(feedback.rating)}</p>
                    </div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Link to="/more-feedbacks">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Home;
import React, { useEffect, useState } from 'react';
import { Card, Spin } from 'antd'; // Import necessary components from Ant Design
import 'antd/dist/reset.css'; // Ensure Ant Design styles are imported

// Define the type for Committee Member based on your backend entity
interface CommitteeMember {
    id: number;
    name: string;
    nic: string;
    email: string;
    contact: string;
    role: string;
    status: string;
}

const CommitteePage: React.FC = () => {
    const [members, setMembers] = useState<CommitteeMember[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch all committee members from the backend
    const fetchMembers = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/committee/getCommittee');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            // console.log("Fetched data:", data);
            setMembers(data);
            setLoading(false); // Set loading to false when data is fetched
        } catch (error) {
            console.error('Error fetching committee members:', error);
            setError('Failed to fetch committee members. Please try again later.');
            setLoading(false); // Set loading to false on error
        }
    };

    useEffect(() => {
        fetchMembers();
    }, []);

    return (
        <div className="bg-gradient-to-r from-blue-50 to-gray-100 mt-16 mx-auto max-w-5xl p-8 rounded-3xl shadow-xl">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-extrabold text-gray-800">Committee Members</h2>
            </div>

            {/* Display loading spinner while data is being fetched */}
            {loading && !error && (
                <div className="flex justify-center items-center">
                    <Spin size="large" />
                </div>
            )}

            {/* Display error message if fetching fails */}
            {error && (
                <div className="text-center text-red-500 text-xl">
                    {error}
                </div>
            )}

            {/* Display the committee members if data is available */}
            {!loading && !error && members.length > 0 && (
                <div className="space-y-6">
                    {members.map((member) => (
                        <Card
                            key={member.id}
                            className="bg-white border border-gray-200 rounded-lg shadow-lg"
                            style={{ padding: '12px', borderRadius: '10px', position: 'relative' }}
                        >
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold text-gray-800 mb-2">{member.name}</p>
                                <p className="text-gray-500 mb-1">NIC: {member.nic}</p>
                                <p className="text-gray-500 mb-1">Email: {member.email}</p>
                                <p className="text-gray-500 mb-1">Contact: {member.contact}</p>
                                <p className="text-gray-500 mb-1">Role: {member.role}</p>
                                <p className="text-gray-500 mb-4">Status: {member.status}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            )}

            {/* Display a message if no committee members are found */}
            {!loading && !error && members.length === 0 && (
                <div className="text-center text-gray-500 text-xl">
                    No committee members found.
                </div>
            )}
        </div>
    );
};

export default CommitteePage;

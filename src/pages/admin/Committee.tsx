import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Member {
    committee_id?: number;
    committee_name: string;
    nic: string;
    email: string;
    phone: string;
    role: string;
    status: string;
}

const CommitteeMembers: React.FC = () => {
    const [members, setMembers] = useState<Member[]>([]);
    const [showPopup, setShowPopup] = useState(false);
    const [editingMember, setEditingMember] = useState<Member | null>(null);

    const API_BASE_URL = "http://localhost:8080/api/committee";

    // Fetch committee members from backend
    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        const token = localStorage.getItem("authToken"); // Get the token from localStorage
        if (!token) {
            console.error("No auth token found");
            return; // Exit if no token exists
        }

        try {
            const response = await axios.get(`${API_BASE_URL}/getCommittee`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Add token to the headers
                },
            });
            console.log("API Response:", response);
            setMembers(response.data); // Set members in state
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    };

    const handleAddClick = () => {
        setEditingMember(null);
        setShowPopup(true);
    };

    const handleEditClick = (member: Member) => {
        setEditingMember(member);
        setShowPopup(true);
    };

    const handleDeleteClick = async (member: Member) => {
        try {
            const token = localStorage.getItem("authToken"); // Get the token for delete
            if (!token) {
                console.error("No auth token found for delete");
                return;
            }

            await axios.delete(`${API_BASE_URL}/deleteCommittee`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: member,
            });
            fetchMembers(); // Refresh the list after deletion
        } catch (error) {
            console.error("Error deleting member:", error);
        }
    };

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const committee_name = formData.get("committee_name") as string;
        const nic = formData.get("nic") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const role = formData.get("role") as string;
        const status = "Active";

        const newMember: Member = {
            committee_name,
            nic,
            email,
            phone,
            role,
            status,
            committee_id: editingMember?.committee_id,
        };

        try {
            const token = localStorage.getItem("authToken"); // Get the token for save/update
            if (!token) {
                console.error("No auth token found for save");
                return;
            }

            if (editingMember) {
                // Update existing member
                await axios.put(`${API_BASE_URL}/updateCommittee`, newMember, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            } else {
                // Add new member
                await axios.post(`${API_BASE_URL}/saveCommittee`, newMember, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }
            fetchMembers();
        } catch (error) {
            console.error("Error saving member:", error);
        }

        setShowPopup(false);
    };

    return (
        <div className="container mx-auto p-4">
            <button
                className="mb-4 bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600"
                onClick={handleAddClick}
            >
                Add New Member
            </button>
            <h1 className="text-2xl font-bold mb-4">Committee Members</h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">NIC</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Phone</th>
                    <th className="py-2 px-4 border-b">Role</th>
                    <th className="py-2 px-4 border-b">Status</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                </tr>
                </thead>
                <tbody>
                {members.map((member) => (
                    <tr key={member.committee_id}>
                        <td className="py-2 px-4 border-b">{member.committee_name}</td>
                        <td className="py-2 px-4 border-b">{member.nic}</td>
                        <td className="py-2 px-4 border-b">{member.email}</td>
                        <td className="py-2 px-4 border-b">{member.phone}</td>
                        <td className="py-2 px-4 border-b">{member.role}</td>
                        <td className="py-2 px-4 border-b">{member.status}</td>
                        <td className="py-2 px-4 border-b flex space-x-2">
                            <button
                                className="bg-blue-500 text-white py-1 px-3 rounded"
                                onClick={() => handleEditClick(member)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white py-1 px-3 rounded"
                                onClick={() => handleDeleteClick(member)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {showPopup && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">
                            {editingMember ? "Edit Member" : "Add New Member"}
                        </h2>
                        <form onSubmit={handleSave}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="committee_name"
                                    defaultValue={editingMember?.committee_name || ""}
                                    className="border border-gray-300 rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    NIC
                                </label>
                                <input
                                    type="text"
                                    name="nic"
                                    defaultValue={editingMember?.nic || ""}
                                    className="border border-gray-300 rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={editingMember?.email || ""}
                                    className="border border-gray-300 rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    defaultValue={editingMember?.phone || ""}
                                    className="border border-gray-300 rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Role
                                </label>
                                <input
                                    type="text"
                                    name="role"
                                    defaultValue={editingMember?.role || ""}
                                    className="border border-gray-300 rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CommitteeMembers;

import React, {
    useState,
    useEffect
} from 'react';

import axios from 'axios';

interface Speaker {
    speaker_id?: number;
    speaker_name: string;
    nic: string;
    email: string;
    phone: string;
    status: string;
}

const Speakers: React.FC = () => {
    const [speakers, setSpeakers] = useState<Speaker[]>([]);
    const [showPopup, setShowPopup] = useState(false);
    const [editingSpeaker, setEditingSpeaker] = useState<Speaker | null>(null);

    const API_BASE_URL = "http://localhost:8080/api/speakers";

    // Fetch speakers from backend
    useEffect(() => {
        fetchSpeakers();
    }, []);

    const fetchSpeakers = async () => {
        const token = localStorage.getItem("authToken"); // Get the token from localStorage
        if (!token) {
            console.error("No auth token found");
            return; // Exit if no token exists
        }

        try {
            const response = await axios.get(`${API_BASE_URL}/getSpeakers`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Add token to the headers
                },
            });
            console.log("API Response:", response);
            setSpeakers(response.data); // Set speakers in state
        } catch (error) {
            console.error("Error fetching speakers:", error);
        }
    };

    const handleAddClick = () => {
        setEditingSpeaker(null);
        setShowPopup(true);
    };

    const handleEditClick = (speaker: Speaker) => {
        setEditingSpeaker(speaker);
        setShowPopup(true);
    };

    const handleDeleteClick = async (speaker: Speaker) => {
        try {
            const token = localStorage.getItem("authToken"); // Get the token for delete
            if (!token) {
                console.error("No auth token found for delete");
                return;
            }

            await axios.delete(`${API_BASE_URL}/deleteSpeakers`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: speaker,
            });
            fetchSpeakers(); // Refresh the list after deletion
        } catch (error) {
            console.error("Error deleting speaker:", error);
        }
    };

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const speaker_name = formData.get("speaker_name") as string;
        const nic = formData.get("nic") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const status = "Active";

        const newSpeaker: Speaker = {
            speaker_name,
            nic,
            email,
            phone,
            status,
            speaker_id: editingSpeaker?.speaker_id,
        };

        try {
            const token = localStorage.getItem("authToken"); // Get the token for save/update
            if (!token) {
                console.error("No auth token found for save");
                return;
            }

            if (editingSpeaker) {
                // Update existing speaker
                await axios.put(`${API_BASE_URL}/updateSpeakers`, newSpeaker, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            } else {
                // Add new speaker
                await axios.post(`${API_BASE_URL}/saveSpeakers`, newSpeaker, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }
            fetchSpeakers();
        } catch (error) {
            console.error("Error saving speaker:", error);
        }

        setShowPopup(false);
    };

    return (
        <div className="relative container mx-auto p-4">
            <button
                className="absolute top-2 right-4 bg-green-500 text-white py-2 px-4 rounded-2xl shadow hover:bg-green-600"
                onClick={handleAddClick}
            >
                Add New Speaker
            </button>
            <h1 className="text-2xl font-bold mb-4">
                Speakers
            </h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                <tr>
                    <th className="py-2 px-4 border-b">
                        Name
                    </th>
                    <th className="py-2 px-4 border-b">
                        NIC
                    </th>
                    <th className="py-2 px-4 border-b">
                        Email
                    </th>
                    <th className="py-2 px-4 border-b">
                        Phone
                    </th>
                    <th className="py-2 px-4 border-b">
                        Status
                    </th>
                    <th className="py-2 px-4 border-b">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody>
                {speakers.map((speaker) => (
                    <tr key={speaker.speaker_id}>
                        <td className="py-2 px-4 border-b">
                            {speaker.speaker_name}
                        </td>
                        <td className="py-2 px-4 border-b">
                            {speaker.nic}
                        </td>
                        <td className="py-2 px-4 border-b">
                            {speaker.email}
                        </td>
                        <td className="py-2 px-4 border-b">
                            {speaker.phone}
                        </td>
                        <td className="py-2 px-4 border-b">
                            {speaker.status}
                        </td>
                        <td className="py-2 px-4 border-b flex space-x-2">
                            <button
                                className="bg-blue-500 text-white py-1 px-3 rounded"
                                onClick={() => handleEditClick(speaker)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white py-1 px-3 rounded"
                                onClick={() => handleDeleteClick(speaker)}
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
                            {editingSpeaker ? "Edit Speaker" : "Add New Speaker"}
                        </h2>
                        <form onSubmit={handleSave}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="speaker_name"
                                    defaultValue={editingSpeaker?.speaker_name || ""}
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
                                    defaultValue={editingSpeaker?.nic || ""}
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
                                    defaultValue={editingSpeaker?.email || ""}
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
                                    defaultValue={editingSpeaker?.phone || ""}
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

export default Speakers;

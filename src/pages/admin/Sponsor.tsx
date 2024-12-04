import React, {
    useState,
    useEffect
} from "react";

import axios from "axios";

interface Sponsor {
    sponsor_id?: number;
    company_name: string;
    email: string;
    phone: string;
    level: string;
}

const Sponsors: React.FC = () => {
    const [sponsors, setSponsors] = useState<Sponsor[]>([]);
    const [showPopup, setShowPopup] = useState(false);
    const [editingSponsor, setEditingSponsor] = useState<Sponsor | null>(null);

    const API_BASE_URL = "http://localhost:8080/api/sponsorDetails";

    useEffect(() => {
        fetchSponsors();
    }, []);

    const fetchSponsors = async () => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            console.error("No auth token found");
            return;
        }

        try {
            const response = await axios.get(`${API_BASE_URL}/getSponsorDetails`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("API Response:", response);
            setSponsors(response.data);
        } catch (error) {
            console.error("Error fetching sponsors:", error);
        }
    };

    const handleAddClick = () => {
        setEditingSponsor(null);
        setShowPopup(true);
    };

    const handleEditClick = (sponsor: Sponsor) => {
        setEditingSponsor(sponsor);
        setShowPopup(true);
    };

    const handleDeleteClick = async (sponsor: Sponsor) => {
        try {
            const token = localStorage.getItem("authToken");
            if (!token) {
                console.error("No auth token found for delete");
                return;
            }

            await axios.delete(`${API_BASE_URL}/deleteSponsorDetails`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: sponsor,
            });
            fetchSponsors();
        } catch (error) {
            console.error("Error deleting sponsor:", error);
        }
    };

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const company_name = formData.get("company_name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const level = formData.get("level") as string;

        const newSponsor: Sponsor = {
            company_name,
            email,
            phone,
            level,
            sponsor_id: editingSponsor?.sponsor_id,
        };

        try {
            const token = localStorage.getItem("authToken");
            if (!token) {
                console.error("No auth token found for save");
                return;
            }

            if (editingSponsor) {
                // Update existing sponsor
                await axios.put(`${API_BASE_URL}/updateSponsorDetails`, newSponsor, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            } else {
                // Add new sponsor
                await axios.post(`${API_BASE_URL}/saveSponsorDetails`, newSponsor, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }
            fetchSponsors();
        } catch (error) {
            console.error("Error saving sponsor:", error);
        }

        setShowPopup(false);
    };

    return (
        <div className="relative container mx-auto p-4">
            <button
                className="absolute top-2 right-4 bg-green-500 text-white py-2 px-4 rounded-2xl shadow hover:bg-green-600"
                onClick={handleAddClick}
            >
                Add New Sponsor
            </button>
            <h1 className="text-2xl font-bold mb-4">
                Sponsors
            </h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                <tr>
                    <th className="py-2 px-4 border-b">
                        Company Name
                    </th>
                    <th className="py-2 px-4 border-b">
                        Email
                    </th>
                    <th className="py-2 px-4 border-b">
                        Phone
                    </th>
                    <th className="py-2 px-4 border-b">
                        Level
                    </th>
                    <th className="py-2 px-4 border-b">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody>
                {sponsors.map((sponsor) => (
                    <tr key={sponsor.sponsor_id}>
                        <td className="py-2 px-4 border-b">
                            {sponsor.company_name}
                        </td>
                        <td className="py-2 px-4 border-b">
                            {sponsor.email}
                        </td>
                        <td className="py-2 px-4 border-b">
                            {sponsor.phone}
                        </td>
                        <td className="py-2 px-4 border-b">
                            {sponsor.level}
                        </td>
                        <td className="py-2 px-4 border-b flex space-x-2">
                            <button
                                className="bg-blue-500 text-white py-1 px-3 rounded"
                                onClick={() => handleEditClick(sponsor)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white py-1 px-3 rounded"
                                onClick={() => handleDeleteClick(sponsor)}
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
                            {editingSponsor ? "Edit Sponsor" : "Add New Sponsor"}
                        </h2>
                        <form onSubmit={handleSave}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    name="company_name"
                                    defaultValue={editingSponsor?.company_name || ""}
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
                                    defaultValue={editingSponsor?.email || ""}
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
                                    defaultValue={editingSponsor?.phone || ""}
                                    className="border border-gray-300 rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Level
                                </label>
                                <input
                                    type="text"
                                    name="level"
                                    defaultValue={editingSponsor?.level || ""}
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

export default Sponsors;

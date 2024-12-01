import React, {
    useState,
    useEffect
} from "react";

import axios from "axios";

interface Author {
    author_id?: number;
    author_name: string;
    nic: string;
    email: string;
    phone: string;
    code: string;
    topic: string;
    status: string;
}

const AuthorsPage: React.FC = () => {
    const [authors, setAuthors] = useState<Author[]>([]);
    const [showPopup, setShowPopup] = useState(false);
    const [editingAuthor, setEditingAuthor] = useState<Author | null>(null);

    const API_BASE_URL = "http://localhost:8080/api/authors";

    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = async () => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            console.error("No auth token found");
            return;
        }

        try {
            const response = await axios.get(`${API_BASE_URL}/getAuthors`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            setAuthors(response.data);
        } catch (error) {
            console.error("Error fetching authors:", error);
        }
    };

    const handleAddClick = () => {
        setEditingAuthor(null);
        setShowPopup(true);
    };

    const handleEditClick = (author: Author) => {
        setEditingAuthor(author);
        setShowPopup(true);
    };

    const handleDeleteClick = async (author: Author) => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            console.error("No auth token found for delete");
            return;
        }

        try {
            await axios.delete(`${API_BASE_URL}/deleteAuthor`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: author,
            });
            fetchAuthors();
        } catch (error) {
            console.error("Error deleting author:", error);
        }
    };

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const newAuthor: Author = {
            author_name: formData.get("author_name") as string,
            nic: formData.get("nic") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            code: formData.get("code") as string,
            topic: formData.get("topic") as string,
            status: "Active",
            author_id: editingAuthor?.author_id,
        };

        try {
            const token = localStorage.getItem("authToken");
            if (!token) {
                console.error("No auth token found for save");
                return;
            }

            if (editingAuthor) {
                await axios.put(`${API_BASE_URL}/updateAuthor`, newAuthor, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
            } else {
                await axios.post(`${API_BASE_URL}/saveAuthor`, newAuthor, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
            }
            fetchAuthors();
        } catch (error) {
            console.error("Error saving author:", error);
        }

        setShowPopup(false);
    };

    return (
        <div className="relative container mx-auto p-4">
            <button
                className="absolute top-2 right-4 bg-green-500 text-white py-2 px-4 rounded-2xl shadow hover:bg-green-600"
                onClick={handleAddClick}
            >
                Add New Author
            </button>
            <h1 className="text-2xl font-bold mb-4">
                Authors
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
                        Code
                    </th>
                    <th className="py-2 px-4 border-b">
                        Topic
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
                {authors.map((author) => (
                    <tr key={author.author_id}>
                        <td className="py-2 px-4 border-b">
                            {author.author_name}
                        </td>
                        <td className="py-2 px-4 border-b">
                            {author.nic}
                        </td>
                        <td className="py-2 px-4 border-b">
                            {author.email}
                        </td>
                        <td className="py-2 px-4 border-b">
                            {author.phone}
                        </td>
                        <td className="py-2 px-4 border-b">
                            {author.code}
                        </td>
                        <td className="py-2 px-4 border-b">
                            {author.topic}
                        </td>
                        <td className="py-2 px-4 border-b">
                            {author.status}
                        </td>
                        <td className="py-2 px-4 border-b flex space-x-2">
                            <button
                                className="bg-blue-500 text-white py-1 px-3 rounded"
                                onClick={() => handleEditClick(author)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white py-1 px-3 rounded"
                                onClick={() => handleDeleteClick(author)}
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
                            {editingAuthor ? "Edit Author" : "Add New Author"}
                        </h2>
                        <form onSubmit={handleSave}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="author_name"
                                    defaultValue={editingAuthor?.author_name || ""}
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
                                    defaultValue={editingAuthor?.nic || ""}
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
                                    defaultValue={editingAuthor?.email || ""}
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
                                    defaultValue={editingAuthor?.phone || ""}
                                    className="border border-gray-300 rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Code
                                </label>
                                <input
                                    type="text"
                                    name="code"
                                    defaultValue={editingAuthor?.code || ""}
                                    className="border border-gray-300 rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Topic
                                </label>
                                <input
                                    type="text"
                                    name="topic"
                                    defaultValue={editingAuthor?.topic || ""}
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

export default AuthorsPage;

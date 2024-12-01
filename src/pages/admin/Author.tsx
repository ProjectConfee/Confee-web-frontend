import { useState } from "react";

interface Member {
    name: string;
    nic: string;
    email: string;
    contact: string;
    role: string;
    status: string;
    code: string; // New field
    topic: string; // New field
}

const Authors = () => {
    const [members, setMembers] = useState<Member[]>([
        {
            name: "Keshali Dhananjana",
            nic: "200056987123",
            email: "keshali@gmail.com",
            contact: "071 234 5678",
            role: "Chair",
            status: "Active",
            code: "C001",
            topic: "AI Research",
        },
        // Other member data...
    ]);

    const [showPopup, setShowPopup] = useState(false);
    const [editingMember, setEditingMember] = useState<Member | null>(null);

    const handleAddClick = () => {
        setEditingMember(null);
        setShowPopup(true);
    };

    const handleEditClick = (member: Member) => {
        setEditingMember(member);
        setShowPopup(true);
    };

    const handleDeleteClick = (nic: string) => {
        setMembers(members.filter((member) => member.nic !== nic));
    };

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const name = (formData.get("name") as string) || "";
        const nic = (formData.get("nic") as string) || "";
        const email = (formData.get("email") as string) || "";
        const contact = (formData.get("contact") as string) || "";
        const role = (formData.get("role") as string) || "";
        const code = (formData.get("code") as string) || ""; // New field
        const topic = (formData.get("topic") as string) || ""; // New field

        const newMember: Member = {
            name,
            nic,
            email,
            contact,
            role,
            code,
            topic,
            status: "Active",
        };

        if (editingMember) {
            setMembers(
                members.map((member) =>
                    member.nic === editingMember.nic ? newMember : member
                )
            );
        } else {
            setMembers([...members, newMember]);
        }

        setShowPopup(false);
    };

    return (
        <div className="relative container mx-auto p-4">
            <button
                className="absolute top-2 right-4 bg-green-500 text-white py-2 px-4 rounded-2xl shadow hover:bg-green-600"
                onClick={handleAddClick}
            >
                Add New Member
            </button>
            <h1 className="text-2xl font-bold mb-4">Authors</h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">NIC</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Contact</th>
                    <th className="py-2 px-4 border-b">Code</th>
                    <th className="py-2 px-4 border-b">Topic</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                </tr>
                </thead>
                <tbody>
                {members.map((member, index) => (
                    <tr key={index}>
                        <td className="py-2 px-4 border-b text-center">{member.name}</td>
                        <td className="py-2 px-4 border-b text-center">{member.nic}</td>
                        <td className="py-2 px-4 border-b text-center">{member.email}</td>
                        <td className="py-2 px-4 border-b text-center">{member.contact}</td>
                        <td className="py-2 px-4 border-b text-center">{member.code}</td>
                        <td className="py-2 px-4 border-b text-center">{member.topic}</td>
                        <td className="py-2 px-4 border-b text-center">
                            <div className="flex justify-center space-x-2">
                                <button
                                    className="bg-blue-500 text-white py-1 px-3 rounded-xl"
                                    onClick={() => handleEditClick(member)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white py-1 px-3 rounded-xl"
                                    onClick={() => handleDeleteClick(member.nic)}
                                >
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {showPopup && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white px-10 py-5 rounded-2xl shadow-lg w-[500px] mt-20">
                        <h2 className="text-xl font-bold mb-4">
                            {editingMember ? "Edit Member" : "Add New Member"}
                        </h2>
                        <form onSubmit={handleSave}>
                            {/* Form fields */}
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white py-2 px-4 rounded-xl"
                                    onClick={() => setShowPopup(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-2 px-4 rounded-xl"
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

export default Authors;

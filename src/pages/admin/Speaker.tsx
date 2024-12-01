import { useState } from 'react';

interface Member {
    name: string;
    nic: string;
    email: string;
    contact: string;
    role: string;
    status: string;
    code: string;
    topic: string;
}

const Speakers = () => {
    const [members, setMembers] = useState<Member[]>([
        {
            name: 'Keshali Dhananjana',
            nic: '200056987123',
            email: 'keshali@gmail.com',
            contact: '071 234 5678',
            role: 'Chair',
            status: 'Active',
            code: 'C001',
            topic: 'AI Research'
        },
        {
            name: 'Viranga Dias',
            nic: '200098745631',
            email: 'viranga@gmail.com',
            contact: '072 345 6789',
            role: 'Secretary',
            status: 'Active',
            code: 'C002',
            topic: 'Data Science'
        },
        {
            name: 'Viraji Dewmini',
            nic: '200185471239',
            email: 'viraji@gmail.com',
            contact: '077 456 7890',
            role: 'Treasurer',
            status: 'Active',
            code: 'C003',
            topic: 'Blockchain'
        },
        {
            name: 'Ayesh Pramuditha',
            nic: '200098456317',
            email: 'ayesh@gmail.com',
            contact: '074 567 8901',
            role: 'Member',
            status: 'Active',
            code: 'C004',
            topic: 'Cybersecurity'
        },
        {
            name: 'Ranuri Dissanayake',
            nic: '200145369128',
            email: 'ranuri@gmail.com',
            contact: '075 678 9012',
            role: 'Member',
            status: 'Active',
            code: 'C005',
            topic: 'Quantum Computing'
        },
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

    const handleDelete = (nic: string) => {
        setMembers(members.filter(member => member.nic !== nic));
    };

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const name = formData.get('name') as string | null || '';
        const nic = formData.get('nic') as string | null || '';
        const email = formData.get('email') as string | null || '';
        const contact = formData.get('contact') as string | null || '';
        const role = formData.get('role') as string | null || '';
        const code = formData.get('code') as string || '';
        const topic = formData.get('topic') as string || '';

        const newMember: Member = {
            name,
            nic,
            email,
            contact,
            role,
            code,
            topic,
            status: 'Active',
        };

        if (editingMember) {
            setMembers(members.map(member =>
                member.nic === editingMember.nic ? newMember : member
            ));
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
            <h1 className="text-2xl font-bold mb-4">
                Speakers
            </h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">NIC</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Contact</th>
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
                        <td className="py-2 px-4 border-b flex justify-center items-center space-x-2">
                            <button
                                className="bg-blue-500 text-white py-1 px-3 rounded-xl"
                                onClick={() => handleEditClick(member)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white py-1 px-3 rounded-xl"
                                onClick={() => handleDelete(member.nic)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Popup Form */}
            {showPopup && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white py-5 px-10 rounded-2xl shadow-lg w-[500px]">
                        <h2 className="text-xl font-bold mb-4">
                            {editingMember ? 'Edit Member' : 'Add New Member'}
                        </h2>
                        <form onSubmit={handleSave}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={editingMember ? editingMember.name : ''}
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
                                    defaultValue={editingMember ? editingMember.nic : ''}
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
                                    defaultValue={editingMember ? editingMember.email : ''}
                                    className="border border-gray-300 rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Contact
                                </label>
                                <input
                                    type="text"
                                    name="contact"
                                    defaultValue={editingMember ? editingMember.contact : ''}
                                    className="border border-gray-300 rounded w-full p-2"
                                    required
                                />
                            </div>
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

export default Speakers;

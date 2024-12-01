import { useState } from 'react';

interface Member {
    companyName: string;
    companyEmail: string;
    contact: string;
    level: string;
    status: string;
}

const Sponsor = () => {
    const [members, setMembers] = useState<Member[]>([
        {
            companyName: 'WSO2',
            companyEmail: 'builder@wso2.org',
            contact: '071 234 5678',
            status: 'Approved',
            level: 'Platinum'
        },
        {
            companyName: 'Sysco Labs',
            companyEmail: 'slinfo@sysco.com',
            contact: '+94 11 202 4500',
            status: 'Approved',
            level: 'Gold'
        },
        {
            companyName: 'IFS',
            companyEmail: 'services@ifs.com',
            contact: '071 234 5678',
            status: 'Pending',
            level: 'Platinum'
        },
        {
            companyName: 'Creative Software',
            companyEmail: 'info@creativesoftware.com',
            contact: '+94 11 250 5889',
            status: 'Pending',
            level: 'Gold'
        },
        {
            companyName: 'LSEG',
            companyEmail: 'isinrequests@lseg.com',
            contact: ' +94 11 241 6020',
            status: 'Declined',
            level: 'Silver'
        },
    ]);

    const [showPopup, setShowPopup] = useState(false);
    const [editingMember, setEditingMember] = useState<Member | null>(null);

    const handleAddClick = () => {
        setEditingMember(null);
        setShowPopup(true);
    };

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const companyName = formData.get('companyName') as string || '';
        const companyEmail = formData.get('companyEmail') as string || '';
        const contact = formData.get('contact') as string || '';
        const level = formData.get('level') as string || '';

        const newMember: Member = {
            companyName,
            companyEmail,
            contact,
            level,
            status: 'Pending', // Default status
        };

        if (editingMember) {
            setMembers(members.map(member =>
                member.companyEmail === editingMember.companyEmail ? newMember : member
            ));
        } else {
            setMembers([...members, newMember]);
        }

        setShowPopup(false);
    };

    const updateStatus = (companyEmail: string, newStatus: string) => {
        setMembers(members.map(member =>
            member.companyEmail === companyEmail ? { ...member, status: newStatus } : member
        ));
    };

    return (
        <div className="relative container mx-auto p-4">
            <button
                className="absolute top-2 right-4 bg-blue-500 text-white py-2 px-4 rounded-2xl shadow hover:bg-blue-600"
                onClick={handleAddClick}
            >
                Add New Member
            </button>
            <h1 className="text-2xl font-bold mb-4">
                Sponsors
            </h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Company Name</th>
                    <th className="py-2 px-4 border-b">Company Email</th>
                    <th className="py-2 px-4 border-b">Contact Number</th>
                    <th className="py-2 px-4 border-b">Level</th>
                    <th className="py-2 px-4 border-b">Status</th>
                </tr>
                </thead>
                <tbody>
                {members.map((member, index) => (
                    <tr key={index}>
                        <td className="py-2 px-4 border-b text-center">{member.companyName}</td>
                        <td className="py-2 px-4 border-b text-center">{member.companyEmail}</td>
                        <td className="py-2 px-4 border-b text-center">{member.contact}</td>
                        <td className="py-2 px-4 border-b text-center">{member.level}</td>
                        <td className="py-2 px-4 border-b text-center">
                            {member.status === 'Approved' && (
                                <button
                                    className="py-1 px-3 rounded-xl text-white bg-green-500"
                                    onClick={() => updateStatus(member.companyEmail, 'Approved')}
                                    disabled
                                >
                                    Approved
                                </button>
                            )}
                            {member.status === 'Declined' && (
                                <button
                                    className="py-1 px-3 rounded-xl text-white bg-red-500"
                                    onClick={() => updateStatus(member.companyEmail, 'Declined')}
                                    disabled
                                >
                                    Declined
                                </button>
                            )}
                            {member.status === 'Pending' && (
                                <button
                                    className="py-1 px-3 rounded-xl text-white bg-yellow-500"
                                    onClick={() => updateStatus(member.companyEmail, 'Pending')}
                                    disabled
                                >
                                    Pending
                                </button>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Popup Form */}
            {showPopup && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white px-10 py-5 rounded-2xl shadow-lg w-[500px]">
                        <h2 className="text-xl font-bold mb-4">
                            {editingMember ? 'Edit Member' : 'Add New Member'}
                        </h2>
                        <form onSubmit={handleSave}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    name="companyName"
                                    defaultValue={editingMember ? editingMember.companyName : ''}
                                    className="border border-gray-300 rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Company Email
                                </label>
                                <input
                                    type="email"
                                    name="companyEmail"
                                    defaultValue={editingMember ? editingMember.companyEmail : ''}
                                    className="border border-gray-300 rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    Contact Number
                                </label>
                                <input
                                    type="text"
                                    name="contact"
                                    defaultValue={editingMember ? editingMember.contact : ''}
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
                                    defaultValue={editingMember ? editingMember.level : ''}
                                    className="border border-gray-300 rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-2 px-4 rounded-xl"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="bg-gray-300 py-2 px-4 rounded-xl"
                                    onClick={() => setShowPopup(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sponsor;

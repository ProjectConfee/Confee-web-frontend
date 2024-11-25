import {
    useState
} from 'react';

interface Member {
    companyName: string;
    companyEmail: string;
    contact: string;
    role: string;
    status: string;
    code: string;
    topic: string;
    level: string;
}

const Sponsors = () => {
    const [members, setMembers] = useState<Member[]>([
        {
            companyName: 'WSO2',
            companyEmail: 'builder@wso2.org',
            contact: '071 234 5678',
            role: 'Chair',
            status: 'Active',
            code: 'C001',
            topic: 'AI Research',
            level: 'Platinum'
        },
        {
            companyName: 'Sysco Labs',
            companyEmail: 'slinfo@sysco.com',
            contact: '+94 11 202 4500',
            role: 'Secretary',
            status: 'Active',
            code: 'C002',
            topic: 'Data Science',
            level: 'Gold'
        },
        {
            companyName: 'IFS',
            companyEmail: 'services@ifs.com',
            contact: '071 234 5678',
            role: 'Chair',
            status: 'Active',
            code: 'C001',
            topic: 'AI Research',
            level: 'Platinum'
        },
        {
            companyName: 'Creative Software',
            companyEmail: 'info@creativesoftware.com',
            contact: '+94 11 250 5889',
            role: 'Secretary',
            status: 'Active',
            code: 'C002',
            topic: 'Data Science',
            level: 'Gold'
        },
        {
            companyName: 'LSEG',
            companyEmail: 'isinrequests@lseg.com',
            contact: ' +94 11 241 6020',
            role: 'Secretary',
            status: 'Active',
            code: 'C002',
            topic: 'Data Science',
            level: 'Silver'
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

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const companyName = formData.get('companyName') as string | null || '';
        const companyEmail = formData.get('companyEmail') as string | null || '';
        const contact = formData.get('contact') as string | null || '';
        const role = formData.get('role') as string | null || '';
        const code = formData.get('code') as string || '';
        const topic = formData.get('topic') as string || '';
        const level = formData.get('level') as string || '';

        const newMember: Member = {
            companyName,
            companyEmail,
            contact,
            role,
            code,
            topic,
            level,
            status: 'Active',
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

    const handleAccept = (companyEmail: string) => {
        setMembers(members.map(member =>
            member.companyEmail === companyEmail ? { ...member, status: 'Accepted' } : member
        ));
    };

    const handleDecline = (companyEmail: string) => {
        setMembers(members.map(member =>
            member.companyEmail === companyEmail ? { ...member, status: 'Declined' } : member
        ));
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
                Sponsors
            </h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Company Name</th>
                    <th className="py-2 px-4 border-b">Company Email</th>
                    <th className="py-2 px-4 border-b">Contact</th>
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
                            {member.status === 'Active' && (
                                <>
                                    <button
                                        className="bg-green-500 text-white py-1 px-3 rounded-xl mr-2"
                                        onClick={() => handleAccept(member.companyEmail)}
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className="bg-red-500 text-white py-1 px-3 rounded-xl"
                                        onClick={() => handleDecline(member.companyEmail)}
                                    >
                                        Decline
                                    </button>
                                </>
                            )}
                            {member.status === 'Accepted' && (
                                <>
                                    <button
                                        className="bg-blue-500 text-white py-1 px-3 rounded-xl mr-2"
                                        onClick={() => handleEditClick(member)}
                                    >
                                        Edit
                                    </button>
                                    <button className="bg-red-500 text-white py-1 px-3 rounded-xl">
                                        Delete
                                    </button>
                                </>
                            )}
                            {member.status === 'Declined' && (
                                <span className="text-red-500 font-semibold">
                                    Declined
                                </span>
                            )}
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
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white py-2 px-4 rounded-xl mr-2"
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

export default Sponsors;

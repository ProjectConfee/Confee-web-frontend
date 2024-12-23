// import React from 'react';

const announcements = [
    {
        id: 1,
        title: "Welcome to ICTer Conference 2024",
        date: "August 20, 2024",
        content: "We are excited to welcome all participants to the ICTer Conference 2024. Stay tuned for more updates!"
    },
    {
        id: 2,
        title: "Keynote Speaker Announcement",
        date: "August 18, 2024",
        content: "We are thrilled to announce that Dr. Jane Doe will be the keynote speaker at this year’s conference."
    },
    {
        id: 3,
        title: "Registration Reminder",
        date: "August 15, 2024",
        content: "Don’t forget to register for the conference! Early bird registration ends on September 1, 2024."
    },
    {
        id: 4,
        title: "Workshop Details Released",
        date: "August 10, 2024",
        content: "Details for the pre-conference and post-conference workshops have been released. Check the schedule for more information."
    },
    {
        id: 5,
        title: "Accommodation Information",
        date: "August 8, 2024",
        content: "Information on recommended hotels and accommodations near the conference venue is now available on our website."
    },
    {
        id: 6,
        title: "Sponsorship Opportunities",
        date: "August 5, 2024",
        content: "We are now accepting sponsorship applications. Support ICTer Conference 2024 and gain valuable exposure for your brand."
    },
    {
        id: 7,
        title: "Call for Papers Extended",
        date: "August 1, 2024",
        content: "The deadline for paper submissions has been extended to September 15, 2024. Submit your research today!"
    },
    {
        id: 8,
        title: "Travel Grants Available",
        date: "July 25, 2024",
        content: "We are offering travel grants for students and early-career researchers. Apply before September 1, 2024."
    },
    {
        id: 9,
        title: "Volunteer Registration Open",
        date: "July 20, 2024",
        content: "Interested in volunteering at ICTer 2024? Register now to be part of our amazing team."
    },
    {
        id: 10,
        title: "Conference Program Preview",
        date: "July 15, 2024",
        content: "A preview of the conference program is now available. Discover the sessions, speakers, and events planned for ICTer 2024."
    }
];

const ViewAnnouncements = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Announcements</h1>
            <div className="space-y-4">
                {announcements.map((announcement) => (
                    <div key={announcement.id} className="bg-white shadow-md rounded-2xl p-4 mx-10">
                        <div className="flex justify-between items-start mb-2">
                            <h2 className="text-xl font-bold">{announcement.title}</h2>
                            <p className="text-gray-500">{announcement.date}</p>
                        </div>
                        <p>{announcement.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewAnnouncements;

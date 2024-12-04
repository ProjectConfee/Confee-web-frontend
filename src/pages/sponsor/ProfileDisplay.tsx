// import React from 'react';
//
// interface Profile {
//     role: string;
//     email: string;
//     address: string;
// }
//
// interface ProfileDisplayProps {
//     profile: Profile;
// }
//
// const ProfileDisplay: React.FC<ProfileDisplayProps> = ({ profile }) => {
//     return (
//         <div>
//             <h2>Profile Details</h2>
//             <p>Name: {profile.role}</p>
//             <p>Email: {profile.email}</p>
//             <p>Address: {profile.address}</p>
//         </div>
//     );
// };
//
// export default ProfileDisplay;

// interface Profile {
//     companyName: string;
//     companyAddress: string;
//     contactNumber: string;
//     companyEmail: string;
//     biography: string;
//     playGames: Array<{ gameName: string; gameType: string }>;
//     companyLogo: string;
//     socialLinks: { [key: string]: string };
// }
// interface ProfileDisplayProps {
//     profile: Profile;
// }
//
// const ProfileDisplay: React.FC<ProfileDisplayProps> = ({ profile }) => {
//     return (
//         <div>
//             <h2>Profile Details</h2>
//             <p>Company Name: {profile.companyName}</p>
//             <p>Company Address: {profile.companyAddress}</p>
//             <p>Contact Number: {profile.contactNumber}</p>
//             <p>Company Email: {profile.companyEmail}</p>
//             <p>Biography: {profile.biography}</p>
//
//             <h3>Play Games</h3>
//             {profile.playGames.map((game, index) => (
//                 <div key={index}>
//                     <p>Game Name: {game.gameName}</p>
//                     <p>Game Type: {game.gameType}</p>
//                 </div>
//             ))}
//
//             <h3>Company Logo</h3>
//             <img src={profile.companyLogo} alt="Company Logo" />
//
//             <h3>Social Links</h3>
//             <p>Facebook: {profile.socialLinks.facebook}</p>
//             <p>Twitter: {profile.socialLinks.twitter}</p>
//             <p>Instagram: {profile.socialLinks.instagram}</p>
//             <p>LinkedIn: {profile.socialLinks.linkedin}</p>
//             <p>YouTube: {profile.socialLinks.youtube}</p>
//         </div>
//     );
// };
//
// export default ProfileDisplay;
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Profile {
    companyName: string;
    companyAddress: string;
    contactNumber: string;
    companyEmail: string;
    biography: string;
    playGames: Array<{ gameName: string; gameType: string }>;
    companyLogo: string;
    socialLinks: { [key: string]: string };
}

interface ProfileDisplayProps {
    profile: Profile;
}

const ProfileDisplay: React.FC<ProfileDisplayProps> = ({ profile }) => {
    return (
        <div>
            <h2>Profile Details</h2>
            <p>Company Name: {profile.companyName}</p>
            <p>Company Address: {profile.companyAddress}</p>
            <p>Contact Number: {profile.contactNumber}</p>
            <p>Company Email: {profile.companyEmail}</p>
            <p>Biography: {profile.biography}</p>

            <h3>Play Games</h3>
            {profile.playGames.map((game, index) => (
                <div key={index}>
                    <p>Game Name: {game.gameName}</p>
                    <p>Game Type: {game.gameType}</p>
                </div>
            ))}

            <h3>Company Logo</h3>
            <img src={profile.companyLogo} alt="Company Logo" />

            <h3>Social Links</h3>
            <p>Facebook: {profile.socialLinks.facebook}</p>
            <p>Twitter: {profile.socialLinks.twitter}</p>
            <p>Instagram: {profile.socialLinks.instagram}</p>
            <p>LinkedIn: {profile.socialLinks.linkedin}</p>
            <p>YouTube: {profile.socialLinks.youtube}</p>
        </div>
    );
};

const ProfileContainer: React.FC<{ id: string }> = ({ id }) => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [error, setError] = useState<string | null>(null);
    const token = localStorage.getItem("authToken");

    useEffect(() => {
        const fetchProfile = async () => {
            if (!token) {
                setError("No authentication token found.");
                return;
            }

            try {
                const response = await axios.get(
                    `http://localhost:8080/api/v1/admin/workshop/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setProfile(response.data); // Assuming the API returns the profile object in the response
            } catch (err) {
                console.error("Error fetching profile:", err);
                setError("Failed to fetch profile details.");
            }
        };

        fetchProfile();
    }, [id, token]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!profile) {
        return <div>Loading...</div>;
    }

    return <ProfileDisplay profile={profile} />;
};

export default ProfileContainer;

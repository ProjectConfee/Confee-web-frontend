// import React, { useEffect, useState } from 'react';
// import ProfileForm from './ProfileForm';
// import ProfileDisplay from './ProfileDisplay';
//
// interface Profile {
//     name: string;
//     email: string;
//     address: string;
// }
//
// const SponsorProfile: React.FC = () => {
//     const [profile, setProfile] = useState<Profile | null>(null);
//     const sessionID = 123; // Replace with actual session ID logic
//
//     useEffect(() => {
//         const fetchProfile = async () => {
//             try {
//                 const response = await fetch(`http://localhost:8080/api/profiles/${sessionID}`);
//                 if (response.ok) {
//                     const data = await response.json();
//                     setProfile(data);
//                 }
//             } catch (error) {
//                 console.error('Error fetching profile:', error);
//             }
//         };
//         fetchProfile();
//     }, [sessionID]);
//
//     const handleProfileSubmit = async (profileData: Profile) => {
//         try {
//             const response = await fetch('http://localhost:8080/api/profiles/add', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ ...profileData, id: sessionID }),
//             });
//
//             if (response.ok) {
//                 const data = await response.json();
//                 setProfile(data);
//             }
//         } catch (error) {
//             console.error('Error submitting profile:', error);
//         }
//     };
//
//     return (
//         <div>
//             {profile ? (
//                 <ProfileDisplay profile={profile} />
//             ) : (
//                 <ProfileForm onSubmit={handleProfileSubmit} />
//             )}
//         </div>
//     );
// };
//
// export default SponsorProfile;

import React, { useState, useEffect } from 'react';

import ProfileForm from './ProfileForm';

// Define the Profile interface
// interface Profile {
//     companyName: string;
//     companyAddress: string;
//     contactNumber: string;
//     companyEmail: string;
//     biography: string;
//     playGames: Array<{ gameName: string; gameType: string }>;
//     companyLogo: string; // URL or base64 string for image
//     socialLinks: { [key: string]: string }; // social media links
// }
//
// const SponsorProfile: React.FC = () => {
//     const [profile, setProfile] = useState<Profile | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [sessionId, setSessionId] = useState<string | null>(null); // Get this from session or user authentication
//
//     useEffect(() => {
//         // Get sessionId from wherever you're storing it, e.g., cookies, localStorage, or sessionStorage
//         const storedSessionId = localStorage.getItem('sessionId');
//         if (storedSessionId) {
//             setSessionId(storedSessionId);
//         }
//     }, []);
//
//     useEffect(() => {
//         if (sessionId) {
//             fetchProfile(sessionId);
//         }
//     }, [sessionId]);
//
//     const fetchProfile = async (sessionId: string) => {
//         try {
//             const response = await fetch(`http://localhost:8080/api/profiles/get/${sessionId}`);
//             if (response.ok) {
//                 const result = await response.json();
//                 setProfile(result); // Set the profile details in state
//             } else {
//                 setProfile(null); // If no profile found, show form to create one
//             }
//         } catch (error) {
//             console.error('Error fetching profile:', error);
//             message.error('Error fetching profile');
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     const handleProfileSubmit = async (profile: Profile) => {
//         try {
//             const response = await fetch('http://localhost:8080/api/profiles/add', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(profile),
//             });
//             if (!response.ok) {
//                 throw new Error('Failed to save profile');
//             }
//             const result = await response.json();
//             console.log('Profile saved:', result);
//             message.success('Profile saved successfully!');
//         } catch (error) {
//             message.error('Error saving profile');
//             console.error('Error saving profile:', error);
//         }
//     };
//
//     return (
//         <div>
//             {loading ? (
//                 <Spin size="large" tip="Loading profile..." />
//             ) : profile ? (
//                 <ProfileDisplay profile={profile} />
//             ) : (
//                 <ProfileForm onSubmit={handleProfileSubmit} />
//             )}
//         </div>
//     );
// };
//
// export default SponsorProfile;


const SponsorProfile: React.FC = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/profiles/session');
                if (response.ok) {
                    const data = await response.json();
                    setProfileData(data);
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };
        fetchProfile();
    }, []);

    const handleProfileSubmit = async (profile: any) => {
        try {
            const response = await fetch('http://localhost:8080/api/profiles', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(profile),
            });
            if (response.ok) {
                const result = await response.json();
                console.log('Profile saved:', result);
                setProfileData(result);
            }
        } catch (error) {
            console.error('Error submitting profile:', error);
        }
    };

    return profileData ? (
        <div>
            <h1>Existing Profile</h1>
            <pre>{JSON.stringify(profileData, null, 2)}</pre>
        </div>
    ) : (
        <ProfileForm onSubmit={handleProfileSubmit} />
    );
};

export default SponsorProfile;

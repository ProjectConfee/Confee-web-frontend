import React, { useEffect, useState } from 'react';
import ProfileForm from './ProfileForm';
import ProfileDisplay from './ProfileDisplay';

interface Profile {
    name: string;
    email: string;
    address: string;
}

const SponsorProfile: React.FC = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const sessionID = 123; // Replace with actual session ID logic

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/profiles/${sessionID}`);
                if (response.ok) {
                    const data = await response.json();
                    setProfile(data);
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };
        fetchProfile();
    }, [sessionID]);

    const handleProfileSubmit = async (profileData: Profile) => {
        try {
            const response = await fetch('http://localhost:8080/api/profiles/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...profileData, id: sessionID }),
            });

            if (response.ok) {
                const data = await response.json();
                setProfile(data);
            }
        } catch (error) {
            console.error('Error submitting profile:', error);
        }
    };

    return (
        <div>
            {profile ? (
                <ProfileDisplay profile={profile} />
            ) : (
                <ProfileForm onSubmit={handleProfileSubmit} />
            )}
        </div>
    );
};

export default SponsorProfile;


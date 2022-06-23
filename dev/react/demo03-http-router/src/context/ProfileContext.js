import React from 'react'
import { createContext, useContext, useState } from 'react'
import { Profile } from '../models/Profile';

const ProfileContext = createContext();
const profileInstance = new Profile("admin", "admin@example.com");

function useProfileInfo()
{
    return useContext(ProfileContext);
}

function ProfileProvider(props)
{
    const children = props.children;

    const [profile, setProfile] = useState(profileInstance);

    function update(user, mail)
    {
        const newProfile = new Profile(user, mail);
        setProfile(newProfile);
    }
    if (profile.user == "admin") {
        //auth
        return (
            <ProfileContext.Provider value={{profile, update}}>
                {children}
            </ProfileContext.Provider>
            )
    }
    else {
        return <h3>You should be admin to see that!</h3>
    }


}

export {ProfileProvider, useProfileInfo};

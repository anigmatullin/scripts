import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import UserService from './services/UserService';

import {getBaseUrl} from './store/config';
import getConfig from './services/ConfigService';

import Root from './components/Root';
import Login from './forms/Formik/Login';
import RHFLogin from './forms/RHF/Login';

function App()
{
    const [user, setUser] = useState<string>("");
    const [baseUrl, setbaseUrl] = useState<string>(getBaseUrl());

    const authdata = {
        "user": "user1",
        "pass": "P@ssw0rd"
    };

    useEffect(() => {

        // UserService.getAll().then(console.log);
        getConfig().then(() => {
            const url = getBaseUrl();
            setbaseUrl(url);
        });

    }, []);


    async function login()
    {
        setUser("user1");
        const url = " http://localhost:8888/api/login";
        const params = {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authdata),
        }

        const reply = await fetch(url, params);
        const data = await reply.json();
        const token = data.token;
        console.log(token);

        //save token
    }

    if (!baseUrl) {
        return <div>Loading...</div>;
    }
    else if (!user) {
            //keep user, token in redux and localstorage
            //subscribe to changes in redux auth store and sync it with App component state
        return <div>
            {/* <Login message="Login" /> */}
            <RHFLogin />
        </div>
    }
    else {
        return <Root />
    }


        //make ajax call and include the saved token
        //if response.code = 401 => clear auth state
        //if response.code = 403 => show access denied
        //if other err => show generic err
        //if success => show information

        //make services: AuthService, UserService

}

export default App;

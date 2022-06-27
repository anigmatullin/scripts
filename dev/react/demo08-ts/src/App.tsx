import { url } from 'inspector';
import React from 'react';
import './App.css';

function App()
{
    const data = {
        user: "user1",
        payload: 2,
    };

    const options = {
        method: "get",
        // body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Custom': 'someval',
        }
    };

    const configurl = "api.json";

    async function loadCfg()
    {
        const cfg = await fetch(configurl).then(data => data.json());

        fetch(cfg.url, options)
            .then( data => data.json())
            .then( data => console.log(data));
        
        console.log(cfg.url);
    }

    loadCfg();

    return (
        <div className="App">
        <header className="App-header">
            <h3>Salam Aleikum!</h3>
        </header>
        </div>
    );
}

export default App;

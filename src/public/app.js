import React, { useState, useEffect } from 'react';
import LogIn from './login';
import Sidebar from './sidebar';


const WebApp = () => {

    useEffect(() => {
        document.body.style.backgroundColor = "white";
    });
    const[isLoggedIn, setLoggedIn] = useState(false);
    const[id, setId] = useState(undefined);

    const mettreId = (id) => {
        setId(id);
        setLoggedIn(true);
    }


    return(
        <div className='app-page-container'> 
            <Sidebar/>
            <div className='dashboard'>
                <h1>Welcome on CodeGenie</h1>
            </div>
        </div>

    )
}

export default WebApp
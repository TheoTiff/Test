import React, { useState, useEffect } from 'react'; 
import {Configuration, OpenAIApi} from "openai";
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
const apiKey = "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";

const Productivity = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "white";
    })

return (
    <div>
      <Sidebar />
      <div className='productivity-page'>
        <h1 className='productivity-title'>Productivity</h1>
        <div className='productivity-container'>
            <Link to={"/productivity/calendar"} className="productivity-square">
                <h4>Productivity</h4>
                <p>A calendar to keep your projects </p>
            </Link>
            <Link to={"/productivity/doc"} className="lien2">
                <h4>Document</h4>
                <p>Create your document and let the AI complete it</p>
            </Link>
        </div>
      </div>
    </div>
);
}

export default Productivity;
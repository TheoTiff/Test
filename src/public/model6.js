import React, { useState, useEffect } from 'react'; 
import {Configuration, OpenAIApi} from "openai";
import Sidebar from './sidebar';
const apiKey = "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";

const configuration = new Configuration({
    apiKey: apiKey,
    organization: "org-1qA4E9cLLsJmItHKJOxGkrlO"
});
const openai = new OpenAIApi(configuration);

const Model6 = ()=> {
    const[write, setWrite] = useState("");
    const[plus, setPlus] = useState("");

    const generate = () => {
        if(write !== "") {
            let select = document.querySelector("#root > div > div > div.ecrit2 > p");
            select.style.display = "none"; 
            let anim = document.querySelector("#root > div > div > div.ecrit2 > div");
            anim.style.display = "flex";
            document.querySelector(".ecrit2").style.display = "block";
            const response = openai.createCompletion({
                model: "text-davinci-003",
                prompt: ``,
                temperature: 0.5,
                max_tokens: 500
            });
            response.then(response => {
                anim.style.display = "none";
                select.style.display = "inline-block";
                let complete = response.data.choices;
                complete.forEach(completion => {
                    select.innerText = `${completion.text}\n\n`;
                })
            })
        }
    }
    return(
        <div>
            <Sidebar />
            <div className='chat-form'>
                <h1>☝️ What you want</h1>
                <p>Generate what you want thanks to hight-quality AI</p>
                <div className='chat-form-input'>
                    <label>What do you want to write </label>
                    <textarea value={write} onChange={e=>setWrite(e.target.value)}></textarea>
                </div>
                <div className='chat-form-input'>
                    <label>Do you have any additional information</label>
                    <textarea value={plus} onChange={e=>setPlus(e.target.value)}></textarea>
                </div>
                <button className='chat-form-button'>(Re)Generate</button>
            </div>
            <div className='ecrit2'>
                <p></p>
                <div class="typewriter">
                    <div class="slide"><i></i></div>
                    <div class="paper"></div>
                    <div class="keyboard"></div>
                </div>
            </div>
        </div>
    )
}
export default Model6;
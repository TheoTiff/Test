import React, { useState, useEffect } from 'react'; 
import {Configuration, OpenAIApi} from "openai";
import Sidebar from './sidebar';
const apiKey = "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";

const configuration = new Configuration({
    apiKey: apiKey,
    organization: "org-1qA4E9cLLsJmItHKJOxGkrlO"
});
const openai = new OpenAIApi(configuration);

const Model3 = () => {
    const[name, setName] = useState("");
    const[info, setInfo] = useState("");
    const[tone, setTone] = useState("informative");

    const generate = () => {
        if(name !== "" && info !== "") {
            let select = document.querySelector("#root > div > div > div.ecrit2 > p");
            select.style.display = "none"; 
            let anim = document.querySelector("#root > div > div > div.ecrit2 > div");
            anim.style.display = "flex";
            document.querySelector(".ecrit2").style.display = "block";
            const response = openai.createCompletion({
                model: "text-davinci-003",
                prompt: `Write a biography for a website and social media for my company called ${name} and it has for information: ${info}. Use a tone of voice: ${tone}. And maximum 200 words.`,
                temperature: 0.5,
                max_tokens: 250
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
        <div className='model3'>
            <Sidebar />
            <div className='chat-form'>
                <h1>📄Bio maker</h1>
                <p>Generate hight-quality bio for business and social media thanks to AI</p>
                <div className='chat-form-input'>
                    <label>Company name</label>
                    <input value={name} onChange={e=>setName(e.target.value)} type="text" />
                </div>
                <div className='chat-form-input'>
                    <label>Company information</label>
                    <textarea value={info} onChange={e=>setInfo(e.target.value)} rows="4" cols="50" ></textarea>
                </div>
                <div className='chat-form-input'>
                    <label>Tone of voice</label>
                    <input value={tone} onChange={e=>setTone(e.target.value)} type="text" />
                </div>
                <button onClick={generate} className='chat-form-button'>(Re)Generate</button>
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
export default Model3;
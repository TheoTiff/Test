import React, { useState, useEffect } from 'react'; 
import {Configuration, OpenAIApi} from "openai";
import Sidebar from './sidebar';
const apiKey = "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";

const configuration = new Configuration({
    apiKey: apiKey,
    organization: "org-1qA4E9cLLsJmItHKJOxGkrlO"
});
const openai = new OpenAIApi(configuration);

const Model4 = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "white"
    })

    const[name, setName] = useState("");
    const[about, setAbout] = useState("");
    const[tone, setTone] = useState("Informative");

    const generate = () => {
        if(name == "" && about !== "") {
            let select = document.querySelector("#root > div > div > div.ecrit2 > p");
            select.style.display = "none";
            let anim = document.querySelector("#root > div > div > div.ecrit2 > div");
            anim.style.display = "flex";
            document.querySelector(".ecrit2").style.display = "block";
            const response = openai.createCompletion({
                model: "text-davinci-003",
                prompt: `Write an email with an object and salutations about ${about} with a tone of voice: ${tone}`,
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
        }else if(name !== "" && about !== "") {
            let select = document.querySelector("#root > div > div > div.ecrit2 > p");
            select.style.display = "none";
            let anim = document.querySelector("#root > div > div > div.ecrit2 > div");
            anim.style.display = "flex";
            document.querySelector(".ecrit2").style.display = "block";
            const response = openai.createCompletion({
                model: "text-davinci-003",
                prompt: `Write an email with an object and salutations for a company whose name is ${name} about ${about} with a tone of voice: ${tone}`,
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
        <div>
            <Sidebar />
            <div className='chat-form'>
                <h1>✉️ Email Writter</h1>
                <p>Generate your email for your business, your company or for personal usages thanks to AI</p>
                <div className='chat-form-input'>
                    <label>Company name (falcultative)</label>
                    <input value={name} onChange={e=>setName(e.target.value)} type="text" />
                </div>
                <div className='chat-form-input'>
                    <label>What is your email about ?</label>
                    <textarea value={about} onChange={e=>setAbout(e.target.value)} rows="4" cols="50"></textarea>
                </div>
                <div className='chat-form-input'>
                    <label>Tone of voice</label>
                    <input value={tone} onChange={e=>setTone(e.target.value)} type="text" />
                </div>
                <button onClick={generate} className='chat-form-button'>(Re)Genarate</button>
            </div>
            <div className='ecrit2'>
                <div class="typewriter">
                    <div class="slide"><i></i></div>
                    <div class="paper"></div>
                    <div class="keyboard"></div>
                </div>
                <p></p>
            </div>
        </div>
    )
}
export default Model4;
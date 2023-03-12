import React, { useState, useEffect } from 'react'; 
import {Configuration, OpenAIApi} from "openai";
import Sidebar from './sidebar';
const apiKey = "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";

const configuration = new Configuration({
    apiKey: apiKey,
    organization: "org-1qA4E9cLLsJmItHKJOxGkrlO"
});
const openai = new OpenAIApi(configuration);

const Model10 = () => {
    const[subject, setSubject] = useState("");
    const[tone, setTone] = useState("");
    const[audinece, setAudience] = useState("")

    const generate = () => {
        if(subject !== "" && audinece !== "" && tone !== ""){
            let select = document.querySelector("#root > div > div > div.ecrit2 > p");
            select.style.display = "none"; 
            let anim = document.querySelector("#root > div > div > div.ecrit2 > div");
            anim.style.display = "flex";
            document.querySelector(".ecrit2").style.display = "block";
            const response = openai.createCompletion({
                model: "text-davinci-003",
                prompt: `You are a copywritter since 20 years. `,
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
                <h1>Generate full Blog Post</h1>
                <p>Generate a full blog post with  intro, body, and conclusion thanks to AI.</p>
                <div className='chat-form-input'>
                    <label>What is your Subject</label>
                    <textarea></textarea>
                </div>
                <div className='chat-form-input'>
                    <label>Tone of voice</label>
                    <textarea></textarea>
                </div>
                <div className='chat-form-input'>
                    <label>Intended Audience</label>
                    <input type="text" />
                </div>
                <button className='chat-form-button' onClick={generate}>Generate</button>
            </div>
        </div>
    )
}
export default Model10;
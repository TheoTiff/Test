import React, { useState, useEffect } from 'react'; 
import {Configuration, OpenAIApi} from "openai";
import Sidebar from './sidebar';
const apiKey = "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";

const configuration = new Configuration({
    apiKey: apiKey,
    organization: "org-1qA4E9cLLsJmItHKJOxGkrlO"
});
const openai = new OpenAIApi(configuration);

const Model5 = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "white";
    });
    const[content, setContent] = useState("");
    const generate = () => {
        if(content !== "") {
            let select = document.querySelector("#root > div > div > div.ecrit2 > p");
            select.style.display = "none"; 
            let anim = document.querySelector("#root > div > div > div.ecrit2 > div");
            anim.style.display = "flex";
            document.querySelector(".ecrit2").style.display = "block";
            const response = openai.createCompletion({
                model: "text-davinci-003",
                prompt: `Summarize the following text in different key elements: ${content}`,
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
                <h1>📋 Summarize</h1>
                <p>Generate higt-quality key points thanks to AI</p>
                <div className='chat-form-input'>
                    <label>Content</label>
                    <textarea value={content} onChange={e=>setContent(e.target.value)} rows="4" cols="50"></textarea>
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

export default Model5;
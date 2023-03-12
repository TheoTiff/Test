import React, { useState, useEffect } from 'react'; 
import {Configuration, OpenAIApi} from "openai";
import Sidebar from './sidebar';
const apiKey = "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";

const configuration = new Configuration({
    apiKey: apiKey,
    organization: "org-1qA4E9cLLsJmItHKJOxGkrlO"
});
const openai = new OpenAIApi(configuration);


const Model7 = () => {
    const[name, setName] = useState("");
    const[des, setDes] = useState("");
    const[tone, setTone] = useState("informative");

    const generate = () => {
        if(name !== "" && des !== "") {
            let select = document.querySelector("#root > div > div > div.ecrit2 > p");
            select.style.display = "none"; 
            let anim = document.querySelector("#root > div > div > div.ecrit2 > div");
            anim.style.display = "flex";
            document.querySelector(".ecrit2").style.display = "block";
            const response = openai.createCompletion({
                model: "text-davinci-003",
                prompt: `You are a copywritter since 20 years and you have a lot of company/product descriptions. Your task now is to make the AIDA framowor about ${name} that is ${des}. Use a tone of voice ${tone}`,
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
                <h1>✨Marketing framework</h1>
                <p>Generate a text to improve your company/product thanks to hight-quality AI</p>
                <div className='chat-form-input'>
                    <label>
                        Company/Product name
                    </label>
                    <input value={name} onChange={e=>setName(e.target.value)} type="text" />
                </div>
                <div className='chat-form-input'>
                    <label>
                        Product description
                    </label>
                    <textarea value={des} onChange={e=>setDes(e.target.value)}></textarea>
                </div>
                <div className='chat-form-input'>
                    <label>
                        Tone of voice
                    </label>
                    <input type="text" value={tone} onChange={e=>setTone(e.target.value)} />
                </div>
                <button onClick={generate} className='chat-form-button'>Generate</button>
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
export default Model7;
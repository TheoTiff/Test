import React, { useState, useEffect } from 'react'; 
import {Configuration, OpenAIApi} from "openai";
import Sidebar from './sidebar';
const apiKey = "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";

const configuration = new Configuration({
    apiKey: apiKey,
    organization: "org-1qA4E9cLLsJmItHKJOxGkrlO"
});
const openai = new OpenAIApi(configuration);

const Model8 = () => {
    const[name, setName] = useState("");
    const[title, setTitle] = useState("");
    const[about, setAbout] = useState("");
    const[keyword,setKeyword] = useState("");

    const generate = () => {
        if(name !== "" && title !== "" && about !== "") {
            let select = document.querySelector("#root > div > div > div.ecrit2 > p");
            select.style.display = "none"; 
            let anim = document.querySelector("#root > div > div > div.ecrit2 > div");
            anim.style.display = "flex";
            document.querySelector(".ecrit2").style.display = "block";
            const response = openai.createCompletion({
                model: "text-davinci-003",
                prompt: `you are an expert in SEO since 20 years, you have done a lot of SEO optimized text. You have to make the text for a blog post for the company ${name} that has the blog name ${title} and whose blog post is about ${about}. You also have to include the keyword: ${keyword}`,
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
                <h1>🔎 Blog post SEO</h1>
                <p>Generate an optimized blog post with SEO integration thanks to AI</p>
                <div className='chat-form-input'>
                    <label>Company/Product Name</label>
                    <input value={name} onChange={e=> setName(e.target.value)} type="text" />
                </div>
                <div className='chat-form-input'>
                    <label>Blog post title</label>
                    <input value={title} onChange={e=>setTitle(e.target.value)} type="text" />
                </div>
                <div className='chat-form-input'>
                    <label>What is you blog post about</label>
                    <textarea value={about} onChange={e=>setAbout(e.target.value)}></textarea>
                </div>
               <div className='chat-form-input'>
                    <label>Keyword</label>
                    <input value={keyword} onchange={e=>setKeyword(e.target.value)} type="text" />
                </div> 
                <button onClick={generate} className='chat-form-button'>Write</button>
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
export default Model8;
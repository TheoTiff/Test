import React, { useState, useEffect } from 'react'; 
import {Configuration, OpenAIApi} from "openai";
import Sidebar from './sidebar';
const apiKey = "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";

const configuration = new Configuration({
    apiKey: apiKey,
    organization: "org-1qA4E9cLLsJmItHKJOxGkrlO"
});
const openai = new OpenAIApi(configuration);

const Model9 = () => {
    const[name, setName] = useState("");
    const[product, setProduct] = useState("");
    const[tone, setTone] = useState("descriptive");
    const[target, setTarget] = useState("");

    const generate = () => {
        if(name !== "" && product !== "" && target !== "") {
            let select = document.querySelector("#root > div > div > div.ecrit2 > p");
            select.style.display = "none"; 
            let anim = document.querySelector("#root > div > div > div.ecrit2 > div");
            anim.style.display = "flex";
            document.querySelector(".ecrit2").style.display = "block";
            const response = openai.createCompletion({
                model: "text-davinci-003",
                prompt: `You are an expert in creating product descriptions for 20 years, you have already made descriptions of many products to sell online.Now you have to create a description for a product called ${name}, , which is used to ${product}, , and which is intended for the target audience ${target}. You also must have a tone of voice ${tone}`,
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
                <h1>Product description</h1>
                <p>Write product description for your business thanks th AI</p>
                <div className='chat-form-input'>
                    <label>Product Name</label>
                    <input value={name} onChange={e=>setName(e.target.value)} type="text" />
                </div>
                <div className='chat-form-input'>
                    <label>What is the product about</label>
                    <textarea value={product} onChange={e=>setProduct(e.target.value)}></textarea>
                </div>
                <div className='chat-form-input'>
                    <label>Tone of voice</label>
                    <input value={tone} onChange={e=>setTone(e.target.value)} type="text" />
                </div>
                <div className='chat-form-input'>
                    <label>Target audience</label>
                    <input value={target} onChange={e=>setTarget(e.target.value)} type="text" />
                </div>
                <button className='chat-form-button' onClick={generate}>Write</button>
                <div className='ecrit2'>
                <p></p>
                <div class="typewriter">
                    <div class="slide"><i></i></div>
                    <div class="paper"></div>
                    <div class="keyboard"></div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Model9;
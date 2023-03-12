import React, { useState, useEffect } from 'react';
import {Configuration, OpenAIApi} from "openai";
import Sidebar from './sidebar';
const apiKey = "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";

const configuration = new Configuration({
    apiKey: apiKey,
    organization: "org-1qA4E9cLLsJmItHKJOxGkrlO"
});
const openai = new OpenAIApi(configuration);

const Model1 = () => {

    useEffect(() => {
        document.body.style.backgroundColor = "#0693e3";
    });
    const[question, setQuestion] = useState(undefined);
    const traiter = () => {
        let tr2 = document.createElement("div");
        tr2.className = "ans";
        tr2.innerHTML = `<p>${question} </p>`;
        document.querySelector("#root > div > div > div.reponse").appendChild(tr2);
        window.location = "#hghtg";
        const response =  openai.createCompletion({
            model: "text-davinci-003",
            prompt: question,
            temperature: 0,
            max_tokens: 500
          });
          response.then(response => {
            let tr = document.createElement("div");
            tr.className = "response";
            const completions = response.data.choices;
            completions.forEach(completion => {
            tr.innerText = `${completion.text}`
            document.querySelector("#root > div > div > div.reponse").appendChild(tr);
            })
          })
          setQuestion("");
    }

    return(
        <div className="model1">
            <Sidebar />
            <h1 className='titre'>Code Genie</h1>
            <h5 className='description'>Ask me what you want</h5>
            <p className='enfin'> Just type your request or question in the search bar and our AI will provide you with the answer or help you need. Try it now and see how easy it is to use our AI application</p>
            <div className='reponse'></div>
            <div className='question'>
                <textarea value={question} onChange={e => setQuestion(e.target.value)} className='prompt' placeholder='Start typing here ...'/>
                <br />
                <div className='generalB'>
                    <button className='resultat' onClick={traiter}>Run</button>
                </div>
            </div>
        </div>
    )
}
export default Model1;
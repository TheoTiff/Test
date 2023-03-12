import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import {Configuration, OpenAIApi} from "openai";
const apiKey = "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";

const configuration = new Configuration({
    apiKey: apiKey,
    organization: "org-1qA4E9cLLsJmItHKJOxGkrlO"
});
const openai = new OpenAIApi(configuration);

const Model2 = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "white";
    })

  const [subject, setSubject] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tone, setTone] = useState("Informative");


  const handleSubmit = () => {
    if(subject !== "") {
      let select = document.querySelector("#root > div > div > div.ecrit > p");
      select.style.display = "none"
      let anim = document.querySelector("#root > div > div > div.ecrit > div");
      anim.style.display = "flex";
      document.querySelector(".ecrit").style.display = "block";
      const response = openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Write an article of about 250 words on the subject: ${subject}. Using the following keywords: ${keywords}. And adopting a tone of voice: ${tone}`,
        temperature: 0.5,
        max_tokens: 260
      });
      response.then(response => {
        select.style.display = "inline-block";
        anim.style.display = "none";
        let complete = response.data.choices;
        complete.forEach(completion => {
          select.innerText = `${completion.text}`;
        })
      })
    }
  };

    return(
        <div className='model2'>
            <Sidebar />
            <div className="chatgpt-form">
              <h1>📖 Write an article</h1>
              <p>Generate high-quality items thanks to AI.</p>
                <div className="chatgpt-form-input">
                    <label for="subject">What your article is about ?</label>
                    <textarea value={subject} onChange={e => setSubject(e.target.value)}  rows="4" cols="50"></textarea>
                </div>
                <div className="chatgpt-form-input">
                    <label for="keywords">Keyword</label>
                    <input value={keywords} onChange={e => setKeywords(e.target.value)} type="text" />
                </div>
                <div className="chatgpt-form-input">
                    <label for="tone">Tone of voice</label>
                    <input value={tone} onChange={e => setTone(e.target.value)} type="text" />
                </div>
                <button className="chatgpt-form-button" onClick={handleSubmit}>Submit</button>
            </div>
            <div className='ecrit'>
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

export default Model2
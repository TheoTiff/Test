import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  });

  
  return (
    <div className="home-page-container">
      <div className='entire'>
        <div className="header">
          <div className="company-name">CodeGenie</div>
          <Link to={'/launchApp'}>
            <button className="login-button">Log in</button>
          </Link>
        </div>
        <div className="intro-section">
          <h3 className='app-sousTitre'>Special Beta Test</h3>
          <h1 className="app-title">Let CodeGenie answers your questions</h1>
          <br />
          <p className="app-description">
          We offer an intuitive and advanced question answering experience. With our machine learning and natural interaction, you can get quick and accurate answers to all your questions.
          </p>
        </div>
        <div className="cta-section">
          <Link to={"/launchApp"}>
            <button className='tr'>
                <span>Launch App</span>
            </button>
          </Link>
        </div>
      </div>
      
      <div className="features-section">
        <h2 className="features-title">Features of our Web App</h2>
        <div className="features-list">
          <div className="feature-item">
            <h4 className='dfr'>Answer to questions</h4>
            <p>Our web app, CodeGenie, is powered by a state-of-the-art language model that can answer your questions accurately and quickly. With training on billions of online texts, it can provide answers to questions on a variety of topics, from history to technology to science to pop culture. Ask him any question and see for yourself the power of our language model.</p>
          </div>
          <div className="feature-item">
            <h4 className='dfr'>Automatic learning</h4>
            <p>Our web app uses the latest advances in machine learning to provide increasingly accurate and relevant answers. By constantly learning from new data, our model is able to continuously improve its understanding and text generation capabilities. In addition, by using advanced techniques such as knowledge transfer, it can leverage its experience with large bodies of text to better answer your questions. Try it yourself and discover the incredible potential of machine learning.</p>
          </div>
          <div className="feature-item">
            <h4 className='dfr'>Natural interaction</h4>
            <p>Our web app provides you with a natural interaction experience, similar to the one you might have when chatting with a human being. By understanding your question in context and using natural language to formulate the answer, our language model makes the experience of asking questions as simple and seamless as possible. No need to formulate questions formally or know specific technical terms, just ask your questions like you would a friend and let our model take care of the rest.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
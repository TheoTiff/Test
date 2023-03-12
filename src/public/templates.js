import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
const Templates = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "white"
    })
    
    return(
        <div className='templates'>
            <Sidebar />
            <h1 className='premier'>Templates</h1>
            <div className="container">
                <Link to={"/templates/model2"} className="lien2">
                    <i class="fa-solid fa-pen-nib"></i>
                    <h4 className='categorie'>Write an article</h4>
                    <p>Write quality articles with the help of AI for engaging and professional content.</p>
                </Link>
                <Link to={"/templates/model3"} className="lien2">
                    <i class="fa-solid fa-pen"></i>
                    <h4 className='categorie'>Bio maker</h4>
                    <p>Create unique and engaging bios for your online profile with the help of AI.</p>
                </Link>
                <Link to={"/templates/model4"} className="square">
                <i class="fa-solid fa-envelope"></i>
                    <h4 className='categorie'>Email writter</h4>
                    <p>Save time writing professional and effective emails using AI assistance.</p>
                </Link> 
                <Link to={"/templates/model5"} className="square">
                    <i class="fa-solid fa-book"></i>
                    <h4 className='categorie'>Summarize</h4>
                    <p>Get concise, relevant summaries of documents and presentations with the help of AI.</p>
                </Link>
                <Link to={"/templates/model6"} className="square">
                    <i class="fa-solid fa-marker"></i>
                    <h4 className='categorie'>What you want</h4>
                    <p>Tell CodeGenie what to write</p>
                </Link>
                <Link to={"/templates/model7"} className="lien2">
                    <i class="fa-regular fa-folder"></i>    
                    <h4 className='categorie'>Marketing Framework</h4>
                    <p>Use the marketing framework to improve your company/product</p>
                </Link>
                <Link to={"/templates/model8"} className='square'>
                    <h4 className='categorie'>Blog post SEO</h4>
                    <p>write a highly searchable blog post</p>
                </Link>
                <Link to={"/templates/model9"} className="square">

                    <h4 className='categorie'>Product Description</h4>
                    <p>Create product descriptions for your business</p>
                </Link>
                <Link to={"/templates/model10"} className="lien2">

                    <h4 className='categorie'>Full Blog post</h4>
                    <p>Generate a full blog post</p>
                </Link>
            </div>
        </div>
    )
}

export default Templates;
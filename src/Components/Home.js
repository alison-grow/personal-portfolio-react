import React from "react";

export default function Home() {
    const numbers = ['My name is Alison Grow and I am a coding student at Bitwise Industries. I have taken beginner classes for building websites and making them mobile-friendly.', 'As a former Fresno State student I studied computer science and business. I took classes on Salesforce and Computer Informational Systems.', 'I enjoy coding and am excited to continue learning more about web development!'];
    const listItems = numbers.map((numbers) =>
        <li>{numbers}</li>
    );
    return (
        <div className="home-page">
            <div className="jumbotron">
                <h1 className="jumbotron-h1">
                    Hi, I'm Alison!
                </h1>
                <h2 className="jumbotron-h2">
                    Welcome to my portfolio
                </h2>
            </div>
            <div className="home-boxes">
                <div className="home-one">
                    <img src="https://alison-grow.github.io/img/mypicture.jpg" alt="my face" className="face-img"/>
                    <h4 className="h4-boxes">
                        A little bit about me:
                    </h4>
                </div>
                <div className="home-two">
                    <ul>{listItems}</ul>
                </div>
            </div>
        </div>
    )
}
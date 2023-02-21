import React from "react";

export default function Home() {
    const stuff = [
        "My name is Alison Grow and I am a coding student at Bitwise Industries. I have taken classes in HTML, CSS, Javascript and React JS.",
        "As a former Fresno State student I studied computer science and business. I took classes on computer science adn informational systems, including Salesforce.", 
        "I enjoy coding and I'm excited to continue learning more about web development!"
    ];
    const listItems = stuff.map((stuff) =>
        <li>{stuff}</li>
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
                        A little bit about me &#10140;
                    </h4>
                </div>
                <div className="home-two">
                    <ul>{listItems}</ul>
                </div>
            </div>
        </div>
    )
}
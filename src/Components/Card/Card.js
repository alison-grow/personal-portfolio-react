import React from "react";
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Card.css';

export default function ProjectsCard() {
    const data = [
        {
            "name": "Yosemite Travel Website",
            "url": "https://alison-grow.github.io/W4BFinalProject/",
            "img": "https://cdn-icons-png.flaticon.com/512/3313/3313303.png",
            "content": "HTML, CSS",
            // "content": "I made this website to encourage tourism in Yosemite National Park. I highlighted the camping/activity opportunities and made a contact page so visitors can make reservations.",
        },
        {
            "name": "Magic 8 Ball",
            "url": "https://alison-grow.github.io/magic8ball/",
            "img": "https://cdn-icons-png.flaticon.com/512/3952/3952420.png",
            // "content": "I created this magic 8 ball project to test my Javascript skills. The user can type a question into the text field, and a function I created fetches a random 8 ball image to display as the answer.",
            "content": "HTML, CSS, Javascript",
        },
        {
            "name": "Ecommerce Website",
            "url": "https://alison-grow.github.io/reactfinal2/",
            "img": "https://cdn-icons-png.flaticon.com/512/3081/3081648.png",
            // "content": "This is a shopping website I created to practice React. I added pages for clothes and jewelry. I included a wishlist so customers can keep track of their favorite items, and a shopping cart and checkout page to purchase the items.",
            "content": "React, CSS",
        },
        {
            "name": "Krusty Krab Restaurant",
            "url": "https://alison-grow.github.io/krusty-krab/",
            "img": "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
            "content": "HTML, CSS, Javascript",
        },
        {
            "name": "Calculator App",
            "url": "https://alison-grow.github.io/calculator-react/",
            "img": "https://cdn-icons-png.flaticon.com/512/1046/1046283.png",
            // "content": "This is a simple calculator app with buttons and a 'screen' that I made with React. I created actions that display numbers and operands, and a function that calculates the numbers to get a total.",
            "content": "React, CSS",
        },
        {
            "name": "Affirmation Generator",
            "url": "https://alison-grow.github.io/dailyaffirmations/",
            "img": "https://cdn-icons-png.flaticon.com/512/1405/1405110.png",
            // "content": "This is a daily affirmation generator I built with Javascript. A function generates and displays a random affirmation from an array. I made it so I can add a little positivity to my life every day before getting to work.",
            "content": "HTML, CSS, Javascript"
        },
        {
            "name": "State Capitals Quiz",
            "url": "https://alison-grow.github.io/react-quiz/",
            "img": "https://cdn-icons-png.flaticon.com/512/2875/2875216.png",
            // "content": "This React project is a quiz on the US state capitals. I made a function that asks questions and keeps track of the right and wrong answers. At the end the user gets their score.",
            "content": "React, CSS",
        },
        {
            "name": "Kombucha Rating Website",
            "url": "https://alison-grow.github.io/kombucha-rating-website/",
            "img": "https://cdn-icons-png.flaticon.com/128/4507/4507308.png",
            // "content": "I built this project as a way to keep track of the kombucha teas I've tried. I made an array for each brand and wrote reviews of each drink, then arranged them in a table.",
            "content": "React, CSS",
        },
        {
            "name": "Digital Clock",
            "url": "https://alison-grow.github.io/js-clock/",
            "img": "https://cdn-icons-png.flaticon.com/512/2994/2994853.png",
            "content": "HTML, CSS, Javascript",
        },
        {
            "name": "Birthday Countdown",
            "url": "https://alison-grow.github.io/birthday-countdown/",
            "img": "https://cdn-icons-png.flaticon.com/512/1040/1040469.png",
            "content": "HTML, CSS, Javascript",
        }
    ];
    return (
        <div className="card-container">
            {data.map((data) => (
            <Card className="cards" sx={{width: 345, height: 345}}>
                <CardMedia 
                    sx={{height: 120, width: 120}}
                    className="card-img"
                    image={data.img}
                    title={data.name}
                />
                <CardContent>
                    <Typography sx={{textAlign: 'center', marginBottom: '5px'}} className="typography-link" variant="h5" component="div">
                        <a className="card-links" href={data.url} target="_blank" rel="noreferrer">
                            {data.name}
                        </a>
                    </Typography>
                    <Typography sx={{textAlign: 'center'}} className="typography-card" variant="body2" color="text.secondary">
                        {data.content}
                    </Typography>
                </CardContent>
            </Card>))}
        </div>
    )
}
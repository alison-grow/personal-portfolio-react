import React from "react";
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Card.css';
import { DateRange } from "@mui/icons-material";

export default function ProjectsCard() {
    const data = [
        {
            "name": "Yosemite Travel Website",
            "url": "https://alison-grow.github.io/W4BFinalProject/",
            "img": "https://cdn-icons-png.flaticon.com/512/3313/3313303.png",
            "content1": "★ HTML",
            "content2": "★ CSS",
            "content3": "",
            // "content1": "I made this website to encourage tourism in Yosemite National Park. I highlighted the camping/activity opportunities and made a contact page so visitors can make reservations.",
        },
        {
            "name": "Magic 8 Ball",
            "url": "https://alison-grow.github.io/magic8ball/",
            "img": "https://cdn-icons-png.flaticon.com/512/3952/3952420.png",
            // "content1": "I created this magic 8 ball project to test my Javascript skills. The user can type a question into the text field, and a function I created fetches a random 8 ball image to display as the answer.",
            "content1": "★ HTML",
            "content2": "★ CSS",
            "content3": "★ Javascript",
        },
        {
            "name": "Ecommerce Clothing Website",
            "url": "https://alison-grow.github.io/reactfinal2/",
            "img": "https://cdn-icons-png.flaticon.com/512/3081/3081648.png",
            // "content1": "This is a shopping website I created to practice React. I added pages for clothes and jewelry. I included a wishlist so customers can keep track of their favorite items, and a shopping cart and checkout page to purchase the items.",
            "content1": "★ React",
            "content2": "★ CSS",
            "content3": "",
        },
        {
            "name": "Krusty Krab Restaurant",
            "url": "https://alison-grow.github.io/krusty-krab/",
            "img": "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
            "content1": "★ HTML",
            "content2": "★ CSS",
            "content3": "★ Javascript",
        },
        {
            "name": "Kombucha Rating Website",
            "url": "https://alison-grow.github.io/kombucha-rating-website/",
            "img": "https://cdn-icons-png.flaticon.com/128/4507/4507308.png",
            "content1": "★ React",
            "content2": "★ CSS",
            "content3": "",
        },
        {
            "name": "Daily Affirmation Generator",
            "url": "https://alison-grow.github.io/dailyaffirmations/",
            "img": "https://cdn-icons-png.flaticon.com/512/1405/1405110.png",
            // "content1": "This is a daily affirmation generator I built with Javascript. A function generates and displays a random affirmation from an array. I made it so I can add a little positivity to my life every day before getting to work.",
            "content1": "★ HTML",
            "content2": "★ CSS",
            "content3": "★ Javascript",
        },
        {
            "name": "React Calculator App",
            "url": "https://alison-grow.github.io/calculator-react/",
            "img": "https://cdn-icons-png.flaticon.com/512/1046/1046283.png",
            "content1": "★ React",
            "content2": "★ CSS",
            "content3": "",
        },
        {
            "name": "Rock Paper Scissors Game",
            "url": "https://alison-grow.github.io/rock-paper-scissors/",
            "img": "https://cdn-icons-png.flaticon.com/512/6729/6729732.png",
            "content1": "★ HTML",
            "content2": "★ CSS",
            "content3": "★ Javascript",
        },
        {
            "name": "State Capitals Quiz",
            "url": "https://alison-grow.github.io/react-quiz/",
            "img": "https://cdn-icons-png.flaticon.com/512/2875/2875216.png",
            // "content1": "This React project is a quiz on the US state capitals. I made a function that asks questions and keeps track of the right and wrong answers. At the end the user gets their score.",
            "content1": "★ React",
            "content2": "★ CSS",
            "content3": "",
        },
        {
            "name": "Digital Clock",
            "url": "https://alison-grow.github.io/js-clock/",
            "img": "https://cdn-icons-png.flaticon.com/512/2994/2994853.png",
            "content1": "★ HTML",
            "content2": "★ CSS",
            "content3": "★ Javascript",
        },
        {
            "name": "My Birthday Countdown",
            "url": "https://alison-grow.github.io/birthday-countdown/",
            "img": "https://cdn-icons-png.flaticon.com/512/1040/1040469.png",
            "content1": "★ HTML",
            "content2": "★ CSS",
            "content3": "★ Javascript",
        }
    ];
    // var arr = str.split('#')
    // var text = arr.join(separator)
    return (
        <div className="card-container">
            {data.map((data) => (
            <Card className="cards" sx={{width: 300, height: 300}}>
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
                        {data.content1}<br />
                        {data.content2}<br />
                        {data.content3}
                    </Typography>
                </CardContent>
            </Card>))}
        </div>
    )
}
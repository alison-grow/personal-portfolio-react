import React  from "react";
import { Accordion } from "@mui/material";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

export default function MyAccordion() {
    let url1 = "https://alison-grow.github.io/W4BFinalProject/";
    let url2 = "https://alison-grow.github.io/magic8ball/";
    let url3 = "https://alison-grow.github.io/reactfinal2/";
    let url4 = "https://alison-grow.github.io/calculator-react/";
    const [expandedPanel, setExpandedPanel] = useState(false);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        console.log({ event, isExpanded });
        setExpandedPanel(isExpanded ? panel : false);
    };
    return (
        <div className="accordion-container">
            <Accordion expanded={expandedPanel === 'panel1'} onChange={handleAccordionChange('panel1')} className="accordion-header" style={{ backgroundColor: '#bb5f5f',  cursor: 'url(https://static.tumblr.com/xjqjg7j/Mhcmxtzxp/84.gif), url(https://static.tumblr.com/xjqjg7j/Mhcmxtzxp/84.gif), auto !important'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color: '#FFFFFF',}} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography style={{color: '#ffffff', fontFamily: 'Shrikhand, cursive', fontSize: '30px'}}>Yosemite Travel Website</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: '#FCC7B5',}}>
                    <Typography style={{color: '#301934', fontFamily: 'Arbutus Slab, serif', textAlign: 'center'}}>
                        <a href={url1} target="_blank" rel="noreferrer">
                            <img src="https://alison-grow.github.io/img/day-yosemite.jpg" alt="yosemite"className="accordion-img"  />
                        </a>

                        I created this website to encourage tourism in Yosemite National Park. I highlighted the camping and activity opportunities in the park made a contact page so visitors can make reservations.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expandedPanel === 'panel2'} onChange={handleAccordionChange('panel2')} className="accordion-header" style={{ backgroundColor: '#bb5f5f',}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color: '#FFFFFF',}} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography style={{color: '#ffffff', fontFamily: 'Shrikhand, cursive', fontSize: '30px'}}>Magic 8 Ball</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: '#FCC7B5',}}>
                    <Typography style={{color: '#301934', fontFamily: 'Arbutus Slab, serif', textAlign: 'center'}}>
                        <a href={url2} target="_blank" rel="noreferrer">
                            <img src="http://content.pimp-my-profile.com/ms/i73/8/5/23/f_f5464f7fd5.jpg" alt="emo background"className="accordion-img"  />
                        </a>
                        I created this magic 8 ball project to test my Javascript skills. The user can type a question into the text field, and a function I created fetches a random 8 ball image to display as the answer.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expandedPanel === 'panel3'} onChange={handleAccordionChange('panel3')} className="accordion-header" style={{ backgroundColor: '#bb5f5f', borderBottomRadius: '25px',}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color: '#FFFFFF',}} />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                    <Typography className="accordion-title" style={{color: '#ffffff', fontFamily: 'Shrikhand, cursive', fontSize: '30px'}}>Ecommerce Website</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: '#FCC7B5',}}>
                    <Typography style={{color: '#301934', fontFamily: 'Arbutus Slab, serif', textAlign: 'center'}}>
                        <a href={url3} target="_blank" rel="noreferrer">
                            <img src="https://dl.glitter-graphics.com/pub/1639/1639186ckukxjuuwf.gif" alt="fashion background"className="accordion-img"  />
                        </a>
                        This is a fashion ecommerce website I created to practice React coding. I added separate pages for clothes and jewelry. I included a wishlist so customers can keep track of their favorite items, and a shopping cart and checkout page to purchase the chosen items.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedPanel === 'panel4'} onChange={handleAccordionChange('panel4')} className="accordion-header" style={{ backgroundColor: '#bb5f5f', borderBottomRadius: '25px',}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color: '#FFFFFF',}} />}
                aria-controls="panel4a-content"
                id="panel4a-header"
                >
                    <Typography className="accordion-title" style={{color: '#ffffff', fontFamily: 'Shrikhand, cursive', fontSize: '30px'}}>Calculator App</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: '#FCC7B5',}}>
                    <Typography style={{color: '#301934', fontFamily: 'Arbutus Slab, serif', textAlign: 'center'}}>
                        <a href={url4} target="_blank" rel="noreferrer">
                            <img src="https://64.media.tumblr.com/61c06799bcdb0ff55d877a16c0c34066/tumblr_oir99mqk8q1tf8vylo1_1280.png" alt="gradient" className="accordion-img"  />
                        </a>
                        This is a calculator app I made with React. ADD DESCRIPTION HERE
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
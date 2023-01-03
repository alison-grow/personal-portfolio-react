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
                        I created this magic 8 ball project to test my javascript skills. I created a function that fetches a random 8 ball image to display as an answer to the user's question.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
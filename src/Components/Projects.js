import React from "react";
import MyAccordion from "./Accordion";
import { Grid } from "@mui/material";

export default function Projects() {
    return (
        <div className="projects-page-content">
            <div className="jumbotron">
                <h1 className="jumbotron-h1">
                    My Projects
                </h1>
                <h2 className="jumbotron-h2">
                    Some things I've made
                </h2>
            </div>
            <div className="grid-container">
            <Grid container spacing={.5}>
                <Grid xs={2}>
                    <img src="https://alison-grow.github.io/img/computer%20(1).png" alt="computer" className="column-img" />
                    <img src="https://alison-grow.github.io/img/cloud-network.png" alt="cloud network" className="column-img" />
                    <img src="https://alison-grow.github.io/img/girl.png" alt="coder girl" className="column-img" />
                    <img src="https://cdn-icons-png.flaticon.com/512/2721/2721593.png" alt="coding languages" className="column-img" />
                </Grid>
                <Grid xs={8} className="accordion-grid">
                    <MyAccordion />
                </Grid>
                <Grid xs={2}>
                    <img src="https://alison-grow.github.io/img/computer%20(1).png" alt="computer" className="column-img" />
                    <img src="https://alison-grow.github.io/img/cloud-network.png" alt="cloud network" className="column-img" />
                    <img src="https://alison-grow.github.io/img/girl.png" alt="coder girl" className="column-img" />
                    <img src="https://cdn-icons-png.flaticon.com/512/2721/2721593.png" alt="coding languages" className="column-img" />
                </Grid>
            </Grid>
            </div>
        </div>
    )
}
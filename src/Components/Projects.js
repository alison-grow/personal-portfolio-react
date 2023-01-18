import React from "react";
import ProjectsCard from "./Card/Card";

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
                <ProjectsCard />
        </div>
    )
}
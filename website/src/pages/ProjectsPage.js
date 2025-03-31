import React, {useState} from "react";
import "../index.css";

function ProjectsPage(){
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div>projects</div>
            </div>
            <div id = "bottom-rectangle">
                <div className = "description">
                    <a href="https://www.sprint.dev/projects/331b0fa1-47f8-4f67-bdb2-931ca2e157cb" target="_blank" className = "nav-button">TransparentGPT - 3rd Place at Rebuild AI Hackathon</a>
                    <div className = "inner-description">
                        transparent chatbot with exposed sources and customization panel
                    </div>
                </div>
                <div className = "description">
                    <a href="https://devpost.com/software/draw-j3nxl2?ref_content=my-projects-tab&ref_feature=my_projects" target="_blank" className = "nav-button">DoodleSpace - HooHacks2025 submission</a>
                    <div className = "inner-description">
                        microcontroller and sensor setup with data pipeline for rendering 3D vectors
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
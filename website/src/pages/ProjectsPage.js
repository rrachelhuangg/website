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
                    <a href="https://www.sprint.dev/projects/331b0fa1-47f8-4f67-bdb2-931ca2e157cb" target="_blank" className = "nav-button">TransparentGPT</a>
                    <div className = "inner-description">
                        transparent chatgpt with exposed sources and customization panel
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
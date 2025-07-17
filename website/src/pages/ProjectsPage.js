import React from "react";
import "../index.css";

function ProjectsPage(){
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div>projects</div>
            </div>
            <div id = "bottom-rectangle">
                {/* <div className="section-container">
                    <div className="home-container">
                        <div className="outline-container">
                            <div className="description"><a href="https://iotpacketpatrol.onrender.com/" target="_blank">IoTPacketPatrol - Google Cloud AI in Action hackathon, MongoDB track submission</a></div>
                            <div className = "inner-description">
                                    full-stack machine learning model and ui for analyzing iot network traffic data
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="section-container">
                    <div className="home-container">
                        <div className="outline-element">
                            <div className="description"><a href="https://rrachelhuangg.github.io/enigma/" target="_blank">The Enigma Machine</a></div>
                            <div className = "project-description">
                                implementation of the enigma encryption machine with animation and sound
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-container">
                    <div className="home-container">
                        <div className="outline-element">
                            <div className="description"><a href="https://www.sprint.dev/projects/331b0fa1-47f8-4f67-bdb2-931ca2e157cb" target="_blank">TransparentGPT - 3rd Place at Rebuild AI Hackathon</a></div>
                            <div className = "project-description">
                            transparent chatbot with exposed sources and customization panel
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-container">
                    <div className="home-container">
                        <div className="outline-element">
                            <div className="description"><a href="https://devpost.com/software/draw-j3nxl2?ref_content=my-projects-tab&ref_feature=my_projects" target="_blank">DoodleSpace - HooHacks2025 submission</a></div>
                            <div className = "project-description">
                            microcontroller and sensor setup with data pipeline for rendering 3D vectors
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
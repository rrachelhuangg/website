import React, {useState} from "react";
import "../index.css";
import enigmaIcon from "../assets/images/enigma.png";
import doodlespaceIcon from "../assets/images/doodlespace.png";
import transparentgptIcon from "../assets/images/transparentgpt.png";
import iotIcon from "../assets/images/iot.png";

function ProjectsPage(){
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div>projects</div>
            </div>
            <div id = "bottom-rectangle">
                <div className = "description">
                    <img src={iotIcon}/>
                    <div className="text-block">
                        <a href="https://iotpacketpatrol.onrender.com/" target="_blank" className = "nav-button">IoTPacketPatrol - Google Cloud AI in Action hackathon, MongoDB track submission</a>
                        <div className = "inner-description">
                            full-stack machine learning model and ui for analyzing iot network traffic data
                        </div>
                    </div>
                </div>
                <div className = "description">
                    <img src={enigmaIcon}/>
                    <div className="text-block">
                        <a href="https://rrachelhuangg.github.io/enigma/" target="_blank" className = "nav-button">The Enigma Machine</a>
                        <div className = "inner-description">
                            implementation of the enigma encryption machine with animation and sound
                        </div>
                    </div>
                </div>
                <div className = "description">
                    <img src={transparentgptIcon}/>
                    <div className="text-block">
                        <a href="https://www.sprint.dev/projects/331b0fa1-47f8-4f67-bdb2-931ca2e157cb" target="_blank" className = "nav-button">TransparentGPT - 3rd Place at Rebuild AI Hackathon</a>
                        <div className = "inner-description">
                            transparent chatbot with exposed sources and customization panel
                        </div>
                    </div>
                </div>
                <div className = "description">
                    <img src={doodlespaceIcon}/>
                    <div className="text-block">
                        <a href="https://devpost.com/software/draw-j3nxl2?ref_content=my-projects-tab&ref_feature=my_projects" target="_blank" className = "nav-button">DoodleSpace - HooHacks2025 submission</a>
                        <div className = "inner-description">
                            microcontroller and sensor setup with data pipeline for rendering 3D vectors
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
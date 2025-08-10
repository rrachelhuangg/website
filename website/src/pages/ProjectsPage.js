import React from "react";
import "../index.css";
import profileIcon from "../assets/images/new-profile.png";

function ProjectsPage(){
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div>
                    <img src={profileIcon} id="profile-pic"/>
                </div>
                <div>Rachel Huang</div>
                <div className="top-content">W&M Monroe Scholar x Virginia Space Grant Consortium x Black Cape, Inc.</div>
                <div className="top-content">contact: rhuang03@wm.edu</div>
            </div>
            <div id = "bottom-rectangle">
                <div className="section-container">
                    <div className="home-container">
                        <div className="outline-element">
                            <div className="description"><a href="https://www.youtube.com/watch?v=qxNOZ_D9zpo&list=PLesNU81GDLAk_xs12hlGbokPJzU2uktZx" target="_blank">Build Compilations</a></div>
                        </div>
                    </div>
                </div>
                <div className="section-container">
                    <div className="home-container">
                        <div className="outline-element">
                            <div className="description"><a href="https://www.youtube.com/watch?v=oNScYG4bWXg&list=PLesNU81GDLAkQa9BkA43vGn1VAFeSlPtq&index=2" target="_blank">W&M x AI Club Research Database</a></div>
                            {/* <div className = "project-description">
                                w&m-themed ui that is fully integrated with Firebase for storage and management/display of research position listings
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="section-container">
                    <div className="home-container">
                        <div className="outline-element">
                            <div className="description"><a href="https://rrachelhuangg.github.io/enigma/" target="_blank">The Enigma Machine</a></div>
                            {/* <div className = "project-description">
                                implementation of the enigma encryption machine with animation and sound
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="section-container">
                    <div className="home-container">
                        <div className="outline-element">
                            <div className="description"><a href="https://www.sprint.dev/projects/331b0fa1-47f8-4f67-bdb2-931ca2e157cb" target="_blank">TransparentGPT - 3rd Place at Rebuild AI Hackathon</a></div>
                            {/* <div className = "project-description">
                            transparent chatbot with exposed sources and customization panel
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="section-container">
                    <div className="home-container">
                        <div className="outline-element">
                            <div className="description"><a href="https://devpost.com/software/draw-j3nxl2?ref_content=my-projects-tab&ref_feature=my_projects" target="_blank">DoodleSpace - HooHacks2025 submission</a></div>
                            {/* <div className = "project-description">
                            microcontroller and sensor setup with data pipeline for rendering 3D vectors
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
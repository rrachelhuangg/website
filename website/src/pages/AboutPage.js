import React from "react";
import "../index.css";

function AboutPage(){
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div>experiences</div>
            </div>
            <div id = "bottom-rectangle">
                <div className="section-container">
                    <div className="home-container">
                        <div className="outline-element">
                            <div className="description"><a href="https://www.linkedin.com/company/black-cape/" target="_blank">Software Engineering Intern at Black Cape, Inc.</a></div>
                            <div className = "project-description">
                            May 2024 - Current
                            </div>
                            <div className = "project-description">
                            Working on government contracted defense products
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-container">
                    <div className="home-container">
                        <div className="outline-element">
                            <div className="description"><a href="https://www.linkedin.com/feed/update/urn:li:activity:7338271242950483970/" target="_blank">NASA's Space Grant VSGC Scholarship Researcher</a></div>
                            <div className = "project-description">
                            June 2025 - Current
                            </div>
                            <div className = "project-description">
                            Implementing a pipeline for optimizing quantum circuits with ZX-calculus
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-container">
                    <div className="home-container">
                        <div className="outline-element">
                            <div className="description"><a href="https://www.linkedin.com/feed/update/urn:li:activity:7338271242950483970/" target="_blank">W&M Graphics Undergraduate Research</a></div>
                            <div className = "project-description">
                            January 2024 - May 2025
                            </div>
                            <div className = "project-description">
                            Running experiments for SVBRDF image diffusion models, mentored by Professor Peers
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-container">
                    <div className="home-container">
                        <div className="outline-element">
                            <div className="description"><a href="https://aiclubwm.com/about" target="_blank">W&M AI Club Head of Project Development</a></div>
                            <div className = "project-description">
                            June 2025 - Current
                            </div>
                            <div className = "project-description">
                            Building research opportunities database and full-stack application for William & Mary
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-container">
                    <div className="home-container">
                        <div className="outline-element">
                            <div className="description"><a href="https://gdg.community.dev/gdg-on-campus-william-mary-williamsburg-united-states/" target="_blank">W&M Google Student Developer Club Project Lead and Core Team Consultant</a></div>
                            <div className = "project-description">
                            October 2023 - April 2025
                            </div>
                            <div className = "project-description">
                            Implemented dataset viewer/management page for Global Americas Team
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
import React, {useState} from "react";
import "../index.css";
import blackcapeIcon from "../assets/images/black_cape.png";
import nasaIcon from "../assets/images/nasa.png";
import googleIcon from "../assets/images/gdsc.png";
import schoolIcon from "../assets/images/wandm.png";
import aiclubIcon from "../assets/images/aiclub.png";

function AboutPage(){
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div>work</div>
            </div>
            <div id = "bottom-rectangle">
                <div className = "description">
                    <img src={blackcapeIcon}/>
                    <div className="text-block">
                        <a href="https://www.linkedin.com/company/black-cape/posts/?feedView=all" target="_blank" className = "nav-button">Software Engineering Intern at Black Cape, Inc.</a>
                        <div className = "inner-description">
                            May 2024 - Current
                        </div>
                        <div className = "inner-description">
                        • Implemented APIs and debugging for government contracted defense products
                        </div>
                        <div className = "inner-description">
                        • Implemented FastAPI endpoints and Kestra pipeline scripts to extend automated data ingestion and processing for data platform
                        </div>
                        <div className = "inner-description">
                        • Implemented RAG techniques using Python and Langchain to improve context relevancy of HR chatbot
                        </div>
                        <div className = "inner-description">
                        • Built a pipeline for Bluesky data
                        </div>
                    </div>
                </div>
                <div className = "description">
                    <img src={nasaIcon}/>
                    <div className="text-block">
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7338271242950483970/" target="_blank" className = "nav-button">NASA's Space Grant VSGC Scholarship Researcher</a>
                        <div className = "inner-description">
                            June 2025 - Current
                        </div>
                        <div className = "inner-description">
                        • Implementing a pipeline for optimizing quantum circuits with ZX-calculus
                        </div>
                    </div>
                </div>
                <div className = "description">
                    <img src={schoolIcon}/>
                    <div className="text-block">
                        <div className="nav-button">W&M Graphics Undergraduate Research</div>
                        <div className = "inner-description">
                        • January 2024 - May 2025
                        </div>
                        <div className = "inner-description">
                        • Running experiments for SVBRDF image diffusion models, mentored by Professor Peers
                        </div>
                    </div>
                </div>
                <div className = "description">
                    <img src={aiclubIcon}/>
                    <div className="text-block">
                        <a href="https://aiclubwm.com/about" target="_blank" className = "nav-button">W&M AI Club Head of Project Development</a>
                        <div className = "inner-description">
                        • June 2025 - Current
                        </div>
                        <div className = "inner-description">
                        • Building research opportunities database and usable full-stack application for W&M community
                        </div>
                    </div>
                </div>
                <div className = "description">
                    <img src={googleIcon}/>
                    <div className="text-block">
                        <a href="https://gdg.community.dev/gdg-on-campus-william-mary-williamsburg-united-states/" target="_blank" className = "nav-button">W&M Google Student Developer Club Project Lead and Core Team Consultant</a>
                        <div className = "inner-description">
                        • October 2023 - April 2025
                        </div>
                        <div className = "inner-description">
                        • Implemented dataset viewer/management page for Global Americas Team
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
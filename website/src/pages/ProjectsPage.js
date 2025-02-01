import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../index.css";
import presentationIcon from "../assets/images/presentation.jpg";

function ProjectsPage(){
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }

    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div>Projects</div>
            </div>
            <div id = "bottom-rectangle">
                <ul>
                    <li>
                        <div className = "description">
                            <Link to = "/dataset" className = "nav-button">Global Americas Data Management Page</Link>
                            <div className = "inner-description">
                                Built full-stack data management page for the Global Americas Research Lab at William & Mary.
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className = "description">
                            <div className = "click-div" onClick={handleClick}> 
                                Literature Review of the ZX-calculus Quantum Optimization Method
                            </div>
                            {open && <div><img src={presentationIcon} id = "presentation-image"/></div>}
                            <div className = "inner-description">
                            Presented at the 2024 Fall Undergraduate Research Fair and &Hacks Hackathon.
                            Selected as 1 of 2 students to represent the William & Mary Department of Computer Science at the 2024 Undergraduate Research Fair.
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className = "description">
                            <a href = "https://dl.acm.org/doi/pdf/10.1145/3573834.3574498" target = "_blank"> 
                                Comparisons of Classic and Quantum String Matching Algorithms
                            </a>
                            <div className = "inner-description">
                                Paper published by the 2022 4th International Conference on Advanced Information Science and System.
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProjectsPage;
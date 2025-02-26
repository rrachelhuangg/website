import React, { useEffect, useState } from "react";
import "../index.css";
import resumeIcon from "../assets/images/resume.png";
import linkedinIcon from "../assets/images/linkedin.png";
import githubIcon from "../assets/images/github.png";
import {Link} from "react-router-dom";
import "../index.css";
import presentationIcon from "../assets/images/presentation.jpg";

function HomePage(){
    useEffect(()=>{
        const targetText = "Hello! I'm Rachel.";
        const letters = "α β γ δ ε ζ η θ ι κ λ μ ν ξ ο π ρ σ τ υ φ χ ψ ω ! @ # $ % ^ &".split(" ");
        const element = document.getElementById ("name");
        if(element){
            const scrambleText = targetText.split("").map(()=>letters[Math.floor(Math.random()*letters.length)]);
            element.textContent = scrambleText;
            let index = 0;
            const unscrambleLetter = () => {
                if(index < targetText.length){
                    const current = targetText.split("").map((char, i)=>i<=index?targetText[i]:letters[Math.floor(Math.random()*letters.length)]).join("");
                    element.textContent = current;
                    setTimeout(()=>{
                        index++;
                        unscrambleLetter();
                    }, 50);
                }
            }; 
            unscrambleLetter();
        }
    }, []);
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div id = "name"></div>
            </div>
            <div id = "bottom-rectangle">
                <div className = "description">
                Welcome to my page! I'm currently a student at William & Mary studying computer science and applied math. My interests center around machine learning, quantum computing, and computer architecture. 
                </div>
                <div className = "description">
                I work at Black Cape, Inc in Arlington, Virginia, and conduct undergraduate research at William & Mary.
                </div>
                <div className = "description">
                    <a href = "https://github.com/rrachelhuangg" target = "_blank"> 
                        My recent projects:
                    </a>
                </div>
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
                <div className = "description">
                    My favorite things are buffalo chicken, cooked seaweed, buldak noodles, and the shrimp and lobster family.
                </div>
                {/* <div id = "social-icons">
                    <a href = "https://drive.google.com/file/d/1eRf6NYuO6vVu0S23e2ja6PXjy49UcE59/view?usp=sharing" target = "_blank">
                        <img src = {resumeIcon}/>
                    </a>
                    <a href = "https://www.linkedin.com/in/rachel-huang-b26211216/" target = "_blank">
                        <img src = {linkedinIcon} id = "linkedin-icon"/>
                    </a>
                    <a href = "https://github.com/rrachelhuangg" target = "_blank">
                        <img src = {githubIcon}/>
                    </a>
                </div> */}
            </div>
        </div>
    );
}

export default HomePage;
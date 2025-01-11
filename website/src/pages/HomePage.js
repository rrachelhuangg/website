import React, { useEffect } from "react";
import "../index.css";
import resumeIcon from "../assets/images/resume.png";
import linkedinIcon from "../assets/images/linkedin.png";
import githubIcon from "../assets/images/github.png";

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
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div id = "name"></div>
            </div>
            <div id = "bottom-rectangle">
                <div className = "description">
                Welcome to my page! I'm currently a student at William & Mary studying computer science and applied mathematics. My interests center around machine learning, quantum computing, and computer architecture. 
                </div>
                <div className = "description">
                I am currently contributing to the LLM apps and data pipelines of Black Cape, Inc where I worked full-time as a Software Engineering Intern last summer. I am also researching SVBRDF image diffusion models
                as an undergraduate researcher at William & Mary, running experiments with the Matfusion image diffusion model with the goal of generating tileable SVBRDFs.
                </div>
                <div className = "description">
                    I love exploring new technologies and projects and will often spend hours tinkering with a new idea. I have built several iterations of a personal website,
                    trying to settle on a version that is modular and easily extendable. This current site will either grow or change again with equal likelihood as I continue in my
                    other endeavors. Feel free to contact me at rhuang03@wm.edu!   
                </div>
                <div className = "description">
                    In my free time, I am probably reading my growing collection of Marvel comics or feeding my addiction of action and mystery movies. 
                </div>
                {/* <div className = "description">
                This summer, I will be interning at Black Cape, Inc. as a Software Engineering Intern, as well as continuing my Monroe Scholar funded quantum optimization research.
                </div>
                <div className = "description">
                You can learn more about me at the links below, and feel free to contact me at rhuang03@wm.edu!
                </div> */}
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
import React from "react";
import "../index.css";

function HomePage(){
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div id = "name">
                    Hello! I'm Rachel.
                </div>
            </div>
            <div id = "bottom-rectangle">
                <div className = "description">
                Welcome to my page! I’m currently a student at William & Mary studying computer science and applied mathematics. My interests center around machine learning, quantum computing, and computer architecture.
                </div>
                <div className = "description">
                I am currently researching svbrdf image diffusion models and the ZX-calculus quantum optimization method as an undergraduate researcher at William & Mary. I was selected to represent the W&M Department of Computer Science at the 2024 undergraduate research fair for the latter optimization research.
                </div>
                <div className = "description">
                This summer, I will be interning at Black Cape, Inc. as a Software Engineering Intern, where I previously interned last summer and am continuing part-time work.
                </div>
                <div className = "description">
                You can learn more about me at the links below, and feel free to contact me at rhuang03@wm.edu!
                </div>
            </div>
        </div>
    );
}

export default HomePage;
import React, { useEffect, useState } from "react";
import "../index.css";
import resumeIcon from "../assets/images/resume.png";
import linkedinIcon from "../assets/images/linkedin.png";
import githubIcon from "../assets/images/github.png";
import {Link} from "react-router-dom";
import "../index.css";
import presentationIcon from "../assets/images/presentation.jpg";

function HomePage(){
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div id = "name">hello! i'm rachel huang.</div>
            </div>
            <div id = "bottom-rectangle">
                <div className = "description">
                i like building things for fun :)
                </div>
                <div className = "description">
                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/K32J2yVN-XI"
                        title="Buttons Youtube Video"
                        frameborder="0"
                        id = "buttons-video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                    </iframe>
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
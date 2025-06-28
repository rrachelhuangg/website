import React, {useState} from "react";
import "../index.css";
import acmIcon from "../assets/images/acm.png";

function PublicationsPage(){
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div>publications</div>
            </div>
            <div id = "bottom-rectangle">
                <div className = "description">
                    <img src={acmIcon}/>
                    <div className="text-block">
                        <a href="https://dl.acm.org/doi/pdf/10.1145/3573834.3574498" target="_blank" className = "nav-button">Comparisons of Classic and Quantum String Matching Algorithms</a>
                        <div className = "inner-description">
                        • 2022 4th International Conference on Advanced Information Science and System
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PublicationsPage;
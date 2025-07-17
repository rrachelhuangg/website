import React from "react";
import "../index.css";

function PublicationsPage(){
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div>publications</div>
            </div>
            <div id = "bottom-rectangle">
                <div className="section-container">
                    <div className="home-container">
                        <div className="outline-element">
                            <div className="description"><a href="https://dl.acm.org/doi/pdf/10.1145/3573834.3574498" target="_blank">Comparisons of Classic and Quantum String Matching Algorithms</a></div>
                            <div className = "project-description">
                                2022 4th International Conference on Advanced Information Science and System
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PublicationsPage;
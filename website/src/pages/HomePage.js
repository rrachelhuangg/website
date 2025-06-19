import React, { useEffect, useState } from "react";
import "../index.css";
import {Link} from "react-router-dom";
import "../index.css";

function HomePage(){
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div id = "name">hello! i'm rachel huang.
                </div>
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
            </div>
        </div>
    );
}

export default HomePage;
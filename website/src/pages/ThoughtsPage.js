import React, { useEffect, useState } from "react";
import "../index.css";
import {Link} from "react-router-dom";
import "../index.css";

function ThoughtsPage(){
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div>thoughts</div>
            </div>
            <div id = "bottom-rectangle">
                <div className = "description">
                    my thoughts on whatever i'm thinking
                </div>
                <div className = "description">
                    ...
                </div>
            </div>
        </div>
    );
}

export default ThoughtsPage;
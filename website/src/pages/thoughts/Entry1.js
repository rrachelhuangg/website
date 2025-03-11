import React, { useEffect, useState } from "react";
import "../../index.css";
import {Link} from "react-router-dom";

function Entry1(){
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div>opinions on coffee</div>
            </div>
            <div id = "bottom-rectangle">
                <div className = "inner-description">
                    coffee is great. esp black coffe tbh. or at least strong coffee that's not super diluted by cream or milk. 
                    there is a time and place for lattes but having them be too sweet makes it taste like sweetened water.
                    black coffee hits. lattes are pretty.
                </div>
            </div>
        </div>
    );
}

export default Entry1;
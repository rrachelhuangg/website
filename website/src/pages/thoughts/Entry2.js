import React, { useEffect, useState } from "react";
import "../../index.css";
import {Link} from "react-router-dom";

function Entry2(){
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div>why macs</div>
            </div>
            <div id = "bottom-rectangle">
                <div className = "inner-description">
                    people are always like macs aren't fit for gaming and coding. i do agree that macs don't support a lot of high quality video games and also dont have the hardware
                    (ports) that would support gaming. however, i would like to disagree with the popular discourse of how macs cannot properly support coding practices. a small characteristic
                    of macs that i think makes a big difference is the ability to switch between applications with just two keys: cmd and tab. this makes it so much easier to switch between vscode, 
                    your terminal, and your browser while you work. also, the mac environment really doesn't matter that much when you run power-greedy projects, because in my experience,
                    you are either working on a remote server from your mac, or work has given you the appropriate access to needed software that your mac power can handle. i guess the popular discourse
                    that macs are not the move for cs majors did originate somewhere, but in my experience they work perfectly fine and have the added benefit of being sleek!
                </div>
            </div>
        </div>
    );
}

export default Entry2;
import React, {useState} from "react";
import "../index.css";
import prev_figma_icon from "../assets/images/previous_figma_iteration.png";
import curr_page_vid from "../assets/videos/current_page.mp4";

function DatasetPage(){
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }

    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div>Global Americas Data Management Page</div>
            </div>
            <div id = "bottom-rectangle">
                <div className = "description">
                    <video src = {curr_page_vid} id = "curr-page-video" controls/>
                    <div className = "inner-description">
                        <ul>
                            <li>
                                Created and implemented iterations of Figma UI designs with React JS and MUI
                            </li>
                            <li>
                                Fetches and displays datasets from Firebase dynamically, allowing user to switch between datasets
                            </li>
                            <li>
                                Fixed unprotected API calls to Firebase bug that caused unstable displays/flickering datasets
                            </li>
                            <li>
                                Restructured and standardized spreadsheet data in Firebase
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DatasetPage;
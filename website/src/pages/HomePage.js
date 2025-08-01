import React from 'react';
import "../index.css";
import "../index.css";
import starkIcon from "../assets/images/tony_stark.png";

function HomePage(){
    const today = new Date();
    const month = today.getMonth()+1;
    const day = today.getDate();
    const year = today.getFullYear();
    const monthMapping = {1:'January', 2:'February', 3:'March', 4:'April', 5:'May', 6:'June', 7:'July', 8:'August', 9:'September', 10:'October', 11:'November', 12:'December'};
    const formattedDate = monthMapping[month] + " " + day + ", " + year;
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div>rachel huang's portfolio</div>
                <div className="inner-description">"Don't try to be like Jackie. There is only one Jackie. Study computers instead." - Jackie Chan</div>
            </div>
            <div id = "bottom-rectangle">
                <div className="section-container">
                    <div className="home-container">
                        <div className="header" id="website-label">
                            welcome to rachel's portfolio!
                        </div>
                    </div>
                    <div class="video-container">
                    <div class="outline-container">
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
                </div>
                <div className="section-container">
                    <div className="home-container">
                        <div className="description" id="holotable-caption">holotable of achievements</div>
                        <img src={starkIcon} id="stark-image"/>
                    </div>
                </div>
                <div className="section-container">
                    <div className="home-container">
                        <div className="description" id="spotify-caption">currently on repeat</div>
                        <div className="outline-container">
                            <iframe id="spotify-embed" src="https://open.spotify.com/embed/track/33vZRjxJScapmRShRJq8I0?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
                <div className="section-container">
                    <div className="home-container">
                        <div className="description" id="patatap-caption">some patatap interactive beats</div>
                        <div className="outline-container">
                            <iframe src="https://patatap.com/" id="patatap-embed" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
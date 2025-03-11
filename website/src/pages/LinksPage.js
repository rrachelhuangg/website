import React, { useEffect, useState } from "react";
import "../index.css";

function LinksPage(){
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div>links</div>
            </div>
            <div id = "bottom-rectangle">
                <div className = "description">
                    links i like
                </div>
                <div className = "inner-description">
                    <a href="https://www.paulgraham.com/articles.html" target="_blank">paul graham's essays</a>
                </div>
                <div className = "inner-description">
                    <a href="https://samyangamerica.com/buldak/2x-spicy" target="_blank">buldak noodles</a>
                </div>
            </div>
        </div>
    );
}

export default LinksPage;
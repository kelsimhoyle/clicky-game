import React from "react";
import "./style.css";

const Header = () => {
    return (
        <>
            <div className="jumbotron jumbotron-fluid mb-0">
                <div className="container">
                    <h1>Manatee Clicky Game</h1>
                    <p>To score, click a new manatee each turn.</p>
                </div>
            </div>
        </>
    )
}

export default Header;
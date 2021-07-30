import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./Rating.css";

export default function Rating() {
    const location = useLocation();
    let answers = [];
    if(location.state) {
        console.log(location.state.answers);
        answers = location.state.answers;
    }
    return (
        <div className="rating">
            <br></br>
            <h1>My Adventure is Rated...</h1>
            <br></br>
            <br></br>
            <div className="grid-container">
                <Link to={{ pathname: '/loading', state: { answers: answers} }} onClick={(e) => answers.push("G")}>
                    <div className="grid-item">G</div>
                </Link>
                <Link to={{ pathname: '/loading', state: { answers: answers} }} onClick={(e) => answers.push("PG")}>
                    <div className="grid-item">PG</div>
                </Link>
                <Link to={{ pathname: '/loading', state: { answers: answers} }} onClick={(e) => answers.push("PG-13")}>
                    <div className="grid-item">PG-13</div>
                </Link>
                <Link to={{ pathname: '/loading', state: { answers: answers} }} onClick={(e) => answers.push("R")}>
                    <div className="grid-item">R</div>
                </Link>

            </div>
        </div>
    );
}
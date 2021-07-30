import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";
import NorthAmerica from "../images/NorthAmerica.jpg";
import SouthAmerica from "../images/SouthAmerica.jpg";
import Europe from "../images/Europe.jpg";
import Asia from "../images/Asia.jpg";
import Africa from "../images/Africa.jpg";
import Antarctica from "../images/Antarctica.jpg";
import Space from "../images/Space.jpg";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function Location() {
    const location = useLocation();
    let answers = [];
    if(location.state) {
        console.log(location.state.answers);
        answers = location.state.answers;
    }
    return (
      <div className="location">
         <br></br>
        <h1>My adventure takes place in...</h1>
        <br></br>
        <br></br>
      <div className="image-list-small">
        <li>
            <Link to={{ pathname: '/timeperiod', state: { answers: answers} }} onClick={(e) => answers.push("North America")}>
                <img className="img" src={NorthAmerica} alt="North America"></img>
            </Link>
            <h3>North America</h3>
        </li>
        <li>
            <Link to={{ pathname: '/timeperiod', state: { answers: answers} }} onClick={(e) => answers.push("South America")}>
                <img className="img" src={SouthAmerica} alt="South America"></img>
            </Link>
            <h3>South America</h3>
        </li>
        <li>
            <Link to={{ pathname: '/timeperiod', state: { answers: answers} }} onClick={(e) => answers.push("Europe")}>
                <img className="img" src={Europe} alt="Europe"></img>
            </Link>
            <h3>Europe</h3>
        </li>
      </div>
      <br></br>
      <div className="image-list-small">
        <li>
            <Link to={{ pathname: '/timeperiod', state: { answers: answers} }} onClick={(e) => answers.push("Asia")}>
                <img className="img" src={Asia} alt="Asia"></img>
            </Link>
            <h3>Asia</h3>
        </li>
        <li>
            <Link to={{ pathname: '/timeperiod', state: { answers: answers} }} onClick={(e) => answers.push("Africa")}>
                <img className="img" src={Africa} alt="Africa"></img>
            </Link>
            <h3>Africa</h3>
        </li>
        <li>
            <Link to={{ pathname: '/timeperiod', state: { answers: answers} }} onClick={(e) => answers.push("Antarctica")}>
                <img className="img" src={Antarctica} alt="Antarctica"></img>
            </Link>
            <h3>Antarctica</h3>
        </li>
        <li>
            <Link to={{ pathname: '/timeperiod', state: { answers: answers} }} onClick={(e) => answers.push("Space")}>
                <img className="img" src={Space} alt="Space"></img>
            </Link>
            <h3>Space</h3>
        </li>
      </div>
      </div>

    );
}
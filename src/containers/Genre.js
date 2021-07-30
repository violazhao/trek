import React from "react";
import { Link } from "react-router-dom";
import "./Genre.css";
import Comedy from "../images/Comedy.jpg";
import Romance from "../images/Romance.jpg";
import Horror from "../images/Horror.jpg";
import Fantasy from "../images/Fantasy.jpg";
import Musical from "../images/Musical.jpg";
import Action from "../images/Action.jpg";
import Thriller from "../images/Thriller.jpg";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function Genre() {
    const location = useLocation();
    let answers = [];
    if(location.state) {
        console.log(location.state.answers);
        answers = location.state.answers;
    }
    return (
        <div className="genre">
           <br></br>
          <h1>The type of journey I want to go on is a...</h1>
          <br></br>
          <br></br>
        <div className="image-list-small">
          <li>
              <Link  to={{ pathname: '/rating', state: { answers: answers} }} onClick={(e) => answers.push("Romance")}>
                  <img className="img" src={Romance} alt="Romance"></img>
              </Link>
              <h3>Romance</h3>
          </li>
          <li>
              <Link to={{ pathname: '/rating', state: { answers: answers} }} onClick={(e) => answers.push("Comedy")}>
                  <img className="img" src={Comedy} alt="Comedy"></img>
              </Link>
              <h3>Comedy</h3>
          </li>
          <li>
              <Link to={{ pathname: '/rating', state: { answers: answers} }} onClick={(e) => answers.push("Action")}>
                  <img className="img" src={Action} alt="Action"></img>
              </Link>
              <h3>Action</h3>
          </li>
        </div>
        <br></br>
        <div className="image-list-small">
          <li>
              <Link to={{ pathname: '/rating', state: { answers: answers} }} onClick={(e) => answers.push("Horror")}>
                  <img className="img" src={Horror} alt="Horror"></img>
              </Link>
              <h3>Horror</h3>
          </li>
          <li>
              <Link to={{ pathname: '/rating', state: { answers: answers} }} onClick={(e) => answers.push("Thriller")}>
                  <img className="img" src={Thriller} alt="Thriller"></img>
              </Link>
              <h3>Thriller</h3>
          </li>
          <li>
              <Link to={{ pathname: '/rating', state: { answers: answers} }} onClick={(e) => answers.push("Musical")}>
                  <img className="img" src={Musical} alt="Musical"></img>
              </Link>
              <h3>Musical</h3>
          </li>
          <li>
              <Link to={{ pathname: '/rating', state: { answers: answers} }} onClick={(e) => answers.push("Sci-fi")}>
                  <img className="img" src={Fantasy} alt="Fantasy"></img>
              </Link>
              <h3>Fantasy/Sci-Fi</h3>
          </li>
        </div>
        </div>
  
      );
}
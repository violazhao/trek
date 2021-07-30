import React from "react";
import { Link } from "react-router-dom";
import Movie from "../images/Movie.jpg";
import TV from "../images/TV.jpg";
import Question from "../images/Question.jpg";
import "./Home.css";

export default function Home() {
  let answers = [];

  return (
    <div className="main">
      <br></br>
      <h1>I want to watch a...</h1>
      <br></br>
      <br></br>
      <div className="image-list-small">
        <li>
            <Link to={{ pathname: '/location', state: { answers: answers} }} onClick={(e) => answers.push("Movie")}>
                <img className="img" src={Movie} alt="Movie"></img>
            </Link>
            <h3>Movie</h3>
        </li>
        <li>
            <Link  to={{ pathname: '/location', state: { answers: answers} }} onClick={(e) => answers.push("TV")}>
                <img className="img" src={TV} alt="TV"></img>
            </Link>
            <h3>TV Show</h3>
        </li>
        <li>
            <Link  to={{ pathname: '/location', state: { answers: answers} }} onClick={(e) => answers.push("Both")}>
                <img className="img" src={Question} alt="Question"></img>
            </Link>
            <h3>No Preference</h3>
        </li>
      </div>
    </div>
  );
}
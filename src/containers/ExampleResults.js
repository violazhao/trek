import React, { useState } from "react";
import MOVIE from "../images/Movie.jpg";
import Popup from "./Popup";

import "./Results.css";

export const ExampleResults = ({ results }) => {
  const [isOpen, setIsOpen] = useState(false);
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
  return <div>
    <div className="results">
      <h1>Your Adventure!</h1>
      <h3> Best Match... </h3>
      <div className="image-list-small">
        <li>
          <img className="img2" src={MOVIE} alt="MOVIE"></img>
        </li>
      </div>
      <h3> Other Matches... </h3>
      <div className="image-list-small">
        <li>
          <img className="img2" src={MOVIE} alt="MOVIE"></img>
        </li>
        <li>
          <img className="img2" src={MOVIE} alt="MOVIE"></img>
        </li>
        <li>
          <img className="img2" src={MOVIE} alt="MOVIE"></img>
        </li>
      </div>
      <input
        type="button"
        value="Share Results"
        onClick={togglePopup}
      />
      {isOpen && <Popup
        content={<>
          <b>Share your results with friends!</b>
          <p>https://hbomax.com/my-adventure/</p>
          <button>Copy Link</button>
        </>}
        handleClose={togglePopup}
      />}
      <br></br>
      <br></br>
      <input
        type="button"
        value="Start Over"
        onClick={event =>  window.location.href='/'}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  </div>
}
export default ExampleResults;

import React, { useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Popup from "./Popup";

import "./Results.css";

export const Results = () => {
  let results = [];
  const location = useLocation();
  if (location.state) {
      results = location.state.results;
  }
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  if (results[0] === undefined) {
    window.location.href = '/noresults';
  }
  return <div>
    <div className="results">
      <h1>Your Adventure!</h1>
      <h3> Best Match... </h3>
      <div className="image-list-small">
        <li>
            {results[0].title}
        </li>
      </div>
      <h3> Other Matches... </h3>
      <div className="image-list-small">
          {
              results.map(i => i.title + ', ')
          }
      </div>
      <br></br>
      <br></br>
      <br></br>
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
export default Results;


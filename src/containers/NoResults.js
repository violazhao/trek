import React from "react";
import "./NoResults.css";

export default function NoResults() {
  return (
    <div className="NoResults text-center">
      <h3>Sorry, we weren't able to gather your results.</h3>
      <input
        type="button"
        value="Start Over"
        onClick={event =>  window.location.href='/'}
      />
    </div>
  );
}
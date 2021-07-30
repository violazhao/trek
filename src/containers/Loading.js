import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Loading.css";
import CircularProgress from '@material-ui/core/CircularProgress'
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
const BACKEND_URL = "http://localhost:5000/results";

export default function Loading() {
  const location = useLocation();
  let history = useHistory();
  let answers = [];
  if(location.state) {
      console.log('success');
      console.log(location.state.answers);
      answers = location.state.answers;
  }

  const [results, setResults] = useState([]);
  useEffect(() => {
      fetch(BACKEND_URL, {
          method:"POST",
          cache: "no-cache",
          headers: {"content_type":"application/json",},
          body: answers
          })
          .then(response => response.json())
          .then(results => {
              console.log(results);
              setResults(current => [results, ...current]);
              history.push({pathname: '/results', state: {results: results}});
          })
          .catch(e => {
              console.log('error occurred');
              console.log(e);
          });
  });
  console.log(results);

  return (
    <div className="loading">
        <header className="App-header">
            <p>Loading...</p> <CircularProgress /> 
        </header>
    </div>
  );
}
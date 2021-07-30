import React from "react";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import "./TimePeriod.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";

export default function TimePeriod() {
    const location = useLocation();
    let answers = [];
    if(location.state) {
        console.log(location.state.answers);
        answers = location.state.answers;
    }

  return (
    <div className="timeperiod">
         <br></br>
        <h1>The century I am in is the...</h1>
        <br></br>
        <br></br>
        <Timeline align="right">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                    <TimelineContent className="cursor">
                    <Link className="text" to={{ pathname: '/genre', state: { answers: answers} }} onClick={(e) => answers.push(1600)}>
                        1600s or earlier
                    </Link>
                    </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                    <TimelineContent className="cursor" >
                    <Link className="text" to={{ pathname: '/genre', state: { answers: answers} }} onClick={(e) => answers.push(1700)}>
                        1700s
                    </Link>
                    </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                    <TimelineContent className="cursor">
                    <Link className="text" to={{ pathname: '/genre', state: { answers: answers} }} onClick={(e) => answers.push(1800)}>
                        1800s
                    </Link>
                    </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                    <TimelineContent className="cursor">
                    <Link className="text" to={{ pathname: '/genre', state: { answers: answers} }} onClick={(e) => answers.push(1900)}>
                        1900s
                    </Link>
                    </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                    <TimelineContent className="cursor">
                    <Link className="text" to={{ pathname: '/genre', state: { answers: answers} }} onClick={(e) => answers.push(2000)}>
                        2000s
                    </Link>
                    </TimelineContent>
            </TimelineItem>
        </Timeline>
    </div>
  );
}
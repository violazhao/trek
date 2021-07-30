import React from "react";
import "./Sidenav.css"

export default function Sidenav() {
    return (
    <div className="sidenav">
        <a href="/">Type</a>
        <a href="/location">Location</a>
        <a href="/timeperiod">Time Period</a>
        <a href="/genre">Genre</a>
        <a href="/rating">Rating</a>
    </div>
    );
}

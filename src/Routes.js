import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Sidenav from "./containers/Sidenav"
import Location from "./containers/Location"
import NotFound from "./containers/NotFound";
import TimePeriod from "./containers/TimePeriod";
import Rating from "./containers/Rating";
import Loading from "./containers/Loading";
import ExampleResults from "./containers/ExampleResults";
import Genre from"./containers/Genre";
import Results from "./containers/Results";
import NoResults from "./containers/NoResults";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
                <Sidenav />
            </Route>
            <Route exact path="/location">
                <Location />
                <Sidenav />
            </Route>
            <Route exact path="/timeperiod">
                <TimePeriod />
                <Sidenav />
            </Route>
            <Route exact path="/genre">
                <Genre />
                <Sidenav />
            </Route>
            <Route exact path="/rating">
                <Rating />
                <Sidenav />
            </Route>
            <Route exact path="/loading">
                <Loading />
            </Route>
            <Route exact path="/exampleresults">
                <ExampleResults />
            </Route>
            <Route exact path="/results">
                <Results />
            </Route>
            <Route exact path="/noresults">
                <NoResults />
            </Route>
            {/* Catch all unmatched routes */}
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
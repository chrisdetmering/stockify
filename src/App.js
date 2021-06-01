import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import GuidanceRequestQuestionnaire from "./components/GuidanceRequestQuestionnaire";
import HomeContainer from "./components/HomeContainer";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Switch>
            <Route path="/project-question">
              <GuidanceRequestQuestionnaire />
            </Route>
            <Route path="/">
              <HomeContainer />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;

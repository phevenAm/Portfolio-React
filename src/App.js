import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, Header, PageNotFound, Projects } from "./Components";
import "./App.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Projects" component={Projects} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;

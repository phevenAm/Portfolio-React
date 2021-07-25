import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, PageNotFound, Projects, SingleProject } from "./Components";
import '../src/css/App.css';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Projects" exact component={Projects} />
        <Route
          path="/Projects/Single_Project/:title"
          component={SingleProject}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;

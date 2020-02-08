import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "../Containers/Home";
import Enter from "../Containers/Enter";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/enter">
          <Enter />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;

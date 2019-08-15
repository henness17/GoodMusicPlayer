import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import Submit from "./components/Submit.js";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/songs" component={App} />
      <Route path="/genre/:genre" component={App} />
      <Route path="/artist/:artistName" component={App} />
      <Route path="/submit" component={Submit} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

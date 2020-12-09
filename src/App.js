import React from "react";
import Home from "./components/Home";
import "./App.css";
import Endpage from "./components/Endpage";
import Nav from "./components/Nav";
import CSC205 from "./components/CSC205";
import CSC207 from "./components/CSC207";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Nav} />
        <Switch>
          <Route path="/questions/CSC205" component={CSC205} />
          <Route path="/endpage" component={Endpage} />
          <Route path="/questions/CSC207" component={CSC207} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

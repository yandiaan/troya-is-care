import React from "react";
import Navbar from "./components/Navbar/Index";
import { Route, Switch } from "react-router-dom";
import Article from "./components/page/Article";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Article} />
        <Route path="/article" />
      </Switch>
    </div>
  );
}

export default App;

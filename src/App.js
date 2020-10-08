import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import CatchList from "./components/CatchList";
import Header from "./components/Header";
import HomeGrid from "./components/HomeGrid";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomeGrid} />
        <Route path="/catch-list" component={CatchList} />
      </Switch>
    </div>
  );
}

export default App;

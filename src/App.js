import React, { useReducer, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import CatchList from "./components/CatchList";
import Header from "./components/Header";
import HomeGrid from "./components/HomeGrid";
import SinglePokemon from "./components/SinglePokemon";
import useStartup from "./hooks/useStartup";
import axios from "axios";

const ACTIONS = {
  ADD_CATCH: "add-catch",
  DELETE_CATCH: "delete-catch",
};

function reducer(catchList, action) {
  switch (action.type) {
    case ACTIONS.ADD_CATCH:
      return [...catchList, action.payload.id];
    case ACTIONS.DELETE_CATCH:
      return catchList.filter((item) => item !== action.payload.id);

    default:
      return catchList;
  }
}

function App() {
  const [catchList, dispatch] = useReducer(reducer, [1]);
  const pokemonList = useStartup();

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <HomeGrid dispatch={dispatch} pokemonList={pokemonList} />
          )}
        />
        <Route
          path="/pokemon/:id"
          component={(props) => (
            <SinglePokemon dispatch={dispatch} {...props} />
          )}
        />
        <Route
          path="/catch-list"
          component={() => (
            <CatchList catchList={catchList} dispatch={dispatch} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;

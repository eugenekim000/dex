import React, { useReducer } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import CatchList from "./components/CatchList";
import Header from "./components/Header";
import HomeGrid from "./components/HomeGrid";
import SinglePokemon from "./components/SinglePokemon";
import useStartup from "./hooks/useStartup";

let testObj = {
  name: "venusaur",
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  id: 3,
  caught: false,
  timestamp: 1,
};

const ACTIONS = {
  ADD_CATCH: "add-catch",
  DELETE_CATCH: "delete-catch",
  TOGGLE_CATCH: "toggle-catch",
};

function reducer(catchList, action) {
  switch (action.type) {
    case ACTIONS.ADD_CATCH:
      let check = catchList.filter((item) => item.id === action.payload.id);
      if (check.length > 0) return catchList;
      return [...catchList, action.payload];
    case ACTIONS.DELETE_CATCH:
      return catchList.filter((item) => item.id !== action.payload.id);
    case ACTIONS.TOGGLE_CATCH:
      let mapIdArray = catchList.map((item) => {
        if (item.id === action.payload.id) {
          let currentState = item.caught;
          return { ...item, caught: !currentState };
        } else return item;
      });
      return mapIdArray;
    default:
      return catchList;
  }
}

function App() {
  const [catchList, dispatch] = useReducer(reducer, [testObj]);
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

        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
    </div>
  );
}

export default App;

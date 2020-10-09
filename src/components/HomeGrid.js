import "../styles/HomeGrid.css";
import React from "react";
import SingleGrid from "./SingleGrid";

const HomeGrid = (props) => {
  const { dispatch, pokemonList } = props;

  return (
    <div className="grid-container">
      {pokemonList.map((pokemon) => (
        <SingleGrid pokemon={pokemon} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default HomeGrid;

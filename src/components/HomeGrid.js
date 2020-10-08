import React, { useState, useEffect } from "react";
import SingleGrid from "./SingleGrid";

const HomeGrid = (props) => {
  const { dispatch, pokemonList } = props;

  useEffect(() => {
    console.log(props, "rerender from homegrid");
  }, []);

  return (
    <div>
      {pokemonList.map((pokemon) => (
        <SingleGrid pokemon={pokemon} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default HomeGrid;

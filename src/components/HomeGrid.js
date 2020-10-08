import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleGrid from "./SingleGrid";

export default function HomeGrid() {
  let [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((res) => {
        const allPokemon = res.data.results;
        setPokemons(allPokemon);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <SingleGrid pokemon={pokemon} />
      ))}
    </div>
  );
}

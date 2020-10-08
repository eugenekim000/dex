import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useStartup() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    console.log("rerender from startup");
    if (pokemons.length === 0) {
      console.log("calling api");
      axios
        .get(`https://pokeapi.co/api/v2/pokemon`)
        .then((res) => {
          const allPokemon = res.data.results;
          setPokemons(allPokemon);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return pokemons;
}

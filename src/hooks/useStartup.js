import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useStartup() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if (pokemons.length === 0) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
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

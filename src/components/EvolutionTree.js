import React, { useEffect, useState } from "react";
import axios from "axios";
import { extractEvolutions } from "../helper";

export default function EvolutionTree(props) {
  const { id } = props;
  const [evolutionChain, setEvolutionChain] = useState();

  useEffect(() => {
    console.log("evolution tree mounted");
    const unsubscribe = async () =>
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
        .then((res) => {
          console.log("calling url");

          const url = res.data.evolution_chain.url;
          return url;
        })
        .then((data) => {
          axios.get(data).then((res) => {
            const evolutionData = extractEvolutions(res.data);
            console.log(evolutionData);
            setEvolutionChain(evolutionData, "this is the evolution data");
          });
        })
        .catch((error) => console.log(error));

    // axios
    //   .get(url)
    //   .then((res) => {
    //     const evolutionData = extractEvolutions(res.data);
    //     console.log(evolutionData);
    //     setEvolutionChain(evolutionData, "this is the evolution data");
    //   })
    //   .catch((error) => console.log(error));

    return () => {
      unsubscribe();
    };
  }, []);

  return <div></div>;
}

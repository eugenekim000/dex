import "../styles/EvolutionTree.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { extractEvolutions } from "../helper";
import Evolution from "./Evolution";
import Loading from "./Loading";

export default function EvolutionTree(props) {
  const { id } = props;
  const [evolutionChain, setEvolutionChain] = useState();
  const [render, setRender] = useState(false);

  useEffect(() => {
    let isMounted = true;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((res) => {
        const url = res.data.evolution_chain.url;
        return url;
      })
      .then((data) => {
        axios.get(data).then((res) => {
          if (isMounted) {
            const evolutionData = extractEvolutions(res.data);
            setEvolutionChain(evolutionData);
            setRender(true);
          }
        });
      })
      .catch((error) => console.log(error));
    console.log(evolutionChain, "this is the evolution chain");
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="evolution-container">
      {render ? (
        evolutionChain.map((evolution) => <Evolution evolution={evolution} />)
      ) : (
        <Loading />
      )}
    </div>
  );
}

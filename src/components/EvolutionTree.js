import React, { useEffect } from "react";
import axios from "axios";
import extractEvolutions from "../helper";

export default function EvolutionTree(props) {
  const { id } = props;
  const [evolutionChain, setEvolutionChain] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((res) => {
        const { url } = res.data;
        axios.get(url).then((res) => {
          const evolutionData = extractEvolutions(res.data);
          console.log(evolutionData);
          setEvolutionChain(evolutionData);
        });
      });
  }, []);

  return <div></div>;
}

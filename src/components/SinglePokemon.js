import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SinglePokemon(props) {
  let [fullData, setFullData] = useState("");

  useEffect(() => {
    if (props.data) setFullData(props.data);
    else {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => {
          let { data } = res.data;
          setFullData(data);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return <div>base experience: {fullData.base_experience}</div>;
}

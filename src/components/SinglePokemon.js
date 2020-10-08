import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SinglePokemon(props) {
  let [fullData, setFullData] = useState("");
  let [render, setRender] = useState(false);
  let id = props.match.params.id;
  console.log(id, "this is the id");

  useEffect(() => {
    if (props.data) setFullData(props.data);
    else {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => {
          let { data } = res;
          setFullData(data);
          setRender(true);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return render ? (
    <div>base experience: {fullData.base_experience}</div>
  ) : (
    <div>loading...</div>
  );
}

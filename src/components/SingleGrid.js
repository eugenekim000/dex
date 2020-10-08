import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SingleGrid(props) {
  const [sprite, setSprite] = useState("");
  const [id, setId] = useState(null);

  const { url, name } = props.pokemon;

  useEffect(() => {
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        setSprite(data.sprites.front_default);
        setId(data.id);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <img src={sprite}></img>
      <div>{name + " " + id}</div>
    </>
  );
}

import "../styles/SingleGrid.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SingleGrid(props) {
  const [sprite, setSprite] = useState("");
  const [id, setId] = useState(null);

  const { dispatch } = props;
  const { url, name } = props.pokemon;

  useEffect(() => {
    let isMounted = true;
    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        if (isMounted) {
          setSprite(data.sprites.front_default);
          setId(data.id);
        }
      })
      .catch((error) => console.log(error));

    return () => {
      isMounted = false;
    };
  }, []);

  function handleClick() {
    dispatch({ type: "add-catch", payload: { name, sprite, id } });
  }

  return (
    <div className="single-grid-container">
      <Link to={id ? `pokemon/${id}` : "/"}>
        <img src={sprite}></img>
        <div>{name + " " + id}</div>
      </Link>
      <button onClick={handleClick}>Add to catch list</button>
    </div>
  );
}

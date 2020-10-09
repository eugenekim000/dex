import "../styles/Evolution.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { capitalize } from "../helper";

export default function Evolution(props) {
  const [sprite, setSprite] = useState([]);
  const { evolution } = props;

  useEffect(() => {
    let isMount = true;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${evolution.name}`)
      .then((res) => {
        if (isMount) setSprite(res.data.sprites.front_default);
      });

    return () => {
      isMount = false;
    };
  }, []);

  return (
    <div className="single-evolution-container">
      {sprite.length ? (
        <div>
          <Link to={`/pokemon/${evolution.id}`}>
            {" "}
            <img src={sprite}></img>
          </Link>
          <div>{capitalize(evolution.name)}</div>
        </div>
      ) : (
        "loading..."
      )}
      <div className="single-evolution-method">
        {evolution.level !== null
          ? "Level " + evolution.level + "  🡺"
          : evolution.trigger
          ? evolution.trigger + " 🡺"
          : ""}
      </div>
    </div>
  );
}

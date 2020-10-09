import "../styles/SingleGrid.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ReactComponent as BookmarkLogo } from "../assets/bookmark.svg";
import { capitalize } from "../helper";

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
    let timestamp = Date.now();
    dispatch({
      type: "add-catch",
      payload: { name, sprite, id, timestamp, caught: false },
    });
  }

  return (
    <div className="single-grid-container">
      <Link to={id ? `pokemon/${id}` : "/"}>
        <div className="single-pokemon-container">
          <img src={sprite}></img>
        </div>
        <div>{capitalize(name) + " " + id}</div>
      </Link>
      <div className="bookmark-container">
        <BookmarkLogo onClick={handleClick} />
      </div>
    </div>
  );
}

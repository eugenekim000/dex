import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SinglePokemon(props) {
  let [fullData, setFullData] = useState("");
  let [sprite, setSprite] = useState("");
  let [render, setRender] = useState(false);
  let [type, setType] = useState("");
  let [size, setSize] = useState({});
  const [stats, setStats] = useState([]);
  let id = props.match.params.id;

  useEffect(() => {
    if (props.data) setFullData(props.data);
    else {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => {
          let { data } = res;
          console.log(data);
          setFullData(data);
          setSprite(data.sprites.front_default);

          let types = data.types.map((item) => item.type.name);
          setType(types);

          let size = {
            height: data.height,
            weight: data.weight,
          };
          setSize(size);

          let stats = data.stats;
          setStats(stats);

          setRender(true);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return render ? (
    <div>
      <img src={sprite}></img>
      <div>Type: {type}</div>
      <div>
        <span>height: {size.height}</span>
        <span>weight: {size.weight}</span>
      </div>
      <div>
        {stats.map((stat) => (
          <div>
            {stat.stat.name} : {stat.base_stat}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>loading...</div>
  );
}

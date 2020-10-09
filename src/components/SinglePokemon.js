import "../styles/SinglePokemon.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Moves from "./Moves";
import EvolutionTree from "./EvolutionTree";
import { capitalize, typeToColor } from "../helper";
import { motion } from "framer-motion";
import Loading from "./Loading";

export default function SinglePokemon(props) {
  const [fullData, setFullData] = useState("");
  const [sprite, setSprite] = useState("");
  const [render, setRender] = useState(false);
  const [type, setType] = useState("");
  const [size, setSize] = useState({});
  const [stats, setStats] = useState([]);
  const [moves, setMoves] = useState([]);
  const [maxStat, setMaxStat] = useState(1);

  let id = props.match.params.id;

  useEffect(() => {
    let isMounted = true;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        let { data } = res;
        console.log(data);
        if (isMounted) {
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
          let findMaxStat = Math.max(...stats.map((stat) => stat.base_stat));
          setMaxStat(findMaxStat);

          let moves = data.moves;
          setMoves(moves);

          setRender(true);
        }
      })
      .catch((error) => console.log(error));

    return () => {
      isMounted = false;
    };
  }, []);

  return render ? (
    <div className="single-pokemon-container">
      <div className="pokedex-data-container">
        <div
          className="single-sprite-container"
          style={{ backgroundColor: typeToColor(type[0]) }}
        >
          <motion.div
            animate={{ y: 30 }}
            transition={{ duration: 3, yoyo: Infinity }}
          >
            <img src={sprite}></img>
          </motion.div>
        </div>

        <div className="stats-container">
          <div>
            {" "}
            <strong> Type: </strong>{" "}
            {type.map((item) => (
              <span
                className="type-container"
                style={{
                  backgroundColor: typeToColor(item),
                }}
              >
                {capitalize(item)}{" "}
              </span>
            ))}
          </div>
          <div>
            <span>
              <strong> Height: </strong> {(size.height / 10).toFixed(1)}
              {"m"}
            </span>
            <span>
              <strong> Weight: </strong> {(size.weight / 10).toFixed(1)}
              {"kgs"}
            </span>
          </div>
          <div className="stat-point-container">
            {stats.map((stat) => (
              <div>
                <span className="stat-type-title">
                  <strong> {capitalize(stat.stat.name)} : </strong>
                </span>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ ease: "easeOut", duration: 1.5 }}
                  className="stat-type-rating-container"
                >
                  <span
                    className={stat.stat.name + " " + "stat-type-rating"}
                    style={{
                      width: `${Math.floor((stat.base_stat / maxStat) * 100)}%`,
                    }}
                  >
                    {" "}
                    {stat.base_stat}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <EvolutionTree id={id} />
      <Moves moves={moves} />
    </div>
  ) : (
    <Loading />
  );
}

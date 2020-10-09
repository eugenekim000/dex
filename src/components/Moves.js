import "../styles/Moves.css";
import React, { useEffect, useState } from "react";
import MovesTable from "./MovesTable";

export default function Moves(props) {
  const { moves } = props;
  const [moveList, setMoveList] = useState([]);
  const [filteredMoveList, setFilteredMoveList] = useState([]);
  const [toggleMethods, setToggleMethods] = useState("level-up");

  useEffect(() => {
    let selectedMoves = [];

    for (let move of moves) {
      let moveObj;

      let versionArray = move.version_group_details;
      for (let version of versionArray) {
        if (version.version_group.name !== "red-blue") continue;
        moveObj = {
          url: move.move.url,
          attack: move.move.name,
          method: version.move_learn_method.name,
          level: version.level_learned_at,
        };

        selectedMoves.push(moveObj);
        break;
      }
    }

    console.log(selectedMoves, "selected moves");

    setMoveList(selectedMoves);
  }, []);

  useEffect(() => {
    let filteredList = moveList.filter((move) => move.method === toggleMethods);

    setFilteredMoveList(filteredList);
  }, [toggleMethods, moveList]);

  function handleClick(e) {
    let filterMethod = e.target.value;
    setToggleMethods(filterMethod);
  }

  return (
    <div>
      <div className="moves-button-container">
        <button onClick={handleClick} value="level-up">
          Level up
        </button>
        <button onClick={handleClick} value="machine">
          HM/TM
        </button>
      </div>

      <div>
        <MovesTable filteredMoveList={filteredMoveList} />
      </div>
    </div>
  );
}

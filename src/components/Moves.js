import React, { useEffect, useState } from "react";

export default function Moves(props) {
  const { moves } = props;
  const [moveList, setMoveList] = useState([]);
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

  function handleClick(e) {
    let filterMethod = e.target.value;
    setToggleMethods(filterMethod);
  }

  return (
    <div>
      <button onClick={handleClick} value="level-up">
        Level up
      </button>
      <button onClick={handleClick} value="machine">
        HM/TM
      </button>

      <div>
        {moveList
          .filter((move) => move.method === toggleMethods)
          .map((filteredMove) => filteredMove.attack)}
      </div>
    </div>
  );
}

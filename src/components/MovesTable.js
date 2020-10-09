import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MovesTable(props) {
  const { filteredMoveList } = props;
  const [moveData, setMoveData] = useState([]);

  useEffect(() => {
    let isMount = true;
    if (filteredMoveList.length) {
      let urlArray = filteredMoveList.map((item) => item.url);
      axios.all(urlArray.map((link) => axios.get(link))).then(
        axios.spread((...res) => {
          if (isMount) {
            let cleanedRes = res.map((res, i) => {
              const { data } = res;
              let cleanedObj = {};

              let { accuracy, power, pp, type, damage_class } = data;
              console.log(power, "this is power");

              if (power === null) power = "-";

              cleanedObj = {
                accuracy,
                power,
                pp,
                type: type.name,
                category: damage_class.name,
                ...filteredMoveList[i],
              };
              return cleanedObj;
            });

            setMoveData(cleanedRes);
          }
        })
      );
    }

    return () => {
      isMount = false;
    };
  }, [filteredMoveList]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Moves</th>
            <th>Type</th>
            <th>Category</th>
            <th>Power</th>
            <th>PP</th>
            <th>Accuracy</th>
          </tr>
        </thead>
        <tbody>
          {/* {filteredMoveList.map((item) => (
              <>
                <td>{item.type}</td>
                <td>{item.attack}</td>
              </>
            ))} */}
          {moveData.map((item) => (
            <tr>
              <td>{item.level}</td>
              <td>{item.attack}</td>
              <td>{item.type}</td>
              <td>{item.category}</td>
              <td>{item.power}</td>
              <td>{item.pp}</td>
              <td>{item.accuracy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

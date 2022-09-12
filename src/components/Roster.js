import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Roster = ({ teamId, season }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://winter-sky-7874.fly.dev/api/rosters?team=${teamId}&season=${season}`
      )
      .then((response) => {
        setPlayers(response.data["players"]);
      });
  }, [teamId, season]);

  return (
    <>
      <h2>Players</h2>
      {players.length !== 0 ? (
        <table>
          <tbody>
            <tr>
              {Object.keys(players[0]).map((key, index) => (
                <th key={index}>{key} </th>
              ))}
            </tr>
            {players.map((p, index) => (
              <RosterPlayerRow player={p} key={index} />
            ))}
          </tbody>
        </table>
      ) : null}
    </>
  );
};

const RosterPlayerRow = ({ player }) => {
  const [nameKey, setKey] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://winter-sky-7874.fly.dev/api/nametokey?name=${player.PLAYER.replace(
          " ",
          "+"
        )}`
      )
      .then((response) => {
        setKey(response.data["key"]);
      });
  }, [player.PLAYER]);

  return (
    <tr>
      {Object.keys(player).map((key, index) => (
        <td key={index}>
          {key === "PLAYER" ? (
            <Link to={`/players/${nameKey}`}>{player.PLAYER}</Link>
          ) : (
            player[key]
          )}
        </td>
      ))}
    </tr>
  );
};
export default Roster;

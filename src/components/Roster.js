import axios from "axios";
import { useEffect, useState } from "react";
import { Table, HeaderCell, Cell } from "../styled/Table";
import { WheatLink } from "../styled/WheatLink";
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
        <Table>
          <tbody>
            <tr>
              {Object.keys(players[0]).map((key, index) => (
                <HeaderCell as="th" key={index}>
                  {key}{" "}
                </HeaderCell>
              ))}
            </tr>
            {players.map((p, index) => (
              <RosterPlayerRow player={p} key={index} />
            ))}
          </tbody>
        </Table>
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
        <Cell key={index}>
          {key === "PLAYER" ? (
            <WheatLink to={`/players/${nameKey}`}>{player.PLAYER}</WheatLink>
          ) : (
            player[key]
          )}
        </Cell>
      ))}
    </tr>
  );
};
export default Roster;

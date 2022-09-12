import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const LetterPlayerList = () => {
  const params = useParams();
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://winter-sky-7874.fly.dev/api/players/all?letter=${params.letter}`
      )
      .then((response) =>
        setPlayers(
          response.data.sort((a, b) => a.surname.localeCompare(b.surname))
        )
      );
  }, [params]);

  return (
    <ul style={{ columns: 4 }}>
      {players.map((player, index) => (
        <Player player={player} key={index} />
      ))}
    </ul>
  );
};

const Player = ({ player }) => {
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .get(`https://winter-sky-7874.fly.dev/api/keytoname?key=${player.key}`)
      .then((response) => {
        setName(response.data.name);
      });
  }, [player]);
  return (
    <li>
      <Link to={`/players/${player.key}`}>{name}</Link>{" "}
    </li>
  );
};
export default LetterPlayerList;

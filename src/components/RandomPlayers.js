import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const RandomPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://winter-sky-7874.fly.dev/api/players/random`)
      .then((response) => {
        setPlayers(response.data);
      });
  }, []);

  return (
    <ul style={{ columns: 5, listStyleType: "none" }}>
      {players.map((player, index) => (
        <RandomPlayerBox player={player} key={index} />
      ))}
    </ul>
  );
};

const RandomPlayerBox = ({ player }) => {
  const [renderImg, setRenderImg] = useState(true);
  const imgErrorHandler = (event) => {
    event.onerror = null;
    setRenderImg(false);
  };
  return player.headshot && renderImg ? (
    <li>
      <Link to={`/players/${player.key}`}>
        <img
          alt={player.name}
          src={player.headshot}
          onError={imgErrorHandler}
          style={{ height: "160px", width: "120px" }}
        />
      </Link>
    </li>
  ) : null;
};

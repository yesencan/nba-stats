import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainSection } from "../styled/MainSection";
import { WheatLink } from "../styled/WheatLink";
import styled from "styled-components";
const PlayerLink = styled(WheatLink)`
  font-size: 17px;
`;
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
    <MainSection>
      <ul style={{ columns: 4 }}>
        {players.map((player, index) => (
          <Player player={player} key={index} />
        ))}
      </ul>
    </MainSection>
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
      <PlayerLink to={`/players/${player.key}`}>{name}</PlayerLink>{" "}
    </li>
  );
};
export default LetterPlayerList;

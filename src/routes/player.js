import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainSection } from "../styled/MainSection";
import styled from "styled-components";
import { Table, HeaderCell, Cell } from "../styled/Table";

const Headshot = styled.img`
  height: 240px;
  width: 180px;
`;
const Player = () => {
  const params = useParams();
  const [regular, setRegular] = useState([{}]);
  const [playoff, setPlayoff] = useState([]);
  const [player, setPlayer] = useState({});
  const [renderPage, setRenderPage] = useState(true);
  const [renderImg, setRenderImg] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://winter-sky-7874.fly.dev/api/players/single?name=${params.name}&isPlayoff=false`
      )
      .then((response) => {
        setRegular(response.data.stats.reverse());
      })
      .catch((err) => {
        setRenderPage(false);
      });

    axios
      .get(
        `https://winter-sky-7874.fly.dev/api/players/single?name=${params.name}&isPlayoff=true`
      )
      .then((response) => {
        setPlayoff(response.data.stats.reverse());
      })
      .catch((err) => {
        setRenderPage(false);
      });

    axios
      .get(`https://winter-sky-7874.fly.dev/api/keytoname?key=${params.name}`)
      .then((response) => {
        setPlayer(response.data);
      });
  }, [params]);

  const imgErrorHandler = () => {
    setRenderImg(false);
  };
  return renderPage ? (
    <MainSection>
      <h1>{player.name}</h1>
      {player.headshot && renderImg ? (
        <Headshot
          alt={`headshot of ${player.name}`}
          src={player.headshot}
          onError={imgErrorHandler}
        />
      ) : null}
      {regular.length !== 0 ? <RegularSeasonTable regular={regular} /> : null}
      {playoff.length !== 0 ? <PlayoffTable playoff={playoff} /> : null}
    </MainSection>
  ) : (
    <MainSection>Coming soon...</MainSection>
  );
};

const RegularSeasonTable = ({ regular }) => {
  return (
    <div>
      <h2>Regular Season Stats</h2>
      <Table>
        <tbody>
          <tr>
            {Object.keys(regular[0]).map((key, index) => (
              <HeaderCell as="th" key={index}>
                {key}{" "}
              </HeaderCell>
            ))}
          </tr>
          {regular.map((season, index) => (
            <tr key={index}>
              {Object.keys(season).map((key, index) => (
                <Cell key={index}>{season[key]} </Cell>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
const PlayoffTable = ({ playoff }) => {
  return (
    <div>
      <h2>Playoff Stats</h2>
      <Table>
        <tbody>
          <tr>
            {Object.keys(playoff[0]).map((key, index) => (
              <HeaderCell as="th" key={index}>
                {key}{" "}
              </HeaderCell>
            ))}
          </tr>
          {playoff.map((season, index) => (
            <tr key={index}>
              {Object.keys(season).map((key, index) => (
                <Cell key={index}>{season[key]} </Cell>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Player;

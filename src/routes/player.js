import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h1>{player.name}</h1>
      {player.headshot && renderImg ? (
        <img
          alt={`headshot of ${player.name}`}
          src={player.headshot}
          onError={imgErrorHandler}
        />
      ) : null}
      {regular.length !== 0 ? <RegularSeasonTable regular={regular} /> : null}
      {playoff.length !== 0 ? <PlayoffTable playoff={playoff} /> : null}
    </div>
  ) : (
    <div>Coming soon...</div>
  );
};

const RegularSeasonTable = ({ regular }) => {
  return (
    <div>
      <h2>Regular Season Stats</h2>
      <table>
        <tbody>
          <tr>
            {Object.keys(regular[0]).map((key, index) => (
              <th key={index}>{key} </th>
            ))}
          </tr>
          {regular.map((season, index) => (
            <tr key={index}>
              {Object.keys(season).map((key, index) => (
                <td key={index}>{season[key]} </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const PlayoffTable = ({ playoff }) => {
  return (
    <div>
      <h2>Playoff Stats</h2>
      <table>
        <tbody>
          <tr>
            {Object.keys(playoff[0]).map((key, index) => (
              <th key={index}>{key} </th>
            ))}
          </tr>
          {playoff.map((season, index) => (
            <tr key={index}>
              {Object.keys(season).map((key, index) => (
                <td key={index}>{season[key]} </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Player;

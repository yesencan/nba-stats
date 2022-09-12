import axios from "axios";
import { useEffect, useState } from "react";

export const TeamStats = ({ teamId, season }) => {
  const statHeaders = [
    " ",
    "G",
    "MP",
    "FG",
    "FGA",
    "FG%",
    "3P",
    "3PA",
    "3P%",
    "2P",
    "2PA",
    "2P%",
    "FT",
    "FTA",
    "FT%",
    "ORB",
    "DRB",
    "TRB",
    "AST",
    "STL",
    "BLK",
    "TOV",
    "PF",
    "PTS",
  ];

  const [totalTeamStats, setTotalTeamStats] = useState({});
  const [perTeamStats, setPerTeamStats] = useState({});
  const [totalOppStats, setTotalOppStats] = useState({});
  const [perOppStats, setPerOppStats] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://winter-sky-7874.fly.dev/api/team-stats?team=${teamId}&season=${season}`
      )
      .then((response) => {
        setTotalTeamStats(response.data.stats[0]);
        setPerTeamStats(response.data.stats[1]);
      });
  }, [teamId, season]);

  useEffect(() => {
    axios
      .get(
        `https://winter-sky-7874.fly.dev/api/opp-stats?team=${teamId}&season=${season}`
      )
      .then((response) => {
        setTotalOppStats(response.data.stats[0]);
        setPerOppStats(response.data.stats[1]);
      });
  }, [teamId, season]);

  return (
    <>
      <h2>Team and Opponent Stats</h2>
      <table>
        <tbody>
          <tr>
            {statHeaders.map((head) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
          <tr>
            <td>Team</td>
            {Object.keys(totalTeamStats).map((key) => (
              <td key={key}>{totalTeamStats[key]}</td>
            ))}
          </tr>
          <tr>
            <td>Team/G</td>
            {Object.keys(perTeamStats).map((key) => (
              <td key={key}>{perTeamStats[key]}</td>
            ))}
          </tr>
          <tr>
            <td>Opponent</td>
            {Object.keys(totalOppStats).map((key) => (
              <td key={key}>{totalOppStats[key]}</td>
            ))}
          </tr>
          <tr>
            <td>Opponent/G</td>
            {Object.keys(perOppStats).map((key) => (
              <td key={key}>{perOppStats[key]}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};

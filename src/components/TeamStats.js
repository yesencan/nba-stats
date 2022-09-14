import axios from "axios";
import { useEffect, useState } from "react";
import { Table, HeaderCell, Cell } from "../styled/Table";

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
      <Table>
        <tbody>
          <tr>
            {statHeaders.map((head) => (
              <HeaderCell as="th" key={head}>
                {head}
              </HeaderCell>
            ))}
          </tr>
          <tr>
            <HeaderCell as="th">Team</HeaderCell>
            {Object.keys(totalTeamStats).map((key) => (
              <Cell key={key}>{totalTeamStats[key]}</Cell>
            ))}
          </tr>
          <tr>
            <HeaderCell as="th">Team/G</HeaderCell>
            {Object.keys(perTeamStats).map((key) => (
              <Cell key={key}>{perTeamStats[key]}</Cell>
            ))}
          </tr>
          <tr>
            <HeaderCell as="th">Opponent</HeaderCell>
            {Object.keys(totalOppStats).map((key) => (
              <Cell key={key}>{totalOppStats[key]}</Cell>
            ))}
          </tr>
          <tr>
            <HeaderCell as="th">Opponent/G</HeaderCell>
            {Object.keys(perOppStats).map((key) => (
              <Cell key={key}>{perOppStats[key]}</Cell>
            ))}
          </tr>
        </tbody>
      </Table>
    </>
  );
};

import { useState, useEffect } from "react";
import axios from "axios";
import { Table, HeaderCell, Cell } from "../styled/Table";

export const MiscStats = ({ teamId, season }) => {
  const keys = {
    W: "W",
    L: "L",
    PW: "PW",
    PL: "PL",
    MOV: "MOV",
    SOS: "SOS",
    SRS: "SRS",
    ORtg: "ORtg",
    DRtg: "DRtg",
    PACE: "Pace",
    FTr: "FTr",
    "3PAr": "3PAr",
    "eFG%": "eFG%",
    "TOV%": "TOV%",
    "ORB%": "ORB%",
    "FT/FGA": "FT/FGA",
    "eFG%_1": "eFG%",
    "TOV%_1": "TOV%",
    "FT/FGA_1": "FT/FGA",
    "DRB%": "DRB%",
    ARENA: "Arena",
    ATTENDANCE: "Attendance",
  };

  const [stats, setStats] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://winter-sky-7874.fly.dev/api/misc-stats?team=${teamId}&season=${season}`
      )
      .then((response) => {
        setStats(response.data.stats[0]);
      });
  }, [teamId, season]);

  return (
    <div>
      <h2>Team Misc Stats</h2>
      <Table>
        <tbody>
          <tr>
            <HeaderCell as="th" colSpan={11}></HeaderCell>
            <HeaderCell as="th" colSpan={2}>
              Advanced
            </HeaderCell>
            <HeaderCell as="th" colSpan={4}>
              Offense Four Factors
            </HeaderCell>
            <HeaderCell as="th" colSpan={4}>
              Defense Four Factors
            </HeaderCell>
            <HeaderCell as="th" colSpan={2}></HeaderCell>
          </tr>
          <tr>
            <HeaderCell as="th" scope="col">
              {" "}
            </HeaderCell>
            {Object.keys(keys).map((key) => (
              <HeaderCell as="th" key={key}>
                {keys[key]}
              </HeaderCell>
            ))}
          </tr>
          <tr>
            <HeaderCell as="th">Team</HeaderCell>
            {Object.keys(keys).map((key) => (
              <Cell key={key}>{stats[key]}</Cell>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

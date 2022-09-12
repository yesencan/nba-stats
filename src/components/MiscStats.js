import { useState, useEffect } from "react";
import axios from "axios";

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
      <table>
        <tbody>
          <tr>
            <th colSpan={11}></th>
            <th colSpan={2}>Advanced</th>
            <th colSpan={4}>Offense Four Factors</th>
            <th colSpan={4}>Defense Four Factors</th>
          </tr>
          <tr>
            <th scope="col"> </th>
            {Object.keys(keys).map((key) => (
              <th key={key}>{keys[key]}</th>
            ))}
          </tr>
          <tr>
            <td>Team</td>
            {Object.keys(keys).map((key) => (
              <td key={key}>{stats[key]}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

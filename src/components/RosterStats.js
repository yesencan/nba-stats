import { useEffect, useState } from "react";
import axios from "axios";

export const RosterStats = ({ teamId, season, type }) => {
  const titles = {
    per_game: "Per Game",
    advanced: "Advanced",
    total: "Totals",
  };
  const [stats, setStats] = useState([{}]);

  useEffect(() => {
    axios
      .get(
        `https://winter-sky-7874.fly.dev/api/roster-stats?team=${teamId}&season=${season}&type=${type}`
      )
      .then((response) => {
        setStats(response.data.stats);
      });
  }, [teamId, season, type]);

  return (
    <div>
      <h2>{titles[type]}</h2>
      <table>
        <tbody>
          <tr key={0}>
            {Object.keys(stats[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
          {stats.map((line, index) => (
            <tr key={index}>
              {Object.keys(line).map((key, index) => (
                <td key={index}>{line[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

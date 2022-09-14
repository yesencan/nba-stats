import { useEffect, useState } from "react";
import axios from "axios";
import { Table, HeaderCell, Cell } from "../styled/Table";
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
      <Table>
        <tbody>
          <tr key={0}>
            {Object.keys(stats[0]).map((key) => (
              <HeaderCell as="th" key={key}>
                {key}
              </HeaderCell>
            ))}
          </tr>
          {stats.map((line, index) => (
            <tr key={index}>
              {Object.keys(line).map((key, index) => (
                <Cell key={index}>{line[key]}</Cell>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

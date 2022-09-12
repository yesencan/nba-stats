import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Teams = () => {
  const [teams, setTeams] = useState([{}]);
  useEffect(() => {
    axios
      .get(`https://winter-sky-7874.fly.dev/api/teamtablerow`)
      .then((response) => {
        setTeams(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Active Franchises</h1>
      <table>
        <tbody>
          <tr>
            {Object.keys(teams[0]).map((key, index) =>
              key !== "key" ? <th key={index}>{key}</th> : null
            )}
          </tr>
          {teams.map((team, indext) => (
            <tr key={indext}>
              {
                // eslint-disable-next-line array-callback-return
                Object.keys(team).map((key, index) => {
                  switch (key) {
                    case "Franchise":
                      return (
                        <td key={index}>
                          <Link to={`/teams/${team.key}`}>{team[key]}</Link>
                        </td>
                      );
                    case "key":
                      break;
                    default:
                      return <td key={index}>{team[key]}</td>;
                  }
                })
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;

import axios from "axios";
import { useEffect, useState } from "react";
import { Table, HeaderCell, Cell } from "../styled/Table";
import { MainSection } from "../styled/MainSection";
import { WheatLink } from "../styled/WheatLink";
const Teams = () => {
  const [teams, setTeams] = useState([{}]);
  useEffect(() => {
    axios
      .get(`https://winter-sky-7874.fly.dev/api/teamTablerow`)
      .then((response) => {
        setTeams(response.data);
      });
  }, []);

  return (
    <MainSection>
      <h1>Active Franchises</h1>
      <Table>
        <tbody>
          <tr>
            {Object.keys(teams[0]).map((key, index) =>
              key !== "key" ? (
                <HeaderCell as="th" key={index}>
                  {key}
                </HeaderCell>
              ) : null
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
                        <Cell key={index}>
                          <WheatLink to={`/teams/${team.key}`}>
                            {team[key]}
                          </WheatLink>
                        </Cell>
                      );
                    case "key":
                      break;
                    default:
                      return <Cell key={index}>{team[key]}</Cell>;
                  }
                })
              }
            </tr>
          ))}
        </tbody>
      </Table>
    </MainSection>
  );
};

export default Teams;

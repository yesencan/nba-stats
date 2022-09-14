import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table, HeaderCell, Cell } from "../styled/Table";
import { WheatLink } from "../styled/WheatLink";
const Years = () => {
  const params = useParams();
  const [years, setYears] = useState([]);
  const headers = ["SEASON", "W", "L", "SRS", "PACE", "ORtg", "DRtg"];
  useEffect(() => {
    axios
      .get(
        `https://winter-sky-7874.fly.dev/api/misc-stats?team=${params.teamId}`
      )
      .then((response) => {
        setYears(response.data.sort((a, b) => b.year - a.year));
      });
  }, [params]);

  return (
    <div>
      <h2>{years.length} Seasons Available</h2>
      <Table>
        <tbody>
          <tr>
            {headers.map((header, index) => (
              <HeaderCell as="th" key={index}>
                {header}
              </HeaderCell>
            ))}
          </tr>
          {years.map((year, index) => (
            <tr key={index}>
              {headers.map((header, index) =>
                header === "SEASON" ? (
                  <Cell key={index}>
                    <WheatLink to={`/teams/${params.teamId}/${year.year}`}>
                      {year.stats[0][header]}
                    </WheatLink>{" "}
                  </Cell>
                ) : (
                  <Cell key={index}>{year.stats[0][header]}</Cell>
                )
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Years;

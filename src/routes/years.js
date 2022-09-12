import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
      <table>
        <tbody>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
          {years.map((year, index) => (
            <tr key={index}>
              {headers.map((header, index) =>
                header === "SEASON" ? (
                  <td key={index}>
                    <Link to={`/teams/${params.teamId}/${year.year}/main`}>
                      {year.stats[0][header]}
                    </Link>{" "}
                  </td>
                ) : (
                  <td key={index}>{year.stats[0][header]}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Years;

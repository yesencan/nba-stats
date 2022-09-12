import { Link } from "react-router-dom";

export const StandingTable = ({ teams, id, tdStyle }) => {
  return (
    <ul>
      {Object.keys(teams).map((key) => (
        <li key={key}>
          <Link to={`teams/${key}/2023/main`}>{teams[key]}</Link>{" "}
        </li>
      ))}
    </ul>
  );
};

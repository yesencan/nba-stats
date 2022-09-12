import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { teams } from "../utils/team_list";
const TeamGeneral = () => {
  const params = useParams();
  const unteams = { ...teams.east, ...teams.west };
  return (
    <div>
      <h1>{unteams[params.teamId]}</h1>
      <nav>
        <Link to={"./"}>Franchise Index</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default TeamGeneral;

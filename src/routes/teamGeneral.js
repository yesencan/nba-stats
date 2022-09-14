import { Outlet, useParams } from "react-router-dom";
import { teams } from "../utils/team_list";
import { MainSection } from "../styled/MainSection";
const TeamGeneral = () => {
  const params = useParams();
  const unteams = { ...teams.east, ...teams.west };
  return (
    <MainSection>
      <h1>{unteams[params.teamId]}</h1>
      <Outlet />
    </MainSection>
  );
};

export default TeamGeneral;

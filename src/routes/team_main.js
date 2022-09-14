import { useParams } from "react-router-dom";
import Roster from "../components/Roster";
import { TeamStats } from "../components/TeamStats";
import { MiscStats } from "../components/MiscStats";
import { RosterStats } from "../components/RosterStats";
import { Link } from "react-router-dom";
import { Button } from "../styled/Button";
import styled from "styled-components";
const CustomButton = styled(Button)`
  border: 1px solid;
  background-color: wheat;
  color: rgb(45, 45, 45);
  border-radius: 8px;
`;
const Team = () => {
  const params = useParams();

  return (
    <div>
      <nav>
        <CustomButton as={Link} to={"../"}>
          Back to Franchise Index
        </CustomButton>
      </nav>
      <Roster teamId={params.teamId} season={params.season} />
      {params.season !== "2023" ? (
        <>
          <TeamStats teamId={params.teamId} season={params.season} />
          <MiscStats teamId={params.teamId} season={params.season} />
          <RosterStats
            teamId={params.teamId}
            season={params.season}
            type={"per_game"}
          />
          <RosterStats
            teamId={params.teamId}
            season={params.season}
            type={"total"}
          />
          <RosterStats
            teamId={params.teamId}
            season={params.season}
            type={"advanced"}
          />
        </>
      ) : null}
    </div>
  );
};

export default Team;

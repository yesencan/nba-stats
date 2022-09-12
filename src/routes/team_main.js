import { useParams } from "react-router-dom";
import Roster from "../components/Roster";
import { TeamStats } from "../components/TeamStats";
import { MiscStats } from "../components/MiscStats";
import { RosterStats } from "../components/RosterStats";
const Team = () => {
  const params = useParams();

  return (
    <div>
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

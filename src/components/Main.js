import { StandingTable } from "./Standings";
import { teams } from "../utils/team_list";
import { Link } from "react-router-dom";
import { RandomPlayers } from "./RandomPlayers";
const Main = () => {
  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <div>
        <h2>
          <Link to="/teams">Teams</Link>{" "}
        </h2>
        <div style={{ display: "flex", gap: "50px" }}>
          <StandingTable teams={teams.east} id="east" />
          <StandingTable teams={teams.west} id="west" />
        </div>
      </div>
      <div>
        <h2>
          <Link to="/players/list">Players</Link>{" "}
        </h2>
        <RandomPlayers />
      </div>
    </div>
  );
};

export default Main;

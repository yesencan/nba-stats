import { TeamList } from "./TeamList";
import { teams } from "../utils/team_list";
import { RandomPlayers } from "./RandomPlayers";
import { MainSection } from "../styled/MainSection";
import { WheatLink } from "../styled/WheatLink";
const Main = () => {
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <MainSection>
        <h2>
          <WheatLink to="/teams">Teams</WheatLink>{" "}
        </h2>
        <div style={{ display: "flex" }}>
          <TeamList teams={teams.east} id="east" />
          <TeamList right teams={teams.west} id="west" />
        </div>
      </MainSection>

      <MainSection>
        <h2>
          <WheatLink to="/players/list">Players</WheatLink>{" "}
        </h2>
        <RandomPlayers />
      </MainSection>
    </div>
  );
};

export default Main;

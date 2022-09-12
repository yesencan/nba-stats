import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Teams from "./routes/teams";
import TeamGeneral from "./routes/teamGeneral";
import TeamMain from "./routes/team_main";
import Years from "./routes/years";
import Player from "./routes/player";
import Main from "./components/Main";
import LetterPlayerList from "./routes/letter_player_list";
import MainPlayerList from "./routes/main_player_list";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Main />} />
        <Route path="teams" element={<Teams />} />
        <Route path="teams/:teamId" element={<TeamGeneral />}>
          <Route index element={<Years />} />
          <Route path=":season/main" element={<TeamMain />} />
        </Route>
        <Route path="players/list" element={<MainPlayerList />} />
        <Route path="players/list/:letter" element={<LetterPlayerList />} />
        <Route path="players/:name" element={<Player />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

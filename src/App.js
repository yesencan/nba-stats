import { Link, Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | {}
        <Link to="/teams">Teams</Link> | {}
        <Link to="/players/list">Players</Link>
        <Outlet />
      </nav>
    </div>
  );
};

export default App;

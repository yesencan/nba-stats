import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
const StyledApp = styled.div`
  padding: 30px 60px;
  background-color: #999999;
`;

const Header = styled.div`
  background-color: rgb(45, 45, 45);
  padding: 16px 16px;
`;

const TitleLink = styled(Link)`
  color: wheat;
  font-size: 28px;
  margin: 20px 80px;
  font-family: "Montserrat";
  font-weight: 900;
  text-decoration: none;
`;
const App = () => {
  return (
    <div>
      <Header>
        <TitleLink to="/">NBA-Stats</TitleLink>{" "}
      </Header>
      <StyledApp>
        <Outlet />
      </StyledApp>
    </div>
  );
};

export default App;

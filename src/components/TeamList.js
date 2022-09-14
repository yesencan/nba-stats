import { Link } from "react-router-dom";
import { Button } from "../styled/Button";
import styled from "styled-components";
const List = styled.div`
  padding: 18px;
`;
export const TeamList = ({ teams, id, right }) => {
  return (
    <List>
      {Object.keys(teams).map((key) => (
        <Button as={Link} key={key} to={`teams/${key}/`}>
          {teams[key]}
        </Button>
      ))}
    </List>
  );
};

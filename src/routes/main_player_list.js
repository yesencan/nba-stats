import { getNames } from "../utils/name_list";
import { useState, useEffect } from "react";
import axios from "axios";
import { MainSection } from "../styled/MainSection";
import { WheatLink } from "../styled/WheatLink";
const MainPlayerList = () => {
  const names = getNames();
  return (
    <MainSection>
      {Object.keys(names).map((key, index) => (
        <div key={index}>
          <h2>
            <WheatLink to={`/players/list/${key}`}>{key}</WheatLink>{" "}
          </h2>
          {names[key].map((name, index) => (
            <Name nameKey={name} key={index} />
          ))}
          ...
        </div>
      ))}
    </MainSection>
  );
};

const Name = ({ nameKey }) => {
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .get(`https://winter-sky-7874.fly.dev/api/keytoname?key=${nameKey}`)
      .then((response) => {
        setName(response.data.name);
      });
  }, [nameKey]);
  return (
    <span>
      <WheatLink to={`/players/${nameKey}`}>{name}</WheatLink>,{" "}
    </span>
  );
};
export default MainPlayerList;

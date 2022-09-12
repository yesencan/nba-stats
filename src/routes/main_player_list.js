import { getNames } from "../utils/name_list";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const MainPlayerList = () => {
  const names = getNames();
  return (
    <div>
      {Object.keys(names).map((key, index) => (
        <div key={index}>
          <h2>
            <Link to={`/players/list/${key}`}>{key}</Link>{" "}
          </h2>
          {names[key].map((name, index) => (
            <Name nameKey={name} key={index} />
          ))}
          ...
        </div>
      ))}
    </div>
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
      <Link to={`/players/${nameKey}`}>{name}</Link>,{" "}
    </span>
  );
};
export default MainPlayerList;

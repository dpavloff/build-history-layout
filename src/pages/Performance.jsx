import { Link } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";
import cog from "../static/images/cog.svg";
import YandexButton from "../components/YandexButton";
import { useState } from "react";

const PerformanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  justify-self: center;
`;

function Performance() {
  const [stats, setStats] = useState({});
  return (
    <PerformanceContainer>
      <Header title={"School CI server"} titleColor={"#7F8285"}>
        <Link to="/settings">
          <YandexButton
            label="Settings"
            isSettings={true}
            isGray={true}
            icon={cog}
          />
        </Link>
      </Header>
      <p>All performance stats will be shown here</p>
    </PerformanceContainer>
  );
}

export default Performance;

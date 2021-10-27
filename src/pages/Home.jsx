import "../styles/home.css";

import YandexButton from "../components/YandexButton";
import Header from "../components/Header";
import instruments from "../static/images/instruments.svg";
import cog from "../static/images/cog.svg";
import clock from "../static/images/clock.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeButtons = styled.div`
  display: flex;
  width: 15vw;
  justify-content: space-around;
`

function Home() {
  return (
    <div className="history-page">
      <Header title={"School CI server"} titleColor={"#7F8285"}>
        <HomeButtons>
          <Link to="/settings">
            <YandexButton
              label="Settings"
              isSettings={true}
              isGray={true}
              icon={cog}
            />
          </Link>
          <Link to="/stats">
            <YandexButton
              label={"Статистика"}
              isSettings={true}
              isGray={true}
              icon={clock}
            />
          </Link>
        </HomeButtons>
      </Header>
      <div className="history-content">
        <img src={instruments} alt="logo" />
        <p>Configure repository connection and synchronization settings</p>
        <Link to="/settings">
          <YandexButton label="Open settings" />
        </Link>
      </div>
    </div>
  );
}

export default Home;

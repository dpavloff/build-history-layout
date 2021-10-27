import "../styles/home.css";
import YandexButton from "../components/YandexButton";
import Header from "../components/Header";

import instruments from "../static/images/instruments.svg";
import cog from "../static/images/cog.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="history-page">
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

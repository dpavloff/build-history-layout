import "../styles/home.css";
import YandexButton from "../components/YandexButton";

import instruments from "../static/images/instruments.svg";
import cog from "../static/images/cog.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="history-page">
      <header className="history-header">
        <h2>School CI server</h2>
        <Link to="/settings">
          <YandexButton label={"Settings"} isGray={true} icon={cog} />
        </Link>
      </header>
      <div className="history-content">
        <img src={instruments} alt="logo" />
        <p>Configure repository connection and synchronization settings</p>
        <Link to="/settings">
          <YandexButton label={"Open settings"} />
        </Link>
      </div>
    </div>
  );
}

export default Home;

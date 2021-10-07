import "../styles/home.css";
import YandexButton from "../components/YandexButton";

import instruments from "../static/images/instruments.svg";
import cog from "../static/images/cog.svg";

function Home() {
  return (
    <div className="history-page">
      <header className="history-header">
        <h2>School CI server</h2>
        <YandexButton label={"Settings"} icon={cog} />
      </header>
      <div className="history-content">
        <img src={instruments} alt="logo" />
        <p>Configure repository connection and synchronization settings</p>
        <YandexButton label={"Open settings"} />
      </div>
    </div>
  );
}

export default Home;

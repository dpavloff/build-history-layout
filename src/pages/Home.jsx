import "../styles/home.css";
import instruments from "../static/images/instruments.svg";

function Home() {
  return (
    <div className="history-page">
      <header className="history-header">
        <h2>School CI server</h2>
        <button>Settings</button>
      </header>
      <div className="history-content">
        <img src={instruments} alt="logo" />
        <p>Configure repository connection and synchronization settings</p>
        <button>Open settings</button>
      </div>
    </div>
  );
}

export default Home;

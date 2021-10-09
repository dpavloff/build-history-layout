import { Link } from 'react-router-dom';
import '../styles/settings.css';
import YandexButton from '../components/YandexButton';

// Redux works here ->

function Settings() {
  return (
    <form className="settings-form">
      <header className="settings-header">
        <h1>School CI server</h1>
      </header>
      <div className="settings-info">
        <h3>Settings</h3>
        <p className="text-gray">Configure repository connection and synchronization settings.</p>
      </div>
      <label htmlFor="git-repo">GitHub repository <span className="asterisk"> *</span></label>
      <input type="text" name="git-repo" placeholder="user-name/repo-name" required />

      <label htmlFor="build-command">Build command <span className="asterisk"> *</span></label>
      <input type="text" name="build-command" required />
      
      <label htmlFor="branch">Main branch</label>
      <input type="text" name="branch" required />
      <div>
        <span>Synchronize every </span> <input type="number" name="sync-min" id="sync-min" /><span> minutes</span>
      </div>
      <div className="buttons">
        <YandexButton label={"Save"} />
        <Link to="/home">
          <YandexButton label={"Cancel"} isGray="true" />
        </Link>
      </div>
    </form>
  );
}

export default Settings;

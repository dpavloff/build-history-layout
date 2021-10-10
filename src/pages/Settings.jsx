import '../styles/settings.css';
import Form from '../components/Form'
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
      <Form />
    </form>
  );
}

export default Settings;

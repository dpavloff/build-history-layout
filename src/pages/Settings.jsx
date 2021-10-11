import '../styles/settings.css';
import Form from '../components/Form'

function Settings() {
  return (
    <div className="settings-form">
      <header className="settings-header">
        <h1>School CI server</h1>
      </header>
      <div className="settings-info">
        <h3>Settings</h3>
        <p className="text-gray">Configure repository connection and synchronization settings.</p>
      </div>
      <Form />
    </div>
  );
}

export default Settings;

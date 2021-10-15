import '../styles/settings.css';
import Form from '../components/Form'
import Header from '../components/Header';

function Settings() {
  return (
    <div className="settings-form">
      <header className="text-gray">
      <Header title={"School CI server"} titleColor={"#7F8285"} />
      </header>
      <div className="settings-info">
        <p className='description'>Settings</p>
        <p className="text-gray">Configure repository connection and synchronization settings.</p>
      </div>
      <Form />
    </div>
  );
}

export default Settings;

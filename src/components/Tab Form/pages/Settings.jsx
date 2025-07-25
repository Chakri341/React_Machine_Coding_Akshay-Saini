
import './../TabForm.css';


const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, theme: e.target.name }));
  };

  return (
    <div className="settings-container">
      <div className="input-item">
        <input
          type="radio"
          name="Light"
          id="Light"
          checked={theme === "Light"}
          onChange={handleChange}
        />
        <label htmlFor="Light">Light</label>
      </div>
      <div className="input-item">
        <input
          type="radio"
          name="Dark"
          id="Dark"
          checked={theme === "Dark"}
          onChange={handleChange}
        />
        <label htmlFor="Dark">Dark</label>
      </div>
    </div>
  );
};

export default Settings;

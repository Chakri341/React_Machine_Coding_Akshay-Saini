import './../TabForm.css'

const Profile = ({ data, setData, errors }) => {
  const { name, age, email } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("handleChange", name, value);
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="profile-container">
      <form action="" method="">
        <div className="input-item">
          <label htmlFor="name">Name :</label>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>
        </div>

        <div className="input-item">
          <label htmlFor="age">Age :</label>
          <div className="">
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={handleChange}
            />
            {errors.age && <p className="error-text">{errors.age}</p>}
          </div>
        </div>

        <div className="input-item">
          <label htmlFor="email">Email :</label>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;

import React from "react";
import './../TabForm.css'


const Intrests = ({ data, setData, errors }) => {
  const { intrests } = data;

  const handleChange = (e) => {
    if (intrests.includes(e.target.name)) {
      setData((prev) => ({
        ...prev,
        intrests: prev.intrests.filter((item) => item !== e.target.name),
      }));
    } else {
      setData((prev) => ({
        ...prev,
        intrests: [...prev.intrests, e.target.name],
      }));
    }
  };

  // const handleChange1 = (e) => {
  //   const { name } = e.target;

  //   setData((prev) => {
  //     const updatedIntrests = prev.intrests.includes(name)
  //       ? prev.intrests.filter((item) => item !== name)
  //       : [...prev.intrests, name];

  //     return {
  //       ...prev,
  //       intrests: updatedIntrests,
  //     };
  //   });
  // };

  return (
    <div className="intrest-container">
      <div className="input-item">
        <input
          type="checkbox"
          name="circket"
          id="circket"
          checked={intrests.includes("circket")}
          onChange={handleChange}
        />
        <label htmlFor="name">Circket</label>
      </div>
      <div className="input-item">
        <input
          type="checkbox"
          name="javascript"
          id="javascript"
          checked={intrests.includes("javascript")}
          onChange={handleChange}
        />
        <label htmlFor="name">Javascript</label>
      </div>
      <div className="input-item">
        <input
          type="checkbox"
          name="callofduty"
          id="callofduty"
          checked={intrests.includes("callofduty")}
          onChange={handleChange}
        />
        <label htmlFor="name">Call of Duty</label>
      </div>
      {errors.intrests && <p className="error-text">{errors.intrests}</p>}
    </div>
  );
};

export default Intrests;

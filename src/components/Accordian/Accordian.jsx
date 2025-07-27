import React, { useState } from 'react'
import './Accordian.css'
import { accordionData } from './accordian-data';

const Accordian = () =>{
  const [selectedAccodian, setSelectedAccodian] = useState(null);

  const handleSelectAccodian = (id) => {
    console.log("selected id : ", id);
    setSelectedAccodian(selectedAccodian === id ? null : id);
  };

  return (
    <div className="accodian-container">
      <div className="accod-header">
        <h1>Accordian</h1>
      </div>
      <div className="accod-main-container">
        {accordionData.map((item) => {
          return (
            <div
              className="accod-item"
              key={item.id}
              onClick={() => handleSelectAccodian(item.id)}
            >
              <div
                className={
                  selectedAccodian === item.id
                    ? "accod-main-content  selected-accod"
                    : "accod-main-content"
                }
              >
                <h3>{item.title}</h3>
                <span
                  className={`accod-arrow ${
                    selectedAccodian === item.id ? "rotate" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
              {selectedAccodian === item.id && (
                <div className="accod-sub-content">
                  <h5>{item.content}</h5>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Accordian;
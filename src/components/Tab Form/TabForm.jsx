import { useState } from "react";
import Modal from "./utils/Modal";
import {tabsList} from "./utils/tabsList";

export default function TabForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  const [data, setData] = useState({
    name: "chakri",
    age: 25,
    email: "abc@gmail.com",
    intrests: ["circket", "javascript"],
    theme: "Light",
  });
  const SelectedTab = tabsList[activeTab].component;

  const handleSubmit = () => {
    console.log("Form submitted successfully! ", data);
    setShowModal(true);
  };

  const validateTab = () => {
    const tabName = tabsList[activeTab].name;
    const newErrors = {};

    if (tabName === "Profile") {
      if (!data.name.trim()) newErrors.name = "Name is required";
      if (!data.age) newErrors.age = "Age is required";
      if (!data.email.trim()) newErrors.email = "Email is required";
    }

    if (tabName === "Intrests") {
      if (!data.intrests || data.intrests.length === 0) {
        newErrors.intrests = "Please select at least one interest";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="tab-home-container">
      <h1>Tab Form</h1>
      <div className="tabs-list">
        {tabsList.map((item, index) => {
          return (
            <button
              key={item.id}
              className={
                activeTab === index ? "tab-item  selected" : "tab-item"
              }
              onClick={() => {
                if (validateTab()) {
                  setActiveTab(index);
                }
              }}
            >
              <p>{item.name}</p>
            </button>
          );
        })}
      </div>
      <div className="tab-container">
        {<SelectedTab data={data} setData={setData} errors={errors} />}
      </div>
      <div className="buttons-conatiner">
        <button
          className="btn"
          onClick={() => {
            if (validateTab()) {
              setActiveTab(
                (prev) => (prev + tabsList.length - 1) % tabsList.length
              );
            }
          }}
        >
          Prev
        </button>
        {activeTab === tabsList.length - 1 && (
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        )}
        <button
          className="btn"
          onClick={() => {
            if (validateTab()) {
              setActiveTab((prev) => (prev + 1) % tabsList.length);
            }
          }}
        >
          Next
        </button>
      </div>

      {showModal && (
        <Modal
          message="Form submitted successfully!"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

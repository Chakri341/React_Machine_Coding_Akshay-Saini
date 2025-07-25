import React from "react";
import { projectsList } from "../../utils/projectsList";
import { Link } from "react-router-dom";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">📁 Projects List</h1>
      <div className="project-list">
        {projectsList.map((item) => (
          <Link to={`/${item.Link}`} key={item.id} className="project-card">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;

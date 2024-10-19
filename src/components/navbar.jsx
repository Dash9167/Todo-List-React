import React from "react";
import './style/navbar.css'

const Navbar = () => {
  return (
    <div className="nav">
      <div className="todo">
        <h2>
          To<span>Do</span>
        </h2>
      </div>
      <div className="menu">
        <ul>
            <li>Home</li>
            <li>Task</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

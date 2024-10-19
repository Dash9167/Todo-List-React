import React from "react";

const Listitem = ({ name, key, ondelete, onedit }) => {

  return (
    <div className="list-item">
      <h2>
        <i className="fa-solid fa-list-check"></i> {name}
      </h2>
      <div className="list-button">
        <button >
          {" "}
          <i className="fa-solid fa-trash"></i>
        </button>
        <button >
          {" "}
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
    </div>
  );
};

export default Listitem;

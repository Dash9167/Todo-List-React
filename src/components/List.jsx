import React, {  } from "react";
import "./style/list.css";

const List = ({ arraytask, ondelete, onedit, handleComplete }) => {
 // const [isComplete, setIsComplete] = useState(false);
 



  return (
    <div className="List">
      {arraytask.map((task, index) => (
        <div className={task.complete?"list-item bg-color":"list-item"} key={index} >
          <h2 key={index}>
            {task.complete ? (
              <i className={"fa-solid fa-check "}></i>
            ) : (
              <i
                className="fa-solid fa-list-check"
                onClick={() =>handleComplete(index)}
              ></i>
            )}

            {task.name}
          </h2>
          <div className="list-button">
            <button onClick={() => ondelete(index)}>
              <i className="fa-solid fa-trash"></i>
            </button>
            <button onClick={() => onedit(index)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;

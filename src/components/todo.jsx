import React, { useState, useEffect } from "react";
import "./style/todo.css";

const Todo = ({ task, Text, inputTextValue, btn, updatevalue }) => {
  const [newtask, setnewtask] = useState("");
 

  useEffect(() => {
    if (Text) {
      setnewtask(inputTextValue);
     
    } else {
      setnewtask("");
    }
  }, [Text, inputTextValue]);

  const Upadtetask = () => {
    btn(false);
    if (newtask !== "") {
      task(newtask);
      setnewtask("");
    
      updatevalue(newtask);
    }
  };
  const addtask = () => {
    if (newtask !== "") {
      task(newtask);
      setnewtask("");
    }
  };
  return (
    <div className="content">
      <div className="conatiner">
        <input
          type="text"
          placeholder="Enter a Task for Day"
          value={newtask}
          onChange={(e) => setnewtask(e.target.value)}
        />
        {Text ? (
          <button type="submit" onClick={Upadtetask}>
            Update
          </button>
        ) : (
          <button type="submit" onClick={addtask}>
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;

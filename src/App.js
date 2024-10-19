import React, { useState,useEffect } from "react";

import "./App.css";
import List from "./components/List";
import Navbar from "./components/navbar";
import Todo from "./components/todo";

function App() {
  const [task, settask] = useState(()=>{
    const SavedTask=localStorage.getItem("todo-tasks");
    return SavedTask?JSON.parse(SavedTask):[]
  });
  const [text, settext] = useState(false);
  // const [newtask, setNewtask] = useState("");

  const [value, setValue] = useState("");
  const [update, setUpdate] = useState("");

  useEffect(() => {
   localStorage.setItem("todo-tasks",JSON.stringify(task));
  }, [task])
  

  const addtask = (newtask) => {
    const Taskvalue = { name: newtask, complete: false };
    settask((e) => [...e, Taskvalue]);
  };
  const handledelete = (index) => {
    const newItems = task.filter((item, i) => i !== index);
    settask(newItems);
  };

  const handleEdit = (index) => {
    settext(true);
    const taskvalue = task.filter((items) => items.id === index);

    if (taskvalue) {
      setValue(task[index].name);
    }
    handleUpdate(index);
  };
  const handleUpdate = (index) => {
    const updatedTasks = task.map((prev) => prev.id === index);
    if (updatedTasks) {
      console.log(handleUpdate);
      task[index].name = update;
    }
    const newItems = task.filter((item, i) => i !== index);
    settask(newItems);
  };
  const handlebtn = (setbtn) => {
    settext(setbtn);
  };
  const handleUpdatevalue = (newValue) => {
    setUpdate(newValue);
    return update;
  };
  const handleComplete = (index) => {
    const completing = task.map((tasks, i) => {
      if (i === index) {
        return { ...tasks, complete: true };
      }
      return tasks;
    });

    settask(completing);
  };

  return (
    <>
      <Navbar />
      <Todo
        task={addtask}
        Text={text}
        btn={handlebtn}
        inputTextValue={value}
        updatevalue={handleUpdatevalue}
      />
      <List
        arraytask={task}
        handleComplete={handleComplete}
        ondelete={handledelete}
        onedit={handleEdit}
      />
    </>
  );
}

export default App;

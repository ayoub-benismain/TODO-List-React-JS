import "./App.css";
import { useRef, useState } from 'react';

export default function App() {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef();

  function HandleAddToDo() {
    const textValue = inputRef.current.value;
    if (textValue.trim() !== ""){
      setTodo([...todo, textValue]);
      inputRef.current.value = "";
    }
    
  }

  // chatgpt hedhi
  function handleRemoveTask(taskToRemove) {
    setTodo(todo.filter(task => task !== taskToRemove));
  }
  //

  return (
    <>
      <h1 className={"title"}>TO-DO <span>List</span></h1>
      <div className={"head"}>
        <input placeholder="Your task ..." className={"inputTask"} ref={inputRef} />
        <button className={"button"} onClick={HandleAddToDo}>Add Task</button>
      </div>
      <div className={"tasks"}>
        <ul>
          {todo.map((task, index) => {
            return (
              <li key={index}>
                {task}
                <img
                  src={"remove.png"}
                  alt="Remove"
                  className={"image"}
                  onClick={() => handleRemoveTask(task)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

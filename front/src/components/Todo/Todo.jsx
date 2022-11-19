import React, { useEffect, useState } from "react";
import "./todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([
    { text: "123", id: 1, isComplete: false },
    { text: "2222222222222", id: 10, isComplete: false },
  ]);
  const [text, setText] = useState("");

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (text === "") return;

    setTodos([...todos, { text: text, id: Math.random() }]);
  };

  const handleDelete = (id) => {
    const newData = todos.filter((item) => item.id !== id);
    setTodos(newData);
  };

  const handleFinish = (item) => {
    const newData = todos.map((todo) => {
      if (todo.id === item.id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });

    setTodos(newData);
  };

  // useEffect(() => {
  //   console.log("render");
  // }, [todos.length]);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="todo">
      {/* <button onClick={handleOpen}>Open</button> */}

      <form className="todo-form">
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit" onClick={handleClick}>
          Добавить
        </button>
      </form>
      <div className="todo-list">
        {todos.map((item, index) => (
          <div key={index} className={`${item.isComplete ? "disabled" : ""}`}>
            <span className={`${item.isComplete ? "text finish" : "text"}`}>
              {item.text}
            </span>
            <div className="todo-list-btn">
              <button onClick={() => handleDelete(item.id)}>&times;</button>
              <button onClick={() => handleFinish(item)}>Finish</button>
            </div>
          </div>
        ))}
      </div>

      {/* <div className={`list ${open ? "active" : ""}`}>List</div> */}

      {/* //Условный рендеринг 1-вариант*/}
      {/* {open && <div>List</div>} */}

      {/* //Условный рендеринг 2-вариант*/}
      {/* {open ? <div>List</div> : ""} */}
    </div>
  );
};

export default Todo;

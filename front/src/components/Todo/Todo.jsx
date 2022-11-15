import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    { text: "123", id: 1, isComplete: false },
    { text: "2222222222222", id: 10, isComplete: false },
  ]);
  const [text, setText] = useState("");

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

  const handleFinish = (id) => {
    console.log(id);

    // const newData = todos.map((item) => ({
    //   ...item,
    //   isComplete: item.id === id && !item.isComplete,
    // }));
    const newData = [
      ...todos.map((item) => {
        if (item.id === id) {
          return { ...item, isComplete: !item.isComplete };
        } else {
          return { ...item };
        }
      }),
    ];

    console.log(newData);

    // setTodos(newData);
  };

  useEffect(() => {
    console.log("render");
  }, [todos.length]);

  return (
    <div className="todo">
      <form>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit" onClick={handleClick}>
          Добавить
        </button>
      </form>
      <div>
        {todos.map((item, index) => (
          <p
            key={index}
            className={`${item.isComplete ? "text finish" : "text"}`}
          >
            {item.text}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleFinish(item.id)}>Finish</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Todo;

/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles/todoform.css";
const TodoForm = ({ setTodoList, todoList }) => {
  const [input, setInput] = useState("");

  const addTask = () => {
    const newTodo = {
      id: new Date().getTime(),
      todo: input,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    setInput("");
    localStorage.setItem("todoList", JSON.stringify(todoList));
  };
  return (
    <div className="todo__form">
      <input
        autoSave="false"
        type="text"
        className="user__input"
        placeholder="Washing plates"
        onInput={(e) => setInput(e.target.value)}
      />

      <button
        disabled={!input}
        className="todo__add__btn"
        onClick={() => addTask()}
      >
        <img src="/add.png" alt="add" />
      </button>
    </div>
  );
};

export default TodoForm;

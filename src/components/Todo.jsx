/* eslint-disable react/prop-types */

import { useState } from "react";
import "../App.css";
import "./styles/todo.css";
const Todo = ({ todo, isComplete, deleteTodo, id, toggle, setTodoList }) => {
  const [editTodo, setEditTodo] = useState(todo);
  const [edit, setEdit] = useState(false);

  function handleEdit(id) {
    setEdit((prev) => !prev);
    console.log(id);
    // setTodoList(prevTodo => prevTodo.map((todo) =>( )     ))
    setTodoList((prevTodo) => {
      return prevTodo.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      );
    });
  }

  return (
    <div>
      <li className="todo">
        {edit ? (
          <input
            type="text"
            className="edit__input"
            value={editTodo}
            onInput={(e) => setEditTodo(e.target.value)}
          />
        ) : (
          <p className={`todo__text ${isComplete ? "line-through" : "text"}`}>
            {todo}
          </p>
        )}
        <div className="todo__btn">
          <button className="toggle__btn" onClick={() => toggle(id)}>
            <img src="/checked.svg" alt="checked" />
          </button>
          <button onClick={() => handleEdit(id)} className="toggle__edit__icon">
            <img src="/edit.png" alt="edit" />{" "}
          </button>
          <button className="delete__btn" onClick={() => deleteTodo(id)}>
            <img src="/delete.png" alt="delete" />
          </button>
        </div>
      </li>
    </div>
  );
};

export default Todo;

import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { useEffect, useState } from "react";
import "./styles/todolist.css";
const TodoList = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const [showCompleted, setShowCompleted] = useState(false);
  const deleteTodo = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
    localStorage.setItem("todoList", JSON.stringify(todoList));
  };

  const toggle = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
    localStorage.setItem("todoList", JSON.stringify(todoList));
  };

  function handleShowCompleted() {
    setShowCompleted((prev) => !prev);
  }

  console.log(showCompleted);
  console.log(todoList);
  return (
    <div className="todo__container">
      <TodoForm setTodoList={setTodoList} todoList={todoList} />
      {showCompleted ? (
        <ul className="todo__list">
          {todoList.length < 1 ? (
            <div className="warning">
              <img src="/warning.svg" alt="warning__sign" />
              <p className="no__task">No Completed Task!</p>
            </div>
          ) : (
            todoList
              .filter((todo) => todo.isComplete === true)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  todo={todo.todo}
                  isComplete={todo.isComplete}
                  deleteTodo={deleteTodo}
                  setTodoList={setTodoList}
                  toggle={toggle}
                />
              ))
          )}
        </ul>
      ) : (
        <ul className="todo__list">
          {todoList.length < 1 ? (
            <div className="warning">
              <img src="/warning.svg" alt="warning__sign" />
              <p className="no__task">No Task!</p>
            </div>
          ) : (
            todoList.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                todo={todo.todo}
                isComplete={todo.isComplete}
                deleteTodo={deleteTodo}
                toggle={toggle}
                setTodoList={setTodoList}
              />
            ))
          )}
        </ul>
      )}
      <div className="cta__container">
        <button onClick={() => handleShowCompleted()} className="cta__btn">
          {showCompleted ? "Show All Todos" : "Show Completed Todos"}
        </button>
      </div>
    </div>
  );
};

export default TodoList;

/*
          <ul key={todo.id} className="todo__list">
          </ul>
 */

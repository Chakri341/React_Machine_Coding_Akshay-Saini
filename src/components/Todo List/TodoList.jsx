import React, { useEffect, useState } from 'react'
import './TodoList.css'

const TodoList = () =>{
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    console.log("submitted todo ", inputValue);
    const newTodo = { id: Date.now(), name: inputValue, status: false };
    setTodos((prev) => [...prev, newTodo]);
    setInputValue("");
  };
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleChangeStatus = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };
  const handleEdit = (id) => {
    const findTodo = todos.find((item) => item.id === id);
    // console.log("findTodo  ", findTodo);
    const editedName = prompt("ENTER THE VALUE", findTodo.name);
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, name: editedName } : item
      )
    );
  };
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-main-container">
      <div className="todo-header">
        <h1>Todos</h1>
      </div>
      <div className="todo-conatiner">
        <form onSubmit={handleFormSubmit} className="todo-form-container">
          <input
            type="text"
            name="todo"
            id="todo"
            className="todo-input"
            placeholder="Add a todo .."
            value={inputValue}
            onChange={handleChangeInput}
          />
          <button type="submit" className="todo-add-btn">
            Add
          </button>
        </form>
        {todos.length>0 && <div className="todos-list">
          {todos.map((todo, index) => {
            return (
              <div className="todo-item" key={todo.id}>
                <div className="todo-name-container">
                  <span className="todo-sno">{index + 1}.</span>
                  <span
                    className={
                      todo.status ? "todo-value todo-strike" : "todo-value"
                    }
                  >
                    {todo.name}
                  </span>
                </div>
                <div className="todo-btns-container">
                  <span
                    className="todo-status"
                    onClick={() => handleChangeStatus(todo.id)}
                  >
                    {todo.status ? "✔" : "❌"}
                  </span>
                  <button
                    className="todo-edit-btn todo-btn"
                    onClick={() => handleEdit(todo.id)}
                  >
                    EDIT
                  </button>
                  <button
                    className="todo-delte-btn todo-btn"
                    onClick={() => handleDelete(todo.id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}
        </div>}
      </div>
    </div>
  );
}

export default TodoList;
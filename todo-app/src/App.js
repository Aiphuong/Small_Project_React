import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/Todo/List";

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onAdd = () => {
    if (value) {
      const index = list.findIndex((item) => item.name === value);
      console.log(value);
      if (index === -1) {
        const newList = [
          { id: list.length + 1, name: value, status: false },
          ...list,
        ];
        setList(newList);
        setValue("");
      }
    }
    console.log(list);
  };

  const onEdit = (value) => {
    const newList = list.map((item) => {
      return item.id === Number(value.id)
        ? { ...item, status: !item.status }
        : { ...item };
    });
    console.log(value);
    setList(newList);
  };

  const onDelete = (itemRemove) => {
    const newList = list.filter((item) => {
      return item !== itemRemove;
    });
    setList(newList);
  };

  const onClear = () => {
    const newList = list.filter((item) => !item.status);
    setList(newList);
  };

  return (
    <div id="container">
      <h1>
        To-Do List <i onClick={() => onAdd()} className="fa fa-plus"></i>
      </h1>{" "}
      <input
        type="text"
        placeholder="Add New Todo"
        onChange={onChange}
        value={value}
      />
      <TodoList onDelete={onDelete} list={list} onEdit={onEdit} />
      <button
        onClick={onClear}
        type="button"
        className="btn btn-danger pt-2 mt-3"
      >
        Clear completed
      </button>
    </div>
  );
}

export default App;

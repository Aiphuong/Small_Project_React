import React from "react";

const TodoList = (props) => {
  const { list, onDelete, onEdit } = props;
  return (
    <ul>
      {list.map((item) => (
        <li
          onClick={() => onEdit(item)}
          className={item.status ? "completed" : "todo"}
          id={item.id}
          key={item.id + item.name}
        >
          <span onClick={() => onDelete(item)}>
            <i className="fa fa-trash"></i>
          </span>{" "}
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

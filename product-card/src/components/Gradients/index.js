import React from "react";

const Gradients = (props) => {
  const { list } = props;
  return (
    <>
      {list.map((item) => (
        <span
          id={item.id}
          key={item.id + item.name}
          className={item.status ? "gradient behind" : "gradient"}
          color={`${item.name}`}
        ></span>
      ))}
    </>
  );
};

export default Gradients;

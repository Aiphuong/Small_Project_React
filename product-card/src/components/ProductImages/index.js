import React from "react";


const ProductImages = (props) => {
  const { list } = props;

  return (
    <>
    {list.map((item) => (
      <img
        id={item.id}
        key={item.id + item.name}
        className={item.status ? "shoe show" : "shoe"}
        color={`${item.name}`}
        src={item.img}
      />
    ))}
    </>
  );
};

export default ProductImages;

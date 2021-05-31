import React from "react";

const Info = (props) => {
  const { list, changeColor, listSize, changeSize, color } = props;

  const shoeName = (
    <div className="shoeName">
      <div>
        <h1 className="big">Nike Zoom KD 12</h1>
        <span className={`new${color ? ` ${color}` : ""}`}>new</span>
      </div>
      <h3 className="small">Men's running shoes</h3>
    </div>
  );

  const description = (
    <div className="description">
      <h3 className="title">Product Info</h3>
      <p className="text">
        Ensure a comfortable running session by wearing this pair of cool
        running shoes from Nike.
      </p>
    </div>
  );

  const ColorContainer = (
    <div className="color-container">
      <h3 className="title">Color</h3>
      <div className="colors">
        {list.map((item) => (
          <span
            id={item.id}
            key={item.id + item.name}
            onClick={() => changeColor(item)}
            className={item.status ? "color active" : "color"}
            primary="#2175f5"
            color={`${item.name}`}
          ></span>
        ))}
      </div>
    </div>
  );

  const SizeContainer = (
    <div className="size-container">
      <h3 className="title">size</h3>
      <div className={`sizes${color ? ` ${color}` : ""}`}>
        {listSize.map((item) => (
          <span
            id={item.id}
            key={item.id + item.vl}
            onClick={() => changeSize(item)}
            className={item.status ? "size active" : "size"}
          >
            {item.vl}
          </span>
        ))}
      </div>
    </div>
  );

  const BuySection = (
    <div className="buy-price">
      <a href="/#" className={`buy${color ? ` ${color}` : ""}`}>
        <i className="fas fa-shopping-cart"></i>Add to card
      </a>
      <div className="price">
        <i className="fas fa-dollar-sign"></i>
        <h1>149.99</h1>
      </div>
    </div>
  );

  return (
    <div className="info">
      {shoeName}
      {description}
      {ColorContainer}
      {SizeContainer}
      {BuySection}
    </div>
  );
};

export default Info;

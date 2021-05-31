import "./App.css";
import React, { useState, useEffect } from "react";
import Gradients from "./components/Gradients";
import logo from "./assets/img/logo.png";
import ProductImages from "./components/ProductImages";
import Info from "./components/Info";

import blue from "./assets/img/blue.png";
import black from "./assets/img/black.png";
import green from "./assets/img/green.png";
import red from "./assets/img/red.png";
import orange from "./assets/img/orange.png";

function App() {
  const colors = [
    {
      id: 0,
      name: "blue",
      img: blue,
      status: true,
    },
    {
      id: 1,
      img: red,
      name: "red",
      status: false,
    },
    {
      id: 2,
      img: green,
      name: "green",
      status: false,
    },
    {
      id: 3,
      img: orange,
      name: "orange",
      status: false,
    },
    {
      id: 4,
      img: black,
      name: "black",
      status: false,
    },
  ];

  const sizes = [
    {
      id: 0,
      vl: 6,
      status: false,
    },
    {
      id: 1,
      vl: 7,
      status: true,
    },
    {
      id: 2,
      vl: 8,
      status: false,
    },
    {
      id: 3,
      vl: 9,
      status: false,
    }
  ]

  const [list, setList] = useState(colors)
  const [listSize, setListSize] = useState(sizes)
  const [color, setColor] = useState('blue')

  const changeColor = (value) => {
    const newList = list.map(item => {
      if(item.status === true){
        item.status = false
      }
      return item?.id === Number(value?.id)
        ? { ...item, status: !item?.status }
        : { ...item };
    });
    
    setList(newList);
    setColor(value.name)
  };

  const changeSize = (value) => {
    const newListSize = listSize.map(item => {
      if(item.status === true){
        item.status = false
      }
      return item?.id === Number(value?.id)
        ? { ...item, status: !item?.status }
        : { ...item };
    });
    setListSize(newListSize);
  }

  return (
    <div className="Home">
      <div className="container">
        <div className="card">
          <div className="shoeBackground">
            <Gradients list={list}  />
            <h1 className="nike">nike</h1>
            <img src={logo} alt="logo" className="logo" />
            <a href="/#" className="share">
              <i className="fas fa-share-alt"></i>
            </a>
            <ProductImages list={list} />
          </div>
          <Info changeColor={changeColor} changeSize={changeSize} list={list} listSize={listSize} color={color}/>
        </div>
      </div>
    </div>
  );
}

export default App;

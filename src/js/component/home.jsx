import { func } from "prop-types";
import React, { useEffect, useState } from "react";

const AddColor = () => {
  return (
    <div className="light purple" style={{ backgroundColor: "purple" }}></div>
  );
};

/*component starts from here*/
const Home = () => {
  const [color, setColor] = useState(["red", "yellow", "green"]);
  const [valuered, setRed] = useState("");
  const [valueyellow, setYellow] = useState("");
  const [valuegreen, setGreen] = useState("");

  const [inputList, setInputList] = useState([]);
  function addPurple() {
    setInputList(inputList.concat(<AddColor key={inputList.length} />));
  }

  /*functon for glowing all light using interval*/
  function autoGenerate() {
    return setInterval(() => {
      setTimeout(action[0], 3000);
      setTimeout(action[1], 1000);
      setTimeout(action[2], 2000);
    }, 3000);
  }

  /*functions for glowing individual light*/
  const showRed = () => {
    setRed("0 0 10px #111 inset, 0 0 50px gold");
    setGreen("");
    setYellow("");
  };
  const showYellow = () => {
    setYellow("0 0 10px #111 inset, 0 0 50px gold");
    setGreen("");
    setRed("");
  };

  const showGreen = () => {
    setGreen("0 0 10px #111 inset, 0 0 50px gold");
    setRed("");
    setYellow("");
  };
  const [action, setAction] = useState([showGreen, showRed, showYellow]);
  /*
  const autoGenerate=() {
    setInterval(() => {
      setTimeout(showGreen, 3000);
      setTimeout(showRed, 1000);
      setTimeout(showYellow, 2000);
    }, 3000);
  }*/
  return (
    <div className="traffic-light">
      <div
        className="light red"
        onClick={showRed}
        style={{ boxShadow: valuered, backgroundColor: color[0] }}
      ></div>
      <div
        className="light yellow"
        onClick={showYellow}
        style={{ boxShadow: valueyellow, backgroundColor: color[1] }}
      ></div>
      <div
        className="light green"
        onClick={showGreen}
        style={{ boxShadow: valuegreen, backgroundColor: color[2] }}
      ></div>
      {inputList}
      <button onClick={autoGenerate}>Flashing</button>

      <button onClick={addPurple}> Add purple</button>
    </div>
  );
};

export default Home;

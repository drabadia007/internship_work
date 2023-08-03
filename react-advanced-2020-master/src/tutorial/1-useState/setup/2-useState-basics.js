import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState())
  const [text, setText] = useState("random title");
  // useState() it is a parameter box where we can set any value ie: text,array,objects

  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };

  return (
    <>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;

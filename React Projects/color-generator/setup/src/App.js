import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#ef19ab").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      // console.log(colors);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  if (error) {
    return (
      <>
        <section className="container">
          <h3>color generator</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder={`${error ? "enter valid color" : "#ef19ab"}`}
              className={`${error ? "error" : null}`}
            />
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder={`${error ? "enter valid color" : "#ef19ab"}`}
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              list={list}
            ></SingleColor>
          );
        })}
      </section>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        {show ? "hide" : "show"}
      </button>
      {show && <Item></Item>}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const changeSize = () => {
    setSize(window.innerWidth);
  };

  // in here there is a flaw in our app that  we might end up utilizing everybit of our memory as everytime we click on show hide btn then the window event listener is placed in our memory so to avoid ir we need to clean up the event when not in use

  useEffect(() => {
    window.addEventListener("resize", changeSize);

    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);

  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <h2>Window</h2>
        <h4>Size: {size}PX</h4>
      </div>
    </>
  );
};

export default ShowHide;

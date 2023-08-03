import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements
// this hook is used to target the dom elements and let us change something for it

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
    refContainer.current.value = "";
  };

  useEffect(() => {
    console.log(refContainer.current.value);
    console.log("use effect called");
    refContainer.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" ref={refContainer} />
        <button type="submit">submit</button>
      </form>
      <div ref={divContainer}>Hello</div>
    </>
  );
};

export default UseRefBasics;

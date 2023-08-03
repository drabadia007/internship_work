import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // it will always call render component first then useEffect hook
  // we cannot use conditionals with hooks but we can use it inside the callback functions of hook
  useEffect(() => {
    // if(val > 2){
    //   code goes here
    // }
    if (value >= 1) {
      document.title = `New Message ${value}`;
    }
    console.log("inside use effect");
  }, [value]);
  // if empty array is passed then it will run only once during the initial render then it will not work
  // but if we pass something in the array then it will work accordingly

  useEffect(() => {
    console.log("hello world ese effect hook");
  }, []);

  useEffect(() => {}, []);
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        change value
      </button>
    </>
  );
};

export default UseEffectBasics;

import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  // this approach has a problem that it increases our memory usage as the old event listener has not been cleared which is occupying some space
  // and the loop goes on and our program piles up some junk
  // so we need to cleanup the older event which has been already performed
  // this can also be done by passing empty array so we dont need to add clean up fnc by ourself browser does it internally
  // it is better to pass an empty array into the hook as to run it during only once at initial render
  // but sometimes the empty array wont work for us so we need to remove the junk by ourselves

  // what if we dont add the cleanup function to our website then whenever size of the browser changes then, useeffect adds new event listener everytime and can lead to memory leak

  useEffect(() => {
    console.log("use effect");
    window.addEventListener("resize", checkSize);

    return () => {
      console.log("clean up");
      window.removeEventListener("resize", checkSize);
    };
    // when the width of the window is finded then the function needs to be cleaned up or else it will occupy memory
  }, []);

  // console.log("render");

  return (
    <>
      <h1>Window</h1>
      <h3>{size} PX</h3>
    </>
  );
};

export default UseEffectCleanup;

import React, { useState } from "react";

const UseStateCounter = () => {
  const [isGreen, setIsGreen] = useState(false);
  const [value, setValue] = useState(0);
  const Reset = () => {
    setValue(0);
  };

  // when we want to use the same value of the useState hook then we need to work on the realTime value of that hook
  // when we need to work on the realtime value then we need to pass the arguement in the function of the useastate method
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((val) => {
        return val + 1;
      });
    }, 2000);
  };

  const increaseCounter = () => {
    setValue((value) => {
      return value + 1;
    });
  };

  const decreaseCounter = () => {
    setValue((value) => {
      return value - 1;
    });
  };

  return (
    <>
      {/* Simple Counter */}
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1 className={`${value > 0 ? "green" : "red"}`}>{value}</h1>
        <button className="btn" onClick={decreaseCounter}>
          <i class="fa-solid fa-minus fa-2x"></i>
        </button>
        {/* <button className="btn" onClick={Reset}>
          <i class="fa-regular fa-circle-0"></i>
        </button> */}
        <button className="btn" onClick={increaseCounter}>
          <i class="fa-solid fa-plus fa-2x"></i>
        </button>
      </section>

      {/* Complex Counter */}
      <section style={{ margin: "4rem 0" }}>
        <h2>More Complex Counter</h2>
        <h1 className={`${value > 0 ? "green" : "red"}`}>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;

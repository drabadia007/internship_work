import React from "react";

const ErrorExample = () => {
  let title = "random title";

  const clickHandler = () => {
    title = "hello World";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={clickHandler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

// this thing will not change the state of the component as it is not rendering the update performed so we need to use the useState hook for it

export default ErrorExample;

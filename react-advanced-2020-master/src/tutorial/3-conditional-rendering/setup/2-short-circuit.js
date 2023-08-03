import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  // in case of first value if text is true then text is returned or else other element
  // in case of second value if text is true then and then only the second value is returned
  // if text is false then it is returned

  // Tip: we cannot use conditionals inside the fragment so we need to come up with something like this

  const [text, setText] = useState("John Doe");
  const [iserror, setIsError] = useState(false);

  return (
    <>
      {/* <h2>{text || 'hello world'}</h2>
  <h2>{text && 'hello world'}</h2>
  <h2>{!text && 'hello world'}</h2> */}
      {/* check this whenever revision required */}

      <h2>{text || "hello world"}</h2>
      <button className="btn" onClick={() => setIsError(!iserror)}>
        toggle error
      </button>
      {iserror && <h1>Error...</h1>}
      {iserror ? (
        <p>there is an error</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;

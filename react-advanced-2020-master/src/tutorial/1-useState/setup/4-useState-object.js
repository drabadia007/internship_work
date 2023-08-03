import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: "20",
    message: "Random Message",
  });

  // const [name,setName] = useState('peter')
  // const [age,setAge] = useState('20')
  // const [message,setMessage] = useState('random message')
  // the above one is a another way to do it just pass name,age and message in JSX and just call the required method to change the message

  const changeMessage = () => {
    setPerson({ ...person, message: "Hello World" });
    // this above line means that it will spread the object and help us to change the value desired
    // it will destructure the object and we can modify the key we want
    // setMessage('hello World')
    // we can modify any of the key value
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;

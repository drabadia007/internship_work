import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";
// tip: we can also call the fetch func in the hook's callback func but to learn it for the first time we are keepin it in a seperate function

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  // const getUsers = async () => {
  //   const response = await fetch(url);
  //   const users = await response.json();
  //   // console.log(users)
  //   setUsers(users);
  // };

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {}, []); // syntax of useEffect

  useEffect(() => {
    getUsers();
  }, []);
  // this above useEffect will run only once when we referesh our app or component is rerendered

  return (
    <>
      <h2>Github Users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;

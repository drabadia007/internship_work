import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

// we have seen sites where we see loading component and if value fetched then the content is being shown we can create too lets see how!

// const MultipleReturns = () => {
//   const [loading,setLoading] = useState(true)

//   if(loading){
//     return <h2>Loading.....</h2>
//   }
//   return <h2>multiple returns</h2>;
// };

const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(true)
  const [iserror, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    setIsLoading(true)
    // fetching the response from the url
    fetch(url)
    .then((resp) => {
      if(resp.status >=200 && resp.status <=299){
        return resp.json()
      }
      else{
        setIsLoading(false)
        setIsError(true)
      }
    })
    .then((user)=>{
      console.log(user)
      const {login} = user
      setIsLoading(false)
      setUser(login)

    })
    .catch((error) => console.log(error))
  }, [])

  if (isloading) {
    return <h2>Loading.....</h2>
  }
  if (iserror) {
    return <h2>Error....</h2>
  }
  return <>
    <h2>{user}</h2>
  </>;
};

export default MultipleReturns;

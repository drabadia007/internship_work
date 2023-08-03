import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [users,SetUsers] = useState(data)

  return <main>
    <section className='container'>
      <h3>{users.length} birthdays today</h3>
      <List persons={users}></List>
      <button onClick={()=> SetUsers([])}>
        Clear all
      </button>
    </section>
  </main>
}

export default App;

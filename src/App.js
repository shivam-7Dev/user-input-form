import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserhandler = (uName, Uage) => {
    setUsersList((prevstate) => {
      return [
        ...prevstate,
        { name: uName, age: Uage, id: Math.random.toString() },
      ];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserhandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

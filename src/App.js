import React, { useState } from 'react';
import UserProfile from './components/UserProfile';
import './App.css';
import UserContext from './contexts/UserContext';

function App() {
  // create method toggleStatus that will change the status value from true to false.
  // keep in mind that this method has to be created before our state!
  function toogleStatus() {
    setStatus(!status);
  }
  // create 2 properties for state: status (boolean) and toggle (toggleStatus method previously created)
  const [status, setStatus] = useState(true);

  return (
    <div className='App'>
      <UserContext.Provider
        value={{
          status: status,
          // setStatus: setStatus,
          toogleStatus: toogleStatus,
        }}
      >
        <UserProfile />
      </UserContext.Provider>
    </div>
  );
}

export default App;

import React, { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';

export default function UserProfile() {
  const { toogleStatus, status } = useContext(UserContext);
  // access the context information with useContext hook
  useEffect(() => {
    console.log(status);
  }, []);

  return (
    <div>
      <div>User is {status ? 'Online' : 'Offline'}</div>
      <button type='button' onClick={toogleStatus}>
        Click to change status
      </button>
    </div>
  );
}

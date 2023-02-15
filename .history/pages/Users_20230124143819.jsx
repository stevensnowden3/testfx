import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Make a GET request to retrieve users and their roles from the database
    axios
      .get('/api/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const updateRole = (userId, newRoles) => {
    // Make a PUT request to update the user's roles
    axios
      .put('/api/users/' + userId, { roles: newRoles })
      .then(res => {
        // Update the user's roles in the state
        const updatedUsers = users.map(user => {
          if (user.id === userId) {
            user.roles = newRoles;
          }
          return user;
        });
        setUsers(updatedUsers);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <p>
            {user.name}: {user.roles.join(', ')}
          </p>
          <button onClick={() => updateRole(user.id, ['tco', 'mit'])}>Update Roles</button>
        </div>
      ))}
    </div>
  );
};

export default Users;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/users');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, []);
  const handleUpdateRole = async (userId, role, action) => {
    try {
      const res = await axios.patch(`/api/users/${userId}`, { role, action });
      setUsers(prevUsers =>
        prevUsers.map(user => {
          if (user.id === userId) {
            return { ...user, roles: res.data };
          }
          return user;
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Users and Roles</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {Object.entries(JSON.parse(user.roles)).map(([role, hasRole]) =>
                  hasRole ? <span key={role}>{role}</span> : null
                )}
              </td>
              <td>
                <select onChange={e => handleUpdateRole(user.id, e.target.value, e.target.name)}>
                  <option value="add">Add Role</option>
                  <option value="remove">Remove Role</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter Role"
                  onKeyPress={e => {
                    if (e.key === 'Enter') {
                      handleUpdateRole(user.id, e.target.value, e.target.name);
                    }
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default getUsers;

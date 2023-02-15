import React, { useState, useEffect } from 'react';

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
      const res = await fetch(`/api/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role, action })
      });
      const data = await res.json();
      setUsers(prevUsers =>
        prevUsers.map(user => {
          if (user.id === userId) {
            return { ...user, roles: data.roles };
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
      {users.data ? (
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
                    hasRole ? (
                      <span key={role}>
                        <span className="text-success mx-2">{role}</span>
                      </span>
                    ) : null
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default getUsers;

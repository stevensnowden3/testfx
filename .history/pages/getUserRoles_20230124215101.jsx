import React, { useState, useEffect } from 'react';

const getUsers = () => {
  const [users, setUsers] = useState([]);
  const [action, setAction] = useState('add');

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
  const handleUpdateRole = async (id, role, action) => {
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role, action })
      });
      alert(id);
      const data = await res.json();
      setUsers(prevUsers => {
        if (prevUsers.data)
          return prevUsers.data.map(user => {
            if (user.id === id) {
              return { ...user, roles: data.data };
            }
            return;
          });
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className="mb-2 text-center" style={{ background: '#b5bd36', color: '#fff' }}>
        Users and Roles Management
      </h1>
      {users.data ? (
        <table className="table table-bordered ">
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
                        <span className="badge  mx-2" style={{ background: '#04392a', color: '#fff' }}>
                          {role}
                        </span>
                      </span>
                    ) : null
                  )}
                </td>
                <td>
                  <div className="d-flex justify-content-between">
                    <select
                      className="form-select"
                      value={action}
                      onChange={e => {
                        setAction(e.target.value);
                      }}>
                      <option value="add">Add Role</option>
                      <option value="remove">Remove Role</option>
                    </select>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Role"
                      onKeyPress={e => {
                        if (e.key === 'Enter') {
                          handleUpdateRole(user.id, e.target.value, action);
                        }
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <a className="btn btn-primary m-5" href="/getUserRoles">
          {' '}
          Refresh
        </a>
      )}
    </div>
  );
};
export default getUsers;

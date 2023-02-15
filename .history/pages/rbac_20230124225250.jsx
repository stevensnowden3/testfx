import React, { useState, useEffect } from 'react';

const UserRole = () => {
  const [id, setUserId] = useState('');
  const [userRoles, setUserRoles] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/rbac/${id}`);
      const data = await res.json();
      setUserRoles(data.roles);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input type="text" value={id} onChange={e => setUserId(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h1>{id}</h1>
      {roles.length > 0 ? (
        <div>
          <h2>User Roles:</h2>
          <ul>
            {roles.map(role => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default UserRole;

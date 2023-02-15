import React, { useState, useEffect } from 'react';

const UserRole = () => {
  const [userId, setUserId] = useState('');
  const [userRoles, setUserRoles] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/users/${userId}`);
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
          <input type="text" value={userId} onChange={e => setUserId(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {userRoles.length > 0 ? (
        <div>
          <h2>User Roles:</h2>
          <ul>
            {userRoles.map(role => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default UserRole;

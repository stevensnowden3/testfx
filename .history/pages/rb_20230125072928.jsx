import React, { useState, useEffect } from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const UserRole = () => {
  const [id, setUserId] = useState('');
  const [userRoles, setUserRoles] = useState([]);
  const { user, isLoading } = useUser();

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

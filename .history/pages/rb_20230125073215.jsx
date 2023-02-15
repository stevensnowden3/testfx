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
      {user && user['https://netlify-integration.com/roles'].includes('TCO') && (
        <>
          <form onSubmit={handleSubmit}>
            <label>
              User ID: <p>{user.email}</p>
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
        </>
      )}
      {!user['https://netlify-integration.com/roles'].includes('TCO') ||
        (user['https://netlify-integration.com/roles'].includes('T') && (
          <p className="text-center text-warning m-5">You dont have permissions to access this route</p>
        ))}
    </div>
  );
};

export default UserRole;

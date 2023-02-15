import React, { useState, useEffect } from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const UserRole = () => {
  const { user, isLoading } = useUser();

  return (
    <div>
      {isLoading && <Loading />}

      <></>
    </div>
  );
};

export default withPageAuthRequired(UserRole, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});

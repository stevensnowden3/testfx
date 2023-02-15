import React, { useState, useEffect } from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

// steps and roles
import { setActiveIndex } from '../components/setIndexSteps';
import { itemsList } from '../components/dataitems';
import { Steps } from 'primereact/steps';
import { ROLES } from '../components/dataitems';

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

import React, { useState, useEffect } from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import FileInput from '../components/FileInput';

// steps and roles
import { setActiveIndex } from '../components/setIndexSteps';
import { itemsList } from '../components/dataitems';
import { Steps } from 'primereact/steps';
import { ROLES } from '../components/dataitems';

const UserRole = () => {
  const { user, isLoading } = useUser();
  const [file, setFile] = useState(null);

  // insert steps
  const [activeIndex, setActiveStep] = useState(1);
  useEffect(() => {
    setActiveIndex(user, setActiveStep);
  }, [user]);
  const items = itemsList.map(item => item);

  return (
    <>
      {isLoading && <Loading />}
      {(user && user[ROLES].includes('MIT')) ||
      user[ROLES].includes('QAM') ||
      user[ROLES].includes('LWM') ||
      user[ROLES].includes('HNAD') ? (
        <>
          <h1>get object url</h1>
          <div>
            <FileInput onChange={setFile} />
          </div>
          <div className="m-4">
            <Steps model={items} activeIndex={activeIndex} onSelect={e => setActiveIndex(e.index)} readOnly={true} />
          </div>
        </>
      ) : (
        <>
          <h5 className="text-center text-warning m-5">You dont have permissions to access this page</h5>
          <p className="text-center text-danger m-5">Request for permissions</p>
        </>
      )}
    </>
  );
};

export default withPageAuthRequired(UserRole, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});

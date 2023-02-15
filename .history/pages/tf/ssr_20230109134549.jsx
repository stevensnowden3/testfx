import React,{ useEffect } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';


import Highlight from '../components/Highlight';

export default function SSRPage({ user }) {
  
  return (
    <>
      <div className="mb-5" data-testid="ssr">
        <h1 data-testid="ssr-title">Material Checklist</h1>
        <div data-testid="ssr-text">
          
        </div>
      </div>
      <div className="result-block-container" data-testid="ssr-json">
        <div className="result-block">
          <h6 className="muted">User prop</h6>
          <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
          <h1>{user.name}</h1>
         
          {/* <p>Your roles: {token}</p> */}
          {/* <button onClick={getToken}>Get Token</button> */}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();

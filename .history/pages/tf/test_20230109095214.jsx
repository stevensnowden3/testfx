import React,{ useEffect } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import Highlight from '../components/Highlight';

export default function SSRPage({ user }) {
  return (
    <>
      <div className="mb-5" data-testid="ssr">
        <h1 data-testid="ssr-title">Server-side Rendered Page</h1>

        <div data-testid="ssr-text">
          <p>
            You can protect a server-side rendered page by wrapping the <code>getServerSideProps</code> function with{' '}
            <code>withPageAuthRequired</code>. Only logged in users will be able to access it. If the user is logged
            out, they will be redirected to the login page instead.{' '}
          </p>
          <p>
            Protected server-side rendered pages automatically receive a <code>user</code> prop containing the user
            profile.
          </p>
        </div>
      


        <div className="result-block-container mb-5" data-testid="ssr-json">
          <div className="result-block">
            <h6 className="muted">User prop</h6>
            <Highlight>{JSON.stringify(user, null, 2)}</Highlight>

            {user["https://netlify-integration.com/roles"].includes('user') && <h5>You are user</h5>}
            {user["https://netlify-integration.com/roles"].includes('editor') && <h5>You are the Editor</h5>}
            {user["https://netlify-integration.com/roles"].includes('admin')  && <h5>You are Admin</h5>}
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();

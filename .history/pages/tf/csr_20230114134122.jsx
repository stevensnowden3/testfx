import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function SSRPage() {
  return (
    <>
      <div className="mb-5" data-testid="csr">
        <h1 data-testid="csr-title">Material Checklist</h1>
        <div data-testid="csr-text">
    
        
        </div>
      </div>
    </>
  );
});

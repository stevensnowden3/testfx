import { useEffect, useState } from 'react';

import { useUser } from '@auth0/nextjs-auth0/client';

export const setActiveIndex = (user, setActiveIndex) => {
  if (user) {
    user['https://netlify-integration.com/roles'].includes('TCO')
      ? setActiveIndex(1)
      : user['https://netlify-integration.com/roles'].includes('MIT')
      ? setActiveIndex(0)
      : user['https://netlify-integration.com/roles'].includes('QAM')
      ? setActiveIndex(2)
      : user['https://netlify-integration.com/roles'].includes('LWM')
      ? setActiveIndex(3)
      : null;
  }
};

import { useEffect, useState } from 'react';

import { useUser } from '@auth0/nextjs-auth0/client';

export const setActiveIndex = () => {
  const { user } = useUser();

  let activeIndex = 1;
  if (user && user['https://netlify-integration.com/roles'].includes('TCO')) {
    activeIndex = 3;
  }

  return activeIndex;
};

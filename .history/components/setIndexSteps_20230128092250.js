import { useEffect, useState } from 'react';

export const useActiveIndex = user => {
  const [activeIndex, setActiveIndex] = useState(1);
  if (user['https://netlify-integration.com/roles'].includes('TCO')) {
    setActiveIndex(3);
  }
  return [activeIndex, setActiveIndex];
};

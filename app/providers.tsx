'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
};
function Providers({ children }: Props) {
  return <>{children}</>;
}

export default Providers;

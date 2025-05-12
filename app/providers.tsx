'use client';

import React from 'react';
import ThemeProvider from './theme-provider';

type Props = {
  children: React.ReactNode;
};
function Providers({ children }: Props) {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}

export default Providers;

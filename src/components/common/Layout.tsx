import React from 'react';
import Navigation from './Navigation';
import { Container } from '@mui/material';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container sx={{ marginTop: '2rem' }}>{children}</Container>
    </>
  );
};

export default Layout;

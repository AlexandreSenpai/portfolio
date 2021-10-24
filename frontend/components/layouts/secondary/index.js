import React from 'react';
import Navbar from '../../nav';

import { Container, MainContainer } from './styles';

function MainLayout({ children }) {
  return (
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate" >
      <Navbar />
      <MainContainer>
        { children }
      </MainContainer>
    </Container>
  );
}

export default MainLayout;
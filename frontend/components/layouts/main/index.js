import React from 'react';
import Navbar from '../../nav';
import { fadeInUp } from '../../../animations'

import { Container, MainContainer, MainContainerHeader, AvatarContainer, Avatar, HeaderTitleHolder, Title, SubTitle } from './styles';

function MainLayout({ children }) {
  return (
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate" >
      <Navbar />
      <MainContainer>
        <MainContainerHeader>
          <HeaderTitleHolder>
            <Title variants={fadeInUp}>
              Alexandre Ramos
            </Title>
            <SubTitle variants={fadeInUp}>
              Developer and Artist
            </SubTitle>
          </HeaderTitleHolder>
          <AvatarContainer>
            <Avatar src={'/eu.png'} variants={fadeInUp}/>
          </AvatarContainer>
        </MainContainerHeader>
        { children }
      </MainContainer>
    </Container>
  );
}

export default MainLayout;
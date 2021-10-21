import React from 'react';
import Box from '../../box'
import { stagger } from '../../../animations';

import { Container, GridContainer, PageTitle, PageTitleHolder } from './styles';

function Posts() {
  return(
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate">
      <PageTitleHolder>
        <PageTitle>
          Postagens
        </PageTitle>
      </PageTitleHolder>
      <GridContainer variants={stagger} >
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </GridContainer>
    </Container>
  );
}

export default Posts;
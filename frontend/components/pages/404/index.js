import React from 'react';
import Box from '../../box'
import { fadeInLeft, stagger } from '../../../animations';

import { Container, AvatarHolder, Avatar, MessageHolder, Message, Error } from './styles';

function Posts() {
  return(
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate">
      <AvatarHolder>
        <Avatar src={'/404.gif'} variants={fadeInLeft} />
      </AvatarHolder>
      <MessageHolder variants={fadeInLeft}>
        <Message>
          <Error>404</Error> - Página não encontrada / Não existente
        </Message>
      </MessageHolder>
    </Container>
  );
}

export default Posts;
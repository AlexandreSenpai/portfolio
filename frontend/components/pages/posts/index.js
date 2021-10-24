import React from 'react';
import Box from '../../box'
import { stagger } from '../../../animations';

import { Container, GridContainer, PageTitle, PageTitleHolder } from './styles';

function Posts({ posts }) {
  return(
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate">
      <PageTitleHolder>
        <PageTitle>
          Postagens
        </PageTitle>
      </PageTitleHolder>
      <GridContainer variants={stagger} >
        {posts.length > 0 && posts.map(post => (<Box key={post.id} post={post} />))}
      </GridContainer>
    </Container>
  );
}

export default Posts;
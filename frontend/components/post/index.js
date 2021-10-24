import React from 'react';
import { fadeInLeft } from '../../animations'
import Markdown from '../markdown';

import { Container, PostTitle, PostHeader, PostDate, PostFooter, Tag } from './styles';

function Post({ content, title, created_at, updated_at, tags }) {
  return(
    <Container variants={fadeInLeft}>
      <PostHeader>
        <PostTitle>{ title }</PostTitle>
        <PostDate>Criado em: { created_at } | Atualizado em: { updated_at }</PostDate>
      </PostHeader>
      <Markdown content={content} />
      <PostFooter>
        {
          tags.length > 0 && tags.map(tag => (<Tag key={tag}>{ tag }</Tag>))
        }
      </PostFooter>
    </Container>
  );
}

export default Post;
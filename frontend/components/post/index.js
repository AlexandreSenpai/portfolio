import React from 'react';
import { fadeInLeft } from '../../animations'
import Markdown from '../markdown';

import { Container, PostTitle, PostHeader, PostDate, PostFooter, Tag } from './styles';

function Post({ content, title, date, tags }) {
  return(
    <Container variants={fadeInLeft}>
      <PostHeader>
        <PostTitle>{ title }</PostTitle>
        <PostDate>{ date }</PostDate>
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
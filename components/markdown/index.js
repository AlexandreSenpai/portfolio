import React from 'react';


import { Container } from './styles';

function Markdown({ content }) {
  return(
    <Container>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
}

export default Markdown;
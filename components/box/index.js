import { useRouter } from 'next/router';
import React from 'react';
import { fadeInUp } from '../../animations'

import { Container, Description, DescriptionHolder, Thumbnail, ThumbnailHolder, Title } from './styles';

function Box({ post }) {

  const router = useRouter()

  const navigate_to = () => {
    router.push(`/p/${post.id}`)
  }

  return(
    <Container 
      variants={fadeInUp} 
      whileHover={{ scale: 1.03 }} 
      whileTap={{ scale: 1 }}
      onClick={navigate_to}
    >
      <ThumbnailHolder>
        <Thumbnail src={post?.thumbnail}/>
      </ThumbnailHolder>
      <DescriptionHolder>
        <Title>
          {post?.title}
        </Title>
        <Description>
          {post?.description}
        </Description>
      </DescriptionHolder>
    </Container>
  );
}

export default Box;
import React from 'react';
import { fadeInUp } from '../../animations'

import { Container, Description, DescriptionHolder, Thumbnail, ThumbnailHolder, Title } from './styles';

function Box() {
  return(
    <Container variants={fadeInUp} whileHover={{ scale: 1.03 }} whileTap={{ scale: 1 }}>
      <ThumbnailHolder>
        <Thumbnail src={"https://i.ytimg.com/vi/YUpZunbWxws/maxresdefault.jpg"}/>
      </ThumbnailHolder>
      <DescriptionHolder>
        <Title>
          Python Tutorial 🌠 Bad Apple!! 🍎
        </Title>
        <Description>
          Source code
          github.com/alexandresenpai/bad-apple
        </Description>
      </DescriptionHolder>
    </Container>
  );
}

export default Box;
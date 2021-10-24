import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
`;

export const ThumbnailHolder = styled(motion.div)`
  width: 100%;
  height: 14rem;
  border-radius: .4rem;
  background: gray;
  overflow: hidden;
  border: .1rem solid ${({ theme }) => theme.border.highlight};

  :hover{
    cursor: pointer;
  }

  @media only screen and (max-width: 725px){
    height: 25rem;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const DescriptionHolder = styled(motion.div)`
  width: 100%;
  margin: 1.6rem 0;
  padding: .2rem;
`

export const Title = styled.h2`
  text-align: center;
  font-size: 16px;
  margin-bottom: .8rem;
`

export const Description = styled.p`
  text-align: center;
  font-size: 12px;
  opacity: .5;
`
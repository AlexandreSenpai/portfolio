import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  padding: 1.6rem;
  border-radius: 0.4rem;
  border: .1rem solid ${({ theme }) => theme.border.primary};
  margin-bottom: .8rem;

  display: flex;
`;

export const ThumbnailHolder = styled(motion.div)`
  width: 100%;
  max-width: 11.6rem;
  height: 9.6rem;
  border-radius: .4rem;
  background: gray;
  margin-right: 1.6rem;
  overflow: hidden;
  border: .2rem solid ${({ theme }) => theme.border.highlight};

  :hover{
    cursor: pointer;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const DescriptionHolder = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const TitleHolder = styled(motion.div)`
  width: 100%;
`;

export const LeftDescriptionContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RightDescriptionContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const ActionButton = styled(motion.button)`
  width: 10rem;
  padding: .2rem .4rem;
  border-radius: .4rem;
  margin-bottom: .4rem;
  cursor: pointer;
  border: .1rem solid ${({ theme }) => theme.border.highlight};
  color: ${({ theme }) => theme.fonts.color.primary};
  background: transparent;
  font-size: 1rem;
`;

export const Title = styled.h2`
  text-align: left;
  font-size: 16px;
  font-weight: strong;
`

export const TagHolder = styled.div`
  display: flex;
`

export const Description = styled.p`
  text-align: left;
  font-size: 10px;
  opacity: .5;
`

export const WIP = styled.span`
  color: ${({ theme }) => theme.fonts.color.error};
`

export const DONE = styled.span`
  color: ${({ theme }) => theme.fonts.color.success};
`
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.2rem;
  flex-direction: column;
`;

export const AvatarHolder = styled(motion.div)`
  margin-bottom: 3.2rem;
`;

export const Avatar = styled(motion.img)`
  width: 40rem;
`;

export const MessageHolder = styled(motion.div)`
  
`;

export const Message = styled(motion.h3)`
  font-size: 2.4rem;
  font-weight: normal;
`;

export const Error = styled.span`
  color: ${props => props.theme.fonts.color.error}
`;
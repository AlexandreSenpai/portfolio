import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  
`;

export const PageTitleHolder = styled(motion.div)`
  padding: 0 1.6rem 1.6rem 1.6rem;
`;

export const PageTitle = styled.h3``;

export const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 1rem;
  padding: 1.6rem;
`

export const Column = styled.div``
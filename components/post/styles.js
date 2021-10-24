import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.article)`
  width: 100%;
  margin: 3.2rem 0;
  padding: 1.6rem;
  background: ${({ theme }) => theme.background.navbar};
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
`;

export const PostHeader = styled.header`
  display: flex;
  width: 100%;
  text-align: justify;
  flex-direction: column;
  margin-bottom: 3.2rem;
`;

export const PostTitle = styled.h1`
  color: ${({ theme }) => theme.fonts.color.highlight};
  font-size: 4.2rem;
  text-transform: uppercase;
`;

export const PostDate = styled.p`
  color: ${({ theme }) => theme.fonts.color.primary};
  font-size: 1.2rem;
  opacity: .5;
`;

export const PostFooter = styled.footer`
  width: 100%;
  margin-top: 3.2rem;
  display: flex;
  flex-wrap: wrap;
  border-top: .1rem solid ${({ theme }) => theme.border.primary};
  padding: 1.6rem 0;
`;

export const Tag = styled.span`
  text-align: center;
  border-radius: .4rem;
  font-size: 1.2rem;
  padding: .4rem;
  margin: .4rem;
  background: ${({ theme }) => theme.background.tag};
  border: .1rem solid ${({ theme }) => theme.border.highlight};
`;
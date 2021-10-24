import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  text-align: justify;

  a {
    color: ${({ theme }) => theme.fonts.color.link};
    text-decoration: none;

    :hover{
      text-decoration: underline;
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin: 1.6rem 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  ul, ol {
    margin: .8rem 3.2rem;
  }

  p, li, a{
    font-size: 1.6rem;
  }

  table{
    border-collapse: collapse;
    margin: 1.6rem 0;
    font-size: 1.6rem;
  }

  td, th{
    border: 1px solid ${({ theme }) => theme.border.primary};
    padding: .4rem;
  }

  pre {
    font-family: 'fira code';
    font-size: 1.2rem;
    background: ${({ theme }) => theme.background.code};
    margin: 1.6rem 0;
    border-radius: .4rem;
    border: .2rem solid ${({ theme }) => theme.border.highlight};
    padding: .8rem;
    color: ${props => props.theme.fonts.color.code};
    overflow: auto;
  }
`;
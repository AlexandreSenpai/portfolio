import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.nav`
  width: 100%;
  height: 5rem;
  position: fixed;
  background: rgba(21,26,31,0.5);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  width: 100%;
  max-width: 81.20rem;
  list-style: none;
  height: 100%;
  padding: 0 1.6rem;
  display: flex;
  align-items: center;
`;

export const ListItem = styled(motion.li)`
  margin-right: 1.6rem;
  font-size: 1.6rem;
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;

  transition: 100ms ease-in-out;
  
  :hover {
    cursor: ${props => props.hover ? 'pointer' : ''};
    border-bottom: 1px solid ${props => props.hover ? props.theme.fonts.color.link : 'transparent'};
  }
`;

export const Logo = styled.img`
  width: 2rem;
  
  transition: 100ms ease-in-out;

  :hover {
    cursor: pointer;
    transform: rotate(10deg);
  }
`;

export const NavigationLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.fonts.color.primary};
`;
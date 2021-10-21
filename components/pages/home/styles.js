import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
`;

export const LeftContainer = styled.div`
  width: 156px;
  display: flex;
  justify-content: center;
`;

export const UserPhotoHolder = styled(motion.div)`
  width: 97px;
  height: 97px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.fonts.color.highlight};
  overflow: hidden;
`;

export const UserPhoto = styled.img`
  width: 100%;
`;

export const RightContainer = styled(motion.div)`
  width: 656px;
`;

export const Highlight = styled.span`
  color: ${props => props.theme.fonts.color.highlight};
  font-weight: bold;
`;

export const LinkSpan = styled.span`
  color: ${props => props.theme.fonts.color.link};
  cursor: pointer;

  svg {
    color: ${props => props.theme.fonts.color.primary};
    margin-right: .8rem;
    margin-top: .3rem;
    top: .5rem;
    position: relative;
  }

  :hover{
    text-decoration: underline;
  }
`;

export const TextBox = styled(motion.div)`
  margin-bottom: 32px;
`;

export const Paragraph = styled.p`
  font-size: 1.6rem;
  font-family: 'Roboto';
  margin-bottom: 16px;
  text-align: justify;
  text-indent: 0px;
`;

export const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 32px;
`;

export const Hello = styled.p`
  font-size: 25px;
  margin-top: 20px;
`;

export const Icon = styled.img`
  width: 3rem;
`;
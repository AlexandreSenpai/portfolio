import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContainer = styled.main`
  width: 100%;
  max-width: 81.20rem;
  height: 100%;
  margin-top: 5rem;
  position: relative;
  z-index: 3;
`;

export const MainContainerHeader = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.2rem;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/bg.png");
    background-size: cover;
    filter: grayscale(100%) blur(2px);
  }
`;

export const AvatarContainer = styled.div`
  height: 100%;
  width: 34rem;
`;

export const Avatar = styled(motion.img)`
  width: 100%;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const HeaderTitleHolder = styled.div`
  padding: 32px;
`;

export const Title = styled(motion.h1)`
  font-size: 45px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: normal;
  color: ${props => props.theme.fonts.color.highlight};
  text-align: center;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const SubTitle = styled(motion.h3)`
  font-size: 25px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: normal;
  text-align: center;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;
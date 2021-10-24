import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-right: .4rem;
  padding: .2rem .4rem;
  border-radius: .4rem;
  border: .1rem solid ${({ theme }) => theme.border.highlight};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: lighter;
`;

export const Logo = styled.img`
  width: .9rem;
  height: .9rem;
  margin-right: .4rem;
`;
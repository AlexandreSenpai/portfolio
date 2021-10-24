import React, { useContext } from 'react';
import Link from 'next/link';

import { ThemeContext } from '../../contexts/theme.context';

import { Container, List, ListItem, Logo, NavigationLink, DarkMode, LightMode, ContentHolder } from './styles';

function Navbar() {

  const { themeProfile, toggleThemeProfile } = useContext(ThemeContext); 

  return(
    <Container>
      <ContentHolder>
        <List>
          <ListItem whileTap={{ scale: .9 }}>
            <Link href="/" passHref>
              <NavigationLink>
                <Logo src={ themeProfile === 'light' ? '/rabbit2.png' : '/rabbit.png' } />
              </NavigationLink>
            </Link>
          </ListItem>
          <ListItem>
            <strong>Alexandre Ramos</strong>
          </ListItem>
          <ListItem>
            |
          </ListItem>
          <ListItem hover={true} whileTap={{ scale: .9 }}>
            <Link href="/projects" passHref>
              <NavigationLink>Projetos</NavigationLink>
            </Link>
          </ListItem>
          <ListItem hover={true} whileTap={{ scale: .9 }}>
          <Link href="/posts" passHref>
              <NavigationLink>Postagens</NavigationLink>
            </Link>
          </ListItem>
        </List>
        <List>
          <ListItem
            onClick={toggleThemeProfile} 
            whileHover={{ scale: 1.2, rotateZ: 10 }}
            whileTap={{ scale: 1 }}
          >
            { themeProfile === 'light' ? <DarkMode /> : <LightMode /> }
          </ListItem>
        </List>
      </ContentHolder>
    </Container>
  );
}

export default Navbar;
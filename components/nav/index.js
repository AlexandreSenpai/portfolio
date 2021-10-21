import React from 'react';
import Link from 'next/link';

import { Container, List, ListItem, Logo, NavigationLink } from './styles';

function Navbar() {
  return(
    <Container>
      <List>
        <ListItem whileTap={{ scale: .9 }}>
          <Link href="/" passHref>
            <NavigationLink>
              <Logo src={'/rabbit.png'} />
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
    </Container>
  );
}

export default Navbar;
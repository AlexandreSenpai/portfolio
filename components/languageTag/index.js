import React from 'react';

import { Container, Title, Logo } from './styles';

function LanguageTag({ language }) {

  const [ languageMapping, setLanguageMapping ] = React.useState({
    python: '/programmingLanguages/python.png',
    javascript: '/programmingLanguages/javascript.png',
    java: '/programmingLanguages/java.png',
    csharp: '/programmingLanguages/csharp.png',
    ruby: '/programmingLanguages/ruby.png',
    go: '/programmingLanguages/go.png'
  });

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return(
    <Container>
      <Logo src={languageMapping[language]} />
      <Title>{ capitalizeFirstLetter(language) }</Title>
    </Container>
  );
}

export default LanguageTag;
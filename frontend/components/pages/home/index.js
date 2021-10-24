import React from 'react';
import { BsTwitter, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { fadeInUp, stagger } from '../../../animations';

import { Container, Hello, Highlight, LeftContainer, Paragraph, RightContainer, TextBox, UserPhoto, UserPhotoHolder, Title, LinkSpan, Icon, Error } from './styles';

function Home() {
  return(
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate">
      <LeftContainer>
        <UserPhotoHolder
          variants={fadeInUp}
          whileHover={{
            scale: 1.2
          }}
        >
          <UserPhoto src={'https://avatars.githubusercontent.com/u/32408382?s=400&u=e8b5dc2b32281ef7f40bb4d668b0ae84c982bb95&v=4'} />
        </UserPhotoHolder>
      </LeftContainer>
      <RightContainer variants={stagger}>
        <TextBox variants={fadeInUp}>
          <Hello>
            <Highlight>Aehooo!</Highlight><br/>
            Seja bem-vindo à minha página! <Icon src={'/bunny2.gif'} />
          </Hello>
        </TextBox>
        <TextBox
          variants={fadeInUp}
        >
          <Title>
            Sobre mim
          </Title>
          <Paragraph>
            Atualmente atuo como <Highlight>Desenvolvedor Backend</Highlight> no time de Google Cloud Platform da Hvar Consulting.<br /><br />
            No meu tempo livre gosto de desenhar, jogar e, acima de tudo, construir códigos e/ou sistemas inúteis religiosamente focados em algo relacionado a anime/mangá. Desde aplicações em real-time à scrappers. hahahaha
          </Paragraph>
        </TextBox>
        <TextBox
          variants={fadeInUp}
        >
          <Title>
            Como me encontrar?
          </Title>
          <Paragraph>
            Sinceramente, é bem tranquilo me encontrar pela internet, seja por redes de desenho ou de código, em todas você pode fácilmente me localizar procurando por: <Highlight>AlexandreSenpai</Highlight>. Mas listarei para vocês alguns links diretos:
          </Paragraph>
          <Paragraph>
            <LinkSpan><BsLinkedin /> @alexandre-r-152432134</LinkSpan><br />
            <LinkSpan><BsTwitter /> @AlexandreSenpa1</LinkSpan><br />
            <LinkSpan><BsYoutube /> @AlexandreSenpai</LinkSpan><br />
            <LinkSpan><BsYoutube /> @D E V - S E N P A I 魔王</LinkSpan>
          </Paragraph>
        </TextBox>
        <TextBox
          variants={fadeInUp}
        >
          <Title>
            Fatos aleatórios sobre mim
          </Title>
          <Paragraph>
            <Error><s>essa sessão só está aqui por que o github sugeriu</s></Error>
          </Paragraph>
          <Paragraph>
            <ul>
              <li>🔭 Atualmente estou trabalhando em: Um código para traduzir e editar automáticamente mangás.</li>
              <li>🌱 Atualmente estou aprendendo: Arquitetura de microsserviços.</li>
              <li>👯 Estou procurando colaborar em: Qualquer projeto, sério, se tiver espaço pra contrib tô dentro.</li>
              <li>💬 Me pergunte sobre: Python, as vezes, mesmo que eu não saiba, é algo novo que eu aprendo.</li>
              <li>📺 Estilo preferido de jogo: Rítmo. OSU É MUITO BOM.</li>
              <li>😄 Pronomes: Ele/Dele</li>
              <li>⚡ Fato engraçado: Sou péssimo em jogos de azar, mesmo gostando, e dou graças a Deus que caça-níquel é proíbido no Brasil.</li>
            </ul>
          </Paragraph>
        </TextBox>
      </RightContainer>
    </Container>
  );
}

export default Home;
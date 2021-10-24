import React from 'react';
import { useRouter } from 'next/router';
import { fadeInLeft, fadeInUp } from '../../animations'
import LanguageTag from '../LanguageTag';

import { Container, Description, DescriptionHolder, Thumbnail, ThumbnailHolder, Title, WIP, DONE, LeftDescriptionContainer, TitleHolder, TagHolder, RightDescriptionContainer, ActionButton } from './styles';

function ProjectCard({ project }) {

  const router = useRouter();

  const navigate_to = (url) => {
    router.push(url);  
  }

  return(
    <Container variants={fadeInLeft}>
      <ThumbnailHolder>
        <Thumbnail src={project?.thumbnail}/>
      </ThumbnailHolder>
      <DescriptionHolder variants={fadeInUp}>
        <LeftDescriptionContainer>
          <TitleHolder>
            <Title>{project?.title}</Title>
            <Description>{project.created_at} - {project?.status === 'DONE' ? <DONE>DONE</DONE> : <WIP>WIP</WIP>}</Description>
          </TitleHolder>
          <TagHolder>
            {
              project?.languages.length > 0 && project?.languages.map((language, index) => (<LanguageTag key={index} language={language}/>))
            }
          </TagHolder>
        </LeftDescriptionContainer>
        <RightDescriptionContainer>
          {project?.post_url && <ActionButton whileTap={{ scale: .98 }} onClick={() => navigate_to(project?.post_url)}>Postagem</ActionButton>}
          {project?.demo_url && <ActionButton whileTap={{ scale: .98 }} onClick={() => navigate_to(project?.demo_url)}>Demo</ActionButton>}
          {project?.code_url && <ActionButton whileTap={{ scale: .98 }} onClick={() => navigate_to(project?.code_url)}>Código Fonte</ActionButton>}
        </RightDescriptionContainer>
      </DescriptionHolder>
    </Container>
  );
}

export default ProjectCard;
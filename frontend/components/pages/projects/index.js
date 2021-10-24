import React from 'react';
import { stagger } from '../../../animations';
import ProjectCard from '../../projectCard';

import { Container, PageTitle, PageTitleHolder, ProjectsContainer } from './styles';

function Projects({ projects }) {
  return(
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate">
      <PageTitleHolder>
        <PageTitle>
          Projetos
        </PageTitle>
      </PageTitleHolder>
      <ProjectsContainer variants={stagger} >
        {
          projects.length > 0 && projects.map(project => (<ProjectCard key={project.id} project={project} />))
        }
      </ProjectsContainer>
    </Container>
  );
}

export default Projects;
import Head from 'next/head'
import MainLayout from '../components/layouts/main'
import Projects from '../components/pages/projects'

import { api } from '../services/api'

export default function Home({ projects }) {
  return (
    <MainLayout>
      <Head>
        <title>Projetos | Alexandre Ramos</title>
      </Head>
      <Projects projects={projects || []}/>
    </MainLayout>
  )
}

export const getStaticProps = async ({ res }) => {

  const projects = await api.get('/projects')

  return {
    props: {
      projects: projects?.data?.projects,
    },
    revalidate: 3600
  }
}
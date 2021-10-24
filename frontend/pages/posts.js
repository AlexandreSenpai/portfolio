import Head from 'next/head'
import MainLayout from '../components/layouts/main'
import Posts from '../components/pages/posts'
import { api } from '../services/api'

export default function Home({ posts }) {
  return (
    <MainLayout>
      <Head>
        <title>Postagens | Alexandre Ramos</title>
      </Head>
      <Posts posts={posts || []}/>
    </MainLayout>
  )
}

export const getStaticProps = async ({ res }) => {

  const posts = await api.get('/posts')

  return {
    props: {
      posts: posts?.data?.posts,
    },
    revalidate: 3600
  }
}
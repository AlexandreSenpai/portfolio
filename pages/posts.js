import Head from 'next/head'
import MainLayout from '../components/layouts/main'
import Posts from '../components/pages/posts'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Postagens | Alexandre Ramos</title>
      </Head>
      <Posts />
    </MainLayout>
  )
}

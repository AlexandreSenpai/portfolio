import Head from 'next/head'
import MainLayout from '../components/layouts/main'
import NotFound from '../components/pages/404'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>404 - Página não encontrada | Alexandre Ramos</title>
      </Head>
      <NotFound />
    </MainLayout>
  )
}

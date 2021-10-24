import Head from 'next/head'
import MainLayout from '../components/layouts/main'
import HomePage from '../components/pages/home'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Homepage | Alexandre Ramos</title>
      </Head>
      <HomePage />
    </MainLayout>
  )
}

import Head from 'next/head'
import MainLayout from '../components/layouts/main'
import HomePage from '../components/pages/home'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Homepage | Alexandre Ramos</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2625311056412203" crossorigin="anonymous"></script>
      </Head>
      <HomePage />
    </MainLayout>
  )
}

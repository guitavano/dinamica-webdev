import Image from 'next/image'
import Header from './components/Header'
import Banner from './components/Banner'
import Head from 'next/head'

export default function Home() {
  return (
    <main className="">
      <Head>
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      </Head>
      <Header></Header>
      <Banner></Banner>
    </main>
  )
}

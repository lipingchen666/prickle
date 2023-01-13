import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import NavBarVistor from '../components/navigation/NavBarVistor'
import NavBarCandidates from '../components/navigation/NavBarCandidates'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Prickle</title>
        <meta name="description" content="an app that friends people jobs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <NavBar /> */}
      {/* <NavBarVistor /> */}
      <NavBarCandidates />
    </>
  )
}

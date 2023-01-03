import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>About UPTA</title>
        <meta name="about"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main className={styles.main}>
          <div className={styles.description}>
            <h1 className={styles.headings}>
                About UPTA
            </h1>

          
          </div>
        </main>
    </>
  )
}

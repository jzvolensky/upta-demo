import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const inter = Inter({ subsets: ['latin'] })




export default function Changelog() {
  return (
    <>
      <Head>
        <title>Changelog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className={styles.headings}>
            Changelog:
          </h1>
          <Image
            src="/../public/Gear_icon_changelog.png"
            alt="Changelog gear"
            className={styles.logo}
            width={130}
            height={125}
            priority
            />
        </div>
        <div className={styles.list_parent}>
          <div className={styles.changelog_entry}>
            <h2>Version 0.0.1 released: 16/12/2022</h2>
            <h3>General changes:</h3>
            <ul className={styles.changelog_list}> 
              <li> Initial release of the platform</li>
              <li> Creation of supporting subpages (About, Github, Solid, and Changelog)</li>
              <li> Added placeholder buttons for login functionality</li>  
            </ul>
          </div>
          <div className={styles.changelog_entry}>    
            <h2>Version 0.0.5 released: 03/01/2022</h2>
            <h3>General changes:</h3>
            <ul className={styles.changelog_list}>
              <li>Completely reworked file structure for easier linking and further development</li>
              <li>Initial login capabilities on the user portal page, requires restyling and a bit of polish</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
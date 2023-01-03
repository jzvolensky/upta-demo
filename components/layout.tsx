import { SessionProvider } from "@inrupt/solid-ui-react";
import Head from 'next/head';
import Link from 'next/link';
import Image from '../components/image';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import ConnectSolid from "./solidconnect";

const name = 'UPTA';
export const siteTitle = 'UPTA Solid App';

export default function Layout({ children, home, role }: {
    children: React.ReactNode,
    home?: boolean,
    role?: string,
}) {
    return (
        <div className={[styles.container, role].join(" ")}>
            <SessionProvider>

                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="Learn how to build a personal website using Next.js"
                    />
                    <meta
                        property="og:image"
                        content={`https://og-image.vercel.app/${encodeURI(
                            siteTitle,
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <header className={styles.header}>
                    {home ? (
                        <>
                            <Image
                                priority
                                src="/UPTAlogo.svg"
                                className={utilStyles.borderCircle}
                                height={42}
                                width={42}
                                alt={name}
                            />
                            <h1 className={utilStyles.heading2Xl}>{name}</h1>
                        </>
                    ) : (
                        <>
                            <Link href="/">

                                <Image
                                    priority
                                    src="UPTAlogo.svg"
                                    className={utilStyles.borderCircle}
                                    height={100}
                                    width={150}
                                    alt={name}
                                />

                            </Link>
                        </>
                    )}
                    <div className={styles.middle} />
                    <div className={styles.right}>
                        <ConnectSolid />
                    </div>
                </header>
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            ← Back to homepage
                        </Link>
                    </div>
                    
                )}
                <footer className={styles.footer}>
                    <a href="https://solidproject.org/" target="_blank" rel="noopener noreferrer">
                        Powered by{" "}
                        <span className={styles.logo}>
                            <Image
                                src="/solid-emblem.svg"
                                alt="Solid Project"
                                width={72}
                                height={64}
                            />
                        </span>
                    </a>
                </footer>

            </SessionProvider>
        </div>
    );
}
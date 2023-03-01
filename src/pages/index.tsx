import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@daud/styles/Home.module.css'
import { useEffect } from 'react';
import axios from "axios";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const clickLogData = (data: string) => {
    let string = [data];
    console.log('string:: ', string[1]); // undefined

    const arr = [[1, 2, 3]];
    // ❌ Cannot read properties of undefined (reading '0')
    console.log('array:: ', arr); // undefined
    console.log(arr[1][0]);
    // return objData = null
  }

  const fetchClick = () => {
    fetchFootballers();
  }
  const fetchFootballers = async () => {
    await axios.get("http://localhost:3000/api/footballers")
      .then((res) => {
        console.log(res.data)
      })
  }

  const handleClick = () => {
    const footballersData = (state: any) => state?.footballers?.footballersData;
    alert('footballersData: ' + footballersData)
  }

  return (
    <>
      <Head>
        <title>Daud Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Try using sentry with session replay --&nbsp;
            <a style={{ cursor: 'pointer' }} href='https://blog.sentry.io/2023/02/16/introducing-session-replay-from-sentry-bridge-the-gap-between-code-and-ux/?utm_medium=site&utm_source=pendo&utm_campaign=session-replay-gtm-fy24q1-session-replay&utm_content=blog-post'>https://sentry Blog open replay</a>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <button
            onClick={() => clickLogData('data')}
            className={styles.card}
          >
            <h2 className={inter.className}>
              Console log <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </button>

          <button
            onClick={fetchClick}
            className={styles.card}
          >
            <h2 className={inter.className}>
              Fetch <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </button>

          <button
            onClick={() => { throw new Error("test") }}
            className={styles.card}
          >
            <h2 className={inter.className}>
              throw Error <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </button>

          <button
            onClick={handleClick}
            className={styles.card}
          >
            <h2 className={inter.className}>
              handle Click <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </button>
        </div>
      </main>
    </>
  )
}



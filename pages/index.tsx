import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Test App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <h1>Homepage</h1>
        <Link href="/about">About</Link>
      </nav>

      <div className='pt-5'>
        <h2 className='text-cyan-700'>Hello Next Test</h2>
      </div>
    </>
  )
}

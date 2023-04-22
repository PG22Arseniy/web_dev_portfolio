import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Arseniy Web Developer</title> 
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href='/projects'> My Projects </Link> 
        </nav>
      </header>
      
      <main>
        <div>
          <h1> Arseniy Skudaev </h1> 
        </div>
      </main>
    </>
  )
}

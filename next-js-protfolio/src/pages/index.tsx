import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Layout from '@/components/Layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <Layout title='Portfolio'> 
    <h1> Portfolio </h1> 
  </Layout>
  )
}

import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Layout from '@/components/Layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <Layout title='Portfolio'> 
    <h1> Frontend Developer / UI Engineer</h1> 
    <div className='portfolioPage'>
      <div className='content'>
        <img src="/images/MyPhoto.jpeg" alt='my photo'/> 
        <div className='skills_about'>
          <div className='about'>
            <p>
              I have 3 years of professional experience in web development. I'm hardworking, passionate and motivated developer with excellent problem solving skills and work ethic. I love working in a team, collaborating with designers and other programmers.
            </p>
            <a href='https://github.com/PG22Arseniy?tab=repositories' target="_blank" rel="noopener noreferrer"> Github </a>
            <p> +972 55-5617506 </p>
            <p> arseniyskudaev@gmail.com </p> 
          </div>
          <div className='skills'>
              <h3>Skills: </h3>
              <ul> 
                <li>JavaScript / TypeScript </li>
                <li>OOP</li>
                <li>HTML, CSS/SCSS</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Redux</li>
                <li>Next js</li>
                <li>Vue js</li>
                <li>SQL</li>
                <li>Mongo DB</li>
                <li>Firebase</li>
                <li>Open AI</li>
              </ul>
          </div>

        </div>
      </div>

    </div>
  </Layout>
  )
}

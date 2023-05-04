import '@/styles/globals.css'
import '@/styles/header.scss'
import '@/styles/projects.scss' 
import '@/styles/resume.scss' 
import '@/styles/footer.scss'  
import '@/styles/portfolio.scss'  
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

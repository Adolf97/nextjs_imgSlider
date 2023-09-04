import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'
import { Lato } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const lato = Lato({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Crunchyroll - Watch Popular Anime & Read Manga Online',
  description: 'This is a crunchyroll clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

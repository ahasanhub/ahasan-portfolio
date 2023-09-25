
import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ahasan',
  description: 'Ahasan Portfolio',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className} >        
        <Navbar></Navbar>        
        <main>{children}</main>
       <Footer></Footer>
      </body>
    </html>
  )
}

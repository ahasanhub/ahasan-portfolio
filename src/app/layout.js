
import './globals.css'
import 'boxicons/css/boxicons.min.css'

import { Inter } from 'next/font/google'
import SideBar from '@/components/Sidebar';

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
        {/* <i className="bi bi-facebook mobile-nav-toggle d-xl-none"></i> */}
        <Navbar></Navbar>
        {/* <SideBar></SideBar>         */}
        <main id="main">{children}</main>
       <Footer></Footer>
      </body>
    </html>
  )
}

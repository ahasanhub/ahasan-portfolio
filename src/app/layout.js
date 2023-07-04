import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css'

import { Inter } from 'next/font/google'
import SideBar from '@/components/Sidebar';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ahasan',
  description: 'Ahasan Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {/* ======= Mobile nav toggle button ======= */}
        {/* <i class="bi bi-list mobile-nav-toggle d-xl-none"></i> */}
        <i class="bx bxl-list mobile-nav-toggle d-xl-none"></i>
        <SideBar></SideBar>

        <main id="main"> {children}</main>
      </body>
    </html>
  )
}

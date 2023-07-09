"use client"
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css'

import { Inter } from 'next/font/google'
import SideBar from '@/components/Sidebar';
import { Button } from 'react-bootstrap';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ahasan',
  description: 'Ahasan Portfolio',
}
function handleClick() {
  alert('Hello');
}
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <SideBar></SideBar>
        <main id="main">{children}</main>
      </body>
    </html>
  )
}

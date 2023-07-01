import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css'

import { Inter } from 'next/font/google'
import Image from 'next/image';
import profilepic from '/public/img/profile-img.jpg'

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
        <header id="header">
          <div className="d-flex flex-column">

            <div className="profile">
              <Image src={profilepic} alt="profile picture" className="img-fluid rounded-circle"></Image>

              <h1 className="text-light"><a href="index.html">Ahasan Habib</a></h1>
              <div className="social-links mt-3 text-center">
                <a href="#" className="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <li><a href="/" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                <li><a href="/about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                <li><a href="/blog" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Blog</span></a></li>
                <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i>
                  <span>Portfolio</span></a></li>
                <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
                <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}

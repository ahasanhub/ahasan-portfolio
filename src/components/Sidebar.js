
import Image from 'next/image';
import profilepic from '/public/img/profile-img.jpg'

const SideBar = () => {
    return <header id="header">
        <div className="d-flex flex-column">

            <div className="profile">
                <Image src={profilepic} alt="profile picture" className="img-fluid rounded-circle"></Image>

                <h1 className="text-light"><a href="index.html">Ahasan Habib</a></h1>
                <div className="social-links mt-3 text-center">
                    <a href="https://github.com/ahasanhub" target="_blank"><i className="bx bxl-github"></i></a>
                    <a href="https://www.linkedin.com/in/ahasan03/" target="_blank"><i className="bx bxl-linkedin"></i></a>
                    <a href="mailto:shobuz.cse03@gmail.com"><i className="bx bxl-gmail"></i></a>
                    <a href="https://www.youtube.com/channel/UCwZh490PeF0v17D8tVU_nBA" target="_blank"><i className="bx bxl-youtube"></i></a>
                    <a href="https://stackoverflow.com/users/2328444/ahasan" target="_blank"><i className="bx bxl-stack-overflow"></i></a>

                </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
                <ul>
                    <li><a href="/" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="/about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                    <li><a href="/blog" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Blog</span></a></li>
                    {/* <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i>
                        <span>Portfolio</span></a></li>
                    <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
                    <li><a href="/contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li> */}
                </ul>
            </nav>
        </div>
    </header>;
}
export default SideBar;
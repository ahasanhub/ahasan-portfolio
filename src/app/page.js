import Image from 'next/image'
import styles from './page.module.css'
import bg from '/public/hero-bg.jpg'
import profileimg from '/public/img/profile-img.jpg'

export default function Home() {
  return (
    <>
      <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
        <div class="hero-container" data-aos="fade-in">
          <h1>Ahasan Habib</h1>
          <p>I'm <span class="typed"
            data-typed-items="Full-Stack Developer, Freelancer, Software Architect, Dynamics 365 Developer"></span></p>
        </div>
      </section>
      <main id="main">


        <section id="about" class="about">
          <div class="container">

            <div class="section-title">
              <h2>About</h2>
              <p>Highly skilled and innovative Software Engineer with 14+ years of expertise in challenging environments.
                Demonstrated
                expertise in delivering creative and performance-driven solutions with a strong focus on development. Strong
                project
                management and team leadership skills with a customer-centric approach. Proven track record as a Dynamics
                365
                NAV/Business Central developer, specializing in the power sector industry, with over 6 years of experience
                planning,
                developing, and implementing Microsoft Dynamics NAV and Business Central solutions.</p>
            </div>

            <div class="row">
              <div class="col-lg-4" data-aos="fade-right">
                <Image src={profileimg} className='img-fluid' alt=''></Image>
              </div>
              <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>Full-Stack Software Engineer |Web, Moble, Dynamics 365 BC/NAV</h3>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                  magna aliqua.
                </p>
                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span>
                      </li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                    </ul>
                  </div>
                </div>
                <p>
                  Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et
                  ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                  Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                </p>
              </div>
            </div>

          </div>
        </section>


        <section id="facts" class="facts">
          <div class="container">

            <div class="section-title">
              <h2>Facts</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="row no-gutters">

              <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                <div class="count-box">
                  <i class="bi bi-emoji-smile"></i>
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                    class="purecounter"></span>
                  <p><strong>Happy Clients</strong> consequuntur quae</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                <div class="count-box">
                  <i class="bi bi-journal-richtext"></i>
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1"
                    class="purecounter"></span>
                  <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                <div class="count-box">
                  <i class="bi bi-headset"></i>
                  <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1"
                    class="purecounter"></span>
                  <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                <div class="count-box">
                  <i class="bi bi-people"></i>
                  <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1"
                    class="purecounter"></span>
                  <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                </div>
              </div>

            </div>

          </div>
        </section>


        <section id="skills" class="skills section-bg">
          <div class="container">

            <div class="section-title">
              <h2>Skills</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="row skills-content">

              <div class="col-lg-6" data-aos="fade-up">

                <div class="progress">
                  <span class="skill">HTML <i class="val">100%</i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">CSS <i class="val">90%</i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">JavaScript <i class="val">75%</i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>

              </div>

              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                <div class="progress">
                  <span class="skill">PHP <i class="val">80%</i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">WordPress/CMS <i class="val">90%</i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">Photoshop <i class="val">55%</i></span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>


        <section id="resume" class="resume">
          <div class="container">

            <div class="section-title">
              <h2>Resume</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="row">
              <div class="col-lg-6" data-aos="fade-up">
                <h3 class="resume-title">Sumary</h3>
                <div class="resume-item pb-0">
                  <h4>Alex Smith</h4>
                  <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and
                    developing user-centered digital/print marketing material from initial concept to final, polished
                    deliverable.</em></p>
                  <ul>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </div>

                <h3 class="resume-title">Education</h3>
                <div class="resume-item">
                  <h4>Master of Fine Arts &amp; Graphic Design</h4>
                  <h5>2015 - 2016</h5>
                  <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                  <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui
                    ut dignissimos deleniti nerada porti sand markend</p>
                </div>
                <div class="resume-item">
                  <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                  <h5>2010 - 2014</h5>
                  <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                  <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius
                    unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart
                    dila</p>
                </div>
              </div>
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 class="resume-title">Professional Experience</h3>
                <div class="resume-item">
                  <h4>Senior graphic design specialist</h4>
                  <h5>2019 - Present</h5>
                  <p><em>Experion, New York, NY </em></p>
                  <ul>
                    <li>Lead in the design, development, and implementation of the graphic, layout, and production
                      communication materials</li>
                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the
                      project. </li>
                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the
                      design</li>
                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                  </ul>
                </div>
                <div class="resume-item">
                  <h4>Graphic design specialist</h4>
                  <h5>2017 - 2018</h5>
                  <p><em>Stepping Stone Advertising, New York, NY</em></p>
                  <ul>
                    <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and
                      advertisements).</li>
                    <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                    <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                    <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>




        <section id="services" class="services">
          <div class="container">

            <div class="section-title">
              <h2>Services</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                <div class="icon"><i class="bi bi-briefcase"></i></div>
                <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                  occaecati cupiditate non provident</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="icon"><i class="bi bi-card-checklist"></i></div>
                <h4 class="title"><a href="">Dolor Sitema</a></h4>
                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat tarad limino ata</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                <div class="icon"><i class="bi bi-bar-chart"></i></div>
                <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                <div class="icon"><i class="bi bi-binoculars"></i></div>
                <h4 class="title"><a href="">Magni Dolores</a></h4>
                <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                <div class="icon"><i class="bi bi-brightness-high"></i></div>
                <h4 class="title"><a href="">Nemo Enim</a></h4>
                <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                <div class="icon"><i class="bi bi-calendar4-week"></i></div>
                <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
                <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                  soluta nobis est eligendi</p>
              </div>
            </div>

          </div>
        </section>





      </main>



      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>
    </>
  )
}

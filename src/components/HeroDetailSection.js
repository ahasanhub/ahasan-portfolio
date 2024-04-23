import Image from 'next/image'
//import fullstack from '../../public/images/site/full-stack-development.png'
import fullstack from '../../public/images/site/fullstack-developer.png'
import dynamicsnav from '../../public/images/site/dynamics-nav-bc.png'
import devops from '../../public/images/site/Devops.png'

const HeroDetailSection = () => {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                    <h2>What I do?</h2>
                </div>
                <div >
                    <div>
                       <Image src={fullstack} height={500} width={600} alt='profile picture'></Image>
                    </div>
                    
                    <div>
                        <h1 className='text-2xl font-bold text-gray-800 md:text-3xl'>Full Stack Development</h1>
                        <p className="fst-italic">
                            A passionate Full Stack Software Developer 🚀 having an experience of building Web, Mobile and Enterprise Business Applications .
                        </p>
                        <ul className='list-disc ml-4'>
                            <li><span>A skilled full-stack software engineer with wide-ranging expertise, adept at developing web, mobile, and enterprise business applications.</span></li>
                            <li><span>Proficient in every phase of the Full Stack Development lifecycle, starting from gathering requirements and crafting Software Requirement Specifications (SRS), through High-Level Design (HLD) and Low-Level Design (LLD) to shape the architecture. Capable of creating database designs, crafting both front-end and back-end components, and establishing databases. Proficient in deploying solutions and conducting comprehensive testing.</span></li>
                            <li><span>Extensive experience handling the complete product lifecycle, including requirements analysis, data modeling, design, development, testing, documentation, and product delivery.</span></li>
                            <li><span>Skilled in the design and development of web applications across various iterations of .NET Framework, .NET Core, and .NET Standard, as well as Node.js and Next.js. Utilizes technologies including C#, ASP.NET MVC, ASP.NET Core MVC, Razor pages, and Blazor, alongside JavaScript, TypeScript, and React.js.</span></li>
                            <li><span>Created sophisticated front-end interfaces for Single Page Applications (SPAs) employing Vue, Angular, React, TypeScript, jQuery, Ajax, JSON, HTML, CSS, SASS, LESS, Bootstrap, Tailwind, and Angular Material Design UI components.</span></li>
                            <li><span>Developed SOAP and REST APIs using technologies such as Web service, WCF, Web API, Express.js, and Next.js.</span></li>
                            <li><span>Solid understanding of relational databases (e.g., SQL Server,MySQL,MariaDB, PostgreSQL) and NoSQL databases (e.g., MongoDB, Redis).</span></li>
                            <li><span>Expertise in integrating APIs for PowerBI, MicroStrategy, Cube, Tabular database, and SharePoint with .NET-based applications.</span></li>
                            <li><span>Participated actively and made contributions to various Scrum ceremonies, including Standup meetings, Backlog Refinement sessions, Story creation and estimation, Task breakdown, Sprint Planning and Review, and Retrospective discussions.</span></li>
                            <li><span>Skilled in developing containerized applications using Azure, including Datastore, CI/CD, and Docker.</span></li>
                            <li><span>Utilized Swagger, Postman, and Fiddler for the documentation, debugging, and testing of API endpoints.</span></li>
                            <li><span>Developed efficient Data Access Layers using Entity Framework, Entity Framework Core, Dapper, AutoMapper, and Unit of Work patterns.</span></li>
                            <li><span>Demonstrated proficiency in implementing various design patterns and principles like Singleton, Repository, Mediator, Dependency Injection, and MVC as required.</span></li>
                            <li><span>Developed complex SQL queries involving Joins, Constraints, Transactions, Normalization, Functions, Stored Procedures, Views, Triggers, Indexes, and Cursors.</span></li>
                            <li><span>Practiced Test-Driven Development (TDD) and demonstrated skills in writing Unit and Integration Tests using NUnit, xUnit, MSTest, Moq, Cypress, and Jest.</span></li>
                                                        
                        </ul>
                       
                    </div>
                
               <div>
                <Image src={dynamicsnav} height={500} width={600} alt='profile picture'></Image>
               </div>
                    
                    <div>
                        <h1 className='text-2xl font-bold text-gray-800 md:text-3xl'>Dynamics 365 BC/NAV Development</h1>
                        <p className="fst-italic">
                            Experienced Dynamics NAV and Dynamics 365 Business Central Technical Consultant and developer with a proven track record in handling various versions of NAV and Business Central. Engaged in projects of varying scales, encompassing minor customizations, creation of new apps/modules, and seamless integration with third-party software.
                        </p>
                        <ul className='list-disc pl-4'>
                            <li><span>Experience in installing, configuring, developing, and delivering Microsoft Dynamics NAV/BC.</span></li>
                            <li><span>Solid understanding of C/AL (C/SIDE) and AL languages, enabling custom development, including creating tables, pages, reports, codeunits, and queries.</span></li>
                            <li><span>Skilled in identifying and resolving issues by debugging code and performing comprehensive testing to ensure quality and reliability.</span></li>
                            <li><span>Experienced in upgrading Dynamics NAV to Business Central, including data migration and code conversion.</span></li>
                            <li><span>Proficient in working with development environments such as C/SIDE, AL, and Visual Studio Code for Business Central development and deployment.</span></li>
                            <li><span>Hands-on experience in integrating Dynamics NAV/BC with external systems using web services,OData and APIs.</span></li>
                            <li><span>Strong understanding of designing and implementing approval workflows in Dynamics NAV/BC to automate and streamline business processes.</span></li>
                            <li><span>Knowledge and experience in utilizing Power BI for data visualization and creating insightful reports, as well as working with RDLC reports.</span></li>
                            <li><span>Proficient in customizing and extending Dynamics NAV/BC functionalities using various development techniques, including creating custom fields, forms, and workflows.</span></li>
                            <li><span>Knowledge of performance optimization techniques, such as index management, query optimization, and code refactoring, to enhance the speed and efficiency of NAV/BC solutions.</span></li>
                            <li><span>Experience with internal stakeholders to understand the technical requirements and scope out modifications and custom development.</span></li>
                            <li><span>Proficient in using source control systems (such as Git) and versioning tools to manage code changes and collaborate with development teams.</span></li>
                            <li><span>Experience with the delivery of high-quality solutions according to set timelines and budget</span></li>
                        </ul>
                        
                    </div>
                {/* </div>
                <div className="grid grid-cols-2 gap-4 my-8"> */}
                    <div>
                        <Image src={devops} height={500} width={600} alt='profile picture'></Image>
                    </div>
                    
                    <div>
                        <h1 className='text-2xl font-bold text-gray-800 md:text-3xl'>Cloud nad DevOps</h1>
                        
                        <ul className='list-disc pl-4'>
                            <li><span>Proficiency in one or more major cloud platforms like Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), or others.</span></li>
                            <li><span>Knowledge of serverless computing concepts and experience with serverless frameworks like AWS Lambda, Azure Functions, or Google Cloud Functions.</span></li>
                            <li><span>Understanding of virtual networks, subnets, load balancers, and security groups within cloud environments.</span></li>
                            <li><span>Utilizing cloud storage solutions like Amazon S3, Azure Blob Storage, Google Cloud Storage for data management.</span></li>
                            <li><span>Experience with managed database services such as Amazon RDS, Azure SQL Database, or Google Cloud SQL.</span></li>
                            <li><span>Implementing security measures and identity management using services like AWS IAM, Azure Active Directory, or Google Cloud Identity and Access Management.</span></li>
                            <li><span>Setting up and automating CI/CD pipelines using tools like Jenkins, GitLab CI/CD, CircleCI, or cloud-native services like AWS CodePipeline.</span></li>
                            <li><span>Proficiency in using Git for version control and collaborating with teams.</span></li>
                            <li><span>Utilizing tools like Slack, Microsoft Teams, or other collaboration platforms to enhance communication and coordination among teams.</span></li>
                            <li><span>Fostering a culture of collaboration, continuous improvement, and agility within the development and operations teams.</span></li>
                            
                            
                        </ul>
                        
                    </div>
                </div>
            </div>

        </section>);
}
export default HeroDetailSection;
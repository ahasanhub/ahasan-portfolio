"use client"
import Image from 'next/image'
import heorBg from '../../public/images/site/hero-bg.jpg'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
    return (
        <section id="hero" className="relative">
            <Image
                src={heorBg}                 
                 fill                
                 sizes="100vw"
                 style={{ objectFit: "cover" }}
                 quality={100}
            ></Image>
            <div className='hero-container' >
                <h1>Ahasan Habib</h1>
                <p><strong className='text-rose-600'>I'm </strong><TypeAnimation
                    sequence={[
                        'Full-Stack Software Developer',
                        2000,
                        'Dynamics 365 Business Central Developer',
                        2000,
                        'Dynamics 365 NAV Developer',
                        2000,
                        'Software  Generalist',
                        2000,
                        'Software Architect',
                        2000,
                        'Technology Enthusiast',
                        2000,                        
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                />
                </p>

            </div>
        </section>);
}

export default HeroSection;
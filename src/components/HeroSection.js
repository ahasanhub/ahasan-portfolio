"use client"
import Image from 'next/image'
import bg from '/public/img/hero-bg.jpg'
import { TypeAnimation } from 'react-type-animation';
const HeroSection = () => {
    return (<section id="hero" className="d-flex flex-column justify-content-left align-items-left">
        <Image
            src={bg}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            quality={100}
        ></Image>
        <div className='hero-container' >
            <h1>Ahasan Habib</h1>
            <p>I'm <TypeAnimation
                sequence={[
                    'Full-Stack Software Developer',
                    2000,
                    'Dynamics 365 NAV/BC Developer',
                    2000,
                    'Software  Generalist',
                    2000,
                    'Software Architect',
                    2000,
                    'Team Lead',
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
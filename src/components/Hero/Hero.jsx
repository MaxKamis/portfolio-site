import "./Hero.scss";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {

   

    return (
        <section className="hero">
            <div className="hero__content">
                <h3 className="hero__title">Hello, I'm <span className="second-span" >Max</span></h3>
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'I am a Full Stack Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'I am Front End Developer',
                                1000,
                                'I am Back End Developer',
                                1000,
                                'A problem solver',
                                1000
                            ]}
                            wrapper="h5"
                            speed={50}
                            className="animation"
                            repeat={Infinity}
                        />
                </ScrollAnimation>


                <div className="hero__icons">
                    <a href="https://github.com/MaxKamis" target="_blank" className="hero__icon">
                        <FaGithub className="social-icons" />
                    </a>
                    <a href="https://www.linkedin.com/in/max-kamis-99066b8a/" target="_blank" className="hero__icon">
                        <FaLinkedin className="social-icons" />
                    </a>               
                </div>
            </div>
        </section>
    );
}   

export default Hero;
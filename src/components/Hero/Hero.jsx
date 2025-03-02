import "./Hero.scss";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";


function Hero() {
    return (
        <section className="hero">
            <div className="hero__content">
                <h3 className="hero__title">Hello, It's Me</h3>
                <h1 className="hero__name">Max Kamis</h1>
                <h3 className="hero__title">I'm a <span>Full Stack Developer</span></h3>
                <p className="hero__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat maxime voluptatum quisquam tempora pariatur a sed praesentium molestias corporis repellendus unde aliquam officia dolore animi incidunt, eveniet molestiae quo?</p>
                
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
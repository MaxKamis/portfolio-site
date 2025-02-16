import "./Hero.scss";
import Resume from "../../assets/Max-Kamis-Dev-Resume.pdf";
import gitHubIcon from "../../assets/github-light.svg";
import linkedInIcon from "../../assets/linkedin-light.svg";
import heroImage from "../../assets/maxPhoto.png";

function Hero() {
    return (
        <section className="hero">
            <div className="hero__content">
                <img src={ heroImage } alt="Profile picture of Max Kamis" className="hero__img" />
            </div>
            <div className="hero__info">
                <h1 className="hero__title">Max Kamis</h1>
                <h3 className="hero__subtitle">Full Stack Developer</h3>
            </div>
            <span className="hero__icons">
                <a href="https://github.com/MaxKamis" target="_blank" className="hero__icon">
                    <img src={gitHubIcon} alt="Github icon" className="icons" />
                </a>
                <a href="https://www.linkedin.com/in/max-kamis-99066b8a/" target="_blank" className="hero__icon">
                    <img src={linkedInIcon} alt="LinkedIn icon" className="icons" />
                </a>
            </span>
            <a href={Resume} download>
                <button className="hover">Resume</button>
            </a>

        </section>
    );
}   

export default Hero;
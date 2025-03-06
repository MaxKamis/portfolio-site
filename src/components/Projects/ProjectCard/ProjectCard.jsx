import "./ProjectCard.scss";
import { ProjectList } from "../../../data/ProjectData";
import ScrollAnimation from "react-animate-on-scroll";

export default function ProjectCard() {
    return (
        <>
            {ProjectList.map((list, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                    <div className="card">
                        <div className="card__left">
                            <img src={list.img} alt={list.name} />
                        </div>
                        <div className="card__right">
                            <h4>{list.title}</h4>
                            <p>{list.description}</p>
                            <div className="techCardContainer">
                                {list.tech_stack.map((tech, index) => (
                                    <div className="techCard" key={index}>{tech}</div>
                                ))}
                            </div>
                            <div className="card__links">
                                {list.github_url && list.github_url.length > 0 && (
                                    <a
                                        className="btn SecondaryBtn btn-shadow"
                                        href={list.github_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Github
                                    </a>
                                )}
                                {list.demo_url && list.demo_url.length > 0 && (
                                    <a
                                        className="btn PrimaryBtn btn-shadow"
                                        href={list.demo_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Demo ➜
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            ))}
        </>
    );
}


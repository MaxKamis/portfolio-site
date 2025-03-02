import "./Projects.scss";
import { BsCodeSlash } from "react-icons/bs";


function Projects() {
    return (
        <section className="projects">
            <h2 className="projects__heading">Projects</h2>

            <div className="projects__container">
                <div className="projects__card">
                    <BsCodeSlash />
                    <h3 className="projects__name">Project Name</h3>
                    <p className="projects__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat maxime voluptatum quisquam tempora pariatur a sed praesentium molestias corporis repellendus unde aliquam officia dolore animi incidunt, eveniet molestiae quo?</p>
                    <a href="#" className="projects__link">View Project</a>
                </div>
            </div>    
        </section>        
    );
}

export default Projects;
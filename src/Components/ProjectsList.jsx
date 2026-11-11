import Project from "./Project"
import projects from "../data/Projects.js"

// Returns a component which renders a list of projects alongisde a header
// and subheader
export default function ProjectsList() {
    return (
        <>
            <div id="projects" className='project-header'>
                <h3 className='header'>
                    Projects
                </h3>
                <p className='project-body'>
                    A showcase of my past projects over the years.
                </p>
            </div>
            <div className='projects-container'>
                {projects.map((project) => (
                    <Project
                        key={project.name}
                        {...project}
                    />
                ))}
            </div>

        </>
    )
}

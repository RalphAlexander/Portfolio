import TechBadge from "./TechBadge";
import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";

// @param name - string name of the project
// @param description - string description of the project
// @param technologies - string list of technologies used of the project
// @param imgSrc - the filepath of an image to be rendered in the
// project component
// @param link - the link to the website of the project if applicable
// @param ghLink - the link to the GitHub repo of the project
//
// Returns a project component which renders a card with links to the
// project repo and link to the website if possible
export default function Project({
    name,
    description,
    technologies = [],
    imgSrc,
    imgAlt,
    link,
    ghLink
}) {
    return (
        <div className='project-card-container'>
            <div className='project-card hoverable-div'>
                <div className='card-header'>
                    <div className="project-header-top">
                        <h3 className="project-title">{name}</h3>

                        <div className="header-links">

                            {ghLink && (
                                <a
                                    href={ghLink}
                                    className="redirect-icon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${name} GitHub repository`}
                                    title="Visit GitHub repository"
                                >
                                    <SiGithub size={20} />
                                </a>
                            )}

                            {link && (
                                <a
                                    href={link}
                                    target="_blank"
                                    className="redirect-icon"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit ${name}`}
                                    title="Visit project"
                                >
                                    <ExternalLink size={20} strokeWidth={2} />
                                </a>
                            )}

                        </div>
                    </div>

                    <TechBadge technologies={technologies} />
                </div>

                <div className='project-img-container'>
                    <img
                        src={imgSrc}
                        className='project-img'
                        alt={imgAlt || name}
                        loading="lazy"
                    />
                </div>

                {description && (
                    <p className='project-description'>
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}

import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";

// Returns the AboutMe component which renders a section in the page 
// about me
export default function AboutMe() {
    return (
        <>
            <div className='about-me-grid'>
                <div className='img-container'>
                    <img
                        src={process.env.PUBLIC_URL + '/ProfileImageSource.jpg'}
                        className='about-me-img'
                        alt='Ralph Alexander' />
                    <div className="about-me-header">
                        <a
                            href="https://github.com/RalphAlexander"
                            className="redirect-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            title="Visit GitHub Profile"
                        >
                            <SiGithub size={30} />
                        </a>
                        <a
                            href="https://fishtomato4.itch.io"
                            target="_blank"
                            className="redirect-icon"
                            rel="noopener noreferrer"
                            aria-label="Itch.io Profile"
                            title="Visit Itch.io Profile"
                        >
                            <ExternalLink size={30} strokeWidth={2} />
                        </a>
                    </div>
                </div>
                <div className='about-me-subhead'>
                    Hey, I'm Ralph Alexander.
                </div>
                <div className='about-me-body'>
                    <p>
                        I'm a Computer Science graduate from the University of Washington with a passion for
                        developing games and software. I like to integrate my interests into my projects,
                        whether that's a game in my favorite genre, or a tool to keep track of what I'm currently watching.
                    </p>
                    <p>
                        I've worked on a variety of projects including React-based web applications and games built with Godot and Unity.
                        I'm particularly interested in game development, where I enjoy designing game mechanics inspired by my
                        favorite games like Slay the Spire and Hollow Knight. Participating in game jams has also given me the 
                        opportunity to develop games under a specific theme and time constraint, resulting in unique
                        fusions of game concepts.
                    </p>
                </div>
            </div>
        </>
    )
}

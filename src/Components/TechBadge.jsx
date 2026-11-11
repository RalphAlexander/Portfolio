export default function TechBadge({
    technologies = []
}) {
    if (technologies.length === 0) return null;

    return (
        <div className="tech-badges">
            {technologies.map((tech) => (
                <div key={tech} className="tech-badge">
                    {tech}
                </div>
            ))}
        </div>
    );
}

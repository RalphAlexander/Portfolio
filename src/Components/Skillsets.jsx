
const skillCategories = [
    {
        name: "Programming Languages",
        skills: ["Java", "C++", "C#", "Python", "JavaScript", "GDScript"],
    },
    {
        name: "Web Development",
        skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "WebSocket"],
    },
    {
        name: "Tools & Databases",
        skills: [
            "MongoDB",
            "PostgreSQL",
            "NoSQL",
            "Docker",
            "Git",
            "AWS",
        ],
        name: "Game Development",
        skills: [
            "Godot",
            "Unity",
        ],
    },
];

export default function Skillsets() {
    return (
        <section className="skillset-container">
            <h3 className="header">Technical Skills</h3>

            <div className="skills-grid">
                {skillCategories.map((category) => (
                    <div className="skill-category hoverable-div" key={category.name}>
                        <h4>{category.name}</h4>

                        <div className="skill-list">
                            {category.skills.map((skill) => (
                                <span className="skill-item" key={skill}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

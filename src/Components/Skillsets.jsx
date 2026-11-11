
import skillCategories from "../data/Skills.js"

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

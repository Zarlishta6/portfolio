import {
  Brain,
  BarChart3,
  Code2,
  Cpu,
  Database,
  Layers,
  Users,
  Palette,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI & Data",
      description: "Artificial intelligence, machine learning and data-focused technologies.",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "NLP Libraries",
        "Data Analysis",
        "Automation",
      ],
    },

    {
      icon: Code2,
      title: "Programming & CS",
      description: "Core programming and computer science concepts.",
      skills: [
        "Python",
        "C++",
        "Algorithms",
        "Data Structures",
        "Computer Organization",
        "Digital Logic",
      ],
    },

    {
      icon: Users,
      title: "Professional Skills",
      description: "Communication, leadership and collaborative skills.",
      skills: [
        "Leadership Development",
        "Business Development",
        "Communication",
        "Team Collaboration",
        "Public Speaking",
        "Networking",
        "Professional Development",
      ],
    },

    {
      icon: Palette,
      title: "Design",
      description: "Creative and visual design skills.",
      skills: [
        "Content Design",
        "Vector Illustration",
        "Logo Design",
        "Adobe Illustrator",
        "Graphic Design",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        {/* =========================
            SECTION HEADING
        ========================= */}
        <div className="section-heading skills-heading">

          <span className="section-label">
            SKILLS
          </span>

          <h2>
            What I <span>work with.</span>
          </h2>

          <p>
            A combination of technical knowledge, AI-focused learning,
            problem-solving, and professional skills.
          </p>

        </div>


        {/* =========================
            SKILL CATEGORIES
        ========================= */}
        <div className="skills-grid">

          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                className="skill-category"
                key={index}
                style={{
                  "--delay": `${index * 0.1}s`,
                }}
              >

                {/* Category Header */}
                <div className="skill-category-header">

                  <div className="skill-category-icon">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>

                </div>


                {/* Skills */}
                <div className="skill-list">

                  {category.skills.map((skill, skillIndex) => (
                    <span
                      className="skill-tag"
                      key={skillIndex}
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            );
          })}

        </div>


        {/* =========================
            TECHNICAL HIGHLIGHT
        ========================= */}
        <div className="skills-highlight">

          <div className="skills-highlight-icon">
            <Cpu size={24} />
          </div>

          <div className="skills-highlight-content">
            <span>TECHNICAL INTEREST</span>

            <h3>
              Artificial Intelligence & Machine Learning
            </h3>

            <p>
              Currently focusing on strengthening my understanding of
              AI and Machine Learning through practical projects,
              experimentation, and continuous learning.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
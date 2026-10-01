import {
  Code2,
  Brain,
  Gamepad2,
  MessageSquareText,
  Bot,
  Zap,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Review Sentiment Analyzer",
      description:
        "A Python-based project for analyzing text reviews and identifying their sentiment.",
      category: "AI / NLP",
      icon: MessageSquareText,
      technologies: ["Python", "NLP", "Machine Learning"],
      github:
        "https://github.com/Zarlishta6/review-sentiment-analyzer",
    },

    {
      title: "Snake Water Gun",
      description:
        "A simple Python game using the random module based on the classic Snake, Water and Gun concept.",
      category: "Python",
      icon: Gamepad2,
      technologies: ["Python", "Random Module"],
      github:
        "https://github.com/Zarlishta6/snake-water-gun",
    },

    {
      title: "Python Fundamentals",
      description:
        "A collection of Python fundamentals and practice work covering core programming concepts.",
      category: "Programming",
      icon: Code2,
      technologies: ["Python", "Jupyter Notebook"],
      github:
        "https://github.com/Zarlishta6/Python-fundamentals",
    },

    {
      title: "Python Practice Code",
      description:
        "Python practice files, implementations, and mini-projects developed during programming and AI learning.",
      category: "Python",
      icon: Brain,
      technologies: ["Python", "Jupyter Notebook", "Data Science"],
      github:
        "https://github.com/Zarlishta6/python-practice-code",
    },

    {
      title: "Student Course Enrollment Data",
      description:
        "A data-focused project working with student course enrollment information using Python and Jupyter Notebook.",
      category: "Data Analysis",
      icon: Bot,
      technologies: [
        "Python",
        "Jupyter Notebook",
        "Data Analysis",
      ],
      github:
        "https://github.com/Zarlishta6/student-course-enrollment-data",
    },

    {
      title: "Zapier Automation Files",
      description:
        "Project files related to workflow automation and integration experiments using Zapier.",
      category: "Automation",
      icon: Zap,
      technologies: ["Zapier", "Automation"],
      github:
        "https://github.com/Zarlishta6/Zapier-automation-files-",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        {/* =========================
            SECTION HEADING
        ========================= */}
        <div className="section-heading projects-heading">
          <span className="section-label">
            PROJECTS
          </span>

          <h2>
            Things I've <span>built.</span>
          </h2>

          <p>
            A selection of projects where I apply my programming,
            AI, data analysis, and automation skills through
            practical work.
          </p>
        </div>

        {/* =========================
            PROJECT GRID
        ========================= */}
        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                className="project-card"
                key={project.title}
                style={{
                  "--delay": `${index * 0.08}s`,
                }}
              >
                {/* TOP */}
                <div className="project-top">
                  <div className="project-icon">
                    <Icon size={24} />
                  </div>

                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* CATEGORY */}
                <span className="project-category">
                  {project.category}
                </span>

                {/* TITLE */}
                <h3>
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="project-description">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* GITHUB */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-primary"
                  >
                    <Code2 size={17} />
                    View Code
                  </a>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
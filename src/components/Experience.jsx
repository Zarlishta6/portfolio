import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Brain,
  Code2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "Sep 2026 – Present",
      employmentType: "Internship",
      role: "Artificial Intelligence Intern",
      company: "Decodelabs",
      location: "Remote",
      icon: Brain,

      description:
        "Working as an Artificial Intelligence Intern with a focus on developing practical AI skills through project-based learning, experimentation, and hands-on technical work.",

      responsibilities: [
        "Working on Artificial Intelligence and Machine Learning projects",
        "Applying Python in practical AI development",
        "Exploring AI concepts through hands-on projects",
        "Building practical experience with AI-focused tools and technologies",
      ],

      skills: [
        "Artificial Intelligence",
        "Python",
        "Machine Learning",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        {/* =========================
            SECTION HEADING
        ========================= */}
        <div className="section-heading experience-heading">
          <span className="section-label">
            EXPERIENCE
          </span>

          <h2>
            Where I <span>learn & grow.</span>
          </h2>

          <p>
            Practical experience that helps me connect my Computer
            Science knowledge with real-world Artificial Intelligence
            and technology.
          </p>
        </div>

        {/* =========================
            EXPERIENCE TIMELINE
        ========================= */}
        <div className="experience-timeline">

          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <article
                className="experience-item"
                key={experience.company}
                style={{
                  "--delay": `${index * 0.12}s`,
                }}
              >

                {/* Timeline Side */}
                <div className="experience-timeline-side">

                  <div className="experience-timeline-icon">
                    <Icon size={23} />
                  </div>

                  {index !== experiences.length - 1 && (
                    <div className="experience-timeline-line"></div>
                  )}

                </div>

                {/* Experience Card */}
                <div className="experience-card">

                  {/* =========================
                      CARD TOP
                  ========================= */}
                  <div className="experience-card-top">

                    <span className="experience-period">
                      <CalendarDays size={15} />
                      {experience.period}
                    </span>

                    <span className="experience-type">
                      <BriefcaseBusiness size={13} />
                      {experience.employmentType}
                    </span>

                  </div>

                  {/* =========================
                      MAIN TITLE
                  ========================= */}
                  <div className="experience-main">

                    <div className="experience-title-area">

                      <h3>
                        {experience.role}
                      </h3>

                      <h4>
                        {experience.company}
                      </h4>

                      <span className="experience-location">
                        <MapPin size={14} />
                        {experience.location}
                      </span>

                    </div>

                    <div className="experience-badge">
                      <Sparkles size={16} />
                      Current
                    </div>

                  </div>

                  {/* =========================
                      DESCRIPTION
                  ========================= */}
                  <p className="experience-description">
                    {experience.description}
                  </p>

                  {/* =========================
                      RESPONSIBILITIES
                  ========================= */}
                  <div className="experience-responsibilities">

                    <div className="experience-subheading">
                      <CheckCircle2 size={17} />
                      <span>
                        What I'm working on
                      </span>
                    </div>

                    <ul>
                      {experience.responsibilities.map(
                        (responsibility) => (
                          <li key={responsibility}>
                            <span className="experience-bullet"></span>
                            {responsibility}
                          </li>
                        )
                      )}
                    </ul>

                  </div>

                  {/* =========================
                      SKILLS
                  ========================= */}
                  <div className="experience-skills">

                    <div className="experience-subheading">
                      <Code2 size={17} />
                      <span>
                        Skills
                      </span>
                    </div>

                    <div className="experience-skill-list">
                      {experience.skills.map((skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Experience;
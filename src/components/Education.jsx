import {
  GraduationCap,
  School,
  BookOpen,
  CalendarDays,
  Award,
  Code2,
} from "lucide-react";

const Education = () => {
  const education = [
    {
      year: "Sep 2024 – Jun 2028",
      type: "Bachelor's Degree",
      title: "Computer Science",
      institution: "University of Peshawar",
      icon: GraduationCap,
      status: "Currently 5th Semester",
      description:
        "Pursuing a Bachelor's degree in Computer Science with a growing focus on Artificial Intelligence, Machine Learning, programming, data analysis, and practical software development.",
      skills: [
        "Digital Logic",
        "Computer Organization",
        "Algorithms",
        "Data Structures",
        "Artificial Intelligence",
        "Python",
        "C++",
      ],
    },

    {
      year: "Nov 2021 – Jun 2023",
      type: "Pre-Medicine / Pre-Medical Studies",
      title: "Pre-Medical Studies",
      institution: "Jinnah College for Women (JCW)",
      icon: BookOpen,
      status: "Grade: A+",
      description:
        "Completed intermediate-level studies with a strong academic record and developed a foundation for further higher education.",
      skills: [],
    },

    {
      year: "Jan 2013 – Jan 2021",
      type: "Matriculation",
      title: "General Studies & Humanities",
      institution: "Forward Public School Hayatabad Phase 2",
      icon: School,
      status: "Grade: A+",
      description:
        "Completed SSC education with an excellent academic record and active participation in school activities and competitions.",
      skills: [
        "English Debates",
        "Baseball",
        "Flower Arrangement",
      ],
      achievement: "1070 / 1100 in SSC Examination",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">

        {/* =========================
            SECTION HEADING
        ========================= */}
        <div className="section-heading education-heading">
          <span className="section-label">
            EDUCATION
          </span>

          <h2>
            My academic <span>journey.</span>
          </h2>

          <p>
            My educational journey from school to Computer Science,
            with a growing interest in Artificial Intelligence and
            technology.
          </p>
        </div>

        {/* =========================
            EDUCATION TIMELINE
        ========================= */}
        <div className="education-timeline">

          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className="education-item"
                key={item.institution}
                style={{
                  "--delay": `${index * 0.12}s`,
                }}
              >

                {/* Timeline */}
                <div className="education-timeline-side">
                  <div className="education-timeline-icon">
                    <Icon size={23} />
                  </div>

                  {index !== education.length - 1 && (
                    <div className="education-timeline-line"></div>
                  )}
                </div>

                {/* Card */}
                <div className="education-card">

                  {/* Top Row */}
                  <div className="education-card-top">

                    <span className="education-year">
                      <CalendarDays size={15} />
                      {item.year}
                    </span>

                    <span className="education-type">
                      {item.type}
                    </span>

                  </div>

                  {/* Main Content */}
                  <div className="education-main">

                    <div className="education-title-area">

                      <h3>
                        {item.title}
                      </h3>

                      <h4>
                        {item.institution}
                      </h4>

                    </div>

                    <span className="education-status">
                      {item.status}
                    </span>

                  </div>

                  {/* Description */}
                  <p className="education-description">
                    {item.description}
                  </p>

                  {/* Achievement */}
                  {item.achievement && (
                    <div className="education-achievement">
                      <div className="education-achievement-icon">
                        <Award size={18} />
                      </div>

                      <div>
                        <span>
                          ACADEMIC ACHIEVEMENT
                        </span>

                        <strong>
                          {item.achievement}
                        </strong>
                      </div>
                    </div>
                  )}

                  {/* Skills */}
                  {item.skills.length > 0 && (
                    <div className="education-skills">

                      <div className="education-skills-label">
                        <Code2 size={15} />
                        <span>
                          Relevant Skills & Activities
                        </span>
                      </div>

                      <div className="education-skill-list">
                        {item.skills.map((skill) => (
                          <span key={skill}>
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  )}

                </div>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Education;
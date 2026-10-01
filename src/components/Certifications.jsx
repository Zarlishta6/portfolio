import {
  Brain,
  Code2,
  Palette,
  PenTool,
  ExternalLink,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AI For Everyone",
      issuer: "DeepLearning.AI",
      date: "Jun 2025",
      credentialId: "3J01AOZ0BN66",
      icon: Brain,
      category: "Artificial Intelligence",
      credential:
        "https://www.coursera.org/account/accomplishments/verify/3J01AOZ0BN66",
    },

    {
      title: "Artificial Intelligence Essentials V2",
      issuer: "Coursera",
      date: "Jun 2025",
      PWId: "B0955900",
      icon: Brain,
      category: "Artificial Intelligence",
      credential:
        "https://www.credly.com/badges/45af9d45-5987-45db-964a-7a8db77cb757/linked_in_profile",
    },

    {
      title: "Introduction to Object-Oriented Programming in C++",
      issuer: "University of London, Goldsmiths",
      date: "May 2025",
      credentialId: "AXUP42DJ5SEL",
      icon: Code2,
      category: "Programming",
      credential:
        "https://www.coursera.org/account/accomplishments/records/AXUP42DJ5SEL",
      skills: [
        "C++",
        "Object-Oriented Programming",
      ],
    },

    {
      title: "Design Fundamentals",
      issuer: "Adobe",
      date: "Feb 2025",
      credentialId: "1OMW653DEAWK",
      icon: Palette,
      category: "Design",
      credential:
        "https://www.coursera.org/account/accomplishments/verify/1OMW653DEAWK",
    },

    {
      title:
        "Adobe Illustrator for Beginners: Create Vector Artwork",
      issuer: "Coursera Project Network",
      date: "Jan 2025",
      credentialId: "W9M4S82MC4DT",
      icon: PenTool,
      category: "Graphic Design",
      credential:
        "https://www.coursera.org/account/accomplishments/verify/W9M4S82MC4DT",
    },

  ];

  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="certifications-container">

        <div className="section-heading certifications-heading">
          <span className="section-label">
            LICENSES & CERTIFICATIONS
          </span>

          <h2>
            Learning that <span>adds value.</span>
          </h2>

          <p>
            Certifications and courses that reflect my continuous
            learning in Artificial Intelligence, programming, and
            creative design.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((certificate, index) => {
            const Icon = certificate.icon;

            return (
              <article
                className="certification-card"
                key={certificate.title}
                style={{
                  "--delay": `${index * 0.08}s`,
                }}
              >
                <div className="certification-top">
                  <div className="certification-icon">
                    <Icon size={23} />
                  </div>

                  <span className="certification-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <span className="certification-category">
                  {certificate.category}
                </span>

                <h3>{certificate.title}</h3>

                <div className="certification-issuer">
                  <ShieldCheck size={16} />
                  <span>{certificate.issuer}</span>
                </div>

                <div className="certification-date">
                  <CalendarDays size={15} />
                  <span>Issued {certificate.date}</span>
                </div>

                {/* Dynamic Credential ID / PWID */}
                {(certificate.credentialId || certificate.PWId) && (
                  <div className="certification-id">
                    <span>
                      {certificate.credentialId
                        ? "Credential ID"
                        : "PWID"}
                    </span>

                    <strong>
                      {certificate.credentialId ||
                        certificate.PWId}
                    </strong>
                  </div>
                )}

                {certificate.skills && (
                  <div className="certification-skills">
                    {certificate.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                )}

                {certificate.credential && (
                  <a
                    href={certificate.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-button"
                  >
                    <span>Show Credential</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
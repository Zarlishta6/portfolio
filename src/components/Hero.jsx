import { useEffect, useState } from "react";

const Hero = () => {
  const roles = [
    "Computer Science Student",
    "AI & ML Engineer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 55 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));

        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));

        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        {/* =========================
            HERO CONTENT
        ========================= */}
        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1 className="hero-title">
            Zarlishta Shad
          </h1>

          <div className="hero-role">
            <span className="hero-role-text">
              {displayText}
            </span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-university">
            University of Peshawar
          </p>

          <p className="hero-description">
            Passionate about AI, Machine Learning, and software development.
            I enjoy learning by building practical projects and exploring
            new technologies.
          </p>

        </div>

        {/* =========================
            PROFILE IMAGE
        ========================= */}
        <div className="hero-visual">

          <div className="hero-image-wrapper">

            {/* Large animated ring */}
            <div className="hero-image-ring"></div>

            {/* Inner glow ring */}
            <div className="hero-image-ring-small"></div>

            {/* Decorative orbit dots */}
            <span className="hero-dot hero-dot-one"></span>
            <span className="hero-dot hero-dot-two"></span>

            {/* Profile Image */}
            <div className="hero-image">
              <img
                src="/images/profile.jpg"
                alt="Zarlishta Shad"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
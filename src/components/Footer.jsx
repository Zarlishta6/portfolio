import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-left">
            <a href="#home" className="footer-logo">
              Zarlashta<span>.</span>
            </a>

            <p>AI & ML | Computer Science Student</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/zarlashta-s-3a04a5336/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://rrg-github-finder.netlify.app/user/Zarlishta6"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Zarlashta Shad</p>
        </div>
      </footer>

      {/* Floating Back To Top */}
      {showTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={20} strokeWidth={2.2} />
        </button>
      )}
    </>
  );
};

export default Footer;
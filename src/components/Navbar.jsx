import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a href="#home" className="navbar-logo">
          <span className="logo-mark">Z</span>
          <span className="logo-text">Zarlishta</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* DESKTOP CONTACT BUTTON */}
        <a
          href="#contact"
          className="navbar-cta"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`mobile-navbar ${
          isOpen ? "mobile-navbar-open" : ""
        }`}
      >
        <nav className="mobile-navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-navbar-link"
              onClick={handleNavClick}
            >
              <span>{link.name}</span>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
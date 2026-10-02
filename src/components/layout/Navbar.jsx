import React, { useState, useEffect } from "react";
import { portfolioData } from "../../data/portfolioData";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { personal, navLinks, socialLinks } = portfolioData;

  // Detect scroll for backdrop border elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const observerOptions = {
      root: null,
      rootMargin: "-15% 0px -65% 0px",
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Smooth scroll handler with offset for sticky navbar
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setActiveSection(targetId);
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  // Social icon mapper
  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case "FaGithub":
        return <FaGithub aria-hidden="true" />;
      case "FaLinkedin":
        return <FaLinkedin aria-hidden="true" />;
      case "SiLeetcode":
        return <SiLeetcode aria-hidden="true" />;
      case "SiHackerrank":
        return <SiHackerrank aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        {/* Brand Monogram */}
        <a
          href="#hero"
          className="navbar-brand"
          aria-label={`${personal.name} portfolio home`}
          onClick={(e) => handleNavClick(e, "hero")}
        >
          <span className="brand-bracket">&lt;</span>
          <span>MRK</span>
          <span className="brand-bracket">/&gt;</span>
          <span className="brand-cursor" aria-hidden="true"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="navbar-nav-desktop">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-link-item">
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? "active" : ""}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="navbar-actions">
          <a
            href="#contact"
            className="btn btn-primary nav-cta-btn"
            aria-label="Navigate to contact section"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            <FiMail aria-hidden="true" />
            <span>Connect</span>
          </a>

          {/* Accessible Hamburger Menu Button */}
          <button
            type="button"
            className={`mobile-toggle-btn ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="mobile-nav-item">
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? "active" : ""}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  <span>{link.label}</span>
                  <span className="font-mono" style={{ fontSize: "0.8rem", opacity: 0.6 }}>
                    #{link.id}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Social quick links inside mobile menu */}
          <div className="mobile-socials">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-icon"
                aria-label={`${social.name} profile`}
              >
                {renderSocialIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

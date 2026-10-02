import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { 
  FiArrowRight, 
  FiMapPin, 
  FiCalendar, 
  FiBookOpen, 
  FiCopy, 
  FiCheck,
  FiTerminal
} from "react-icons/fi";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import "./Hero.css";

export default function Hero() {
  const { personal, education, socialLinks } = portfolioData;
  const edu = education[0];
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  const getSocialIcon = (iconName) => {
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
    <section id="hero" className="hero-section" aria-label="Introduction and Overview">
      <div className="container">
        <motion.div 
          className="hero-grid"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Left Column: Personal Intro and Actions */}
          <motion.div className="hero-content" variants={fadeInUp}>
            {/* Status & University Badges */}
            <div className="hero-badges-row">
              <span className="badge badge-emerald">
                <span className="status-dot"></span>
                <span>Undergraduate • Class of {personal.expectedGraduation}</span>
              </span>
              <span className="badge badge-cyan">
                <span>{edu.institution}</span>
              </span>
            </div>

            {/* Main Greeting & Headings */}
            <div className="hero-title-group">
              <span className="hero-greeting font-mono">Hello, my name is</span>
              <h1 className="hero-name">{personal.name}</h1>
              <h2 className="hero-tagline">{personal.tagline}</h2>
            </div>

            {/* Honest Bio */}
            <p className="hero-bio">{personal.shortBio}</p>

            {/* Verified Meta Details */}
            <div className="hero-meta-items">
              <div className="hero-meta-item">
                <FiBookOpen aria-hidden="true" />
                <span><strong>Degree:</strong> {personal.degree}</span>
              </div>
              <div className="hero-meta-item">
                <FiMapPin aria-hidden="true" />
                <span><strong>Location:</strong> {personal.location}</span>
              </div>
              <div className="hero-meta-item">
                <FiCalendar aria-hidden="true" />
                <span><strong>Graduation:</strong> {personal.expectedGraduation}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-actions">
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => handleScrollTo(e, "projects")}
              >
                <span>View Projects</span>
                <FiArrowRight aria-hidden="true" />
              </a>
              <a
                href="#coding-profiles"
                className="btn btn-secondary"
                onClick={(e) => handleScrollTo(e, "coding-profiles")}
              >
                <span>Coding Profiles</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-outline"
                aria-label={`Copy email address ${personal.email}`}
              >
                {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                <span>{copied ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </div>

            {/* Social Profile Links */}
            <div className="hero-socials" aria-label="Profiles and social links">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  aria-label={`${item.name} profile - ${item.handle}`}
                >
                  {getSocialIcon(item.icon)}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Engineering Profile Terminal */}
          <motion.div className="hero-interactive" variants={fadeInUp}>
            <div className="terminal-card">
              <div className="terminal-header">
                <div className="terminal-controls" aria-hidden="true">
                  <span className="terminal-dot dot-red"></span>
                  <span className="terminal-dot dot-yellow"></span>
                  <span className="terminal-dot dot-green"></span>
                </div>
                <div className="terminal-title">student_profile.json</div>
                <FiTerminal aria-hidden="true" style={{ color: "#64748b", fontSize: "0.9rem" }} />
              </div>

              <div className="terminal-body">
                <pre>
                  <span className="token-comment">// Academic &amp; technical profile</span>
                  {"\n"}
                  <span className="token-bracket">&#123;</span>
                  {"\n  "}
                  <span className="token-key">"name"</span>: <span className="token-string">"{personal.name}"</span>,
                  {"\n  "}
                  <span className="token-key">"institution"</span>: <span className="token-string">"{personal.institution}"</span>,
                  {"\n  "}
                  <span className="token-key">"program"</span>: <span className="token-string">"{personal.degree}"</span>,
                  {"\n  "}
                  <span className="token-key">"graduatingYear"</span>: <span className="token-number">{personal.expectedGraduation}</span>,
                  {"\n  "}
                  <span className="token-key">"primaryFocus"</span>: <span className="token-bracket">[</span>
                  {"\n    "}
                  <span className="token-string">"Data Structures &amp; Algorithms"</span>,
                  {"\n    "}
                  <span className="token-string">"Core Web Technologies"</span>,
                  {"\n    "}
                  <span className="token-string">"Problem Solving (LeetCode)"</span>
                  {"\n  "}
                  <span className="token-bracket">]</span>,
                  {"\n  "}
                  <span className="token-key">"activeLanguages"</span>: <span className="token-bracket">[</span>
                  <span className="token-string">"C"</span>, <span className="token-string">"C++"</span>, <span className="token-string">"JavaScript"</span>
                  <span className="token-bracket">]</span>,
                  {"\n  "}
                  <span className="token-key">"status"</span>: <span className="token-string">"Actively Practicing &amp; Building"</span>
                  {"\n"}
                  <span className="token-bracket">&#125;</span>
                </pre>
              </div>

              <div className="terminal-footer-note">
                <span>UTF-8 • JSON</span>
                <span className="font-mono" style={{ color: "#38bdf8" }}>CSE • Class of 2029</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

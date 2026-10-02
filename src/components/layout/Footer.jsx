import React from "react";
import { portfolioData } from "../../data/portfolioData";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import "./Footer.css";

export default function Footer() {
  const { personal, socialLinks } = portfolioData;
  const currentYear = new Date().getFullYear();

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
    <footer className="portfolio-footer" role="contentinfo">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="footer-name">{personal.name}</span>
          <span className="footer-institution">
            {personal.degree} • {personal.institution} (Class of {personal.expectedGraduation})
          </span>
        </div>

        <div className="footer-socials" aria-label="Social and coding profiles">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={`${personal.name} on ${item.name}`}
            >
              {getSocialIcon(item.icon)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from "react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../common/SectionHeader";
import { portfolioData } from "../../data/portfolioData";
import { FiMail, FiMapPin, FiCopy, FiCheck, FiSend, FiBookOpen } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import "./Contact.css";

export default function Contact() {
  const { personal, socialLinks } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
    <SectionWrapper id="contact" ariaLabel="Contact Information">
      <SectionHeader
        tag="09. Contact"
        title="Get In Touch"
        subtitle="Open for technical discussions, software development opportunities, and collaboration."
      />

      <div className="contact-grid">
        {/* Left Column: Direct Communication Card */}
        <div className="contact-card-main">
          <p className="contact-lead-text">
            Whether you have a question regarding my projects, want to discuss software engineering opportunities, or would like to request an updated resume, feel free to reach out directly.
          </p>

          <div className="contact-email-box">
            <span className="contact-email-address">{personal.email}</span>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-secondary"
                aria-label={`Copy email address ${personal.email}`}
              >
                {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
              <a
                href={`mailto:${personal.email}`}
                className="btn btn-primary"
                aria-label={`Send email to ${personal.email}`}
              >
                <FiSend aria-hidden="true" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginBottom: "0.75rem" }}>
              Active developer profiles &amp; channels:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
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
          </div>
        </div>

        {/* Right Column: Academic & Location Metadata */}
        <div className="contact-meta-cards">
          <div className="contact-info-card">
            <div className="contact-info-icon" aria-hidden="true">
              <FiMapPin />
            </div>
            <div>
              <div className="contact-info-title">Location</div>
              <div className="contact-info-value">{personal.location}</div>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon" aria-hidden="true">
              <FiBookOpen />
            </div>
            <div>
              <div className="contact-info-title">University</div>
              <div className="contact-info-value">{personal.institution}</div>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                {personal.degree} • Class of {personal.expectedGraduation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

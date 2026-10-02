import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../common/SectionHeader";
import { portfolioData } from "../../data/portfolioData";
import { FiFileText, FiMail, FiClock } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import "./Resume.css";

export default function Resume() {
  const { resume, personal, socialLinks } = portfolioData;
  const linkedin = socialLinks.find((s) => s.name === "LinkedIn");

  const emailSubject = encodeURIComponent(`Resume Request - ${personal.name}`);
  const emailBody = encodeURIComponent(
    `Hello ${personal.name},\n\nI came across your engineering portfolio and would like to request a copy of your updated resume for upcoming opportunities.\n\nBest regards,`
  );
  const mailtoUrl = `mailto:${resume.contactEmail}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <SectionWrapper id="resume" ariaLabel="Resume">
      <SectionHeader
        tag="08. Resume"
        title="Curriculum Vitae"
        subtitle="Formal academic resume detailing coursework, technical proficiencies, and project repositories."
      />

      <div className="resume-card">
        <div className="resume-icon-wrapper" aria-hidden="true">
          <FiFileText />
        </div>

        <div>
          <span className="badge badge-amber">
            <FiClock aria-hidden="true" />
            <span>Preparation In Progress</span>
          </span>
          <h3 className="resume-heading">Resume Update Cycle</h3>
        </div>

        <p className="resume-notice-text">
          {resume.statusNotice}
        </p>

        <div className="resume-actions-group">
          <a
            href={mailtoUrl}
            className="btn btn-primary"
            aria-label={`Request resume by sending email to ${resume.contactEmail}`}
          >
            <FiMail aria-hidden="true" />
            <span>Request Resume via Email</span>
          </a>

          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="View LinkedIn profile for career updates"
            >
              <FaLinkedin aria-hidden="true" />
              <span>Connect on LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

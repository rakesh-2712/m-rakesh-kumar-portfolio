import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../common/SectionHeader";
import { portfolioData } from "../../data/portfolioData";
import { FiCode, FiCompass, FiTerminal, FiChevronRight, FiCpu } from "react-icons/fi";
import "./About.css";

export default function About() {
  const { personal } = portfolioData;
  const { about } = personal;

  return (
    <SectionWrapper id="about" ariaLabel="About Me">
      <SectionHeader
        tag="01. About Me"
        title="Background & Engineering Focus"
        subtitle="A snapshot of my academic journey, core interests, and problem-solving pursuits as a computer science undergraduate."
      />

      <div className="about-grid">
        {/* Left Column: Narrative */}
        <div className="about-narrative">
          <p className="about-intro-lead">
            {about.introduction}
          </p>

          <p className="about-body-text">
            {about.careerDirection}
          </p>

          <div className="about-highlight-box">
            <h3 className="about-highlight-title">
              <FiTerminal aria-hidden="true" style={{ color: "var(--accent-cyan)" }} />
              <span>Problem Solving &amp; Algorithmic Practice</span>
            </h3>
            <p className="about-highlight-text">
              {about.problemSolving}
            </p>
          </div>
        </div>

        {/* Right Column: Focus Areas & Engineering Pillars */}
        <div className="about-side-cards">
          <div className="about-card">
            <div className="about-card-header">
              <div className="about-card-icon" aria-hidden="true">
                <FiCompass />
              </div>
              <h3 className="about-card-title">Key Areas of Interest</h3>
            </div>

            <ul className="about-interest-list">
              {about.interests.map((interest, idx) => (
                <li key={idx} className="about-interest-item">
                  <FiChevronRight className="about-bullet-icon" aria-hidden="true" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-card">
            <div className="about-card-header">
              <div className="about-card-icon" aria-hidden="true">
                <FiCode />
              </div>
              <h3 className="about-card-title">Development Philosophy</h3>
            </div>

            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              Prioritizing fundamental software design, maintainable folder structures, and rigorous edge-case handling over superficial complexity.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

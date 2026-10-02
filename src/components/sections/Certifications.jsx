import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../common/SectionHeader";
import { portfolioData } from "../../data/portfolioData";
import { FiAward, FiClock } from "react-icons/fi";
import "./Certifications.css";

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <SectionWrapper id="certifications" ariaLabel="Certifications">
      <SectionHeader
        tag="06. Certifications"
        title="Certifications & Continuous Learning"
        subtitle="Professional credentials, coursework specializations, and industry certifications."
      />

      <div className="in-progress-card">
        <div className="in-progress-icon" aria-hidden="true">
          <FiAward />
        </div>

        <div>
          <span className="badge badge-amber" style={{ marginBottom: "0.75rem" }}>
            <FiClock aria-hidden="true" />
            <span>Learning in Progress</span>
          </span>
          <h3 className="in-progress-title">Upcoming Certifications &amp; Courses</h3>
        </div>

        <p className="in-progress-notice">
          {certifications.inProgressNotice}
        </p>

        <div className="learning-focus-pills">
          <span className="learning-pill">Cloud Fundamentals</span>
          <span className="learning-pill">Advanced Data Structures</span>
          <span className="learning-pill">Software Engineering Practices</span>
        </div>
      </div>
    </SectionWrapper>
  );
}

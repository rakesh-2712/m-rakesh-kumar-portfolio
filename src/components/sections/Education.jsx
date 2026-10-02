import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../common/SectionHeader";
import { portfolioData } from "../../data/portfolioData";
import { FiBookOpen, FiMapPin, FiCalendar, FiCheck } from "react-icons/fi";
import "./Education.css";

export default function Education() {
  const { education } = portfolioData;
  const edu = education[0];

  return (
    <SectionWrapper id="education" ariaLabel="Education">
      <SectionHeader
        tag="02. Education"
        title="Academic Foundation"
        subtitle="Formal degree program and computer science engineering coursework at REVA University."
      />

      <div className="education-container">
        <div className="education-card">
          <div className="education-card-top">
            <div className="education-institution-group">
              <h3 className="education-institution-name">{edu.institution}</h3>
              <div className="education-degree">{edu.degree}</div>
            </div>

            <div className="education-meta">
              <div className="education-meta-row">
                <FiCalendar aria-hidden="true" />
                <span>Expected Graduation: <strong>{edu.expectedGraduation}</strong></span>
              </div>
              <div className="education-meta-row">
                <FiMapPin aria-hidden="true" />
                <span>{edu.location}</span>
              </div>
            </div>
          </div>

          <p className="education-description">
            {edu.description}
          </p>

          <div className="coursework-wrapper">
            <div className="coursework-heading">
              <FiBookOpen aria-hidden="true" />
              <span>Core CSE Coursework</span>
            </div>

            <div className="coursework-grid">
              {edu.coursework.map((course, idx) => (
                <div key={idx} className="coursework-pill">
                  <span className="coursework-indicator" aria-hidden="true"></span>
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

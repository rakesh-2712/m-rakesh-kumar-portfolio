import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../common/SectionHeader";
import { portfolioData } from "../../data/portfolioData";
import { FiTrendingUp, FiTarget, FiCheck } from "react-icons/fi";
import "./Achievements.css";

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <SectionWrapper id="achievements" ariaLabel="Achievements">
      <SectionHeader
        tag="07. Achievements"
        title="Milestones & Recognitions"
        subtitle="Academic performance highlights, coding challenge milestones, and technical achievements."
      />

      <div className="achievements-card">
        <div className="achievements-icon" aria-hidden="true">
          <FiTrendingUp />
        </div>

        <div>
          <span className="badge badge-cyan" style={{ marginBottom: "0.75rem" }}>
            <FiTarget aria-hidden="true" />
            <span>Target Milestones</span>
          </span>
          <h3 className="achievements-title">Milestones in Progress</h3>
        </div>

        <p className="achievements-notice">
          {achievements.inProgressNotice}
        </p>

        <div className="milestones-focus-list">
          <div className="milestone-item">
            <FiCheck className="milestone-bullet" aria-hidden="true" />
            <span>Active problem-solving progression on LeetCode &amp; HackerRank</span>
          </div>
          <div className="milestone-item">
            <FiCheck className="milestone-bullet" aria-hidden="true" />
            <span>Rigorous academic coursework in Computer Science Engineering</span>
          </div>
          <div className="milestone-item">
            <FiCheck className="milestone-bullet" aria-hidden="true" />
            <span>Open-source software projects and codebases on GitHub</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

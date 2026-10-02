import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../common/SectionHeader";
import { portfolioData } from "../../data/portfolioData";
import { FaGithub } from "react-icons/fa";
import { FiFolder, FiExternalLink, FiCode } from "react-icons/fi";
import "./Projects.css";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <SectionWrapper id="projects" ariaLabel="Projects">
      <SectionHeader
        tag="04. Projects"
        title="Featured Projects & Code Repositories"
        subtitle="Practical web applications and algorithmic problem repositories with source code on GitHub."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div>
              <div className="project-card-header">
                <FiFolder className="project-folder-icon" aria-hidden="true" />
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <FaGithub aria-hidden="true" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      aria-label={`${project.title} live preview`}
                    >
                      <FiExternalLink aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Documented Problems list if available */}
              {project.documentedProblems && project.documentedProblems.length > 0 && (
                <div className="documented-problems-container">
                  <div className="documented-problems-title">
                    <FiCode aria-hidden="true" />
                    <span>Documented Problems ({project.documentedProblems.length})</span>
                  </div>
                  <div className="problems-tag-grid">
                    {project.documentedProblems.map((problem, idx) => (
                      <span key={idx} className="problem-tag">
                        {problem.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Tech Stack Tags */}
            <ul className="project-tech-list" aria-label="Technologies used">
              {project.technologies.map((tech, idx) => (
                <li key={idx} className="project-tech-item">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

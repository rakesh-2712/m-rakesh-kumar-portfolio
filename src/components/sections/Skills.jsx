import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../common/SectionHeader";
import { portfolioData } from "../../data/portfolioData";
import { FiCode, FiGlobe, FiCpu, FiTerminal } from "react-icons/fi";
import "./Skills.css";

export default function Skills() {
  const { skills } = portfolioData;

  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case "programming":
        return <FiCode aria-hidden="true" />;
      case "web":
        return <FiGlobe aria-hidden="true" />;
      case "data-ai":
        return <FiCpu aria-hidden="true" />;
      case "tools":
        return <FiTerminal aria-hidden="true" />;
      default:
        return <FiCode aria-hidden="true" />;
    }
  };

  return (
    <SectionWrapper id="skills" ariaLabel="Technical Skills">
      <SectionHeader
        tag="03. Technical Skills"
        title="Tools & Technologies"
        subtitle="Core programming languages, web frameworks, data libraries, and developer tools in active practice."
      />

      <div className="skills-grid">
        {skills.categories.map((category) => (
          <div key={category.id} className="skill-category-card">
            <div className="skill-card-top">
              <div className="skill-category-icon">
                {getCategoryIcon(category.id)}
              </div>
              <div className="skill-card-titles">
                <h3 className="skill-category-title">{category.title}</h3>
                <p className="skill-category-desc">{category.description}</p>
              </div>
            </div>

            <ul className="skill-tags-list" aria-label={`${category.title} list`}>
              {category.items.map((skillItem, idx) => (
                <li key={idx} className="skill-tag-pill">
                  {skillItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

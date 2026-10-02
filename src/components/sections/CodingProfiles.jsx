import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../common/SectionHeader";
import { portfolioData } from "../../data/portfolioData";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import "./CodingProfiles.css";

export default function CodingProfiles() {
  const { codingProfiles } = portfolioData;

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case "LeetCode":
        return <SiLeetcode aria-hidden="true" />;
      case "HackerRank":
        return <SiHackerrank aria-hidden="true" />;
      case "GitHub":
        return <FaGithub aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <SectionWrapper id="coding-profiles" ariaLabel="Coding Profiles">
      <SectionHeader
        tag="05. Coding Profiles"
        title="Competitive Programming & Profiles"
        subtitle="Active profiles for practicing algorithmic challenges, data structures, and code repositories."
      />

      <div className="coding-profiles-grid">
        {codingProfiles.map((profile) => (
          <div key={profile.platform} className="profile-card">
            <div>
              <div className="profile-card-top">
                <div className="profile-platform-icon">
                  {getPlatformIcon(profile.platform)}
                </div>
                <div className="profile-info">
                  <h3 className="profile-platform-name">{profile.platform}</h3>
                  <span className="profile-handle">@{profile.handle}</span>
                </div>
              </div>

              <p className="profile-focus-text" style={{ marginTop: "1rem" }}>
                {profile.focus}
              </p>
            </div>

            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-visit-btn"
              aria-label={`Open ${profile.platform} profile for ${profile.handle}`}
            >
              <span>View Profile</span>
              <FiExternalLink aria-hidden="true" />
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

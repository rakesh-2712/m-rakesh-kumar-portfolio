import React from "react";
import "./SectionHeader.css";

export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="section-header-container">
      {tag && (
        <span className="section-header-badge">
          <span>//</span>
          <span>{tag}</span>
        </span>
      )}
      <h2 className="section-header-title">{title}</h2>
      {subtitle && <p className="section-header-subtitle">{subtitle}</p>}
    </div>
  );
}

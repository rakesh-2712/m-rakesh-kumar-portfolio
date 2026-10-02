import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";

export default function SectionWrapper({ id, children, className = "", ariaLabel }) {
  return (
    <section
      id={id}
      aria-label={ariaLabel || id}
      className={`section-wrapper ${className}`}
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        position: "relative"
      }}
    >
      <motion.div
        className="container"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.05 }}
        variants={fadeInUp}
      >
        {children}
      </motion.div>
    </section>
  );
}

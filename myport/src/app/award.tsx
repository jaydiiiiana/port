"use client";

import { motion } from "framer-motion";
import { Award as AwardIcon, Star, Trophy } from "lucide-react";

const awards = [
  {
    title: "Best UX/UI Design 2023",
    organization: "Web Design Awards",
    icon: <Trophy size={32} color="var(--accent-primary)" />,
    description: "Awarded for exceptional user interface design on the E-Commerce Platform project."
  },
  {
    title: "Top 100 Developers",
    organization: "Tech Innovators",
    icon: <Star size={32} color="var(--accent-primary)" />,
    description: "Recognized among the top 100 influential developers in the region."
  },
  {
    title: "Hackathon Winner",
    organization: "Global Tech Summit",
    icon: <AwardIcon size={32} color="var(--accent-primary)" />,
    description: "First place winner for building an innovative AI-driven educational tool."
  }
];

export default function Awards() {
  return (
    <section id="awards" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Honors & <span className="text-gradient">Awards</span></h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="glass-panel"
              style={{ padding: "2rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
            >
              <div style={{ background: "rgba(59,130,246,0.1)", padding: "1.5rem", borderRadius: "50%", marginBottom: "1rem" }}>
                {award.icon}
              </div>
              <h3 style={{ fontSize: "1.3rem", color: "var(--text-primary)" }}>{award.title}</h3>
              <p style={{ color: "var(--accent-primary)", fontWeight: 500, fontSize: "0.95rem" }}>{award.organization}</p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>{award.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

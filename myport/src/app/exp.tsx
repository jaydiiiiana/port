"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "TechNova Inc.",
    period: "2022 - Present",
    description: "Leading the development of the core customer-facing web application. Mentored junior developers and introduced modern CI/CD practices."
  },
  {
    role: "Full Stack Developer",
    company: "Digital Creations",
    period: "2019 - 2022",
    description: "Developed and maintained multiple client projects ranging from landing pages to complex dashboards using React and Node.js."
  },
  {
    role: "Web Developer Intern",
    company: "Startup Hub",
    period: "2018 - 2019",
    description: "Assisted in the creation of responsive web layouts and learned best practices in version control and agile methodologies."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Work <span className="text-gradient">Experience</span></h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "800px", margin: "0 auto" }}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="glass-panel"
              style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", position: "relative" }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <h3 style={{ fontSize: "1.4rem", color: "var(--text-primary)" }}>{exp.role}</h3>
                  <h4 style={{ fontSize: "1.1rem", color: "var(--accent-primary)", fontWeight: 500 }}>{exp.company}</h4>
                </div>
                <span style={{ padding: "0.4rem 1rem", background: "rgba(255,255,255,0.05)", borderRadius: "20px", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {exp.period}
                </span>
              </div>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

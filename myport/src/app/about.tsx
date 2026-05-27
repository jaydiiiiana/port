"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div className="glass-panel" style={{ padding: "2.5rem" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>My Journey</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
              I am a passionate software engineer with a strong focus on modern web technologies. My journey started with a curiosity for how things work on the internet, which quickly turned into a career crafting responsive, performant, and accessible user interfaces.
            </p>
            <p style={{ color: "var(--text-secondary)" }}>
              I thrive in environments where I can tackle complex problems and collaborate with cross-functional teams to deliver impactful products. When I am not coding, I am exploring the latest design trends and learning new frameworks.
            </p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { label: "Experience", value: "5+ Years" },
              { label: "Projects Completed", value: "40+" },
              { label: "Clients Worldwide", value: "20+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className="glass-panel"
                style={{ padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderLeft: "4px solid var(--accent-primary)" }}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>{stat.label}</span>
                <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)" }}>{stat.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

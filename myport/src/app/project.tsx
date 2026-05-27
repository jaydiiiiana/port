"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with Next.js, Stripe integration, and a custom CMS dashboard.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    link: "#",
    github: "#"
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative task manager featuring drag-and-drop interfaces and workspace organization.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
    github: "#"
  },
  {
    title: "AI Image Generator",
    description: "Web interface for generating images using stable diffusion models with a prompt gallery.",
    tech: ["Vue 3", "Express", "Python", "AWS"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "2rem" }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-panel"
              style={{ padding: "2rem", display: "flex", flexDirection: "column", height: "100%", position: "relative", overflow: "hidden" }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>{project.title}</h3>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <a href={project.github} style={{ color: "var(--text-secondary)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}><Github size={20} /></a>
                  <a href={project.link} style={{ color: "var(--text-secondary)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", flexGrow: 1 }}>
                {project.description}
              </p>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{ fontSize: "0.85rem", color: "var(--accent-primary)", background: "rgba(59,130,246,0.1)", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

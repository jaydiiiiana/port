"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="section container" style={{ position: "relative", alignItems: "center", textAlign: "center", paddingTop: "12rem" }}>
      {/* Background ambient glow */}
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(15,23,42,0) 70%)", zIndex: -1, pointerEvents: "none" }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontSize: "1.2rem", color: "var(--accent-primary)", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
          Hi, I am a Developer
        </h2>
        <h1 style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-1px" }}>
          Crafting Digital <br />
          <span className="text-gradient">Experiences.</span>
        </h1>
        <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 3rem", lineHeight: 1.6 }}>
          I build high-performance, beautiful, and accessible web applications that deliver exceptional user experiences.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#projects" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
            View Work <ArrowRight size={20} />
          </a>
          <a href="#" className="btn btn-outline" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
            Resume <Download size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

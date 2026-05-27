"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
        
        <div className="glass-panel" style={{ maxWidth: "700px", margin: "0 auto", padding: "3rem" }}>
          <p style={{ textAlign: "center", color: "var(--text-secondary)", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
            I am currently open for new opportunities. Whether you have a question or just want to say hi, I will try my best to get back to you!
          </p>
          
          <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 200px" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>Name</label>
                <input 
                  type="text" 
                  style={{ width: "100%", padding: "1rem", borderRadius: "8px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--border-color)", color: "var(--text-primary)", outline: "none" }}
                  placeholder="John Doe"
                />
              </div>
              <div style={{ flex: "1 1 200px" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>Email</label>
                <input 
                  type="email" 
                  style={{ width: "100%", padding: "1rem", borderRadius: "8px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--border-color)", color: "var(--text-primary)", outline: "none" }}
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>Message</label>
              <textarea 
                rows={5}
                style={{ width: "100%", padding: "1rem", borderRadius: "8px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--border-color)", color: "var(--text-primary)", outline: "none", resize: "vertical" }}
                placeholder="Hello..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start", padding: "1rem 2.5rem", marginTop: "1rem", fontSize: "1.1rem" }}>
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

"use client";
import { FiBriefcase, FiCode, FiLayers } from "react-icons/fi";

const stats = [
  { icon: FiBriefcase, value: "2+", label: "Years Experience" },
  { icon: FiLayers, value: "12+", label: "Projects Delivered" },
  { icon: FiCode, value: "Full Stack", label: "Developer" },
];

export default function AboutMe() {
  return (
    <section id="about" className="section-container" aria-label="About me">
      <h2 className="section-title">
        <span className="section-label">01.</span> About Me
      </h2>

      <div className="grid lg:grid-cols-5 gap-10 items-start">
        {/* Text Content */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          <p style={{ fontSize: "1.05rem", lineHeight: "1.85" }}>
            Hello! I&apos;m <span style={{ color: "var(--accent)" }}>Praveen Singh</span>, a results-oriented <span style={{ color: "var(--text-heading)", fontWeight: "600" }}>Full Stack Developer & Software Engineer</span> based in Noida, India. I specialize in the <span style={{ color: "var(--text-heading)", fontWeight: "600" }}>MERN Stack</span> and <span style={{ color: "var(--text-heading)", fontWeight: "600" }}>Next.js 14/15</span>, delivering high-performance, scalable web solutions that drive business growth.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.85" }}>
            With over 2 years of production experience, I&apos;ve successfully architected and deployed <span style={{ color: "var(--accent)" }}>12+ live projects</span>. My expertise covers everything from <span style={{ color: "var(--text-heading)", fontWeight: "600" }}>Multi-vendor E-commerce</span> and <span style={{ color: "var(--text-heading)", fontWeight: "600" }}>Internal ERPs</span> to <span style={{ color: "var(--text-heading)", fontWeight: "600" }}>Real-time WebSockets</span> and <span style={{ color: "var(--text-heading)", fontWeight: "600" }}>Secure REST APIs</span>. I focus on clean code, modular architecture, and 100% production-ready delivery.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.85" }}>
            My approach combines technical precision with a deep understanding of <span style={{ color: "var(--text-heading)", fontWeight: "600" }}>SEO best practices</span> and <span style={{ color: "var(--text-heading)", fontWeight: "600" }}>Core Web Vitals</span>, ensuring every application is not just functional, but optimized for maximum visibility and user engagement.
          </p>
        </div>

        {/* Stats */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card flex items-center gap-4 p-5"
              style={{ cursor: "default" }}
            >
              <div
                className="flex items-center justify-center w-11 h-11 rounded-lg flex-shrink-0"
                style={{
                  background: "var(--accent-dim)",
                  color: "var(--accent)",
                }}
              >
                <stat.icon size={20} />
              </div>
              <div>
                <p
                  className="font-bold text-lg"
                  style={{ color: "var(--text-heading)" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

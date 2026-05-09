"use client";
import { FiAward, FiBookOpen } from "react-icons/fi";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "AKTU University, Lucknow",
    year: "2023",
    icon: FiAward,
  },
  {
    degree: "Bachelor of Science (B.Sc)",
    institution: "CSJM University, Kanpur",
    year: "2021",
    icon: FiBookOpen,
  },
];

export default function Education() {
  return (
    <section id="education" className="section-container" aria-label="Education">
      <div className="layout-container">
        <h2 className="section-title">
          <span className="section-label">06.</span> Education
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 max-w-[800px]">
          {educationData.map((edu, index) => (
            <article
              key={index}
              className="glass-card p-6 md:p-8 flex flex-col gap-4"
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl"
                style={{
                  background: "var(--accent-dim)",
                  color: "var(--accent)",
                  border: "1px solid rgba(100,255,218,0.12)",
                }}
              >
                <edu.icon size={22} />
              </div>
              <div>
                <h3
                  className="font-semibold text-base md:text-lg"
                  style={{ color: "var(--text-heading)" }}
                >
                  {edu.degree}
                </h3>
                <p
                  className="text-sm mt-2"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {edu.institution}
                </p>
                <p
                  className="text-xs mt-2 inline-block px-3 py-1 rounded-full"
                  style={{
                    color: "var(--accent)",
                    background: "var(--accent-dim)",
                    fontFamily: "var(--font-mono)",
                    border: "1px solid rgba(100,255,218,0.1)",
                  }}
                >
                  {edu.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

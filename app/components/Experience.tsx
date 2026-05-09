"use client";
import { FiCalendar } from "react-icons/fi";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Indian Robotics Solution Pvt. Ltd., Noida",
    period: "July 2024 — Present",
    isCurrent: true,
    achievements: [
      "Delivered and maintained 12+ production projects: E-commerce, Wholesale, HR, ERP, CRM, and real-time dashboards",
      "Built full-stack applications using React, Next.js 14, NestJS, TypeScript, MongoDB, Socket.io, and Redis",
      "Developed responsive UIs with Tailwind CSS & Material-UI — reduced load time by 15–20%",
      "Designed scalable REST APIs, JWT authentication, RBAC, and real-time features using WebSockets",
      "Set up complete CI/CD pipelines with GitHub Actions, Docker, Vercel, and Vultr",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Indian Robotics Solution Pvt. Ltd., Noida",
    period: "January 2024 — June 2024",
    isCurrent: false,
    achievements: [
      "Built and maintained corporate websites and internal tools using React and Tailwind CSS",
      "Revamped internal ERP frontend with modern UI/UX and performance improvements",
      "Worked closely with NestJS backend team using Agile methodology",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-container"
      aria-label="Work experience"
    >
      <div className="layout-container">
        <h2 className="section-title">
          <span className="section-label">02.</span> Experience
        </h2>

        <div className="relative flex flex-col gap-8 pl-6 md:pl-8">
          {/* Timeline line */}
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-5 md:gap-8">
              {/* Timeline dot */}
              <div
                className={`timeline-dot mt-6 ${exp.isCurrent ? "active" : ""}`}
                style={{ marginLeft: "-6px" }}
              />

              {/* Card */}
              <article className="glass-card flex-1 p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3
                      className="text-lg md:text-xl font-semibold"
                      style={{ color: "var(--text-heading)" }}
                    >
                      {exp.title}
                    </h3>
                    <p
                      className="text-sm mt-1"
                      style={{
                        color: "var(--accent)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full flex-shrink-0"
                    style={{
                      color: "var(--text-muted)",
                      background: "var(--accent-dim)",
                      fontFamily: "var(--font-mono)",
                      border: "1px solid var(--glass-border)",
                    }}
                  >
                    <FiCalendar size={12} />
                    {exp.period}
                  </div>
                </div>

                <ul className="flex flex-col gap-3">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm md:text-base">
                      <span
                        className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--accent)" }}
                      />
                      <span style={{ color: "var(--text-secondary)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

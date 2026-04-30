"use client";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js 14",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "Material-UI",
      "ShadCN/UI",
      "Angular",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Express.js", "REST API", "Socket.io", "WebSockets"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Mongoose", "Aggregation Pipeline"],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "Docker",
      "Vercel",
      "GitHub Actions",
      "CI/CD",
      "AWS S3",
      "JWT",
      "Zod",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container" aria-label="Technical skills">
      <h2 className="section-title">
        <span className="section-label">03.</span> Technical Skills
      </h2>

      <div className="grid gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="glass-card p-6 md:p-8" style={{ cursor: "default" }}>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-5"
              style={{
                color: "var(--accent)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
              }}
            >
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
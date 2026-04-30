"use client";
import { FiCheckCircle, FiCpu, FiGlobe, FiSmartphone } from "react-icons/fi";

const services = [
  {
    title: "Full-Stack Web Development",
    description: "Building end-to-end web applications using the MERN stack (MongoDB, Express, React, Node.js) and Next.js 14 for maximum performance and SEO.",
    icon: FiGlobe,
    keywords: ["React.js", "Next.js", "SSR", "Server Actions"]
  },
  {
    title: "Scalable API & Backend Design",
    description: "Architecting robust and secure RESTful APIs and real-time systems with NestJS, WebSockets (Socket.io), and Redis for high-concurrency environments.",
    icon: FiCpu,
    keywords: ["NestJS", "TypeScript", "Redis", "WebSockets"]
  },
  {
    title: "Responsive & Modern UI/UX",
    description: "Creating highly responsive, mobile-first user interfaces using Tailwind CSS, Material-UI, and ShadCN/UI to ensure a premium user experience.",
    icon: FiSmartphone,
    keywords: ["Tailwind CSS", "ShadCN", "Responsive Design"]
  },
  {
    title: "DevOps & Cloud Integration",
    description: "Streamlining deployment workflows with Docker, CI/CD pipelines (GitHub Actions), and cloud hosting on Vercel, AWS, and Vultr.",
    icon: FiCheckCircle,
    keywords: ["Docker", "CI/CD", "AWS", "GitHub Actions"]
  }
];

export default function Services() {
  return (
    <section id="services" className="section-container" aria-label="Professional Services">
      <h2 className="section-title">
        <span className="section-label">04.</span> Technical Expertise
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <article key={index} className="glass-card p-6 md:p-8 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--accent-dim)] text-[var(--accent)] border border-[var(--glass-border)]">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-heading)]">{service.title}</h3>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {service.keywords.map(kw => (
                <span key={kw} className="text-[10px] uppercase tracking-widest font-mono text-[var(--accent)] opacity-70">
                  #{kw.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

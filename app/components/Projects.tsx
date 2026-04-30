"use client";
import { FiExternalLink, FiGlobe } from "react-icons/fi";

interface Project {
  title: string;
  subtitle: string;
  techStack: string[];
  bullets: string[];
  links?: { label: string; url: string }[];
  featured?: boolean;
}

const projectsData: Project[] = [
  {
    title: "Indian Robo Store",
    subtitle: "E-Commerce Platform",
    techStack: ["Next.js 14", "Tailwind CSS", "NestJS", "MongoDB"],
    bullets: [
      "Built a multi-vendor robotics marketplace with 5,000+ products, secure payments, and real-time inventory",
      "Developed Admin & Vendor dashboards for product, order, and payout management",
      "Handling 500+ daily users and 100+ monthly orders with SEO optimization and high uptime",
    ],
    links: [{ label: "indianrobostore.com", url: "https://indianrobostore.com" }],
    featured: true,
  },
  {
    title: "Internal ERP System",
    subtitle: "Enterprise Resource Planning",
    techStack: ["React 18", "Redux Toolkit", "NestJS", "MongoDB", "WebSockets"],
    bullets: [
      "Designed ERP system covering inventory, sales, procurement, finance, and HR modules",
      "Implemented real-time dashboards, alerts, and reports using WebSockets",
      "Built role-based access control and multi-level approval workflows for 20+ users",
    ],
  },
  {
    title: "International Supplier CRM Portal",
    subtitle: "B2B Customer Relationship Management",
    techStack: ["Next.js 14", "NestJS", "TypeScript", "MongoDB", "Socket.io"],
    bullets: [
      "Developed B2B CRM enabling cross-border operations with multi-currency support (RMB, USD, INR)",
      "Automated purchase orders, quotations, supplier tracking, and payment workflows",
      "Integrated real-time chat and notifications to improve deal turnaround time",
    ],
  },
  {
    title: "HR Management Portal",
    subtitle: "Human Resource Management System",
    techStack: ["React.js", "Tailwind CSS", "ShadCN/UI", "NestJS", "MongoDB"],
    bullets: [
      "Built HR system managing employee lifecycle, attendance, leave, and payroll",
      "Implemented role-based dashboards with approval workflows and real-time updates",
      "Designed scalable REST APIs with secure RBAC and optimized data handling",
    ],
  },
  {
    title: "Wholesale B2B Portal",
    subtitle: "Business-to-Business Platform",
    techStack: ["Angular", "Go", "MongoDB"],
    bullets: [
      "Developed frontend modules for product catalog, bulk orders, and pricing management",
      "Integrated REST APIs for inventory, supplier, and order workflows",
      "Collaborated with backend team to ensure high-performance data handling",
    ],
  },
  {
    title: "Corporate & Service Websites",
    subtitle: "Multi-site Web Presence",
    techStack: ["Next.js 14", "Tailwind CSS", "Headless CMS"],
    bullets: [
      "Built and deployed multiple corporate and service websites with modern UI/UX",
      "Implemented SEO best practices, responsive design, and optimized performance",
    ],
    links: [
      { label: "indianroboticssolution.com", url: "https://indianroboticssolution.com" },
      { label: "droneservicecenter.in", url: "https://droneservicecenter.in" },
      { label: "djiservicecenter.in", url: "https://djiservicecenter.in" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container" aria-label="Key projects">
      <h2 className="section-title">
        <span className="section-label">05.</span> Key Projects
      </h2>

      <div className="grid gap-6">
        {projectsData.map((project, index) => (
          <article
            key={index}
            className={`glass-card p-6 md:p-8 ${
              project.featured
                ? "border-[var(--glass-border-hover)]"
                : ""
            }`}
            style={
              project.featured
                ? {
                    background:
                      "linear-gradient(135deg, rgba(100,255,218,0.04) 0%, rgba(124,58,237,0.04) 100%)",
                    borderColor: "var(--glass-border-hover)",
                  }
                : undefined
            }
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                {project.featured && (
                  <span
                    className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3"
                    style={{
                      color: "var(--accent)",
                      background: "var(--accent-dim)",
                      fontFamily: "var(--font-mono)",
                      border: "1px solid rgba(100,255,218,0.15)",
                    }}
                  >
                    ★ Featured Project
                  </span>
                )}
                <h3
                  className="text-lg md:text-xl font-semibold"
                  style={{ color: "var(--text-heading)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm mt-1"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                  }}
                >
                  {project.subtitle}
                </p>
              </div>

              {/* Links */}
              {project.links && (
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-all duration-200 hover:translate-y-[-1px]"
                      style={{
                        color: "var(--accent)",
                        background: "var(--accent-dim)",
                        border: "1px solid rgba(100,255,218,0.12)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      <FiGlobe size={11} />
                      {link.label}
                      <FiExternalLink size={10} />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-2.5 mb-5">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-3 text-sm">
                  <span
                    className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded"
                  style={{
                    color: "var(--text-muted)",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--glass-border)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

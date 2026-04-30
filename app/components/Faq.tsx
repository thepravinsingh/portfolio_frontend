"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is your primary tech stack for web development?",
    answer: "I specialize in the MERN stack (MongoDB, Express.js, React, and Node.js) along with Next.js for building SEO-optimized, high-performance web applications. I also use NestJS for scalable backend architectures."
  },
  {
    question: "Do you build SEO-friendly websites?",
    answer: "Yes, absolutely. By using Next.js for Server-Side Rendering (SSR) and Static Site Generation (SSG), I ensure that every website I build is highly discoverable by search engines like Google, with fast load times and optimized metadata."
  },
  {
    question: "How many live projects have you successfully delivered?",
    entry: "I have delivered over 12 live production projects, including e-commerce platforms, internal ERP systems, CRM tools, and HR portals. Each project is built with scalability and security in mind."
  },
  {
    question: "Are you available for full-time roles or freelance projects?",
    answer: "I am currently open to full-time Software Engineer or Full Stack Developer opportunities in Noida, NCR, or remote positions. I am also available for selected high-impact freelance projects."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-container" aria-label="Frequently Asked Questions">
      <h2 className="section-title">
        <span className="section-label">08.</span> Common Questions
      </h2>

      <div className="max-w-[800px] flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="glass-card overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--accent-dim)] transition-colors duration-300"
            >
              <span className="text-lg font-semibold text-[var(--text-heading)]">{faq.question}</span>
              {openIndex === index ? <FiMinus className="text-[var(--accent)]" /> : <FiPlus className="text-[var(--accent)]" />}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[200px] opacity-100 p-6 pt-0" : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {faq.answer || faq.entry}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

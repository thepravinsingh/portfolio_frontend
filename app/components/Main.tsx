"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiExternalLink,
} from "react-icons/fi";

export default function Main() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center"
      aria-label="Hero section"
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(100,255,218,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full pointer-events-none hidden lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(100,255,218,0.04) 0%, transparent 70%)",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-20 left-10 w-[300px] h-[300px] rounded-full pointer-events-none hidden lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <div
        ref={heroRef}
        className="relative w-full max-w-[900px] flex flex-col gap-5"
        style={{
          opacity: 0,
          transform: "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 1,
        }}
      >
        {/* Location */}
        <div
          className="flex items-center gap-2 text-sm"
          style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
        >
          <FiMapPin size={14} />
          <span>Noida, India</span>
        </div>

        {/* Greeting */}
        <p
          className="text-base md:text-lg"
          style={{
            color: "var(--accent)",
            fontFamily: "var(--font-mono)",
            marginBottom: "-4px",
          }}
        >
          Hi, my name is
        </p>

        {/* Name */}
        <h1 className="gradient-text">Praveen Singh.</h1>

        {/* Tagline */}
        <h2 style={{ marginTop: "-4px" }}>
          Full Stack Developer — Building the web, better.
        </h2>

        {/* Summary */}
        <p
          className="max-w-[600px]"
          style={{ lineHeight: "1.85", fontSize: "1rem" }}
        >
          Full Stack Developer with 2+ years of production experience in React,
          Next.js 14, NestJS, TypeScript, Node.js, MongoDB, Redis, WebSockets,
          REST API, Docker and CI/CD. Delivered 12+ live projects including
          multi-vendor e-commerce, wholesale portal, HR portal, internal ERP,
          and multi-currency CRM systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-2">
          <Link href="#contact" className="btn-filled">
            Get In Touch
          </Link>
          <a
            href="https://ik.imagekit.io/imagesdatahai/Praveen%20Details/Praveen_Resume%20(1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Resume
            <FiExternalLink size={14} />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3 mt-4">
          <a
            href="https://github.com/thepravinsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
            id="hero-github"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/thepravinsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
            id="hero-linkedin"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="https://peerlist.io/thepravinsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Peerlist"
            id="hero-peerlist"
          >
            <FiExternalLink size={18} />
          </a>
          <a
            href="mailto:singhpravu@gmail.com"
            className="social-link"
            aria-label="Email"
            id="hero-email"
          >
            <FiMail size={18} />
          </a>
          <div
            className="h-px flex-1 max-w-[150px] ml-2 hidden sm:block"
            style={{ background: "var(--glass-border-hover)" }}
          />
        </div>
      </div>
    </section>
  );
}
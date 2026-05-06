"use client";
import Image from "next/image";
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
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    const imageEl = imageRef.current;
    
    if (heroEl) {
      setTimeout(() => {
        heroEl.style.opacity = "1";
        heroEl.style.transform = "translateY(0)";
      }, 100);
    }

    if (imageEl) {
      setTimeout(() => {
        imageEl.style.opacity = "1";
        imageEl.style.transform = "scale(1)";
      }, 500);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center py-2 md:py-4"
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

      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">
        {/* Text Content */}
        <div
          ref={heroRef}
          className="relative w-full lg:w-[60%] flex flex-col gap-5 order-1"
          style={{
            opacity: 0,
            transform: "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: 1,
          }}
        >
          {/* Location */}
          <div
            className="flex items-center gap-2 text-sm font-medium"
            style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
          >
            <FiMapPin size={14} />
            <span>Noida, India</span>
          </div>

          {/* Greeting */}
          <p
            className="text-base md:text-lg font-medium"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-mono)",
              marginBottom: "-4px",
            }}
          >
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="gradient-text font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[3rem]">
            Praveen Singh.
          </h1>

          {/* Tagline */}
          <h2 className="font-bold text-slate-300 text-2xl sm:text-3xl md:text-4xl lg:text-[2rem]" style={{ marginTop: "-4px" }}>
            Full Stack Developer — Building the web, better.
          </h2>

          {/* Summary */}
          <p
            className="max-w-[540px] font-normal text-sm sm:text-base"
            style={{ lineHeight: "1.8" }}
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
            <Link
              href="https://ik.imagekit.io/imagesdatahai/Praveen%20Details/Praveen_Resume%20(4).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Resume
              <FiExternalLink size={14} />
            </Link>
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

        {/* Profile Image */}
        <div 
          ref={imageRef}
          className="relative order-2 flex justify-center items-center"
          style={{
            opacity: 0,
            transform: "scale(0.9)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[450px] lg:h-[450px] group">
            {/* Image Container */}
            <div className="relative w-full h-full">
              <Image
                src="https://ik.imagekit.io/imagesdatahai/Praveen%20Details/praveen.png"
                alt="Praveen Singh"
                fill
                className="object-contain scale-110 group-hover:scale-115 transition-transform duration-700 ease-out"
                priority
              />
            </div>

            {/* Float Element */}
            <div 
              className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-[var(--bg-tertiary)] border border-[var(--glass-border)] px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-xl flex items-center gap-2 animate-[float_4s_ease-in-out_infinite] z-10"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono text-[var(--text-secondary)]">Available for work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
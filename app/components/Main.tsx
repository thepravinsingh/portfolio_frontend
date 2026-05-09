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
      className="relative flex items-center p-0 m-0" // Removed py-2, py-4
      aria-label="Hero section"
      style={{ minHeight: "auto" }} // Changed from calc(100vh - 72px) to auto
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

      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between p-0 m-0 gap-0"> {/* Changed gap-5 to gap-0 */}
        {/* Text Content */}
        <div
          ref={heroRef}
          className="relative w-full lg:w-[60%] flex flex-col p-0 m-0 gap-0 order-1 space-y-2" // Changed gap-5 to gap-0
          style={{
            opacity: 0,
            transform: "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: 1,
          }}
        >
          {/* Location */}
          <div
            className="flex items-center gap-2 text-sm font-medium p-0 m-0"
            style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
          >
            <FiMapPin size={14} />
            <span>Noida, India</span>
          </div>

          {/* Greeting */}
          <p
            className="text-base md:text-lg font-medium p-0 m-0"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="gradient-text font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[3rem] p-0 m-0">
            Praveen Singh.
          </h1>

          {/* Tagline */}
          <h2 className="font-bold text-slate-300 text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] p-0 m-0">
            Full Stack Developer — Building the web, better.
          </h2>

          {/* Summary */}
          <p
            className="max-w-[540px] font-normal text-sm sm:text-base p-0 m-0"
            style={{ lineHeight: "1.8" }}
          >
            Full Stack Developer with 2+ years of production experience in React,
            Next.js 14, NestJS, TypeScript, Node.js, MongoDB, Redis, WebSockets,
            REST API, Docker and CI/CD.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 p-0 m-0 mt-0"> {/* Removed mt-2 */}
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
          <div className="flex items-center gap-3 p-0 m-0 mt-0"> {/* Removed mt-4 */}
            <a href="https://github.com/thepravinsingh" target="_blank" className="social-link">
              <FiGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/thepravinsingh" target="_blank" className="social-link">
              <FiLinkedin size={18} />
            </a>
            <a href="mailto:singhpravu@gmail.com" className="social-link">
              <FiMail size={18} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div 
          ref={imageRef}
          className="relative order-2 flex justify-center items-center p-0 m-0 "
          style={{
            opacity: 0,
            transform: "scale(0.9)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[450px] lg:h-[450px] group">
              <Image
                src="https://ik.imagekit.io/imagesdatahai/Praveen%20Details/praveen.png"
                alt="Praveen Singh"
                fill
                className="object-contain"
                priority
              />
          </div>
        </div>
      </div>
    </section>
  );
}
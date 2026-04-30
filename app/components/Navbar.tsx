"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Expertise", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 transition-all duration-300`}
      style={{
        zIndex: 9999,
        background: scrolled ? "rgba(10, 10, 26, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(100, 255, 218, 0.08)"
          : "1px solid transparent",
      }}
    >
      <nav
        className="max-w-[1200px] mx-auto flex items-center justify-between px-6 lg:px-8"
        style={{ height: "72px" }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          id="nav-logo"
          className="flex items-center justify-center w-10 h-10 rounded-lg font-bold text-sm tracking-wider"
          style={{
            background: "var(--accent-dim)",
            border: "1.5px solid var(--accent)",
            color: "var(--accent)",
            fontFamily: "var(--font-mono)",
            position: "relative",
            zIndex: 10001,
            flexShrink: 0,
          }}
          aria-label="Praveen Singh - Home"
        >
          PS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              className="px-4 py-2 text-sm rounded-md transition-colors duration-200"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.background = "var(--accent-dim)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "transparent";
              }}
            >

              {link.label}
            </Link>
          ))}
          <a
            href="https://ik.imagekit.io/imagesdatahai/Praveen%20Details/Praveen_Resume%20(2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-4"
            id="nav-resume-btn"
            style={{ padding: "8px 20px", fontSize: "0.82rem" }}
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md"
          style={{
            color: "var(--accent)",
            position: "relative",
            zIndex: 10001,
          }}
          aria-label="Toggle navigation menu"
          id="nav-mobile-toggle"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay — completely separate fullscreen layer */}
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(10, 10, 26, 0.98)",
            backdropFilter: "blur(25px)",
            WebkitBackdropFilter: "blur(25px)",
            zIndex: 10000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "28px",
          }}
        >
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-lg"
              style={{
                color: "var(--text-heading)",
                fontFamily: "var(--font-mono)",
                textDecoration: "none",
                animation: `fadeInUp 0.4s ${idx * 0.08}s both`,
              }}
            >

              {link.label}
            </Link>
          ))}
          <a
            href="https://ik.imagekit.io/imagesdatahai/Praveen%20Details/Praveen_Resume%20(2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4"
            onClick={closeMenu}
            style={{
              animation: `fadeInUp 0.4s ${navLinks.length * 0.08}s both`,
            }}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
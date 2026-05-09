import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiHeart } from "react-icons/fi";

const socialLinks = [
  {
    icon: FiGithub,
    href: "https://github.com/thepravinsingh",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/thepravinsingh",
    label: "LinkedIn",
  },
  {
    icon: FiExternalLink,
    href: "https://peerlist.io/thepravinsingh",
    label: "Peerlist",
  },
  {
    icon: FiMail,
    href: "mailto:singhpravu@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t"
      style={{ borderColor: "var(--glass-border)" }}
    >
      <div className="layout-container py-10 flex flex-col items-center gap-6">
        {/* Social Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                social.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="social-link"
              aria-label={social.label}
              id={`footer-${social.label.toLowerCase()}`}
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>

        {/* Credit */}
        <p
          className="flex items-center gap-2 text-sm"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
          }}
        >
          Made with
          <FiHeart
            size={13}
            style={{ color: "var(--accent)" }}
          />
          by Praveen Singh
        </p>

        {/* Copyright */}
        <p
          className="text-xs"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            opacity: 0.6,
          }}
        >
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

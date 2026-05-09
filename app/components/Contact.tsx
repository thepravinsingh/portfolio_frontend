"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FiSend, FiMail, FiPhone, FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi";

export default function Contact() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.message) {
      setError("Please fill in your name and message.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const response = await axios.post(
        `${apiUrl}/api/contact`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setFormData({ name: "", number: "", message: "" });
      if (response.status === 201) {
        setSuccess("Message sent successfully! I'll get back to you soon.");
      }
    } catch (e) {
      console.error("Error submitting form:", e);
      setError("Failed to send message. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <section id="contact" className="section-container" aria-label="Contact">
      <div className="layout-container">
        <h2 className="section-title">
          <span className="section-label">07.</span> Get In Touch
        </h2>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <p
              className="text-base"
              style={{ color: "var(--text-secondary)", lineHeight: "1.85" }}
            >
              Whether you have a project idea, a question, or just want to
              connect — I&apos;m always happy to hear from you. Drop me a message
              and I&apos;ll get back to you soon!
            </p>

            {/* Direct Contact */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:singhpravu@gmail.com"
                className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ color: "var(--text-secondary)" }}
                id="contact-email"
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                  style={{
                    background: "var(--accent-dim)",
                    color: "var(--accent)",
                    border: "1px solid rgba(100,255,218,0.1)",
                  }}
                >
                  <FiMail size={16} />
                </div>
                singhpravu@gmail.com
              </a>
              <a
                href="tel:+917239040858"
                className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ color: "var(--text-secondary)" }}
                id="contact-phone"
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                  style={{
                    background: "var(--accent-dim)",
                    color: "var(--accent)",
                    border: "1px solid rgba(100,255,218,0.1)",
                  }}
                >
                  <FiPhone size={16} />
                </div>
                +91 7239040858
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://github.com/thepravinsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
                id="contact-github"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/thepravinsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
                id="contact-linkedin"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="https://peerlist.io/thepravinsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Peerlist"
                id="contact-peerlist"
              >
                <FiExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-6 md:p-8" style={{ cursor: "default" }}>
              <div className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    className="input-field"
                    aria-label="Name"
                    onChange={handleChange}
                    id="contact-name-input"
                  />
                  <input
                    type="tel"
                    name="number"
                    value={formData.number}
                    placeholder="Phone Number (optional)"
                    className="input-field"
                    aria-label="Phone Number"
                    onChange={handleChange}
                    id="contact-phone-input"
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Your Message"
                  rows={5}
                  className="input-field resize-none"
                  aria-label="Message"
                  onChange={handleChange}
                  id="contact-message-input"
                />

                {/* Status Messages */}
                {success && (
                  <p
                    className="text-sm px-4 py-2 rounded-md"
                    style={{
                      color: "var(--accent)",
                      background: "var(--accent-dim)",
                      border: "1px solid rgba(100,255,218,0.15)",
                    }}
                  >
                    {success}
                  </p>
                )}
                {error && (
                  <p
                    className="text-sm px-4 py-2 rounded-md"
                    style={{
                      color: "#ff6b6b",
                      background: "rgba(255,107,107,0.1)",
                      border: "1px solid rgba(255,107,107,0.2)",
                    }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="button"
                  className="btn-primary self-start"
                  onClick={handleSubmit}
                  disabled={loading}
                  id="contact-submit-btn"
                  style={{ opacity: loading ? 0.6 : 1 }}
                >
                  <FiSend size={14} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

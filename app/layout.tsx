import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praveen Singh | Full Stack Developer & Software Engineer",
  description:
    "Professional portfolio of Praveen Singh, a Full Stack Developer with 2+ years of experience in building scalable web applications using React, Next.js, NestJS, and Node.js. Expertise in E-commerce, ERP, and CRM systems.",
  keywords: [
    "Praveen Singh",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "NestJS",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Portfolio",
    "Web Developer India",
    "MERN Stack",
    "Frontend Developer",
    "Backend Developer",
    "Praveen Singh Portfolio",
  ],
  authors: [{ name: "Praveen Singh", url: "https://thepravinsingh.vercel.app" }],
  creator: "Praveen Singh",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  alternates: {
    canonical: "https://thepravinsingh.vercel.app",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thepravinsingh.vercel.app",
    siteName: "Praveen Singh Portfolio",
    title: "Praveen Singh | Full Stack Developer",
    description:
      "Full Stack Developer with 2+ years of production experience. Specialized in React, Next.js, and NestJS. Check out my projects and experience.",
    images: [
      {
        url: "/icon.png", // Ideally a larger OG image, but this works for now
        width: 512,
        height: 512,
        alt: "Praveen Singh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Praveen Singh | Full Stack Developer",
    description:
      "Full Stack Developer building production apps with React, Next.js, and NestJS.",
    creator: "@thepravinsingh",
    images: ["/icon.png"],
  },
  metadataBase: new URL("https://thepravinsingh.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter, var(--font-sans))" }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

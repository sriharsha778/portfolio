"use client";

import { FaLinkedin, FaGithub, FaTwitter, FaDownload } from "react-icons/fa";

export default function HeroSection() {
  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/sri-harsha-sai-a04659249",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/sriharsha778",
      label: "GitHub",
    },
    {
      icon: <FaTwitter size={24} />,
      url: "https://twitter.com/your-username",
      label: "Twitter",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-6 text-center"
    >
      <div className="max-w-2xl space-y-6 animate-fade-in">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary">
          Hi, I&apos;m{" "}
          <span className="text-secondary drop-shadow-sm">Sri Harsha Sai</span>
        </h1>

        {/* Tagline & Description */}
        <p className="text-lg text-base-content leading-relaxed">
          I'm a{" "}
          <span className="font-bold text-info">Full-Stack Developer</span> with
          a passion for{" "}
          <span className="text-accent font-semibold">
            building applications
          </span>{" "}
          that solve{" "}
          <span className="text-success font-medium">real-world problems</span>.
          <br />I specialize in{" "}
          <span className="badge badge-info badge-outline">
            Application Development
          </span>
          ,{" "}
          <span className="badge badge-success badge-outline">
            Computer Vision (OpenCV)
          </span>
          , and{" "}
          <span className="badge badge-warning badge-outline">
            Innovative Project Building
          </span>
          .
          <br />
          <span className="italic text-secondary">
            I'm actively seeking full-time roles, internships, and collaborative
            opportunities where I can create impactful software.
          </span>
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="btn btn-primary">
            🚀 View Projects
          </a>
          <a href="#contact" className="btn btn-outline btn-secondary">
            📬 Contact Me
          </a>
          <a
            href="/22B81A05BN_SriHarshaSai.pdf"
            download
            className="btn btn-outline btn-info flex items-center gap-2"
          >
            <FaDownload />
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mt-6 gap-6 text-base-content">
          {socialLinks.map(({ icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-accent hover:scale-110 transition-transform duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

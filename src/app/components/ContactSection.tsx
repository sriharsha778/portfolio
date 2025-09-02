"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-base-100 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl  font-bold text-base-content mb-4">
          Contact Me
        </h2>

        <p className="text-lg text-base-content mb-8">
          Feel free to reach out if you'd like to collaborate, work on something
          cool, or just connect!
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:harshasaisri484@gmail.com"
            className="btn btn-primary px-6"
          >
            📩 Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/sri-harsha-sai-a04659249"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-secondary px-6"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

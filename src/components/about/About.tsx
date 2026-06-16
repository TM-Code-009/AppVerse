import SectionReveal from "../ui/SectionReveal";

export default function About() {
  return (
    <SectionReveal>
      <section
        id="about"
        className="
          py-24
          px-6
        "
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="
              text-5xl
              font-black
              text-primary
              mb-8
            "
          >
            About Me
          </h2>

          <p
            className="
              text-lg
              leading-relaxed
              text-muted
            "
          >
            Frontend Developer specializing
            in React, TypeScript, Tailwind,
            Node.js and modern web
            applications.
          </p>
        </div>
      </section>
    </SectionReveal>
  );
}
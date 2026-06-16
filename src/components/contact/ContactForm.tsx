import SectionReveal from "../ui/SectionReveal";

export default function ContactForm() {
  return (
    <SectionReveal>
  
    <section
      className="
      py-24
      px-6
    "
    >
      <div
        className="
        max-w-3xl
        mx-auto
      "
      >
        <h2
          className="
          text-4xl
          font-black
          mb-8
        "
        >
          Contact Me
        </h2>

        <form
          className="
          space-y-4
        "
        >
          <input
            placeholder="Name"
            className="
              w-full
              p-4
              rounded-xl
              bg-[#111827]
            "
          />

          <input
            placeholder="Email"
            className="
              w-full
              p-4
              rounded-xl
              bg-[#111827]
            "
          />

          <textarea
            rows={6}
            placeholder="Message"
            className="
              w-full
              p-4
              rounded-xl
              bg-[#111827]
            "
          />

          <button
            className="
              bg-green-500
              px-8
              py-4
              rounded-xl
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
</SectionReveal>
  );
}
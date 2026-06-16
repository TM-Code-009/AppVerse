import SectionReveal from "../ui/SectionReveal";

export default function Newsletter() {
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
        max-w-4xl
        mx-auto
        text-center
        bg-gradient-to-r
        from-green-500/20
        to-purple-500/20
        p-12
        rounded-3xl
      "
      >
        <h2
          className="
          text-4xl
          font-black
        "
        >
          Stay Updated
        </h2>

        <p
          className="
          text-slate-400
          mt-4
        "
        >
          Get notified when
          new apps are added.
        </p>

        <div
          className="
          flex
          flex-col
          md:flex-row
          gap-4
          mt-8
        "
        >
          <input
            placeholder="Email Address"
            className="
              flex-1
              p-4
              rounded-xl
              bg-[#111827]
            "
          />

          <button
            className="
            bg-green-500
            px-8
            rounded-xl
          "
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
</SectionReveal>
  );
}
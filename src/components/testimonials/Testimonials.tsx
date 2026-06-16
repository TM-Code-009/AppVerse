import { testimonials } from "../../data/testimonials";
import SectionReveal from "../ui/SectionReveal";

export default function Testimonials() {
  return (
    <SectionReveal>
 
    <section
      className="
      py-24
      px-6
    "
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="
          text-center
          text-4xl
          font-black
          mb-16
        "
        >
          Testimonials
        </h2>

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
        "
        >
          {testimonials.map(
            (testimonial, index) => (
              <div
                key={index}
                className="
                p-8
                rounded-3xl
                bg-[#111827]
                border
                border-white/10
              "
              >
                <p
                  className="
                  text-slate-400
                  mb-5
                "
                >
                  "
                  {testimonial.review}
                  "
                </p>

                <h4
                  className="
                  font-bold
                  text-white
                "
                >
                  {
                    testimonial.name
                  }
                </h4>

                <p
                  className="
                  text-sm
                  text-green-400
                "
                >
                  {
                    testimonial.role
                  }
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
</SectionReveal>
  );
}
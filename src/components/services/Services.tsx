import { motion } from "framer-motion";
import { services } from "../../data/services";
import SectionReveal from "../ui/SectionReveal";

export default function Services() {
  return (
    <SectionReveal>
  
    <section
      id="services"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="
          text-4xl
          font-black
          text-center
          mb-16
        "
        >
          Services
        </h2>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
        >
          {services.map(
            (service, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="
                p-8
                rounded-3xl
                bg-[#111827]
                border
                border-white/10
              "
              >
                <h3
                  className="
                  text-white
                  text-2xl
                  font-bold
                  mb-4
                "
                >
                  {service.title}
                </h3>

                <p className="text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
</SectionReveal>
  );
}
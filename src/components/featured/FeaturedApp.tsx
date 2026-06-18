import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FeaturedApp() {
  return (
    <section
      className="
        py-24
        px-6
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          bg-gradient-to-r
          from-green-500/20
          to-purple-500/20
          rounded-3xl
          p-10
          border
          border-white/10
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p
            className="
              text-green-400
              uppercase
              mb-4
            "
          >
            Featured App
          </p>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-black
            "
          >
            Green<span className="text-[#00E676]">Link</span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-slate-300
            "
          >
            Connecting corps
            members across
            Nigeria through
            networking,
            communication and
            opportunity sharing.
          </p>

          <Link to={"https://green-linkio.web.app/"} >
          <button
            className="
              mt-8
              bg-green-500
              px-8
              py-4
              rounded-xl
              text-white
            "
          >
            Visit App
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
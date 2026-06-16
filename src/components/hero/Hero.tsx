import { motion } from "framer-motion";

import HeroStats from "./HeroStats";
import FloatingBackground from "./FloatingBackground";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      <FloatingBackground />

      <div
        className="
          relative
          z-10
          text-center
          px-6
          max-w-5xl
        "
      >
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            text-5xl
            md:text-7xl
            font-black
          "
        >
          Discover Amazing Apps
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
            mt-6
            text-slate-400
            text-lg
          "
        >
          Explore websites,
          applications and
          innovative tools.
        </motion.p>

        <div
          className="
            mt-8
            flex
            justify-center
            gap-4
            flex-wrap
          "
        >
          <button
            className="
              bg-green-500
              px-8
              py-4
              rounded-xl
            "
          >
            Explore Apps
          </button>

          <button
            className="
              border
              border-white/20
              px-8
              py-4
              rounded-xl
            "
          >
            Hire Me
          </button>
        </div>

        <HeroStats />
      </div>
    </section>
  );
}
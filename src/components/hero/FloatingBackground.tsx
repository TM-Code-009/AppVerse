import { motion } from "framer-motion";

export default function FloatingBackground() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="
          absolute
          w-96
          h-96
          bg-green-500/20
          blur-3xl
          rounded-full
          top-20
          left-20
        "
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="
          absolute
          w-96
          h-96
          bg-purple-500/20
          blur-3xl
          rounded-full
          right-20
          bottom-20
        "
      />

      <motion.div
  animate={{
    x: [0, 50, 0],
    y: [0, -100, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 15,
  }}
  className="
    absolute
    w-80
    h-80
    bg-blue-500/20
    blur-3xl
    rounded-full
    top-1/2
    left-1/2
  "
/>
    </>
  );
}
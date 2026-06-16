import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  title: string;
  image: string;
  description: string;
  category: string;
  url: string;
}

export default function AppCard({
  title,
  image,
  description,
  category,
  url,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="
        bg-card
        rounded-3xl
        overflow-hidden
        border
        border-theme
      "
    >
      <img
        src={image}
        alt={title}
        className="
          w-full
          h-56
          object-cover
        "
      />

      <div className="p-6">
        <span
          className="
            text-green-500
            text-sm
          "
        >
          {category}
        </span>

        <h3
          className="
            text-2xl
            font-bold
            mt-3
            text-primary
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            text-muted
          "
        >
          {description}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="
            mt-4
            inline-flex
            items-center
            gap-2
            text-green-500
          "
        >
          Visit App
          <FaExternalLinkAlt />
        </a>
      </div>
    </motion.div>
  );
}
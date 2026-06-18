import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import { incrementClick }
from "../../services/app.service";

interface Props {
  _id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  url: string;
}

export default function AppCard({
  _id,
  title,
  image,
  description,
  category,
  url,
}: Props) {

  const handleVisit =
    async () => {
      try {
        await incrementClick(
          _id
        );
      } catch (error) {
        console.log(error);
      }

      window.open(
        url,
        "_blank"
      );
    };

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

        <button
          onClick={
            handleVisit
          }
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
        </button>
      </div>
    </motion.div>
  );
}
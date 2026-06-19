import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaEye,
} from "react-icons/fa";

import {
  incrementClick,
} from "../../services/app.service";

interface Props {
  _id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  url: string;
  price: number;
}

export default function AppCard({
  _id,
  title,
  image,
  description,
  category,
  url,
  price,
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

  const handleView =
    () => {
      window.location.href =
        `/app/${_id}`;
    };

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        bg-card
        rounded-3xl
        overflow-hidden
        border
        border-theme
        h-full
        flex
        flex-col
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

      <div
        className="
          p-6
          flex
          flex-col
          flex-1
        "
      >
        {/* Top Info */}
        <div
          className="
            flex
            justify-between
            items-center
            gap-3
          "
        >
          <span
            className="
              text-green-500
              text-sm
              font-semibold
            "
          >
            {category}
          </span>

          <span
            className="
              bg-green-500/10
              text-green-400
              px-3
              py-1
              rounded-full
              text-sm
              font-bold
            "
          >
            ₦
            {price?.toLocaleString()}
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            text-2xl
            font-bold
            mt-4
            text-primary
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3
            text-muted
            flex-1
          "
        >
          {description}
        </p>

        {/* Buttons */}
        <div
          className="
            mt-6
            flex
            gap-3
          "
        >
          <button
            onClick={
              handleView
            }
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-2

              border
              border-green-500

              text-green-500

              py-3
              rounded-xl

              hover:bg-green-500
              hover:text-white

              transition
            "
          >
            <FaEye />

            Request App
          </button>

          <button
            onClick={
              handleVisit
            }
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-2

              bg-green-500
              hover:bg-green-600

              text-white

              py-3
              rounded-xl

              font-semibold

              transition
            "
          >
            <FaExternalLinkAlt />

            View App
          </button>
        </div>
      </div>
    </motion.div>
  );
}
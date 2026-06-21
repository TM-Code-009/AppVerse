import { Link } from "react-router-dom";

interface Props {
  _id: string;
  name: string;
  avatar?: string;
  followers?: any[];
}

export default function DeveloperCard({
  _id,
  name,
  avatar,
  followers,
}: Props) {
  return (
    <div
      className="
      bg-card
      border
      border-theme
      rounded-3xl
      p-6
      text-center
    "
    >
      <img
        src={
          avatar ||
          "https://ui-avatars.com/api/?name=" +
            name
        }
        alt={name}
        className="
        w-24
        h-24
        rounded-full
        mx-auto
        object-cover
      "
      />

      <h3
        className="
        mt-4
        text-xl
        font-bold
      "
      >
        {name}
      </h3>

      <p
        className="
        text-sm
        text-gray-400
      "
      >
        {followers?.length || 0}
        {" "}followers
      </p>

      <Link
        to={`/developer/${_id}`}
        className="
        inline-block
        mt-4
        bg-green-500
        px-5
        py-2
        rounded-xl
        font-semibold
      "
      >
        View Profile
      </Link>
    </div>
  );
}
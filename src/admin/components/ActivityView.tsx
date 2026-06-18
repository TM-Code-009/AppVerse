import {
  FaRocket,
  FaBriefcase,
  FaLightbulb,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

interface Activity {
  _id: string;
  type: string;
  message: string;
  createdAt: string;
}

interface Props {
  activities: Activity[];
}

export default function ActivityView({
  activities,
}: Props) {
  const getIcon = (
    type: string
  ) => {
    switch (type) {
      case "NEW_APP":
        return (
          <FaRocket />
        );

      case "NEW_HIRE_REQUEST":
        return (
          <FaBriefcase />
        );

      case "NEW_SUGGESTION":
        return (
          <FaLightbulb />
        );

      case "APP_UPDATED":
        return (
          <FaEdit />
        );

      case "APP_DELETED":
        return (
          <FaTrash />
        );

      default:
        return (
          <FaRocket />
        );
    }
  };

  return (
    <div
      className="
      bg-[#111827]
      border
      border-white/10
      rounded-3xl
      p-6
    "
    >
      <div
        className="
        flex
        justify-between
        items-center
        mb-6
      "
      >
        <h2
          className="
          text-2xl
          font-bold
        "
        >
          Recent Activity
        </h2>

        <span
          className="
          text-sm
          text-gray-400
        "
        >
          Last 20 actions
        </span>
      </div>

      <div
        className="
        space-y-4
        max-h-[500px]
        overflow-y-auto
      "
      >
        {activities.length ===
        0 ? (
          <div
            className="
            text-center
            py-12
            text-gray-400
          "
          >
            No activities found
          </div>
        ) : (
          activities.map(
            (
              activity
            ) => (
              <div
                key={
                  activity._id
                }
                className="
                flex
                gap-4
                items-start
                p-4
                rounded-2xl
                bg-black/20
                border
                border-white/5
              "
              >
                <div
                  className="
                  w-10
                  h-10
                  rounded-full
                  bg-green-500/20
                  text-green-500
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
                >
                  {getIcon(
                    activity.type
                  )}
                </div>

                <div>
                  <p
                    className="
                    font-medium
                  "
                  >
                    {
                      activity.message
                    }
                  </p>

                  <span
                    className="
                    text-xs
                    text-gray-400
                  "
                  >
                    {new Date(
                      activity.createdAt
                    ).toLocaleString()}
                  </span>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}
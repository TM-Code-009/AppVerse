import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaArrowLeft,
  FaUsers,
} from "react-icons/fa";

import {
  getDeveloper,
  followDeveloper,
} from "../services/user.service";

import AppCard from "../components/apps/AppCard";

export default function DeveloperProfile() {
  const { id } = useParams();

  const [loading, setLoading] =
    useState(true);

  const [developer, setDeveloper] =
    useState<any>(null);

  const [apps, setApps] =
    useState<any[]>([]);

  const [following,
    setFollowing] =
    useState(false);

  useEffect(() => {
    if (id) {
      loadDeveloper();
    }
  }, [id]);

  const loadDeveloper =
    async () => {
      try {
        const data =
          await getDeveloper(
            id!
          );

        setDeveloper(
          data.user
        );

        setApps(
          data.apps
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  const handleFollow =
    async () => {
      try {
        await followDeveloper(
          id!
        );

        setFollowing(true);

        loadDeveloper();
      } catch (error) {
        console.log(error);
      }
    };

  if (loading) {
    return (
      <section
        className="
        py-32
        text-center
      "
      >
        Loading profile...
      </section>
    );
  }

  if (!developer) {
    return (
      <section
        className="
        py-32
        text-center
      "
      >
        Developer not found
      </section>
    );
  }

  return (
    <section
      className="
      py-16
      px-6
    "
    >
      <div
        className="
        max-w-7xl
        mx-auto
      "
      >
        <Link
          to="/developers"
          className="
          inline-flex
          items-center
          gap-2
          mb-8
          text-green-500
        "
        >
          <FaArrowLeft />

          Back
        </Link>

        <div
          className="
          bg-card
          border
          border-theme
          rounded-3xl
          p-8
          mb-12
        "
        >
          <div
            className="
            flex
            flex-col
            md:flex-row
            gap-8
            items-center
          "
          >
            <img
              src={
                developer.avatar ||
                `https://ui-avatars.com/api/?name=${developer.name}`
              }
              alt={
                developer.name
              }
              className="
              w-40
              h-40
              rounded-full
              object-cover
              border-4
              border-green-500
            "
            />

            <div
              className="
              flex-1
            "
            >
              <h1
                className="
                text-4xl
                font-black
              "
              >
                {
                  developer.name
                }
              </h1>

              <p
                className="
                text-gray-400
                mt-2
              "
              >
                {
                  developer.bio ||
                  "No bio yet"
                }
              </p>

              {developer.location && (
                <p
                  className="
                  mt-3
                  text-sm
                  text-gray-500
                "
                >
                  📍{" "}
                  {
                    developer.location
                  }
                </p>
              )}

              <div
                className="
                flex
                flex-wrap
                gap-6
                mt-6
              "
              >
                <div>
                  <span
                    className="
                    text-2xl
                    font-bold
                    text-green-500
                  "
                  >
                    {
                      apps.length
                    }
                  </span>

                  <p>
                    Apps
                  </p>
                </div>

                <div>
                  <span
                    className="
                    text-2xl
                    font-bold
                    text-green-500
                  "
                  >
                    {
                      developer
                        ?.followers
                        ?.length ||
                      0
                    }
                  </span>

                  <p>
                    Followers
                  </p>
                </div>

                <div>
                  <span
                    className="
                    text-2xl
                    font-bold
                    text-green-500
                  "
                  >
                    {
                      developer
                        ?.following
                        ?.length ||
                      0
                    }
                  </span>

                  <p>
                    Following
                  </p>
                </div>
              </div>

              <div
                className="
                flex
                flex-wrap
                gap-4
                mt-8
              "
              >
                <button
                  onClick={
                    handleFollow
                  }
                  disabled={
                    following
                  }
                  className="
                  bg-green-500
                  hover:bg-green-600
                  transition
                  px-6
                  py-3
                  rounded-xl
                  font-bold
                  flex
                  items-center
                  gap-2
                "
                >
                  <FaUsers />

                  {following
                    ? "Following"
                    : "Follow"}
                </button>

                {developer.website && (
                  <a
                    href={
                      developer.website
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="
                    p-3
                    rounded-xl
                    bg-black/20
                  "
                  >
                    <FaGlobe />
                  </a>
                )}

                {developer.github && (
                  <a
                    href={
                      developer.github
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="
                    p-3
                    rounded-xl
                    bg-black/20
                  "
                  >
                    <FaGithub />
                  </a>
                )}

                {developer.linkedin && (
                  <a
                    href={
                      developer.linkedin
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="
                    p-3
                    rounded-xl
                    bg-black/20
                  "
                  >
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2
            className="
            text-3xl
            font-black
            mb-8
          "
          >
            Apps By{" "}
            {developer.name}
          </h2>

          {apps.length === 0 ? (
            <div
              className="
              text-center
              py-20
              text-gray-400
            "
            >
              No apps published yet
            </div>
          ) : (
            <div
              className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
            "
            >
              {apps.map(
                (app) => (
                  <AppCard
                    key={
                      app._id
                    }
                    {...app}
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
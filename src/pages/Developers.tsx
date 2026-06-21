import {
  useEffect,
  useState,
} from "react";

import DeveloperCard
from "../components/developers/DeveloperCard";

import {
  getDevelopers,
} from "../services/user.service";

export default function Developers() {
  const [
    developers,
    setDevelopers,
  ] = useState<any[]>([]);

  useEffect(() => {
    loadDevelopers();
  }, []);

  const loadDevelopers =
    async () => {
      try {
        const data =
          await getDevelopers();

        setDevelopers(data);
      } catch (error) {
        console.log(error);
      }
    };

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
      "
      >
        <h1
          className="
          text-5xl
          font-black
          mb-10
        "
        >
          Developers
        </h1>

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
        "
        >
          {developers.map(
            (
              developer
            ) => (
              <DeveloperCard
                key={
                  developer._id
                }
                {...developer}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
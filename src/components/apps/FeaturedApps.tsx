import {
  useEffect,
  useState,
} from "react";

import AppCard from "./AppCard";

import {
  getFeaturedApps,
} from "../../services/app.service";
import { Link } from "react-router-dom";

export default function FeaturedApps() {
  const [apps, setApps] =
    useState([]);

  useEffect(() => {
    loadApps();
  }, []);

  const loadApps =  
    async () => {
      try {
        const data =
          await getFeaturedApps();

        setApps(data);
      } catch (error) {
        console.log(error);
      }
    };

  if (!apps.length)
    return null;

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
        <h2
          className="
            text-4xl
            font-black
            mb-12
            text-center
          "
        >
          🔥 Featured Apps
        </h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {apps.map(
            (app: any) => (
              <AppCard
                key={app._id}
                {...app}
              />
            )
          )}
        </div>

        <Link
  to="/apps"
  className="
    inline-flex
    items-center
    justify-center
    px-8
    py-4
    rounded-xl
    bg-green-500
    hover:bg-green-600
    transition
    font-bold
    text-white
    mt-10
  "
>
  View All Apps →
</Link>
      </div>
    </section>
  );
}
import { useState } from "react";

import AppCard from "./AppCard";
import SearchBar from "./SearchBar";
import Categories from "./Cartegories";

import { apps } from "../../data/app";
import { categories } from "../../data/cartegories";

export default function AppGrid() {
  const [search, setSearch] =
    useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  const filteredApps =
    apps.filter((app) => {
      const matchesSearch =
        app.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        selectedCategory ===
          "All" ||
        app.category ===
          selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (
    <section
      id="apps"
      className="
        py-24
        px-6
      "
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="
            text-4xl
            font-black
            text-center
            mb-10
          "
        >
          Explore Apps
        </h2>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <Categories
          categories={
            categories
          }
          selected={
            selectedCategory
          }
          setSelected={
            setSelectedCategory
          }
        />

        <div
          className="
            grid
            grid-cols-1
sm:grid-cols-2
xl:grid-cols-3
            gap-8
          "
        >
          {filteredApps.map(
            (app) => (
              <AppCard
                key={app.id}
                {...app}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
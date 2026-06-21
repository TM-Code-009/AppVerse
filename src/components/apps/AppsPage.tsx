import { useEffect, useState } from "react";
import AppCard from "./AppCard";
import SearchBar from "./SearchBar";
import Categories from "./Cartegories";
import { getApps } from "../../services/app.service";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

interface App {
  _id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  url: string;
  price: number;
}

export default function AppsPage() {
  const [apps, setApps] =
    useState<App[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  useEffect(() => {
    loadApps();
  }, []);

  const loadApps = async () => {
    try {
      const data =
        await getApps();

      setApps(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    "All",
    ...new Set(
      apps.map(
        (app) => app.category
      )
    ),
  ];

  const filteredApps =
    apps.filter((app) => {
      const matchesSearch =
        app.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        selectedCategory === "All" ||
        app.category ===
          selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (
    <div
      className="
      min-h-screen
      px-6
      py-24
    "
    >
        <Link
  to="/"
  className="
    inline-flex
    items-center
    gap-2
    mb-8
    px-4
    py-3
    rounded-xl
    bg-[#111827]
    border
    border-white/10
    hover:border-green-500
    hover:text-green-500
    transition
  "
>
  <FaArrowLeft />

  Back Home
</Link>
      <div
        className="
        max-w-7xl
        mx-auto
      "
      >
        {/* Hero */}

        <div
          className="
          text-center
          mb-16
        "
        >
          <h1
            className="
            text-5xl
            font-black
            mb-5
          "
          >
            Explore Apps
          </h1>

          <p
            className="
            text-gray-400
            max-w-2xl
            mx-auto
          "
          >
            Discover ready-made
            web applications,
            business systems,
            SaaS products and
            custom solutions
            built by AppVerse.
          </p>
        </div>

        {/* Search */}

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Categories */}

        <Categories
          categories={categories}
          selected={
            selectedCategory
          }
          setSelected={
            setSelectedCategory
          }
        />

        {/* Loading */}

        {loading ? (
          <div
            className="
            text-center
            py-20
          "
          >
            Loading Apps...
          </div>
        ) : (
          <>
            {/* Results Count */}

            <div
              className="
              mb-8
              text-gray-400
            "
            >
              {filteredApps.length}
              {" "}
              Apps Found
            </div>

            {/* Grid */}

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
                    key={app._id}
                    {...app}
                  />
                )
              )}
            </div>

            {filteredApps.length ===
              0 && (
              <div
                className="
                text-center
                py-20
                text-gray-400
              "
              >
                No apps found.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
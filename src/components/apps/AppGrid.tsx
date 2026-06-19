    import {
      useEffect,
      useState,
    } from "react";

    import AppCard from "./AppCard";
    import SearchBar from "./SearchBar";
    import Categories from "./Cartegories";

    import {
      getApps,
    } from "../../services/app.service";

    interface App {
      _id: string;
      title: string;
      image: string;
      description: string;
      category: string;
      url: string;
      price:number
    }

    export default function AppGrid() {
      const [apps, setApps] =
        useState<App[]>([]);

      const [loading,
        setLoading] =
        useState(true);

      const [search,
        setSearch] =
        useState("");

      const [
        selectedCategory,
        setSelectedCategory,
      ] = useState("All");

      useEffect(() => {
        loadApps();
      }, []);

      const loadApps =
        async () => {
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

      const categories =
        [
          "All",

          ...new Set(
            apps.map(
              (app) =>
                app.category
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
            selectedCategory ===
              "All" ||

            app.category ===
              selectedCategory;

          return (
            matchesSearch &&
            matchesCategory
          );
        });

      if (loading) {
        return (
          <section
            className="
              py-24
              text-center
            "
          >
            Loading apps...
          </section>
        );
      }

      return (
        <section
          id="apps"
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
                    key={
                      app._id
                    }
                    {...app}
                  />
                )
              )}
            </div>
          </div>
        </section>
      );
    }
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { getApps, deleteApp } from "../../services/app.service";

interface App {
  _id: string;
  title: string;
  image: string;
  category: string;
  featured: boolean;
}

export default function Apps() {
  const [apps, setApps] = useState<App[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadApps();
  }, []);

  const loadApps = async () => {
    try {
      const data = await getApps();
      setApps(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const remove = async (id: string) => {
    const confirmed = window.confirm("Delete app?");
    if (!confirmed) return;

    try {
      await deleteApp(id);
      toast.success("App deleted");
      loadApps();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete app");
    }
  };

  const filtered = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return (
      <p className="text-gray-400 text-sm sm:text-base">Loading...</p>
    );

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black">
            Apps
          </h1>

          <Link
            to="/admin/add-app"
            className="w-full sm:w-auto text-center bg-green-500 hover:bg-green-600 transition px-5 py-3 rounded-xl font-medium"
          >
            Add App
          </Link>
        </div>

        {/* Search */}
        <input
          placeholder="Search apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 sm:p-4 rounded-xl mb-6 bg-card outline-none"
        />

        {/* Table wrapper */}
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full min-w-[700px] text-sm sm:text-base">
            <thead className="bg-gray-900 text-left">
              <tr>
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Featured</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center p-6 text-gray-400">
                    No apps found
                  </td>
                </tr>
              ) : (
                filtered.map((app) => (
                  <tr
                    key={app._id}
                    className="border-t border-gray-800 hover:bg-gray-900/40 transition"
                  >
                    <td className="p-3">
                      <img
                        src={app.image}
                        alt={app.title}
                        className="w-16 sm:w-20 h-12 sm:h-14 object-cover rounded-lg"
                      />
                    </td>

                    <td className="p-3 font-medium">{app.title}</td>
                    <td className="p-3 text-gray-300">{app.category}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded-md text-xs sm:text-sm ${
                          app.featured
                            ? "bg-green-500/20 text-green-400"
                            : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {app.featured ? "Yes" : "No"}
                      </span>
                    </td>

                    <td className="p-3">
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <Link
                          to={`/admin/edit-app/${app._id}`}
                          className="text-blue-400 hover:text-blue-300"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => remove(app._id)}
                          className="text-red-400 hover:text-red-300 text-left"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
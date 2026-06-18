import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services/api";

export default function AddApp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    url: "",
    featured: false,
  });

  const [image, setImage] = useState<File | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) return toast.error("Please select an image");

    try {
      setLoading(true);

      const data = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        data.append(key, String(value));
      });

      data.append("image", image);

      await api.post("/apps", data);

      toast.success("App created successfully");
      navigate("/admin/apps");
    } catch (error) {
      console.log(error);
      toast.error("Failed to create app");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 sm:mb-10">
          Add App
        </h1>

        <form
          onSubmit={submit}
          className="space-y-5 sm:space-y-6"
        >
          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            className="w-full p-3 sm:p-4 rounded-xl bg-card outline-none"
          />

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            rows={5}
            className="w-full p-3 sm:p-4 rounded-xl bg-card outline-none"
          />

          {/* Responsive grid for better layout on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              placeholder="Category"
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
              className="w-full p-3 sm:p-4 rounded-xl bg-card outline-none"
            />

            <input
              placeholder="App URL"
              value={form.url}
              onChange={(e) =>
                setForm({ ...form, url: e.target.value })
              }
              className="w-full p-3 sm:p-4 rounded-xl bg-card outline-none"
            />
          </div>

          {/* File input */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">
              Upload App Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(e.target.files?.[0] || null)
              }
              className="w-full text-sm"
            />
          </div>

          <label className="flex items-center gap-3 text-sm sm:text-base">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) =>
                setForm({ ...form, featured: e.target.checked })
              }
            />
            Featured App
          </label>

          <button
            disabled={loading}
            className="w-full sm:w-auto bg-green-500 hover:bg-green-600 transition px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold"
          >
            {loading ? "Creating..." : "Create App"}
          </button>
        </form>
      </div>
    </div>
  );
}
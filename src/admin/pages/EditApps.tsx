import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import toast from "react-hot-toast";

import {
  getApp,
  updateApp,
} from "../../services/app.service";

export default function EditApp() {
  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const [loading,
    setLoading] =
    useState(false);

  const [image,
    setImage] =
    useState<File | null>(
      null
    );

  const [form,
    setForm] =
    useState({
      title: "",
      description: "",
      category: "",
      url: "",
      featured: false,
      image: "",
    });

  useEffect(() => {
    loadApp();
  }, []);

  const loadApp =
    async () => {
      try {
        const app =
          await getApp(
            id!
          );

        setForm(app);
      } catch (error) {
        console.log(error);
      }
    };

  const submit =
    async (
      e:
        React.FormEvent
    ) => {
      e.preventDefault();

      try {
        setLoading(true);

        const data =
          new FormData();

        data.append(
          "title",
          form.title
        );

        data.append(
          "description",
          form.description
        );

        data.append(
          "category",
          form.category
        );

        data.append(
          "url",
          form.url
        );

        data.append(
          "featured",
          String(
            form.featured
          )
        );

        if (image) {
          data.append(
            "image",
            image
          );
        }

        await updateApp(
          id!,
          data
        );

        toast.success(
          "App updated"
        );

        navigate(
          "/admin/apps"
        );
      } catch (error) {
        console.log(error);

        toast.error(
          "Failed to update"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="max-w-3xl">
      <h1
        className="
          text-4xl
          font-black
          mb-8
        "
      >
        Edit App
      </h1>

      <form
        onSubmit={submit}
        className="space-y-5"
      >
        <input
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title:
                e.target.value,
            })
          }
          className="
            w-full
            p-4
            rounded-xl
            bg-card
          "
        />

        <textarea
          rows={5}
          value={
            form.description
          }
          onChange={(e) =>
            setForm({
              ...form,
              description:
                e.target.value,
            })
          }
          className="
            w-full
            p-4
            rounded-xl
            bg-card
          "
        />

        <input
          value={
            form.category
          }
          onChange={(e) =>
            setForm({
              ...form,
              category:
                e.target.value,
            })
          }
          className="
            w-full
            p-4
            rounded-xl
            bg-card
          "
        />

        <input
          value={form.url}
          onChange={(e) =>
            setForm({
              ...form,
              url:
                e.target.value,
            })
          }
          className="
            w-full
            p-4
            rounded-xl
            bg-card
          "
        />

        <img
          src={form.image}
          alt=""
          className="
            w-40
            rounded-xl
          "
        />

        <input
          type="file"
          onChange={(e) =>
            setImage(
              e.target
                .files?.[0] ||
                null
            )
          }
        />

        <label
          className="
            flex
            gap-3
            items-center
          "
        >
          <input
            type="checkbox"
            checked={
              form.featured
            }
            onChange={(e) =>
              setForm({
                ...form,
                featured:
                  e.target.checked,
              })
            }
          />

          Featured App
        </label>

        <button
          className="
            bg-green-500
            px-8
            py-4
            rounded-xl
          "
        >
          {loading
            ? "Updating..."
            : "Update App"}
        </button>
      </form>
    </div>
  );
}